<script>
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
</script>

<section class="flex flex-row items-center justify-center h-full p-10 gap-[40px]">
	<div>
		<img
			src="https://images.pexels.com/photos/8312873/pexels-photo-8312873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt=""
			class="rounded-full w-[470px]"
		/>
	</div>
	<div class="flex flex-col gap-[45px]">
		<div>
			<div>
				<h2 class="text-[40px] mb-[-40px]">Welcome to</h2>
				<h1 class="text-[100px] font-bold">
					<span class="font-extrabold text-green-600">V</span>italis
				</h1>
			</div>
			<div class="float-right mt-[-40px]">
				<p class="font-normal text-[16px] uppercase">A Private Physiotherapy Clinic</p>
			</div>
		</div>
		<div class="max-w-[420px]">
			<p class="text-justify">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor animi minus
				reiciendis, necessitatibus sed libero soluta ea ab in consectetur culpa repudiandae,
				nesciunt doloremque! Aliquam culpa quas cum dolores!
			</p>
		</div>
		<Button class="max-w-[100px] hover:scale-105 rounded-full active:scale-95">Book now</Button>
	</div>
</section>
