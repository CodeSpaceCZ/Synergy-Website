<template>
	<section>
		<div class="inner">

			<h1>Text area</h1>

			<p>Text areas in Synergy are treated as <NuxtLink to="/components/input">inputs</NuxtLink> and are used in a similar way.</p>

			<Example selector=".form" :inner="true">
				<div class="form">
					<textarea class="inp">Text inside</textarea>
				</div>
			</Example>

		</div>
	</section>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Text area"
}));

</script>
