import Image from "next/image";
import IDo from "../../public/i-do.png";

const OurJourney = () => {
	return (
		<>
			<div id="our-journey" className="bg-soil15 text-white font-circular">
				<div className="container py-20 flex flex-col items-center gap-14 md:w-ultra-wide">
					{/* Mobile and Table */}
					<div className="font-safira flex flex-col gap-4 lg:hidden">
						<div>
							<p className="text-left text-4xl uppercase md:text-7xl">
								Our journey
							</p>
							<div className="flex gap-2 items-center my-2">
								<p className="text-center text-4xl uppercase md:text-7xl">
									started
								</p>
								<Image
									src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/image_gif_dekstop.jpg"
									alt={`photo our journey`}
									width="0"
									height="0"
									sizes="100vw"
									className="rounded-full w-36 h-full md:w-80"
								/>
							</div>
							<p className="text-left text-4xl uppercase md:text-7xl">
								as high school
							</p>
							<p className="text-left text-6xl italic font-baskervville md:text-7xl">
								Sweethearts
							</p>
						</div>
						<p className="text-left font-extralight font-epilogue text-md">
							We started off hanging out in the same group of friends{" "}
							<span className="italic font-safira text-sm font-thin">
								(you know who you are)
							</span>
							, then we realized that we enjoyed each other&apos;s company. We
							started to date each other towards the end of high school, our
							first date was at The Coffee Bean, where we made an excuse to
							study for a Geography exam together (a classic but accurate move).
						</p>
					</div>

					{/* Desktop */}
					<div className="font-safira flex-col gap-4 hidden lg:flex">
						<div>
							<p className="text-7xl xl:text-9xl uppercase text-justify whitespace-nowrap">
								Our journey started
							</p>
							<div className="flex gap-2 items-center my-2">
								<Image
									src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/image_gif_dekstop.jpg"
									alt={`photo our journey`}
									width="0"
									height="0"
									sizes="100vw"
									className="rounded-full w-36 h-full md:w-80"
								/>
								<p className="text-justify text-7xl xl:text-9xl uppercase whitespace-nowrap">
									as high school
								</p>
							</div>
							<div className="flex xl:gap-36 gap-14 mt-10">
								<p className="text-justify text-7xl xl:text-9xl italic font-baskervville">
									Sweethearts
								</p>
								<p className="text-left font-extralight font-epilogue text-md pt-6 xl:pt-12 leading-8">
									We started off hanging out in the same group of friends{" "}
									<span className="italic font-safira text-sm font-thin">
										(you know who you are)
									</span>
									, then we realized that we enjoyed each other&apos;s company.
									We started to date each other towards the end of high school,
									our first date was at The Coffee Bean, where we made an excuse
									to study for a Geography exam together (a classic but accurate
									move).
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 items-center">
						<Image
							src={IDo}
							alt="QR Code"
							className="rounded-full md:w-full lg:w-wide"
						/>
						<p className="text-center font-baskervville text-6xl md:text-8xl italic">
							I said &quot;I do&quot;
						</p>
						<p className="text-center font-extralight font-epilogue text-md leading-8">
							As cheesy as it gets, we even went to prom together (LOL). Slowly
							without realizing, throughout several paces in life, after tons of
							happy moments, growing together and learning from each other,
							Irwan popped the question back in March 2022 in Singapore and
							Claudia said <span className="font-bold">I DO!</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurJourney;
