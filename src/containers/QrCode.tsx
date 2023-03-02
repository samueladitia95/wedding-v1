import Image from "next/image";

const QrCode = () => {
	return (
		<>
			<div className="bg-soil16 text-white font-circular">
				<div className="container py-20 flex flex-col items-center gap-14 md:w-wide">
					<div className="uppercase">
						<p className="font-serif text-center text-4xl">share love</p>
						<p className="mt-4 text-center text-sm font-semibold">
							Your prayers is the best gift of all.
						</p>
						<p className="text-center text-sm font-semibold">
							However if you want to give something extra, we will be happy to
							receive it
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
