<template>
	<div class="example">
		<div class="demo">
			<div v-if="title" class="title">{{ title }}</div>
			<div ref="example">
				<slot />
			</div>
		</div>
		<ClientOnly>
			<highlightjs language="html" :code="data.code" />
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">

import html from "html";

let example = ref<HTMLDivElement | null>(null);

let data = reactive({
	code: ""
});

let { selector, inner } = defineProps<Props>();

onMounted(() => {
	let parent = example.value!;
	let src = parent.innerHTML;
	if (selector) {
		parent = parent.querySelector(selector)!;
		src = inner ? parent.innerHTML : parent.outerHTML;
	}
	data.code = html.prettyPrint(src.replace(/<!--[\s\S]*?-->/g, ""), {indent_size: 2});
});

interface Props {
	selector?: string,
	inner?: boolean,
	title?: string
}

</script>

<style>

.example {box-shadow: inset 0 0 0 1px #5553; border-radius: var(--synergy-border-radius); overflow: hidden; margin: 30px 0;}

.example .demo {padding: 15px;}
.example pre {margin: 0;}
.example .title {margin-bottom: 12px;}

</style>