<template>
	<header>
		<div class="inner">
			<div class="grid">
				<Logo />
				<h1>Simple framework with CSS-only <span class="color">UI components</span></h1>
				<p>Modern ready-to-use components made only with CSS.</p>
				<div class="btn-row" style="margin: 30px 0;">
					<NuxtLink to="/get-started" class="btn btn-lg btn-primary">Get started</NuxtLink>
					<NuxtLink to="/components" class="btn btn-lg">Components</NuxtLink>
				</div>
			</div>
		</div>
	</header>
</template>

<style>

header > * {margin: 15px 0;}
header h1 .color, .gradient-text {background-clip: text; -webkit-background-clip: text; background-image: linear-gradient(10deg, var(--synergy-border-active), var(--synergy-border)); color: transparent;}

header .grid {max-width: 450px; text-align: center; margin: auto;}
header .btn-row {justify-content: center;}

</style>