<script lang="ts">
	export let num = '1';
	export let vertical = false;

	export let align = '';
	let cls = '';
	let hide = '';
	let rotate = '';
	export let hidden = '';

	if (vertical) {
		cls =
			'large:min-h-[284px] ss:min-h-[131px] ss:max-w-[131px] ss:min-w-[131px] large:min-w-[131px] flex-col';
		hide = 'hidden';
		rotate = 'rotate-[-90deg]';
	} else {
		cls =
			'large:max-w-[284px] ss:min-w-[131px] ss:max-w-[131px] ss:min-h-[131px] large:min-h-[131px] flex-row';
		hide = 'large:flex';
	}
</script>

<div
	class="flex {align} {hidden} w-full border-[8px] relative justify-between border-rasinblack rounded-[25px] {cls}"
>
	<div
		class="h-[8px] absolute self-end ss:hidden {hide} w-[30px] left-[30px] top-[15px] bg-rasinblack rounded-full"
	></div>
	<div class="flex flex-col {rotate} ss:hidden large:flex gap-[10px] mb-[15px] self-end m-auto">
		<div class="h-[8px] self-end w-[33%] bg-rasinblack rounded-full"></div>
		<div class="h-[8px] w-[90px] bg-rasinblack rounded-full"></div>
	</div>
	<h2 class="text-rasinblack m-auto font-nicomoji flex items-center text-[50px]">
		{num}
	</h2>
</div>
