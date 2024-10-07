<template>
	<section>
		<div class="inner">

			<h1>Buttons</h1>

			<p>Synergy contains primary and secondary buttons.</p>

			<Example title="Button variants" selector=".btn-row" :inner="true">
				<div class="btn-row">
					<button class="btn btn-primary">Primary</button>
					<button class="btn">Secondary</button>
				</div>
			</Example>

			<p>Available button sizes are large, normal and small.</p>

			<Example selector=".btn-row" :inner="true">
				<div class="btn-row">
					<button class="btn btn-lg">Large</button>
					<button class="btn">Normal</button>
					<button class="btn btn-sm">Small</button>
				</div>
			</Example>

			<p>It is also possible to make buttons rounded.</p>

			<Example selector=".btn-row" :inner="true">
				<div class="btn-row">
					<button class="btn btn-rounded btn-primary">Primary</button>
					<button class="btn btn-rounded">Secondary</button>
				</div>
			</Example>

			<h2>Elements</h2>

			<p>It is possible to use <code>.btn</code> class names on multiple HTML elements.</p>

			<Example selector=".btn-row" :inner="true">
				<div class="btn-row">
					<a href="#" class="btn">Link</a>
					<button class="btn">Button</button>
					<input class="btn" type="button" value="Input" />
				</div>
			</Example>

			<h2>Button rows</h2>

			<p>You can place buttons in a row using <code>.btn-row</code> class name.</p>

			<Example selector=".btn-row">
				<div class="btn-row">
					<button class="btn btn-primary">Get started</button>
					<button class="btn">Information</button>
				</div>
			</Example>

		</div>
	</section>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Buttons"
}));

</script>
