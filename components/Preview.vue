<template>
	<div class="preview">
		<form class="form" @submit.prevent>

			<div class="inp inp-fancy">
				<input type="text" placeholder=" ">
				<label>Name</label>
			</div>

			<div class="inp inp-fancy">
				<input type="text" placeholder=" ">
				<label>Surname</label>
			</div>

			<div class="inp inp-fancy select">
				<select>
					<option disabled>Disabled</option>
					<option>Guest</option>
					<option>User</option>
					<option>Administrator</option>
				</select>
				<label>Role</label>
			</div>

			<div class="inp inp-fancy">
				<textarea placeholder=" ">Some very long text...</textarea>
				<label>Long text</label>
			</div>

			<div class="toggle-text">
				<label for="toggle1">Toggle me! I'm a toggle.</label>
				<div class="toggle">
					<input id="toggle1" type="checkbox">
					<div class="indicator"></div>
				</div>
			</div>

			<div class="cbox-row">
				<label class="cbox">
					<input type="radio" name="radios" checked>
					<span>Radio 1</span>
				</label>

				<label class="cbox">
					<input type="radio" name="radios">
					<span>Radio 2</span>
				</label>
			</div>

			<label class="cbox">
				<input type="checkbox">
				<span>Check me!</span>
			</label>

			<div class="tabs">
				<label>
					<input type="radio" name="tabs" checked>
					<div>Home</div>
				</label>
				<label>
					<input type="radio" name="tabs">
					<div>Account</div>
				</label>
				<label>
					<input type="radio" name="tabs">
					<div>Settings</div>
				</label>
			</div>

			<div class="btn-row">
				<button class="btn btn-primary">
					Send
				</button>
				<button type="reset" class="btn">
					Reset
				</button>
			</div>

		</form>
	</div>
</template>
