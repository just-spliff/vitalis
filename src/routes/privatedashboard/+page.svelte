<script>
	import { Button } from '$lib/components/ui/button';
	import AuthReset from '../../components/AuthReset.svelte';
	import { authHandlers, authStore } from '../../store/authStore';

	let email;
	authStore.subscribe((curr) => {
		email = curr?.currentUser?.email;
	});
</script>

<div class="flex flex-col justify-center items-center h-[90vh] gap-20">
	{#if $authStore.currentUser}
		<div class="items-center justify-center flex flex-col">
			<img src="./avatar.png" alt="" class="mb-6 rounded-full object-cover w-52 h-52" />
			<h1 class="font-bold">
				current user: <span class="font-normal">
					{email}
				</span>
			</h1>
		</div>
		<div class="flex flex-col justify-center gap-4 items-center">
			<AuthReset />
			<Button on:click={authHandlers.logout} class="rounded-full h-14 w-52">Logout</Button>
		</div>
	{:else}
		<p>Loading ...</p>
	{/if}
</div>
