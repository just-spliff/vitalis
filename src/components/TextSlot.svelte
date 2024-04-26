<script lang="ts">
	export let title = '';
	export let paragraph = '';
</script>

<div class="flex flex-row justify-between w-[930px]">
	<h3 class="font-bold text-2xl">{title}</h3>
	<p class=" mt-1.5 text-justify max-w-[720px]">
		{paragraph}
	</p>
</div>
