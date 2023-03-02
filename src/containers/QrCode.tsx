import Image from "next/image";

const QrCode = () => {
	return (
		<>
			<div className="bg-soil11 text-soil1 font-circular">
				<div className="container py-20 flex flex-col items-center gap-14 md:w-narrow">
					<div className="uppercase">
						<p className="font-serif text-center text-4xl">share love</p>
						<p className="mt-4 text-center text-sm font-semibold">
							Your prayers & blessings at our wedding is enough as a gift
						</p>
						<p className="text-center text-sm font-semibold">
							but if you want to give more, we are happy to receive it and it
							will complement our happiness even more
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
							<p>bca</p>
							<p>2611874148</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QrCode;
