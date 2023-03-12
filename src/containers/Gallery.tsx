import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
	const [isFinished, setIsFinished] = useState<boolean>(false);
	const [ratio, setRatio] = useState<number>(100);
	const { ref } = useInView({
		threshold: [
			0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42,
			0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54,
			0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66,
			0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78,
			0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9,
			0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1,
		],
		onChange(inView, entry) {
			if (inView) {
				const ratio = Number(entry.intersectionRatio.toFixed(2));
				setRatio(!ratio ? 100 : 100 - ratio * 50 - 12);
				if (ratio >= 0.95) {
					setIsFinished(true);
				}
			}
		},
	});

	return (
		<>
			<div ref={ref} className="bg-soil11 lg:bg-soil8 text-soil1 font-circular">
				<div className="container md:px-0 py-20 flex flex-col items-center gap-14 lg:w-ultra-wide xl:max-w-none">
					<div className="flex justify-center gap-4 items-center justify-items-center w-full">
						<div
							className={`flex-col gap-4 opacity-0 transition-all duration-1000 ease-in hidden ${
								isFinished ? "lg:flex opacity-100" : "lg:hidden"
							}`}
						>
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
								height={340}
								className="rounded-4xl"
							/>
						</div>
						<Image
							src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg"
							alt="gallery-main"
							width={isFinished ? 660 : (1620 * ratio) / 100}
							height={isFinished ? 500 : (1400 * ratio) / 100}
							className="rounded-4xl transition-all ease-in duration-100"
						/>
						<div
							className={`flex-col gap-4 opacity-0 transition-all duration-1000 ease-in hidden ${
								isFinished ? "lg:flex opacity-100" : "lg:hidden"
							}`}
						>
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
								height={340}
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
