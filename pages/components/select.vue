<template>
	<section>
		<div class="inner">

			<h1>Select</h1>

			<p>Selects in Synergy are treated as <NuxtLink to="/components/input">inputs</NuxtLink> and are used in a similar way.</p>

			<Example selector=".inp">
				<div class="form">
					<select class="inp">
						<option>Option 1</option>
						<option>Option 2</option>
						<option disabled>Option 3</option>
					</select>
				</div>
			</Example>

			<p>Synergy provides a way to show a custom dropdown icon as shown below.</p>

			<Example selector=".inp">
				<div class="form">
					<div class="inp select">
						<select>
							<option>Apple</option>
							<option>Orange</option>
							<option disabled>Avocado</option>
						</select>
					</div>
				</div>
			</Example>

		</div>
	</section>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Select"
}));

</script>
