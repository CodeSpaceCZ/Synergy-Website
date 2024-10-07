<template>
	<section>
		<div class="inner">

			<h1>Inputs</h1>

			<p>Synergy treats inputs, <NuxtLink to="/components/select">selects</NuxtLink> and <NuxtLink to="/components/textarea">text areas</NuxtLink> all like inputs. This page apply to all of them.</p>

			<Example selector=".inp">
				<div class="form">
					<input type="text" class="inp" placeholder="Enter your name">
				</div>
			</Example>

			<p>Inputs can be placed into divs with the same class.</p>

			<Example selector=".inp">
				<div class="form">
					<div class="inp">
						<input type="text" placeholder="Enter your name">
					</div>
				</div>
			</Example>

			<h2>Sizes</h2>

			<p>All inputs have 3 available sizes: large, normal and small.</p>

			<Example selector=".form" :inner="true">
				<div class="form">
					<input type="text" class="inp inp-lg" placeholder="Large input" />
					<input type="text" class="inp inp" placeholder="Normal input" />
					<input type="text" class="inp inp-sm" placeholder="Small input" />
				</div>
			</Example>

			<h2>Fancy inputs</h2>

			<p>Synergy also provides an alternative style for inputs with Material-like labels inside of inputs.</p>
			<p>These inputs support only normal size.</p>

			<Example selector=".inp">
				<div class="form">
					<div class="inp inp-fancy">
						<input type="text" placeholder="">
						<label>Label</label>
					</div>
					<div class="inp inp-fancy">
						<input type="text" placeholder="" value="Text">
						<label>Label</label>
					</div>
				</div>
			</Example>

		</div>
	</section>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Inputs"
}));

</script>
