<template>
	<section>
		<div class="inner">

			<h1>Checkbox</h1>

			<Example selector=".cbox-row">
				<div class="cbox-row">
					<label class="cbox">
						<input type="checkbox" checked />
						<span>Select me</span>
					</label>
					<label class="cbox">
						<input type="checkbox" />
						<span>Select me</span>
					</label>
				</div>
			</Example>

		</div>
	</section>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Checkbox"
}));

</script>
