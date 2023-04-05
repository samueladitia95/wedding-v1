import Image from "next/image";
import { useRef, useState } from "react";
import BrideAndGroomGif from "../../public/bridengroom.gif";
import DownArrow from "../../public/down-arrow.svg";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Gallery = () => {
	const [ratio, setRatio] = useState<number>(1);
	const [translateRatio1, setTranslateRatio1] = useState<string>("");
	const [translateRatio2, setTranslateRatio2] = useState<string>("");
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
	const [isText, setIsText] = useState<boolean>(false);

	const refGallery = useRef(null);
	const { scrollYProgress } = useScroll({
		target: refGallery,
		offset: ["0.75 1", "0.90 1"],
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setRatio(latest * 2 + 1);
		const rem = Math.floor(latest * 20);
		setTranslateRatio1(`-translate-x-[${Math.floor(latest * 20)}rem]`);
		setTranslateRatio2(`translate-x-[${Math.floor(latest * 20)}rem]`);

		if (rem >= 20 && !isFullScreen) {
			setTimeout(() => setIsFullScreen(true), 500);
			setTimeout(() => setIsText(true), 1500);
		} else if (rem < 20 && isFullScreen) {
			setTimeout(() => setIsFullScreen(false), 50);
			setTimeout(() => setIsText(false), 50);
		}
	});

	return (
		<>
			<div
				ref={refGallery}
				className="bg-soil11 lg:bg-soil8 text-soil1 font-circular hidden lg:block min-h-screen w-full"
			>
				<div className="py-20">
					<div className="flex justify-center items-center">
						<div
							className={`flex flex-col gap-4 transition-all duration-1000 ease-in ${translateRatio1} ${
								isFullScreen ? "w-0 pr-0" : "pr-12"
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
						<motion.div className="flex justify-center items-center min-h-screen">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg"
								alt="Background"
								height={1000}
								width={700 * ratio}
								className="object-cover max-h-screen rounded-4xl transition-all duration-1000 ease-in"
							/>
							<div
								className={`absolute bg-black z-20 h-screen w-full transition-all duration-1000 ease-in ${
									isFullScreen ? "bg-opacity-50" : "bg-opacity-0"
								}`}
							/>
							<div
								className={`absolute text-center flex flex-col gap-10 z-30 ${
									isText ? "opacity-100" : "opacity-0"
								}`}
							>
								{/* <div className="md:w-text-narrow uppercase font-safira text-4xl md:text-6xl leading-10 tracking-widest flex flex-col gap-2 md:hidden">
									<p className="text-left ml-6">irwan</p>
									<p>thomas</p>
									<p className="text-left">burhan</p>
									<p>&</p>
									<p className="text-right">Claudia</p>
									<p className="text-right mr-6">Narmada</p>
								</div> */}
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
						</motion.div>

						<div
							className={`flex flex-col gap-4 transition-all duration-1000 ease-in ${translateRatio2} ${
								isFullScreen ? "w-0 pl-0" : "pl-12"
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
