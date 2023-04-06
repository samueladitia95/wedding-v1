import Image from "next/image";
import Link from "next/link";
import Reception from "../../public/reception.svg";
import Arrival from "../../public/arrival.svg";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const sixSensesCoordinate =
	"https://www.google.com/maps/place/Six+Senses+Uluwatu,+Bali/@-8.8442773,115.1276315,17z/data=!4m20!1m10!3m9!1s0x2dd25ae5f63a6c85:0xbae86c51d49b37c8!2sSix+Senses+Uluwatu,+Bali!5m2!4m1!1i2!8m2!3d-8.8442826!4d115.1298202!16s%2Fg%2F11c1vrfvfj!3m8!1s0x2dd25ae5f63a6c85:0xbae86c51d49b37c8!5m2!4m1!1i2!8m2!3d-8.8442826!4d115.1298202!16s%2Fg%2F11c1vrfvfj";

const silvesterChurch =
	"https://www.google.com/maps/place/Gereja+Katolik+Santo+Silvester+Pecatu+Dreamland/@-8.8188277,115.1358748,17z/data=!4m6!3m5!1s0x2dd25ad56bd433eb:0x1a3f5d7cdf6113c7!8m2!3d-8.818833!4d115.1403595!16s%2Fg%2F11g02091dl";

const holyMatrimonyCalendar =
	"https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2R1NXZkcGFlNHExcHFtNzYwNjZsZW5nNXYgaXJ3YW5jbGF1ZGlhd2VkZGluZ0Bt&tmsrc=irwanclaudiawedding%40gmail.com";

const familyDinnerCalendar =
	"https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NTY2MmRoY2JzZ21laGJtaHE3MWw2ZDBmNWkgaXJ3YW5jbGF1ZGlhd2VkZGluZ0Bt&tmsrc=irwanclaudiawedding%40gmail.com";

type Schedule = {
	icon: string;
	title: string;
	location?: string;
	time: string;
	coordinate?: string;
};

const schedules: Schedule[][] = [
	[
		{
			icon: Arrival,
			title: "family arrival & check in",
			location: "radisson blu bali, uluwatu",
			time: "14.00 onwards",
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/welcome_dinner_icons.svg",
			title: "family welcome dinner",
			time: "18.00",
		},
	],
	[
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/holy_matrimony_icons.svg",
			title: "HOLY MATRIMONY",
			location: "GEREJA KATOLIK SANTO SILVESTER",
			time: "10.00",
			coordinate: silvesterChurch,
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/teapai_icons.svg",
			title: "FAMILY TEA PAI CEREMONY",
			location: "SIX SENSES ULUWATU, BALI",
			time: "13:00",
			coordinate: sixSensesCoordinate,
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/cocktail_icons.svg",
			title: "SUNSET COCKTAIL",
			location: "SIX SENSES ULUWATU, BALI",
			time: "17:30",
			coordinate: sixSensesCoordinate,
		},
		{
			icon: Reception,
			title: "DINNER RECEPTION",
			location: "SIX SENSES ULUWATU, BALI",
			time: "18:30",
			coordinate: sixSensesCoordinate,
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/dance_icons.svg",
			title: "LET’S DANCE!",
			location: "SIX SENSES ULUWATU, BALI",
			time: "21:00",
			coordinate: sixSensesCoordinate,
		},
	],
];

const WeekendGuide = () => {
	const [isShown, setIsShown] = useState<boolean>(false);

	const { ref: ref1 } = useInView({
		threshold: [0.8],
		onChange(inView) {
			if (inView) {
				setIsShown(true);
			}
		},
	});
	return (
		<>
			<div className="bg-soil13 font-circular flex flex-col items-center">
				<div className="flex flex-col text-soil13 text-center w-full">
					{/* TITLE */}
					<div ref={ref1} className="container bg-soil2 rounded-b-full z-10">
						<div
							className={`flex flex-col gap-4 py-12 items-center md:py-14 lg:pb-20 xl:py-36 transition-all duration-500 ease-in ${
								isShown ? "opacity-100" : "opacity-0"
							}`}
						>
							<div className="uppercase font-safira text-6xl lg:text-8xl font-light text-soil14">
								<p>wedding</p>
								<p>weekend guide</p>
							</div>

							<div className="uppercase font-medium md:text-2xl">
								<p className="whitespace-nowrap md:whitespace-normal">
									Hi there, here is the guide for you
								</p>
								<p>to come to our wedding</p>
							</div>

							<div className="text-lg md:text-2xl border font-baskervville m-4 italic">
								*All times are in WITA
							</div>
						</div>
					</div>

					{/* Schedule */}
					<div className="container flex flex-col gap-14 bg-soil1 text-soil13 py-12 rounded-t-full md:rounded-t-full -mt-40 md:-mt-96 pt-48 md:pt-80 lg:rounded-t-br-lg lg:-mt-bt-circle-lg lg:pt-96 lg:pb-28">
						<br className="hidden md:block" />
						<br className="hidden md:block" />
						{schedules.map((day, index) => (
							<div
								className={`flex flex-col gap-10 items-center md:flex-row md:items-start md:grid md:grid-cols-3 md:gap-4 md:gap-y-20 transition-all duration-500 ease-in 
								${isShown ? "opacity-100" : "opacity-0"}
								${index ? "pt-24" : ""}
								`}
								key={index}
							>
								<div className="flex flex-col items-center w-full">
									<div className="flex flex-col gap-4 items-center lg:items-start">
										<p className="text-left font-baskervville italic text-soil14 text-2xl lg:text-3xl h-full">
											{index
												? "Saturday, June 3, 2023"
												: "Friday, June 2, 2023"}
										</p>
										<Link
											target="_blank"
											href={
												index ? holyMatrimonyCalendar : familyDinnerCalendar
											}
										>
											<button className="uppercase p-4 border rounded border-soil12 w-full hover:bg-soil19 hover:text-soil1 lg:w-72">
												add to calendar
											</button>
										</Link>
										{!index && (
											<p className="font-medium uppercase md:text-left md:w-full">
												*Family Only
											</p>
										)}
									</div>
								</div>
								{day.map((el, index) => (
									<div
										key={index}
										className="flex flex-col gap-4 items-center uppercase text-center"
									>
										<div className="h-16 w-16 relative">
											<Image src={el.icon} alt="logo" fill />
										</div>
										<p className="font-medium text-soil14 ">{el.title}</p>
										{el.location ? (
											<p className="text-sm font-normal">{el.location}</p>
										) : (
											<br />
										)}
										<p className="text-soil12 text-sm font-medium">{el.time}</p>
										{el.coordinate && (
											<Link
												href={el.coordinate}
												className="text-sm underline font-medium text-soil14 pt-6"
												target="_blank"
											>
												see venue map
											</Link>
										)}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default WeekendGuide;
