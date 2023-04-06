import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const musicUrl = "/audio.mp3";
export default function PlayButton({ initPlaying = false }) {
	const [isPlaying, setIsPlaying] = useState<boolean>(initPlaying);

	useEffect(() => {
		const music = document.getElementById("music-player");
		const player = music as HTMLMediaElement;
		if (music) {
			if (isPlaying) {
				player.play();
			} else {
				player.pause();
			}
		}
	}, [isPlaying]);

	useEffect(() => {
		if (initPlaying) {
			setIsPlaying(true);
		}
	}, [initPlaying]);

	const handleClick = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<motion.div
			initial={{ rotate: 0, scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
				duration: 1000,
			}}
			whileHover={{ scale: 1.5 }}
			whileTap={{
				scale: 0.8,
				borderRadius: "100%",
				rotate: 180,
			}}
			onClick={handleClick}
			className="h-10 w-10 lg:h-14 lg:w-14 bg-soil20 rounded-full fixed left-5 lg:left-6 bottom-9 z-50 flex justify-center items-center cursor-pointer"
		>
			<audio id="music-player" src={musicUrl}></audio>
			{!isPlaying ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-8 h-8 lg:h-12 lg:w-12 fill-white stroke-none pl-1"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-8 h-8 lg:h-12 lg:w-12 stroke-white stroke-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 5.25v13.5m-7.5-13.5v13.5"
					/>
				</svg>
			)}
		</motion.div>
	);
}
