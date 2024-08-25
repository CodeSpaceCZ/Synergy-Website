<template>
	<section>
		<div class="inner">

			<h1>Tabs</h1>

			<Example>
				<div class="tabs">
					<label>
						<input type="radio" name="tabs1" checked>
						<div>Home</div>
					</label>
					<label>
						<input type="radio" name="tabs1">
						<div>Account</div>
					</label>
					<label>
						<input type="radio" name="tabs1">
						<div>Settings</div>
					</label>
				</div>
			</Example>

			<p>There is also another variant of tabs called full tabs, it is shown below.</p>

			<Example>
				<div class="tabs tabs-full">
					<label>
						<input type="radio" name="tabs2" checked>
						<div>Tab 1</div>
					</label>
					<label>
						<input type="radio" name="tabs2">
						<div>Tab 2</div>
					</label>
				</div>
			</Example>

			<p>If you need to remove the padding on sides of the tabs, you can use class <code>.tabs-no-padding</code>.</p>

			<Example>
				<div class="tabs tabs-no-padding">
					<label>
						<input type="radio" name="tabs3" checked>
						<div>Tab 1</div>
					</label>
					<label>
						<input type="radio" name="tabs3">
						<div>Tab 2</div>
					</label>
				</div>
			</Example>

		</div>
	</section>
</template>
