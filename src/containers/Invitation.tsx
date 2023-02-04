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
	const [countdown, setCountdown] = useState<Countdown[]>();

	useEffect(() => {
		setInterval(function () {
			const currentTime = dayjs();
			const duration = dayjs.duration(weddingDay.diff(currentTime));

			setCountdown([
				{ type: "day", value: duration.days() },
				{ type: "hour", value: duration.hours() },
				{ type: "minute", value: duration.minutes() },
				{ type: "second", value: duration.seconds() },
			]);
		}, 1000);
	}, []);

	return (
		<>
			<div className="bg-primary text-secondary font-circular">
				<div className="container py-20 flex flex-col gap-14 md:w-narrow">
					<div className="text-center flex flex-col gap-4 items-center">
						<p className="uppercase font-medium text-brown text-sm">
							#irwanclaudia
						</p>
						<p className="font-baskervville italic text-2xl">
							Here&apos;s to the beginning of our forever that we would like to
							share with you!
						</p>
						<div className="border border-brown h-20 w-0"></div>
						<div>
							<p className="font-safira text-2xl uppercase">
								{weddingDay.format("dddd, MMMM D, YYYY")}
							</p>
							<p className="uppercase font-medium text-brown text-sm">
								KAMAYA BALI, ULUWATU, INDONESIA
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-8 uppercase">
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
