<script>
	export let n = 6;
	export let width = '8px';
	export let height = '8px';
	export let vertical = false;
	export let cls = '';
	export let hidden = '';

	let direction = '';
	if (vertical) {
		direction = 'flex-col';
	} else {
		direction = 'flex-row';
	}
</script>

<div class="flex {cls} {hidden} {direction} gap-[12px] items-center">
	{#each Array(n) as _}
		<div class="bg-rasinblack rounded-full w-[{width}] h-[{height}]"></div>
	{/each}
</div>
