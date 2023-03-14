import Image from "next/image";

const QrCode = () => {
	return (
		<>
			<div className="bg-soil16 text-white font-circular">
				<div className="container py-20 md:py-48 flex flex-col items-center gap-14 md:w-wide">
					<div className="uppercase">
						<p className="font-safira text-center text-5xl md:text-7xl lg:text-8xl tracking-wide">
							wedding gift
						</p>
						<p className="mt-4 text-center tracking-wide lg:text-lg">
							Your prayers is the best gift of all.
						</p>
						<p className="text-center tracking-wide lg:text-lg">
							However if you want to give something extra, we would be happy to
							received it
						</p>
					</div>

					<div className="flex gap-4 flex-col items-center p-6 bg-soil10 rounded-4xl max-w-xs ">
						<Image
							src="https://via.placeholder.com/400"
							alt="QR Code"
							width={313}
							height={313}
							priority
						/>
						<div className="text-black text-center font-semibold uppercase text-sm">
							<p>irwan thomas burhan</p>
							<p>bank central asia</p>
							<p>2611874148</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QrCode;
