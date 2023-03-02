import Image from "next/image";

const Gallery = () => {
	return (
		<>
			<div className="bg-soil11 lg:bg-soil8 text-soil1 font-circular">
				<div className="container md:px-0 py-20 flex flex-col items-center gap-14 md:w-ultra-wide">
					<div className="grid grid-cols-8 gap-4 items-center justify-items-center w-full">
						<div className="hidden flex-col gap-4 lg:flex lg:col-span-2">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_1_desktop.jpg"
								alt="gallery-side"
								width={315}
								height={340}
								className="rounded-4xl"
							/>
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_4_desktop.jpg"
								alt="gallery-side"
								width={315}
								height={470}
								className="rounded-4xl"
							/>
						</div>
						<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg"
							alt="gallery-main"
							width={660}
							height={500}
							className="rounded-4xl col-span-8 lg:col-span-4"
						/>
						<div className="hidden flex-col gap-4 lg:flex lg:col-span-2">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_2_desktop.jpg"
								alt="gallery-side"
								width={315}
								height={340}
								className="rounded-4xl"
							/>
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_5_desktop.jpg"
								alt="gallery-side"
								width={315}
								height={470}
								className="rounded-4xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
