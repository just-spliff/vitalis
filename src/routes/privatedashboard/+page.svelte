<script>
	import { Button } from '$lib/components/ui/button';
	import AuthReset from '../../components/AuthReset.svelte';
	import { authHandlers, authStore } from '../../store/authStore';
	import '../../app.css';

	let email;
	authStore.subscribe((curr) => {
		email = curr?.currentUser?.email;
	});
</script>

<div
	class="flex flex-col justify-center items-center ss:mt-[20px] large:mt-0 ss:h-full large:h-[90vh] gap-20"
>
	{#if $authStore.currentUser}
		<div class="items-center justify-center flex flex-col">
			<img src="./avatar.png" alt="" class="mb-6 rounded-[25px] object-cover w-52 h-52" />
			<h1 class="font-bold">
				current user: <span class="font-normal">
					{email}
				</span>
			</h1>
		</div>
		<div class="flex flex-col justify-center gap-4 items-center w-full max-w-[400px]">
			<AuthReset />
			<button
				on:click={authHandlers.logout}
				class="rounded-[25px] bg-caraibben p-4 text-light hover:scale-105 hover:bg-caraibben transition-transform font-semibold text-[20px] w-full"
				>Logout</button
			>
		</div>
	{:else}
		<p>Loading ...</p>
	{/if}
</div>
