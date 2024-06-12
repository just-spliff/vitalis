<script lang="ts">
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

<div class="flex flex-col w-full items-center justify-center gap-10">
	<div class="flex flex-col w-full items-center justify-between gap-4">
		<button
			class="rounded-[25px] bg-rasinblack w-full font-semibold text-[20px] p-4 text-light"
			on:click={() => {
				action = 'updateEmail';
			}}>Update Email</button
		>
		<button
			class="rounded-[25px] w-full bg-rasinblack font-semibold p-4 text-light text-[20px]"
			on:click={() => {
				action = 'updatePass';
			}}>Update Password</button
		>
	</div>
	{#if action === 'updatePass'}
		<form action="" class="frm">
			<label for="">
				<input class="input" bind:value={newPass} type="password" placeholder="New Password" />
			</label>
			<button class="sbm" on:click={handleSubmit}>Submit</button>
		</form>
	{/if}
	{#if action === 'updateEmail'}
		<form action="" class="frm">
			<label>
				<input class="input" bind:value={newEmail} type="email" placeholder="New Email" />
			</label>
			<button class="sbm" on:click={handleSubmit}>Submit</button>
		</form>
	{/if}
</div>

<style>
	.sbm {
		@apply text-[18px] font-semibold hover:scale-105 transition-transform;
	}
	.frm {
		@apply flex flex-row gap-2 mb-2 items-center;
	}

	.input {
		@apply border-4 p-4 rounded-[25px];
	}
</style>
