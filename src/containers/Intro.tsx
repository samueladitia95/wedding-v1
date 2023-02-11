import Image from "next/image";

const Intro = () => {
	return (
		<>
			<div className="bg-soil8 text-soil2 font-circular">
				<div className="container pb-0 flex flex-col items-center gap-14 md:w-ultra-wide h-tall bg-intro bg-center bg-cover bg-no-repeat">
					<div className="text-center pt-72 pb-52 flex flex-col gap-10 md:w-narrow">
						<div className="uppercase font-safira text-4xl leading-9">
							<p>I HOLD YOU IN MY HEART,</p>
							<p>FOR WE HAVE SHARED TOGETHER GOD&apos;S BLESSINGS</p>
						</div>
						<p className="italic font-baskervville text-lg">Philippians 1:7</p>
					</div>

					<button>
						<Image
							src="https://via.placeholder.com/64"
							alt="QR Code"
							width={64}
							height={64}
							className="rounded-full"
						/>
					</button>
				</div>
			</div>
		</>
	);
};

export default Intro;
