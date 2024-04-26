<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { redirect } from '@sveltejs/kit';
	import { authHandlers, authStore } from '../store/authStore';

	let action = '';
	let newEmail = '';
	let newPass = '';

	async function handleSubmit() {
		if (!action) {
			return;
		}

		if (action === 'updatePass') {
			return await authHandlers.updatePassword(newPass);
		}

		if (action === 'updateEmail') {
			return await authHandlers.updateEmail(newEmail);
		}
	}
</script>

<div class="flex flex-col items-center justify-center gap-10">
	<div class="flex flex-row items-center justify-between gap-4">
		<Button
			class="rounded-full h-14 w-40"
			on:click={() => {
				action = 'updateEmail';
			}}>Update Email</Button
		>
		<Button
			class="rounded-full h-14 w-40"
			on:click={() => {
				action = 'updatePass';
			}}>Update Password</Button
		>
	</div>
	{#if action === 'updatePass'}
		<form action="" class="frm">
			<label for="">
				<input class="input" bind:value={newPass} type="password" placeholder="New Password" />
			</label>
			<Button
				class="bg-green-600 hover:bg-green-500  active:scale-95 font-bold p-3 rounded-full hover:scale-105"
				on:click={handleSubmit}>Submit</Button
			>
		</form>
	{/if}
	{#if action === 'updateEmail'}
		<form action="" class="frm">
			<label>
				<input class="input" bind:value={newEmail} type="email" placeholder="New Email" />
			</label>
			<Button
				class="bg-green-600 hover:bg-green-500  active:scale-95 font-bold p-3 rounded-full hover:scale-105"
				on:click={handleSubmit}>Submit</Button
			>
		</form>
	{/if}
</div>

<style>
	.frm {
		@apply flex flex-row gap-2 mb-2;
	}

	.input {
		@apply border-4 p-4 w-64 h-5 border-black rounded-full;
	}
</style>
