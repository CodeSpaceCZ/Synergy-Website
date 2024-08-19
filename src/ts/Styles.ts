export let style = ref("");

function parseVariables(variables: ComboObject) {
	let vars: string[] = [];
	Object.keys(variables).forEach(key => {
		if (variables[key] == null) return;
		vars.push(`--synergy-${key}: ${variables[key]};`);
	});
	return vars.join("");
}

export function setVariables(variables: ComboObject) {
	const vars = parseVariables(variables);
	style.value = `:root {${vars}}`;
}
