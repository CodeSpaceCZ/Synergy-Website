<template>
	<section>
		<div class="inner text-center">

			<h1>Components</h1>
			<p>All available components in Synergy.</p>

			<div class="component-grid">
				<NuxtLink v-for="c in components" :to="`/components/${c.url}`">
					<Icon :name="c.icon" />
					<h3>{{ c.title }}</h3>
				</NuxtLink>
			</div>

		</div>
	</section>
</template>


<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Components"
}));

let components = [
	{url: "button", title: "Button", icon: "mdi:button-cursor"},
	{url: "input", title: "Input", icon: "mdi:form-textbox"},
	{url: "select", title: "Select", icon: "mdi:form-select"},
	{url: "textarea", title: "Textarea", icon: "mdi:card-text-outline"},
	{url: "toggle", title: "Toggle", icon: "mdi:toggle-switch-off-outline"},
	{url: "radio", title: "Radio", icon: "mdi:radiobox-marked"},
	{url: "checkbox", title: "Checkbox", icon: "mdi:checkbox-outline"},
	{url: "tabs", title: "Tabs", icon: "ic:baseline-tab"}
];

</script>

<style>

.component-grid {display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 70px 0;}

.component-grid > * {display: flex; flex-direction: column; align-items: center; border: var(--synergy-border-width) solid var(--synergy-border); border-radius: var(--synergy-border-radius); padding: 20px; gap: 10px; text-decoration: none;}
.component-grid > *:hover {border-color: var(--synergy-border-active);}

.component-grid .iconify {font-size: 24px;}
.component-grid > * > * {margin: 0;}

</style>
