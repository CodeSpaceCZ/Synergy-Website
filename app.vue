<template>
	<div>
		<Nav />
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">

import { setVariables, style } from "~/src/ts/Styles";
import { variableValues } from "~/src/ts/Shared";

function createStyle(): HTMLStyleElement {
	let el = document.createElement("style");
	document.querySelector("head")?.appendChild(el);
	return el;
}

function setStyle(el: HTMLStyleElement, content: string) {
	el.innerHTML = content;
}

onMounted(() => {
	let el = createStyle();
	watch(style, s => {
		setStyle(el, s);
	});
	setStyle(el, style.value);
});

setVariables(variableValues);

</script>