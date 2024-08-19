<script setup lang="ts">

import { variables } from "~/src/ts/Synergy";
import { Preset } from "~/src/ts/Preset";
import { variableValues } from "~/src/ts/Shared";
import { setVariables } from "~/src/ts/Styles";
import Components from "./Components.vue";

const variableTypeIcon = {
	color: "ic:outline-color-lens",
	number: "mdi:numeric"
};

function update() {
	setVariables(variableValues);
}

function applyPreset(preset: Preset) {
	const variables = preset.getColorVariables() as ComboObject;
	Object.keys(variables).forEach(key => {
		variableValues[key] = variables[key];
	});
}

</script>

<template>

	<div class="settings">

		<div>
			<h2>Variables</h2>
			<div class="variables">
				<template v-for="v in variables">
					<label :for="v.name">
						<Icon :name="variableTypeIcon[v.type]" />
						{{ v.name }}
					</label>
					<div v-if="v.type == 'color'">
						<div class="colori" :style="{ background: variableValues[v.name] }" />
						<div class="inp inp-sm">
							<input v-model="variableValues[v.name]" type="string" :id="v.name" @change="update">
						</div>
					</div>
					<div v-else class="inp inp-sm">
						<input v-model="variableValues[v.name]" type="string" :id="v.name" @change="update">
					</div>
				</template>
			</div>
		</div>

		<div>
			<h2>Presets</h2>
			<div class="presets">
				<div v-for="preset in Preset.presets" @click="applyPreset(preset)">
					<div :style="`background-color: ${c?.hexFormat()}`" v-for="c in preset.colors"></div>
				</div>
			</div>
			<Components />
		</div>

	</div>
</template>
