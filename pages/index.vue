<template>
	<div>

		<Header />

		<section class="sec-bg" id="settings">
			<div class="inner">
				<ClientOnly>
					<Settings />
				</ClientOnly>
			</div>
		</section>

		<section>
			<div class="inner" id="preview">
				<Preview />
			</div>
		</section>

	</div>
</template>

<script setup lang="ts">

import { genMeta } from "~/src/ts/Meta";

useHead(genMeta({
	title: "Synergy",
	desc: "Simple framework with CSS-only UI components.",
	use_title_suffix: false
}));

</script>
