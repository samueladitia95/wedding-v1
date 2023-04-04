import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import And from "../../public/and.svg";
import DownArrow from "../../public/down-arrow.svg";
import FlowerLeft from "../../public/flowers-left.svg";
import FlowerRight from "../../public/flowers-right.svg";
import IntroGif from "../../public/intro.gif";
import { motion } from "framer-motion";

const duration = 2;

const Intro = () => {
	const [andText, setAndText] = useState<boolean>(true);
	const [gifText, setGifText] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setAndText(false);
		}, 2700);

		setTimeout(() => {
			setGifText(false);
		}, 6200);
	}, []);

	return (
		<>
			{/* Background Animation */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [1000, 0] }}
				transition={{ delay: 2, duration: 0.7 }}
			>
				<div className="z-10 h-screen w-screen absolute">
					<Image
						src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/image_landing_page_desktop.jpg"
						alt="Background"
						fill
						className="object-cover"
					/>
				</div>
			</motion.div>

			<div className="bg-soil8 text-soil2 font-circular">
				<div className={`bg-soil11`}>
					{/* Flower Animation */}
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 1, 0] }}
						transition={{
							duration,
						}}
					>
						<div className={`absolute bottom-0 left-0 w-64 md:w-96`}>
							<Image
								src={FlowerLeft}
								alt="Flower Left"
								className="object-contain"
							/>
						</div>

						<div className={`absolute bottom-0 right-0 w-64 md:w-96`}>
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
							animate={{ opacity: [0, 1, 0] }}
							transition={{
								duration,
							}}
							className={`justify-center items-center ${
								andText ? "flex" : "hidden"
							}`}
						>
							<Image src={And} alt="and symbol" height={200} width={150} />
						</motion.div>

						{/* GIF image */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1, 0] }}
							transition={{
								duration: 3.3,
								delay: 3,
							}}
							className={`justify-center items-center z-20 ${
								!andText && gifText ? "flex" : "hidden"
							}`}
						>
							<Image
								src={IntroGif}
								alt="and symbol"
								height={2000}
								width={1500}
							/>
						</motion.div>

						{/* Final Text */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration,
								delay: 6.6,
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
							<p className="italic font-baskervville text-2xl mb-40">
								Philippians 1:7
							</p>
							<Link href="#invitation" scroll={false}>
								<button>
									<Image
										src={DownArrow}
										alt="down arrow button"
										className="rounded-full w-12 md:w-12 h-12 md:h-12"
									/>
								</button>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
