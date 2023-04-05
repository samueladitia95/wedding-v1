import { useState } from "react";
// import audio from "../../public/audio.mp3";

// import audio from "../../public/audio.mp3";

export default function PlayButton() {
	const [isPlaying] = useState<boolean>(true);
	// const [play, { stop }] = useSound("/audio.mp3");

	// useEffect(() => {
	// 	console.log(`Masuk`);
	// 	play();
	// }, []);

	const handleClick = () => {
		// console.log(document.getElementById("musicplayer"));
		// const music: HTMLElement | null = document.getElementById("musicplayer");
		// if (music) {
		// 	if (isPlaying) {
		// 		music.pause();
		// 		setIsPlaying(false);
		// 	} else {
		// 		music.play();
		// 		setIsPlaying(true);
		// 	}
		// }
	};

	return (
		<div
			onClick={handleClick}
			className="h-10 w-10 bg-soil20 rounded-full fixed left-5 bottom-9 z-50 flex justify-center items-center"
		>
			{!isPlaying ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-8 h-8 fill-white stroke-none pl-1"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-8 h-8 fill-white stroke-none pl-1"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 5.25v13.5m-7.5-13.5v13.5"
					/>
				</svg>
			)}
			<audio id="musicplayer" src="/audio.mp3" autoPlay />
		</div>
	);
}
