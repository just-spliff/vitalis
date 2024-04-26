<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { redirect } from '@sveltejs/kit';
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

<div class="h-[90vh] flex justify-center items-center">
	<div
		class="flex flex-col min-h-[700px] gap-16 justify-center border-4 border-black p-[90px] items-center rounded-full"
	>
		<h1 class="title">{register ? 'Sign Up' : 'Log In'}</h1>
		<form action="" class="flex flex-col items-center gap-8">
			<label for="">
				<input class="input" bind:value={email} type="email" placeholder="Email" />
			</label>
			<label>
				<input class="input" bind:value={password} type="password" placeholder="Password" />
			</label>
			{#if register}
				<label>
					<input
						class="input"
						bind:value={confirmPassword}
						type="password"
						placeholder="Confirm Password"
					/>
				</label>
			{/if}
			<Button
				class="hover:bg-green-600 hover:text-black hover:scale-105 rounded-full active:scale-95 w-52 h-14"
				on:click={handleSubmit}>Submit</Button
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
		@apply cursor-pointer hover:scale-[1.02] active:scale-[0.98];

		& span {
			@apply ml-2 font-semibold text-green-600;
		}
	}

	.title {
		@apply font-bold text-[30px];
	}

	.input {
		@apply border-4 p-4 w-[400px] h-16 border-black rounded-full;
	}
</style>
