import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useState, useEffect } from "react";
import Image from "next/image";
import Vector from "../../public/vector-cut.png";
import { useInView } from "react-intersection-observer";

dayjs.extend(duration);

type Countdown = {
	type: string;
	value: number;
};

const weddingDay = dayjs("2023-06-03", "yyyy-mm-dd");
const Invitation = ({ introAnimation = false }) => {
	const [countdown, setCountdown] = useState<Countdown[]>([
		{ type: "day", value: 0 },
		{ type: "hour", value: 0 },
		{ type: "minute", value: 0 },
		{ type: "second", value: 0 },
	]);
	const [bgAnimation, setBgAnimation] = useState<boolean>(false);
	const [textAnimation, setTextAnimation] = useState<boolean>(false);

	const { ref } = useInView({
		threshold: [0.8, 1],
		onChange(inView, entry) {
			if (inView) {
				const ratio = Number(entry.intersectionRatio.toFixed(2));

				if (ratio >= 0.8) {
					setBgAnimation(true);
					setTimeout(() => {
						setTextAnimation(true);
					}, 2000);
				}
			}
		},
	});

	useEffect(() => {
		setInterval(function () {
			const currentTime = dayjs();
			const duration = dayjs.duration(weddingDay.diff(currentTime));

			setCountdown([
				{ type: "day", value: Math.floor(duration.asDays()) },
				{ type: "hour", value: duration.hours() },
				{ type: "minute", value: duration.minutes() },
				{ type: "second", value: duration.seconds() },
			]);
		}, 1000);
	}, []);

	return (
		<div id="invitation-container" ref={ref}>
			<div
				id="invitation"
				className={`h-24 lg:h-32 relative container md:w-wide -mt-24 lg:-mt-32 z-40 transition-all duration-1000 ease-in ${
					introAnimation ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image src={Vector} alt="background" fill />
			</div>
			<div className="bg-soil11 lg:bg-soil8 text-soil13 font-circular">
				<div
					className={`container pt-10 pb-20 bg-soil1 rounded-b-3xl md:w-wide transition-all duration-5000 ease-out ${
						bgAnimation ? "max-h-ultra-wide" : "max-h-0"
					}`}
				>
					<div
						className={`flex-col gap-14 transition-all duration-1000 ease-out 
						${textAnimation ? "opacity-100" : "opacity-0"}
						${bgAnimation ? "flex" : "flex"}`}
					>
						<div className="text-center flex flex-col gap-8 items-center">
							<div className="flex flex-col gap-2">
								<p className="uppercase font-medium text-soil12">
									#irwanclaudia
								</p>
								<p className="font-baskervville italic text-3xl md:w-text-narrow md:text-6xl">
									Here&apos;s to the beginning of our forever that we would like
									to share with you!
								</p>
							</div>
							<div className="border border-soil12 h-20 w-0"></div>
							<div className="flex flex-col gap-3">
								<p className="font-safira text-2xl md:text-5xl lg:text-6xl uppercase">
									{weddingDay.format("dddd, MMMM D, YYYY")}
								</p>
								<p className="uppercase font-medium text-soil12 text-sm md:text-xl">
									six senses, ULUWATU, bali
								</p>
							</div>
						</div>
						<div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 uppercase">
							{countdown?.map((el, index) => (
								<div className="flex flex-col gap-2 items-center" key={index}>
									<div className="text-4xl text-soil12 font-bold">
										{el.value}
									</div>
									<div className="font-medium">{el.type}(s)</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Invitation;
