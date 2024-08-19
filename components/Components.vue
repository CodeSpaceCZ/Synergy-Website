<script lang="ts" setup>

import { reactive } from 'vue';
import { Export, type Result } from "~/src/ts/Export";
import { variableValues, components } from "~/src/ts/Shared";

let data = reactive<Data>({
	results: [],
	vars: null
});

interface Data {
	results: Result[],
	vars: string | null
}

async function exportCss() {
	let exp = new Export(variableValues, components);
	data.results = await exp.process();
	data.vars = exp.vars;
}

function kbSize(value: number) {
	return `${Math.round(value/1024*100)/100} kB`;
}

function download(name: string, str: string) {
	let a = document.createElement("a");
	a.download = name;
	a.href=`data:text/plain;charset=utf-8,${encodeURIComponent(str)}`;
	a.click();
}

function showVars() {
	console.log(data.vars);
	alert("Check console logs!");
}

</script>

<template>
	<h2>Components</h2>
	<div class="components">
		<form class="box" @submit.prevent="exportCss">
			<div class="item" v-for="component in components">
				<label class="cbox">
					<input type="checkbox" v-model="component.selected">
					<span>{{ component.name }}</span>
				</label>
			</div>
			<div class="btn-row">
				<button class="btn btn-primary" type="submit">
					Generate CSS
				</button>
			</div>
		</form>
		<div class="box export" v-if="data.results.length && data.vars">
			<b>CSS Export</b>
			<div class="btn-row">
				<button class="btn btn-primary" v-for="r in data.results" @click="download(r.name, r.css)">
					{{ r.name }}
					<small>{{ kbSize(r.size_gzip) }} (gzip) · {{ kbSize(r.size) }}</small>
				</button>
			</div>
			<div>
				<a href="#" @click.prevent="showVars">Show Synergy variables</a> ·
				<a href="#" @click.prevent="download('variables.css', data.vars)">download</a>
			</div>
		</div>
	</div>
</template>
