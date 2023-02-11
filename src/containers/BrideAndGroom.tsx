import Image from "next/image";

const BrideAndGroom = () => {
	return (
		<>
			<div className="bg-soil8 text-soil2 font-circular">
				<div className="container pb-0 flex flex-col items-center gap-14 md:w-ultra-wide h-tall bg-brideandgroom bg-cover bg-center bg-no-repeat">
					<div className="text-center pt-72 pb-0 flex flex-col gap-10">
						<div className="uppercase font-baskervville text-4xl leading-9 tracking-widest font-medium flex flex-col gap-2">
							<p className="text-left ml-6">irwan</p>
							<p>thomas</p>
							<p className="text-left">burhan</p>
							<p>&</p>
							<p className="text-right">Claudia</p>
							<p className="text-right mr-6">Narmada</p>
						</div>
						<p className="italic font-baskervville text-lg">
							Let’s us tell you our classic love story
						</p>
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

export default BrideAndGroom;
