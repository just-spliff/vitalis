<script>
	import '../app.css';
	let content = 'Prioritize your health and well-being. ';
</script>

<header class="flex flex-col mt-[20px] gap-[20px] items-center">
	<div
		class="flex large:flex-row mid:flex-row small:flex-row ss:flex-col gap-[20px] items-center w-full"
	>
		<div
			class="h-full flex flex-col flex-1 large:self-auto mid:self-auto small:self-auto ss:self-start"
		>
			<div class="flex flex-col gap-[4px]">
				<h3
					class="font-montserrat font-medium large:text-[24px] mid:text-[24px] small:text-[20px] ss:text-[24px]"
				>
					Rehab Renaissance:
				</h3>
				<h1
					class="font-montserrat font-semibold large:text-[40px] mid:text-[40px] small:text-[30px] ss:text-[40px] leading-none"
				>
					Bridging Physiotherapy
				</h1>
				<div class="flex flex-row items-center gap-[9px] float-left">
					<div class="bg-caraibben rounded-[25px] w-[85px] min-h-[50px]"></div>
					<h1
						class="font-montserrat font-semibold large:text-[40px] mid:text-[40px] small:text-[30px] ss:text-[40px] leading-none"
					>
						with Virtual Reality
					</h1>
				</div>
			</div>
		</div>
		<div
			class="bg-caraibben flex gap-4 flex-row flex-2 ss:self-end p-4 h-[270px] ss:max-h-[230px] max-w-[736px] rounded-[25px] justify-between"
		>
			<div class="flex flex-col justify-between">
				<div>
					<h2
						class="font-nicomoji uppercase large:text-[50px] mid:text-[50px] small:text-[40px] ss:text-[30px] leading-none text-light text-wrap flex-1"
					>
						200+ people trust us
					</h2>
				</div>
				<div class="flex flex-col gap-2">
					<p
						class="flex flex-row cursor-pointer transition-transform hover:font-semibold items-center gap-1 font-montserrat font-medium text-light ss:text-[16px] text-xl"
					>
						Find out why <img
							src="./arrow_corner_white.png"
							alt=""
							class="large:w-3 mid:h-3 small:h-3 ss:h-2"
						/>
					</p>
					<div class="flex flex-row items-center gap-4">
						<div class="flex flex-row gap-1">
							<img class="avatars" src="./avatar.png" alt="" />
							<img class="avatars" src="./avatar.png" alt="" />
							<img class="avatars" src="./avatar.png" alt="" />
						</div>
						<p class="font-montserrat text-light font-semibold ss:text-[16px] text-2xl">4.9/5</p>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col bg-rasinblack rounded-[25px] flex-1 items-center justify-center large:p-8 mid:p-8 small:p-8 ss:p-2 ss:px-6 w-full h-full"
			>
				<div class="flex flex-col gap-2 items-center">
					<h2 class="text-light font-nicomoji ss:text-[30px] large:text-[50px] p-0 m-0">50</h2>
					<h3
						class="text-light font-montserrat font-medium ss:text-[14px] large:text-[20px] text-nowrap"
					>
						Offices in Poland
					</h3>
				</div>
				<p
					class="flex flex-row hover:font-semibold transition-transform items-center gap-1 text-light ss:text-[10px] large:text-[14px] font-montserrat text-md"
				>
					See in which cities <img src="./arrow_corner_white.png" alt="" class="w-2 h-2" />
				</p>
			</div>
		</div>
	</div>
	<div class="flex large:flex-row mid:flex-row small:flex-row ss:flex-col gap-[20px] w-full">
		<div class="flex">
			<img
				src="https://images.pexels.com/photos/8313443/pexels-photo-8313443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt=""
				class="object-cover rounded-[25px] large:h-[564px] mid:h-[564px] small:h-[400px] mid:w-[885px] large:w-[885px]"
			/>
		</div>
		<div class="flex flex-col gap-[20px] justify-between large:w-[38%] mid:w-[38%] ss:w-full">
			<div class=" font-medium flex-col flex w-full">
				<h3
					class="font-montserrat leading-none ss:text-[24px] large:text-[50px] mid:text-[40px] small:text-[40px]"
				>
					{content}
				</h3>
			</div>
			<div class="flex flex-row gap-[20px] w-full h-full">
				<div
					class="flex border-rasinblack border-solid border-[8px] hover:scale-105 transition-transform justify-center p-[10px] rounded-[25px] items-center h-full min-w-[131px]"
				>
					<img
						src="./arrow_down_black.png"
						alt=""
						class=" h-full large:max-h-[308px] mid:max-h-[308px] small:max-h-[200px] small:w-auto w-full max-w-[52px]"
					/>
				</div>
				<div class="flex flex-col gap-[20px] w-full">
					<div
						class="tile-btn border-rasinblack hover:scale-105 transition-transform border-solid border-[8px]"
					>
						<h3 class="txt text_btn text-rasinblack mb-[-14px] ml-[-10px]">Blog</h3>
						<img src="./arrow_corner_black.png" alt="" class="arr top-[10px] right-[10px]" />
					</div>
					<div class="tile-btn bg-caraibben hover:scale-105 transition-transform">
						<h3
							class="txt text_btn text-light large:max-w-[191px] mid:max-w-[115px] small:max-w-[115px] ss:max-w-[115px] text-wrap break-words mb-[-6px]"
						>
							Community
						</h3>
						<img src="./arrow_corner_white.png" alt="" class="arr top-[18px] right-[18px]" />
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.tile-btn {
		@apply rounded-[25px] relative flex flex-row p-[18px] justify-between h-full w-full;
	}

	.arr {
		@apply large:h-10 large:w-10 mid:h-10 mid:w-10 small:w-5 small:h-5 absolute;
	}

	.txt {
		@apply font-nicomoji uppercase large:text-[50px] mid:text-[30px] small:text-[30px] self-end leading-none;
	}
</style>
