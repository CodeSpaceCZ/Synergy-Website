export class Color {

	r: number;
	g: number;
	b: number;
	a: number;

	constructor(r: number, g: number, b: number, a: number = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	clone() {
		return new Color(this.r, this.g, this.b, this.a);
	}

	static fromHex(hex: string) {
		let [r, g, b] = this.hexToRgb(hex);
		return new Color(r, g, b);
	}

	static hexToRgb(hex: string) {
		hex = hex.replace(/^#/, '');
		const r = parseInt(hex.slice(0, 2), 16) / 255;
		const g = parseInt(hex.slice(2, 4), 16) / 255;
		const b = parseInt(hex.slice(4, 6), 16) / 255;
		return [r, g, b];
	}

	alpha(alpha: number) {
		return new Color(this.r, this.g, this.b, alpha);
	}

	rgbFormat() {
		let rgb = `${this.r*255}, ${this.g*255}, ${this.b*255}`;
		return this.a == 1 ? `rgb(${rgb})` : `rgba(${rgb}, ${this.a})`;
	}

	hexFormat() {
		let hex = `#${(1 << 24 | (this.r*255) << 16 | (this.g*255) << 8 | (this.b*255)).toString(16).slice(1)}`;
		return this.a != 1 ? `${hex}${(Math.floor(this.a * 255).toString(16).padStart(2, '0'))}` : hex;
	}

	contrast(otherColor: Color) {
		const getRelativeLuminance = (rgb: number) => {
		  const sRGB = rgb / 255;
		  return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
		};
		const luminance1 = getRelativeLuminance(this.r) * 0.2126 +
						   getRelativeLuminance(this.g) * 0.7152 +
						   getRelativeLuminance(this.b) * 0.0722;
		const luminance2 = getRelativeLuminance(otherColor.r) * 0.2126 +
						   getRelativeLuminance(otherColor.g) * 0.7152 +
						   getRelativeLuminance(otherColor.b) * 0.0722;
		const contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
		return (contrastRatio*100)-100;
	}

	equals(otherColor: Color) {
		return this.r == otherColor.r && this.g == otherColor.g && this.b == otherColor.b;
	}

	mix(color: Color, ratio: number): Color {
		const r = Math.round(this.r*255 * (1 - ratio) + color.r*255 * ratio);
		const g = Math.round(this.g*255 * (1 - ratio) + color.g*255 * ratio);
		const b = Math.round(this.b*255 * (1 - ratio) + color.b*255 * ratio);
		return new Color(r/255, g/255, b/255);
	}

}
