import { reactive, watch } from "vue";
import { components as synergyComponents, getDefaultVariables, type Component } from "./Synergy";
import { setVariables } from "./Styles";

export let variableValues = reactive<ComboObject>(getDefaultVariables());

export let components = reactive<Component[]>(synergyComponents);

watch(() => variableValues, () => {
	setVariables(variableValues);
}, {deep: true});
