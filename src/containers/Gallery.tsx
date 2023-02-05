import Image from "next/image";

const Gallery = () => {
	return (
		<>
			<div className="bg-olive lg:bg-secondary-lighten text-primary font-circular">
				<div className="container py-20 flex flex-col items-center gap-14 md:w-ultra-wide">
					<div className="grid grid-cols-8 gap-4 items-center justify-items-center">
						<div className="hidden flex-col gap-4 lg:flex lg:col-span-2">
							<Image
								src="https://via.placeholder.com/315x340"
								alt="gallery-side"
								width={315}
								height={340}
								className="rounded-2xl"
							/>
							<Image
								src="https://via.placeholder.com/315x470"
								alt="gallery-side"
								width={315}
								height={470}
								className="rounded-2xl"
							/>
						</div>
						<Image
							src="https://via.placeholder.com/660x500"
							alt="gallery-main"
							width={660}
							height={500}
							className="rounded-2xl col-span-8 lg:col-span-4"
						/>
						<div className="hidden flex-col gap-4 lg:flex lg:col-span-2">
							<Image
								src="https://via.placeholder.com/315x340"
								alt="gallery-side"
								width={315}
								height={340}
								className="rounded-2xl"
							/>
							<Image
								src="https://via.placeholder.com/315x470"
								alt="gallery-side"
								width={315}
								height={470}
								className="rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
