import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import And from "../../public/and.svg";
import DownArrow from "../../public/down-arrow.svg";
import FlowerLeft from "../../public/flowers-left.svg";
import FlowerRight from "../../public/flowers-right.svg";
import { motion } from "framer-motion";
import PlayButton from "@/components/PlayButton";
import { exportIntoView } from "@/utils/scrollIntoView";
import { useScrollBlock } from "@/hooks/useScrollBlock";

const musicUrl = "/audio.mp3";
const duration = 2;

const Intro = ({
	introAnimation = false,
	setIntroAnimation,
}: {
	introAnimation: boolean;
	setIntroAnimation: Dispatch<SetStateAction<boolean>>;
}) => {
	const [andText, setAndText] = useState<boolean>(true);
	const [gifText, setGifText] = useState<boolean>(true);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [allowScroll] = useScrollBlock();

	useEffect(() => {
		if (introAnimation) {
			setTimeout(() => {
				setAndText(false);
				setTimeout(() => {
					setGifText(false);
				}, 6500);
			}, 500);
		}
	}, [introAnimation]);

	useEffect(() => {
		const music = document.getElementById("music-player");
		const player = music as HTMLMediaElement;
		if (music) {
			if (isPlaying && introAnimation) {
				player.muted = false;
				player.play();
			} else {
				player.pause();
			}
		}
	}, [isPlaying, introAnimation]);

	return (
		<>
			<audio id="music-player" src={musicUrl}></audio>
			<PlayButton
				initPlaying={introAnimation}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
			/>
			{/* Background Animation */}
			{introAnimation && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, y: [1000, 0] }}
					transition={{ delay: 0.5, duration: 0.7 }}
				>
					<div className="z-10 h-screen w-full absolute">
						<Image
							src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/Desktop/landing_page_background_desktop_original.jpg"
							alt="Background"
							fill
							className="object-cover"
						/>
					</div>
				</motion.div>
			)}

			<div className="bg-soil8 text-soil2 font-circular">
				<div className={`bg-soil11`}>
					{/* Flower Animation */}
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 1] }}
						transition={{
							duration,
						}}
					>
						<div
							className={`absolute bottom-0 left-0 w-64 md:w-96 lg:w-narrow ${
								introAnimation ? "opacity-0" : ""
							}`}
						>
							<Image
								src={FlowerLeft}
								alt="Flower Left"
								className="object-contain"
							/>
						</div>

						<div
							className={`absolute bottom-0 right-0 w-64 md:w-96 lg:w-narrow ${
								introAnimation ? "opacity-0" : ""
							}`}
						>
							<Image
								src={FlowerRight}
								alt="Flower Right"
								className="object-contain"
							/>
						</div>
					</motion.span>

					{/* Main Content */}
					<div className="container pb-0 flex flex-col justify-center items-center w-full md:w-ultra-wide h-screen text-center">
						{/* And Symbol */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1] }}
							transition={{
								duration,
							}}
							className={`flex-col justify-center items-center gap-40 ${
								andText ? "flex" : "hidden"
							}`}
						>
							<Image
								src={And}
								alt="and symbol"
								height={200}
								width={150}
								className={`${introAnimation ? "opacity-0" : ""} w-32 lg:w-40`}
							/>
							<motion.button
								initial={{ rotate: 0, scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
									duration: 3000,
								}}
								whileHover={{
									scale: 1.2,
									backgroundColor: "#928C84",
									color: "#FFF",
								}}
								whileTap={{
									scale: 0.8,
								}}
								className={`z-50 text-soil11 bg-soil4 rounded py-3 px-16 leading-7 ${
									introAnimation ? "opacity-0" : ""
								}`}
								onClick={() => {
									allowScroll();
									setIntroAnimation(true);
									setIsPlaying(true);
								}}
							>
								Open Invitation
							</motion.button>
						</motion.div>

						{/* GIF image */}
						{!andText && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 1, 1, 1, 1, 0] }}
								transition={{
									duration: 6,
									delay: 0.7,
								}}
								className={`justify-center items-center z-20 -mt-20 ${
									!andText && gifText ? "flex" : "hidden"
								}`}
							>
								<Image
									src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/first_title.gif"
									alt="intro gif"
									height={900}
									width={500}
									className=""
								/>
							</motion.div>
						)}

						{/* Final Text */}
						{!gifText && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration,
								}}
								style={{
									lineHeight: "1.3",
								}}
								className={`uppercase font-safira font-light text-3xl md:text-5xl z-20 ${
									!andText && !gifText ? "block" : "hidden"
								}`}
							>
								<p>I HOLD YOU IN MY HEART,</p>
								<p>FOR WE HAVE SHARED TOGETHER </p>
								<p>GOD&apos;S BLESSINGS</p>
								<p className="normal-case italic font-baskervville text-3xl mb-40">
									Philippians 1:7
								</p>
								<button onClick={() => exportIntoView("invitation")}>
									<Image
										src={DownArrow}
										alt="down arrow button"
										className="rounded-full w-12 md:w-12 h-12 md:h-12"
									/>
								</button>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
