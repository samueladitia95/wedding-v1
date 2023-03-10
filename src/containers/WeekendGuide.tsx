import Image from "next/image";
import Link from "next/link";
import Reception from "../../public/reception.svg";
import Arrival from "../../public/arrival.svg";

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
			coordinate: "www.google.com",
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/teapai_icons.svg",
			title: "FAMILY TEA PAI CEREMONY",
			location: "SIX SENSES ULUWATU, BALI",
			time: "13:00",
			coordinate: "www.google.com",
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/cocktail_icons.svg",
			title: "SUNSET COCKTAIL",
			location: "SIX SENSES ULUWATU, BALI",
			time: "17:30",
			coordinate: "www.google.com",
		},
		{
			icon: Reception,
			title: "DINNER RECEPTION",
			location: "SIX SENSES ULUWATU, BALI",
			time: "18:30",
			coordinate: "www.google.com",
		},
		{
			icon: "https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/dance_icons.svg",
			title: "LET’S DANCE!",
			location: "SIX SENSES ULUWATU, BALI",
			time: "21:00",
			coordinate: "www.google.com",
		},
	],
];

const WeekendGuide = () => {
	return (
		<>
			<div className="bg-soil13 font-circular flex flex-col items-center">
				<div className="flex flex-col text-soil13 text-center w-full">
					{/* TITLE */}
					<div className="container bg-soil2 py-12 md:py-14 flex flex-col gap-4 items-center z-10 rounded-b-full lg:pb-20 xl:py-36">
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

					{/* Schedule */}
					<div className="container flex flex-col gap-14 bg-soil1 text-soil13 py-12 rounded-t-full md:rounded-t-full -mt-40 md:-mt-96 pt-48 md:pt-80 lg:rounded-t-br-lg lg:-mt-bt-circle-lg lg:pt-96">
						<br className="hidden md:block" />
						<br className="hidden md:block" />
						{schedules.map((day, index) => (
							<div
								className="flex flex-col gap-10 items-center md:flex-row md:items-start md:grid md:grid-cols-3 md:gap-4 md:gap-y-14"
								key={index}
							>
								<div className="flex flex-col items-center w-full">
									<div className="flex flex-col gap-4 items-center lg:items-start">
										<p className="text-left font-baskervville italic text-soil14 text-2xl lg:text-3xl h-full">
											{index
												? "Saturday, June 3, 2023"
												: "Friday, June 2, 2023"}
										</p>
										<button className="uppercase p-4 border rounded border-soil12 w-full hover:bg-soil19 hover:text-soil1 lg:w-72">
											add to calendar
										</button>
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
										{el.location && (
											<p className="text-sm font-normal">{el.location}</p>
										)}
										<p className="text-soil12 text-sm font-medium">{el.time}</p>
										{el.coordinate && (
											<Link
												href={el.coordinate}
												className="text-sm underline font-medium text-soil14"
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
