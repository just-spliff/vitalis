<script lang="ts">
	import { authStore } from '../store/authStore';
	let buttonName = 'Sign In';
</script>

<nav class="flex flex-row justify-between items-center w-full h-[60px] mt-[15px]">
	<div class="flex flex-row gap-[10px] items-center">
		<a
			href="/"
			class="font-nicomoji text-[30px] hover:scale-105 hover:text-caraibben transition-all"
		>
			Vitalis
		</a>
	</div>
	<button
		class="bg-rasinblack h-full w-[131px] rounded-[25px] hover:bg-caraibben hover:scale-105 transition-all text-light font-montserrat font-semibold"
		on:click={() => {
			if ($authStore.currentUser) {
				window.location.href = '/privatedashboard';
				buttonName = 'Account';
			} else {
				window.location.href = '/auth';
				buttonName = 'Sign In';
			}
		}}>{buttonName}</button
	>
</nav>
