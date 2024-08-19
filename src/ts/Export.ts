import { type Component, type Variable, variables } from "./Synergy";

export class Export {

	private variables: ComboObject;
	private components: Component[];

	public vars: string | null = null;
	public css: Result[] = [];

	constructor(variables: ComboObject, components: Component[]) {
		this.variables = variables;
		this.components = components;
	}

	async process() {

		let cssParts = [];
		let selectedComponents = new Set<string>();
		for (let c of this.components) {
			if (!c.selected) continue;
			let value = await (await fetch(`./src/${c.id}.css`)).text();
			value = `/* ${c.name} */\n\n${value}`;
			cssParts.push(value);
			selectedComponents.add(c.id);
		}
		let css = cssParts.join("\n\n/* ------------------- */\n\n");

		this.vars = this.getVariables(selectedComponents);
		cssParts.unshift(this.vars);

		this.css = [];
		await this.addResult("synergy.min.css", this.minify(css));
		await this.addResult("synergy.css", css);

		return this.css;

	}

	getVariables(selectedComponents: Set<string>) {
		let root: string[] = [];
		for (let v of variables) {
			if (!this.required(v, selectedComponents)) continue;
			root.push(`\t--synergy-${v.name}: ${this.variables[v.name]};`);
		}
		return `:root {\n${root.join("\n")}\n}`;
	}

	required(variable: Variable, selectedComponents: Set<string>) {
		if (!variable.requiredBy) return true;
		for (let id of variable.requiredBy) {
			if (selectedComponents.has(id)) return true;
		}
		return false;
	}

	async addResult(name: string, css: string) {
		this.css.push({
			name,
			css,
			size: this.getSize(css),
			size_gzip: await this.getCompressedSize(css)
		});
	}

	async getCompressedSize(content: string) {
		let ds = new CompressionStream("gzip");
		let blob = new Blob([content]);
		let compressedStream = blob.stream().pipeThrough(ds);
		return (await new Response(compressedStream).blob()).size;
	}

	getSize(content: string) {
		return (new TextEncoder().encode(content)).length
	}

	minify(value: string) {
		return value
		  .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
		  .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
		  .replace(/;}/g, "}")
		  .replace(/\/\*.*?\*\//g, "");
	}

}

export interface Result {
	name: string,
	css: string,
	size: number,
	size_gzip: number
}
