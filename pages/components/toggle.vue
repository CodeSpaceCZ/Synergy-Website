<template>
	<section>
		<div class="inner">

			<h1>Toggle</h1>

			<Example>
				<div class="toggle">
					<input id="toggle1" type="checkbox">
					<div class="indicator"></div>
				</div>
			</Example>

			<Example selector=".form" :inner="true">
				<div class="form">
					<div class="toggle-text">
						<label for="toggle2">Toggle me! I'm a toggle.</label>
						<div class="toggle">
							<input id="toggle2" type="checkbox">
							<div class="indicator"></div>
						</div>
					</div>
				</div>
			</Example>

		</div>
	</section>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Toggle"
}));

</script>
