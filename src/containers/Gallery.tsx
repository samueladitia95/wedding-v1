import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import BrideAndGroomGif from "../../public/bridengroom.gif";
import DownArrow from "../../public/down-arrow.svg";
import Link from "next/link";

const Gallery = () => {
	const [isBackgroundFull, setIsBackgroundFull] = useState<boolean>(false);
	const [isBackgroundOverlay, setIsBackgroundOverlay] =
		useState<boolean>(false);
	const [isTextDisplay, setIsTextDisplay] = useState<boolean>(false);

	const { ref } = useInView({
		threshold: [0.8],
		onChange(inView) {
			if (inView) {
				setIsBackgroundFull(true);
				setTimeout(() => {
					setIsBackgroundOverlay(true);
					setTimeout(() => {
						setIsTextDisplay(true);
					}, 500);
				}, 1000);
			}
		},
	});

	return (
		<>
			<div
				ref={ref}
				className="bg-soil11 lg:bg-soil8 text-soil1 font-circular hidden lg:block"
			>
				<div className="py-20">
					<div
						className={`bg-cover bg-center bg-no-repeat h-screen ${
							isBackgroundOverlay ? "bg-brideandgroom" : ""
						}`}
					>
						<div
							className={`bg-black transition-all duration-200 ease-in h-screen ${
								isBackgroundOverlay ? "bg-opacity-50" : "bg-opacity-0"
							}`}
						>
							<div className="container md:px-0 flex flex-col items-center gap-14 lg:w-ultra-wide xl:max-w-none">
								<div className="flex justify-center gap-4 items-center justify-items-center w-full">
									<div
										className={`flex-col gap-4 transition-all duration-1000 ease-in ${
											isBackgroundFull ? "-translate-x-full" : "translate-x-0"
										}
										${isTextDisplay ? "hidden" : "lg:flex"}`}
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
									<div>
										<Image
											src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg"
											alt="gallery-main"
											width={!isBackgroundFull ? 660 : 3620}
											height={!isBackgroundFull ? 500 : 3400}
											className={`transition-all ease-in duration-1000 rounded-4xl 
										${isBackgroundFull ? "lg:rounded-none" : ""}
										${
											isBackgroundOverlay
												? "lg:opacity-0 duration-100"
												: "lg:opacity-100 duration-1000"
										}
										${isTextDisplay ? "hidden" : "block"}
										`}
										/>
										<div
											className={`text-center flex flex-col gap-10 ${
												isTextDisplay ? "block" : "hidden"
											}`}
										>
											<div className="md:w-text-narrow uppercase font-safira text-4xl md:text-6xl leading-10 tracking-widest flex flex-col gap-2 md:hidden">
												<p className="text-left ml-6">irwan</p>
												<p>thomas</p>
												<p className="text-left">burhan</p>
												<p>&</p>
												<p className="text-right">Claudia</p>
												<p className="text-right mr-6">Narmada</p>
											</div>
											<Image
												src={BrideAndGroomGif}
												alt="Bride and groom"
												width={1000}
												height={1000}
												priority
												className={`z-10 hidden md:block`}
											/>
											<p className="italic font-baskervville text-2xl md:text-3xl lg:-mt-24 xl:-mt-36">
												Let’s us tell you our love journey
											</p>
											<Link href="#our-journey" scroll={false}>
												<button>
													<Image
														src={DownArrow}
														alt="Down Arrow Button"
														className="rounded-full w-8 md:w-12 h-8 md:h-12 "
													/>
												</button>
											</Link>
										</div>
									</div>
									<div
										className={`flex-col gap-4 transition-all duration-1000 ease-in ${
											isBackgroundFull ? "translate-x-full" : "translate-x-0"
										}
										${isTextDisplay ? "hidden" : "lg:flex"}
										`}
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
					</div>
				</div>
			</div>

			<div className="bg-soil11 lg:bg-soil8 text-soil1 font-circular block lg:hidden">
				<div className="py-10">
					<div className="container md:px-0 flex flex-col items-center gap-14">
						<div className="flex justify-center gap-4 items-center justify-items-center w-full">
							<div>
								<Image
									src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg"
									alt="gallery-main"
									width={660}
									height={500}
									className="rounded-4xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
