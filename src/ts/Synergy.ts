import { Preset } from "./Preset";

export const variables: Variable[] = [
	{name: "border", type: "color", requiredBy: ["input", "checkbox", "toggle", "tabs"]},
	{name: "border-active", type: "color", requiredBy: ["input", "checkbox", "toggle", "tabs"]},
	{name: "border-width", type: "number", requiredBy: ["input", "checkbox", "toggle"]},
	{name: "border-radius", type: "number", requiredBy: ["input", "button", "checkbox", "tabs"]},
	{name: "focus-highlight", type: "color", requiredBy: ["input", "button", "checkbox"]},
	{name: "tab-highlight", type: "color", requiredBy: ["tabs"]},
	{name: "tab-bar-height", type: "number", requiredBy: ["tabs"]},
	{name: "label", type: "color", requiredBy: ["input"]},
	{name: "label-active", type: "color", requiredBy: ["input"]},
	{name: "btn-primary-bg", type: "color", requiredBy: ["button"]},
	{name: "btn-primary-bg-hover", type: "color", requiredBy: ["button"]},
	{name: "btn-primary-text-color", type: "color", requiredBy: ["button"]},
	{name: "btn-focus-highlight", type: "color", requiredBy: ["button"]},
	{name: "btn-bg", type: "color", requiredBy: ["button"]},
	{name: "btn-bg-hover", type: "color", requiredBy: ["button"]},
	{name: "text-color", type: "color", requiredBy: ["input", "button"]},
	{name: "bg", type: "color", requiredBy: ["input", "checkbox", "toggle"]},
	{name: "site-bg", type: "color"}
];

export const components: Component[] = [
	{name: "Button", id: "button", selected: true},
	{name: "Input", id: "input", selected: true},
	{name: "Checkbox & radio", id: "checkbox", selected: true},
	{name: "Fancy input", id: "fancy-input"},
	{name: "Tabs", id: "tabs", selected: true},
	{name: "Toggle", id: "toggle", selected: true},
];

export interface Variable {
	name: string,
	type: VariableType,
	requiredBy?: ComponentID[]
}

export type ComponentID = "button" | "input" | "fancy-input" | "checkbox" | "tabs" | "toggle";

export interface Component {
	name: string,
	id: ComponentID,
	selected?: boolean
}

export type VariableType = "color" | "number";

export function getDefaultVariables() {
	return {
		"border-width": "2px",
		"border-radius": ".375rem",
		"tab-bar-height": "2px",
		...Preset.getRandom().getColorVariables()
	};
}
