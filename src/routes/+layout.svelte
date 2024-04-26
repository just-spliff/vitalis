<script lang="ts">
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client';
	import { authStore } from '../store/authStore';
	import { browser } from '$app/environment';
	import Navbar from '../components/Navbar.svelte';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			if (
				browser &&
				!$authStore.currentUser &&
				!$authStore.isLoading &&
				window.location.pathname !== '/' &&
				window.location.pathname !== '/auth'
			) {
				window.location.href = '/';
			}
		});
		return unsubscribe;
	});
</script>

<Navbar />
<main>
	<slot />
</main>
