<script lang="ts">
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { authHandlers, authStore } from '../store/authStore';

	let register = false;
	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}
		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}
		if ($authStore.currentUser) {
			window.location.href = '/privatedashboard';
		}
	}
</script>

<div class="m-auto flex justify-center items-center w-full">
	<div class="flex flex-col min-h-[700px] w-full gap-16 justify-center items-center rounded-full">
		<h1 class="title">{register ? 'Sign Up' : 'Log In'}</h1>
		<form action="" class="flex flex-col items-center gap-8 w-full">
			<label for="" class="w-full flex justify-center">
				<input class="input" bind:value={email} type="email" placeholder="Email" />
			</label>
			<label class="w-full flex justify-center">
				<input class="input" bind:value={password} type="password" placeholder="Password" />
			</label>
			{#if register}
				<label class="w-full flex justify-center">
					<input
						class="input"
						bind:value={confirmPassword}
						type="password"
						placeholder="Confirm Password"
					/>
				</label>
			{/if}
			<button
				class="bg-rasinblack rounded-[25px] max-w-[400px] p-4 text-light hover:scale-105 hover:bg-caraibben transition-transform font-semibold text-[20px] w-full"
				on:click={handleSubmit}>Submit</button
			>
		</form>
		<div class="justify-center gap-2 items-center flex flex-col">
			{#if register}
				<p
					class="link"
					on:click={() => {
						register = false;
					}}
					on:keydown={() => {}}
				>
					Already have an accout? <span>Log In</span>
				</p>
			{:else}
				<p
					class="link"
					on:click={() => {
						register = true;
					}}
					on:keydown={() => {}}
				>
					Don't have an account?<span class="">Sign Up</span>
				</p>
				<p
					class="link"
					on:click={() => {
						authHandlers.resetPassword(email);
					}}
					on:keydown={() => {}}
				>
					Forgot Password?
				</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.link {
		@apply cursor-pointer hover:scale-105 transition-transform;

		& span {
			@apply ml-2 font-semibold hover:text-caraibben transition-colors;
		}
	}

	.title {
		@apply text-rasinblack font-bold font-nicomoji text-[30px];
	}

	.input {
		@apply border-4 p-4 w-full max-w-[400px] h-16 border-rasinblack  rounded-[25px];
	}
</style>
