<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import TextSlot from '../components/TextSlot.svelte';

	let about = [
		{
			title: 'Who we are: ',
			paragraph:
				"Vitalis is a modern physiotherapy clinic located in the heart of Warsaw. Our team is made up of qualified physiotherapists who are experts in their field. Each of our specialists has extensive experience working with patients of various levels of physical activity, ages, and health needs. We take pride in offering a wide range of therapeutic services tailored to each patient's individual requirements."
		},
		{
			title: 'Our Mission: ',
			paragraph:
				"Help people regain their health, mobility, and quality of life. At Vitalis, we believe everyone deserves access to effective physiotherapy care. Our aim is to provide the highest quality services that are personalized and based on the latest scientific research. We're here to support you on your journey to full functionality and to help prevent future injuries."
		}
	];

	let values = [
		{
			title: 'Professionalism:',
			desc: 'We ensure that our services are delivered to the highest standards. Our team constantly improves their skills through training and courses.'
		},
		{
			title: 'Emapthy:',
			desc: 'We understand that each patient has their own story and needs. Our approach is full of understanding and respect.'
		},
		{
			title: 'Innovation:',
			desc: 'We use modern technologies and the latest therapeutic methods to provide our patients with the best results.'
		},
		{
			title: 'Long-Term Success:',
			desc: 'Our goal is not just short-term relief, but also the long-term health success of our patients.'
		}
	];
</script>

<Header />
<section class="flex flex-col gap-20 items items-center p-10 mt-10">
	<h1 class="font-bold text-6xl">About us</h1>
	{#each about as { title, paragraph }}
		<TextSlot {title} {paragraph} />
	{/each}
	<div class="flex flex-col items-center gap-10">
		<h3 class="text-4xl font-bold mt-12">Our Values</h3>
		<div class=" flex flex-row flex-wrap justify-between max-w-[920px]">
			{#each values as { title, desc }}
				<div class="flex flex-col max-w-[500px]">
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
</style>
