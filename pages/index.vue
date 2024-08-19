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
