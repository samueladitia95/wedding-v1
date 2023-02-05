import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useState, useEffect } from "react";

dayjs.extend(duration);

type Countdown = {
	type: string;
	value: number;
};

const weddingDay = dayjs("2023-06-03", "yyyy-mm-dd");
const Invitation = () => {
	const [countdown, setCountdown] = useState<Countdown[]>([
		{ type: "day", value: 0 },
		{ type: "hour", value: 0 },
		{ type: "minute", value: 0 },
		{ type: "second", value: 0 },
	]);

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
		<>
			<div className="bg-secondary-lighten py-10 text-secondary font-circular">
				<div className="container py-10 bg-primary flex flex-col gap-14 rounded-b-3xl md:w-wide">
					<div className="text-center flex flex-col gap-4 items-center">
						<p className="uppercase font-medium text-brown text-sm">
							#irwanclaudia
						</p>
						<p className="font-baskervville italic text-2xl md:w-72">
							Here&apos;s to the beginning of our forever that we would like to
							share with you!
						</p>
						<div className="border border-brown h-14 w-0"></div>
						<div>
							<p className="font-safira text-2xl uppercase">
								{weddingDay.format("dddd, MMMM D, YYYY")}
							</p>
							<p className="uppercase font-medium text-brown text-sm">
								KAMAYA BALI, ULUWATU, INDONESIA
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 uppercase">
						{countdown?.map((el, index) => (
							<div className="flex flex-col gap-2 items-center" key={index}>
								<div className="text-4xl text-brown font-bold">{el.value}</div>
								<div className="font-medium">{el.type}(s)</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Invitation;
