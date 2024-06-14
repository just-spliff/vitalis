<script>
	import SectionNumb from './SectionNumb.svelte';
	import Spring from './Spring.svelte';

	let about_us =
		'Welcome to Vitalis, where your health and well-being are our top priorities. We are a premium rehabilitation facility dedicated to providing the highest standard of physiotherapy care. Our team of experienced professionals is committed to helping you achieve your health goals through personalized treatment plans and state-of-the-art techniques, including the innovative use of virtual reality in rehabilitation.';

	let mission =
		"Our mission is to help you achieve optimal health and functional independence through personalized rehabilitation programs. We believe in the power of tailored treatment plans, designed to address each patient's unique needs. By using evidence-based practices and the latest advancements in physiotherapy, including VR technology, we ensure that you receive the best possible care to facilitate your recovery and enhance your quality of life.";

	let approach =
		'At Vitalis, we take a holistic approach to rehabilitation. We focus not only on physical recovery but also on enhancing your overall well-being. Our comprehensive assessment process allows us to understand the root causes of your condition, enabling us to design effective, individualized treatment plans.';

	let services_col_1 = [
		{
			name: 'Manual Therapy',
			content: 'Hands-on techniques to relieve pain, restore mobility, and improve function.'
		},
		{
			name: 'Massage Therapy',
			content: 'Therapeutic massage to alleviate pain, reduce stress, and promote relaxation.'
		},
		{
			name: 'Electrotherapy',
			content: 'Therapeutic massage to alleviate pain, reduce stress, and promote relaxation.'
		},
		{
			name: 'Chronic Pain Management',
			content: 'Strategies to manage and alleviate chronic pain conditions.'
		}
	];

	let services_col_2 = [
		{
			name: 'Virtual Reality Therapy',
			content:
				'Innovative VR programs that simulate real-world scenarios to aid in the rehabilitation process, making therapy more engaging and effective.'
		},
		{
			name: 'Exercise Rehabilitation',
			content:
				'Customized exercise programs to strengthen muscles, improve flexibility, and enhance overall fitness.'
		}
	];

	let contact = [
		{ icon: 'fa-solid fa-phone', content: '123-456-789' },
		{ icon: 'fa-solid fa-envelope', content: 'office@vitalis.com' }
	];

	let quote_1 = 'Where Compassion Meets Excellence';
	let quote_2 = 'Restoring Health, One Step at a Time';
	let quote_3 = 'Therapies for a Better Tomorrow';
</script>

<about id="about">
	<div class="flex flex-col mt-[20px] gap-[20px]">
		<div class="flex large:flex-row mid:flex-row small:flex-row ss:flex-col gap-[20px]">
			<div class="flex flex-col gap-[20px]">
				<div class="flex flex-row items-center gap-[20px]">
					<SectionNumb num="1." />
					<h4 class="text_quote max-w-[434px]">{quote_1}</h4>
				</div>
				<div class="flex flex-row gap-[20px]">
					<div class="flex flex-col max-w-[131px] items-center gap-[20px] pt-2">
						<Spring width="30px" vertical />
						<h3 class="text_section-name vertical">about</h3>
					</div>
					<p class="text_section">
						{about_us}
					</p>
				</div>
			</div>
			<div class="flex">
				<img
					src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					class="object-cover rounded-[25px] mid:max-w-[433px] small:max-w-[433px] large:max-w-[584px]"
				/>
			</div>
		</div>
		<div class="flex large:flex-row mid:flex-row small:flex-row ss:flex-col gap-[20px]">
			<div class="flex flex-col gap-[20px]">
				<div
					class="h-[188px] flex flex-col w-full large:flex mid:flex small:flex ss:hidden relative"
				>
					<div
						class="w-[8px] absolute bg-rasinblack rounded-full h-[71px] large:left-[16px] mid:left-[16px] small:left-[14px]"
					></div>
					<div
						class=" absolute large:left-[16px] mid:left-[16px] small:left-[14px] ss:left-0 top-[69px] border-rasinblack border-l-[8px] border-b-[8px] w-[25px] h-[25px] rounded-bl-[25px]"
					></div>
					<div class="pl-[38px] small:pl-[36px] ss:pl-[22px]">
						<div
							class=" absolute top-[86px] h-[8px] rounded-full large:w-[90%] ss:w-full bg-rasinblack"
						></div>
					</div>
				</div>
				<img
					src="https://images.pexels.com/photos/8313205/pexels-photo-8313205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					class="object-cover max-w-[434px] mid:max-h-[500px] ss:max-h-[350px] small:max-h-[400px] large:max-h-none rounded-[25px]"
				/>
			</div>
			<div class="flex flex-col gap-[20px]">
				<div class="flex flex-row gap-[20px]">
					<div class="flex flex-row gap-[20px]">
						<div
							class="w-[131px] border-[8px] large:flex mid:flex small:flex ss:hidden rounded-[25px]"
						></div>
						<div class="flex flex-col justify-between items-center gap-[20px]">
							<SectionNumb num="2." vertical />
							<div class="flex flex-col h-full items-center gap-[20px]">
								<div class="w-[8px] bg-rasinblack rounded-full h-full"></div>
								<Spring width="30px" vertical />
							</div>
						</div>
					</div>
					<div class="flex flex-col w-full">
						<div class="w-full h-[115px] ss:h-[80px] relative">
							<div class="flex flex-row gap-[15px] absolute right-0 top-0">
								<div class="h-[56px] w-[56px] border-rasinblack rounded-[25px] border-[8px]"></div>
								<div class="h-[56px] w-[56px] rounded-[25px] bg-caraibben"></div>
							</div>
						</div>
						<div class="flex flex-col gap-[18px]">
							<div class="flex flex-row w-full gap-[20px] justify-between items-center">
								<h3 class="text_section-name">mission</h3>
								<div class=" bg-rasinblack max-w-[282px] h-[8px] rounded-full w-full"></div>
							</div>
							<p class="text_section">{mission}</p>
						</div>
					</div>
				</div>
				<div class="flex h-full items-center justify-center">
					<h4 class="text_quote large:flex mid:flex small:flex ss:hidden">
						{quote_2}
					</h4>
				</div>
			</div>
		</div>
		<div
			class="flex flex-row ss:mt-[-20px] large:mt-0 mid:mt-0 small:mt-0 ss:flex-col large:flex-row mid:flex-row small:flex-row gap-[20px] justify-end"
		>
			<div class="flex flex-col gap-[15px] relative">
				<SectionNumb num="3." align="self-end" />
				<div class="flex flex-row gap-[20px] self-end items-center">
					<Spring n={8} height="30px" hidden="large:flex ss:hidden" />
					<h3 class="text_section-name">approach</h3>
				</div>

				<p class="text_section max-w-[584px]">{approach}</p>
			</div>
			<div class="flex">
				<img
					src="https://images.pexels.com/photos/8313222/pexels-photo-8313222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					class="object-cover large:max-w-[584px] rounded-[25px]"
				/>
			</div>
		</div>
		<div
			class="flex relative large:flex-row mid:flex-row small:flex-row ss:flex-col flex-row gap-[20px] justify-end"
		>
			<div
				class="flex mr-[25px] ss:hidden large:flex mid:flex small:flex max-w-[131px] items-center justify-center"
			>
				<h4 class="text_quote m-auto vertical">
					{quote_3}
				</h4>
			</div>
			<div
				class="flex flex-col ss:w-full large:w-min mid:w-min small:w-min ss:flex-row large:flex-col mid:flex-col small:flex-col gap-[20px] items-center"
			>
				<SectionNumb num="4." vertical hidden="large:flex mid:flex small:flex ss:hidden" />
				<SectionNumb num="4." hidden="large:hidden mid:hidden small:hidden ss:flex" />
				<div
					class="w-[8px] mid:flex large:flex small:flex ss:hidden bg-rasinblack rounded-full h-full"
				></div>
			</div>
			<div class="flex flex-col mt-[-10px] w-full max-w-[1037px]">
				<div
					class="flex flex-row large:flex mid:flex small:flex ss:hidden justify-end gap-[20px] mb-[50px] items-center relative"
				>
					<div
						class="h-[56px] rounded-[25px] bg-caraibben large:flex mid:flex small:flex ss:hidden w-[56px]"
					></div>
					<div
						class="h-[56px] rounded-[25px] large:flex mid:flex small:flex ss:hidden border-rasinblack border-[8px] w-full max-w-[434px]"
					></div>
					<div
						class="h-[8px] bg-rasinblack rounded-full w-full large:max-w-[108px] mid:max-w-[108px] small:max-w-[108px] ss:max-w-[160px] mr-[23px]"
					></div>
					<div
						class="w-[8px] bg-rasinblack rounded-full large:h-[80px] ss:top-[23px] ss:h-[55px] mid:h-[80px] small:h-[80px] absolute large:top-[46px] mid:top-[46px] small:top-[46px]"
					></div>
					<div
						class="border-rasinblack rounded-tr-[25px] ss:top-0 w-[25px] h-[25px] absolute large:top-[24px] mid:top-[24px] small:top-[24px] border-r-[8px] border-t-[8px]"
					></div>
					<div
						class="border-rasinblack rounded-br-[25px] ss:top-[75px] w-[25px] h-[25px] absolute large:top-[123px] mid:top-[123px] small:top-[123px] border-r-[8px] border-b-[8px]"
					></div>
				</div>
				<div
					class="flex flex-row gap-[20px] h-max items-center large:p-0 mid:pt-[8px] small:pt-[15px]"
				>
					<h3 class="text_section-name">services</h3>
					<div
						class="h-[8px] w-full bg-rasinblack rounded-full ss:m-0 large:mr-[23px] mid:mr-[23px] small:mr-[23px]"
					></div>
				</div>
				<div
					class="flex flex-row large:flex-row small:flex-row mid:flex-row ss:flex-col ss:gap-[20px] large:justify-between mid:justify-between small:justify-between large:max-w-[1037px] mid:max-w-[735px]"
				>
					<div class="flex flex-col gap-[20px]">
						{#each services_col_1 as { name, content }}
							<div class="flex flex-col large:max-w-[434px] mid:max-w-[284px] small:max-w-[284px]">
								<h5
									class="font-montserrat font-bold large:text-[27px] mid:text-[27px] small:text-[22px] leading-none"
								>
									{name}:
								</h5>
								<p class="text_section">{content}</p>
							</div>
						{/each}
					</div>
					<div class="flex flex-col gap-[20px] justify-center">
						{#each services_col_2 as { name, content }}
							<div class="flex flex-col large:max-w-[434px] mid:max-w-[284px] small:max-w-[284px]">
								<h5
									class="font-montserrat font-bold large:text-[27px] mid:text-[27px] small:text-[22px] leading-none"
								>
									{name}:
								</h5>
								<p class="text_section">{content}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row gap-[20px] ss:w-full">
			<div class="flex flex-col max-w-[284px] w-full gap-[20px]">
				<SectionNumb num="5." />
			</div>
			<div class="flex flex-col gap-[100px] py-[57px] w-full max-w-[453px] relative">
				<div class="h-[8px] bg-rasinblack rounded-full w-full"></div>
				<div
					class="flex flex-row gap-[20px] large:pr-0 mid:pr-0 small:pr-0 ss:pr-[30px] large:ml-[-80px] mid:ml-[-80px] small:ml-[-80px] ss:ml-[-150px] items-center w-full"
				>
					<h3 class="text_section-name vertical">Contact</h3>
					<div class="flex flex-col gap-[20px] w-full max-w-[453px]">
						{#each contact as { icon, content }}
							<div class="flex flex-row items-center gap-[20px]">
								<i class="{icon} large:text-[40px] mid:text-[40px] small:text-[40px] ss:text-[25px]"
								></i>
								<h4 class="text_section hover:scale-105 transition-transform">
									{content}
								</h4>
							</div>
						{/each}
					</div>
				</div>
				<div class="h-[8px] bg-rasinblack rounded-full w-full"></div>
				<div
					class="absolute bottom-[46px] h-[30px] ss:hidden large:flex mid:flex small:flex left-[-170px]"
				>
					<Spring height="30px" n={8} />
				</div>
			</div>

			<div
				class="flex flex-row gap-[20px] ss:w-min large:w-full mid:w-full small:w-full items-center max-w-[304px] relative"
			>
				<div class="flex h-full justify-center items-center py-[80px]">
					<div class="flex ml-[-5px] w-[8px] relative rounded-full h-full bg-rasinblack"></div>
				</div>
				<div
					class="w-[25px] h-[25px] rounded-tr-[25px] border-t-[8px] border-r-[8px] border-rasinblack top-[57px] left-[-22px] absolute"
				></div>
				<div
					class="w-[25px] h-[25px] rounded-br-[25px] border-b-[8px] border-r-[8px] border-rasinblack bottom-[57px] left-[-22px] absolute"
				></div>
				<div
					class="flex flex-row h-full ss:hidden large:flex mid:flex small:flex items-center w-full max-w-[284px] gap-[20px]"
				>
					<div class="flex ss:hidden flex-col items-center w-full justify-center">
						<div class="w-[8px] h-[255px] rounded-full bg-rasinblack"></div>
					</div>
					<div
						class="flex w-full ss:hidden large:flex mid:flex small:flex flex-col items-center justify-center"
					>
						<div class="w-[8px] h-[255px] rounded-full bg-rasinblack"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center rounded-t-[25px] bg-rasinblack p-10">
			<h4 class="text_section text-light">© Vitalis</h4>
			<h4 class="text-[15px] text-light">Created by: Maciej Gierałtowski</h4>
		</div>
	</div>
</about>

<style>
	.vertical {
		writing-mode: vertical-lr;
		@apply rotate-180;
	}
</style>
