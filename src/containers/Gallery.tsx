import Image from "next/image";
import { useRef, useState } from "react";
import BrideAndGroomGif from "../../public/bridengroom.gif";
import DownArrow from "../../public/down-arrow.svg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { exportIntoView } from "@/utils/scrollIntoView";

const Gallery = () => {
	const [ratio, setRatio] = useState<number>(1);
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
	const [isText, setIsText] = useState<boolean>(false);
	const [isTextMobile, setIsTextMobile] = useState<boolean>(false);
	const [isMobileAnimation, setIsMobileAnimation] = useState<boolean>(false);
	const [translate, setTranslate] = useState<number>(0);
	const [width, setWidth] = useState<number>(300);

	const refGallery = useRef(null);
	const mobileGallery = useRef(null);
	const { scrollYProgress } = useScroll({
		target: refGallery,
		offset: ["0.6 1", "0.80 1"],
	});
	const { scrollYProgress: mobileScroll } = useScroll({
		target: mobileGallery,
		offset: ["0.4 1", "0.80 1"],
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setRatio(latest * 1.8 + 1);
		const rem = Math.floor(latest * 10);
		setTranslate(Math.floor(latest * 2));
		setWidth(300 - latest * 300);

		if (rem >= 10 && !isFullScreen) {
			setTimeout(() => setIsFullScreen(true), 500);
			setTimeout(() => setIsText(true), 1500);
		} else if (rem < 10) {
			setTimeout(() => setIsFullScreen(false), 50);
			setTimeout(() => setIsText(false), 50);
		}
	});

	useMotionValueEvent(mobileScroll, "change", (latest) => {
		setIsMobileAnimation(latest > 0);
		setTimeout(() => setIsTextMobile(latest > 0), 1000);
		if (latest <= 0) {
			setIsTextMobile(false);
		}
	});

	return (
		<>
			{/* Desktop */}
			<div
				ref={refGallery}
				className="bg-soil11 lg:bg-soil8 text-soil1 font-circular hidden lg:block min-h-screen w-full transition-all duration-1000 ease-in"
			>
				<div className="pt-20">
					<div className="flex justify-center items-center">
						<div
							className={`flex flex-col gap-4 transition-all duration-1000 ease-in ${
								isFullScreen ? "pr-0" : "pr-12"
							}`}
							style={{
								transform: `translateX(-${Math.floor(translate * 20)}rem)`,
								width: width,
							}}
						>
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/gallery_2_desktop.jpg"
								alt="gallery-side"
								width={315 / ratio}
								height={340}
								className="rounded-4xl transition-all duration-1000 ease-in"
							/>
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/gallery_4_+desktop.jpg"
								alt="gallery-side"
								width={315 / ratio}
								height={340}
								className="rounded-4xl transition-all duration-1000 ease-in"
							/>
						</div>
						<motion.div className="flex justify-center items-center min-h-screen">
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/gallery_3_+desktop.jpg"
								alt="Background"
								height={1000}
								width={700 * ratio}
								className={`object-cover max-h-screen  transition-all duration-1000 ease-in ${
									isFullScreen ? "rounded-none" : "rounded-4xl"
								}`}
							/>
							<div
								className={`absolute bg-black z-20 h-screen w-full transition-all duration-1000 ease-in ${
									isFullScreen ? "bg-opacity-50" : "bg-opacity-0"
								}`}
							/>
							<div
								className={`absolute text-center flex flex-col items-center gap-10 z-30 ${
									isText ? "opacity-100" : "opacity-0"
								}`}
							>
								<Image
									src={BrideAndGroomGif}
									alt="Bride and groom"
									width={1000}
									height={1000}
									priority
									className={`z-10 max-w-lg xl:max-w-6xl`}
								/>
								<p className="italic font-baskervville text-2xl md:text-3xl lg:-mt-24 xl:-mt-36 text-white">
									Let’s us tell you our love journey
								</p>
								<button onClick={() => exportIntoView("our-journey")}>
									<Image
										src={DownArrow}
										alt="Down Arrow Button"
										className="rounded-full w-8 md:w-12 h-8 md:h-12"
									/>
								</button>
							</div>
						</motion.div>

						<div
							className={`flex flex-col gap-4 transition-all duration-1000 ease-in ${
								isFullScreen ? "pl-0" : "pl-12"
							}`}
							style={{
								transform: `translateX(${Math.floor(translate * 20)}rem)`,
								width: width,
							}}
						>
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/gallery_2_desktop.jpg"
								alt="gallery-side"
								width={315 / ratio}
								height={340}
								className="rounded-4xl transition-all duration-1000 ease-in"
							/>
							<Image
								src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/gallery_5_+desktop.jpg"
								alt="gallery-side"
								width={315 / ratio}
								height={340}
								className="rounded-4xl transition-all duration-1000 ease-in"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile And Tablet */}
			<motion.div
				ref={mobileGallery}
				className={`bg-soil11 flex justify-center items-start h-screen lg:hidden ${
					isMobileAnimation ? "p-0" : "p-8"
				}`}
			>
				<Image
					src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/gallery_3_+desktop.jpg"
					alt="Background"
					height={1000}
					width={700}
					className={`object-cover w-screen transition-all duration-1000 ease-in ${
						isMobileAnimation ? "h-screen rounded-none" : "h-56 rounded-4xl"
					}`}
				/>
				<div
					className={`absolute bg-black z-20 h-screen w-screen transition-all duration-1000 ease-in ${
						isMobileAnimation ? "bg-opacity-50" : "bg-opacity-0"
					}`}
				/>
				<div
					className={`absolute justify-center text-center flex flex-col items-center h-screen gap-10 z-30 ${
						isTextMobile ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={BrideAndGroomGif}
						alt="Bride and groom"
						width={1000}
						height={1000}
						priority
						className={`z-10 max-w-sm md:max-w-xl`}
					/>
					<p className="italic font-baskervville text-2xl md:text-3xl lg:-mt-24 xl:-mt-36 text-white">
						Let’s us tell you our love journey
					</p>
					<button onClick={() => exportIntoView("our-journey")}>
						<Image
							src={DownArrow}
							alt="Down Arrow Button"
							className="rounded-full w-8 md:w-12 h-8 md:h-12"
						/>
					</button>
				</div>
			</motion.div>
		</>
	);
};

export default Gallery;
