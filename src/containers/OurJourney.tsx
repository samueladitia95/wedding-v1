import Image from "next/image";

const OurJourney = () => {
	return (
		<>
			<div className="bg-soil11 text-soil1 font-circular">
				<div className="container py-20 flex flex-col items-center gap-14 md:w-narrow">
					<div className="font-safira flex flex-col gap-4">
						<div>
							<p className="text-center text-4xl uppercase">
								Our journey started
							</p>
							<p className="text-center text-4xl uppercase">as high school</p>
							<p className="text-center text-4xl italic">Sweethearts</p>
						</div>
						<p className="text-left font-epilogue text-md">
							We started off hanging out in the same group of friends{" "}
							<span className="italic font-safira text-sm font-extralight">
								(you know who you are)
							</span>
							, then we realized that we enjoyed each other&apos;s company. We
							started to date each other towards the end of high school, our
							first date was at The Coffee Bean, where we made an excuse to
							study for a Geography exam together (a classic but accurate move).
						</p>
					</div>

					<div className="flex flex-col gap-4 items-center">
						<Image
							src="https://via.placeholder.com/400x200"
							alt="QR Code"
							width={313}
							height={200}
							className="rounded-full"
						/>
						<p className="text-center font-safira text-6xl italic">
							I said &quot;I do&quot;
						</p>
						<p className="text-left font-epilogue text-md">
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
