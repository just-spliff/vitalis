<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
	import { authStore } from '../store/authStore';

	let links = [
		{ name: 'Home', route: '/' },
		{ name: 'About', route: '/about' },
		{ name: 'Offer', route: '/offer' },
		{ name: 'Contact', route: '/contact' }
	];
</script>

<nav class="flex items-center justify-between p-6 mr-[200px] ml-[200px] h-[60px]">
	<div class="flex flex-row items-center gap-[60px] p-0">
		<div>
			<h3 class="font-bold text-[20px] m-0 p-0 cursor-pointer">
				<span class="font-extrabold text-green-600">V</span>italis
			</h3>
		</div>
		<div class="flex flex-row items-center gap-[20px]">
			{#each links as { name, route }}
				<a href={route} class="hover:border-b-black hover:border-b-2 m-0 px-0.5 py-1">{name}</a>
			{/each}
		</div>
	</div>
	<div class="flex flex-row gap-[20px] items-center">
		<Button
			class="bg-green-600 rounded-full p-3 font-bold hover:scale-105 hover:bg-green-500 active:scale-95"
			on:click={() => {
				if ($authStore.currentUser) {
					window.location.href = '/privatedashboard';
				} else {
					window.location.href = '/auth';
				}
			}}>Account</Button
		>
	</div>
</nav>
