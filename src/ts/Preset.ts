import { Color } from "./Color";

export class Preset {

	static readonly presets: Preset[] = [
		new Preset({main: "#337e2c", text: "#031601", bg: "#f3f7f2"}),
		new Preset({main: "#1c71d8", text: "#030e1c", bg: "#ffffff"}),
		new Preset({main: "#9141ac", text: "#613583", bg: "#ffffff", "site-bg": "#f6edf7"}),
		new Preset({main: "#a51d2d", text: "#3d3846", bg: "#f6f2f1", "site-bg": "#f1e9e8"}),
		new Preset({main: "#865e3c", text: "#63452c", bg: "#f9f7f4", "site-bg": "#ffffff"}),
		new Preset({main: "#F45662", text: "#c4aeae", bg: "#181218"}),
		new Preset({main: "#E66993", text: "#dddddd", bg: "#18181b"}),
		new Preset({main: "#ffab9b", text: "#E8C3BC", bg: "#191e23"}),
		new Preset({main: "#9b8fe4", text: "#cfcef4", bg: "#090818", "site-bg": "#100E22"}),
	];

	readonly colors: Colors<Color>;

	constructor(colors: Colors<Color | string>) {
		this.colors = Preset.convertColors(colors);
	}

	private selectColor(colors: ColorType | ColorType[]): Color {
		let input = Array.isArray(colors) ? colors : [colors];
		for (let key of input) {
			let val = this.colors[key];
			if (val) return val;
		}
		return this.colors["main"];
	}

	public getColorVariables() {
		const cMain = this.selectColor("main");
		const cBg = this.selectColor("bg");
		const cSiteBg = this.selectColor(["site-bg", "bg"]);
		const cText = this.selectColor("text");
		const cGray = new Color(.6, .6, .6);
		const cBtn = cBg.mix(cGray, .6).mix(cMain, .1);
		const colors = {
			"border": cMain.mix(cBg, .6),
			"border-active": cMain,
			"focus-highlight": cMain.alpha(.25),
			"tab-highlight": cMain.alpha(.1),
			"label": cMain.mix(cBg, .2),
			"label-active": cMain,
			"btn-primary-bg": cMain.mix(cBg, .2),
			"btn-primary-bg-hover": cMain.mix(cBg, .1),
			"btn-primary-text-color": this.cSelectContrast(cMain, cText, cBg, Color.fromHex("#fff"), Color.fromHex("#000")),
			"btn-focus-highlight": cBtn.alpha(.25),
			"btn-bg": cBtn.mix(cBg, .7),
			"btn-bg-hover": cBtn.mix(cBg, .45),
			"text-color": cText,
			"bg": cBg,
			"site-bg": cSiteBg
		};
		return this.convertColorsToHex(colors);
	}

	private cSelectContrast(color: Color, ...colors: Color[]) {
		let bestContrast = 0;
		let bestColor;
		for (const otherColor of colors) {
			const contrast = color.contrast(otherColor);
			if (contrast > bestContrast) {
				bestContrast = contrast;
				bestColor = otherColor;
			}
		}
		return bestColor;
	}

	private convertColorsToHex(colors: ComboObject) {
		const hexColors: ComboObject = {};
		for (const key in colors) {
			if (colors.hasOwnProperty(key)) {
				hexColors[key] = colors[key].hexFormat();
			}
		}
		return hexColors;
	}

	public static convertColors(input: Colors<Color | string>) {
		return Object.entries(input).reduce<Partial<Colors<Color>>>((acc, [key, value]) => {
			acc[key as ColorType] = value instanceof Color ? value : Color.fromHex(value);
			return acc;
		}, {}) as Colors<Color>;
	}

	public static getRandom() {
		return this.presets[Math.floor(Math.random() * this.presets.length)];
	}

}

export type AcceptedColor = Color | string;

// TODO: add more colors, use them if available and more specific
export interface Colors<T> {
	main: T,
	text: T,
	bg: T,
	"site-bg"?: T
}

type ColorType = keyof Colors<any>;
