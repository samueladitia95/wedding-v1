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
		},
	],
];

const WeekendGuide = () => {
	return (
		<>
			<div className="bg-soil13 font-circular flex flex-col items-center">
				<div className="flex flex-col text-soil13 text-center w-full">
					{/* TITLE */}
					<div className="container bg-soil2 py-12 flex flex-col gap-4 items-center">
						<div className="uppercase font-serif text-4xl font-medium text-soil14">
							<p>wedding</p>
							<p>weekend guide</p>
						</div>

						<div className="uppercase font-medium">
							<p>Hi there, here are the guide for you</p>
							<p>to come to our wedding</p>
						</div>

						<div className="text-sm border border-soil13 rounded-full p-4 w-48 italic">
							*All times are in WITA
						</div>
					</div>

					{/* Schedule */}
					<div className="container flex flex-col gap-14 bg-soil1 text-soil13 py-12">
						{schedules.map((day, index) => (
							<div
								className="flex flex-col gap-10 items-center md:flex-row md:items-start md:grid md:grid-cols-3 md:gap-4 md:gap-y-14"
								key={index}
							>
								<div className="flex flex-col gap-4 w-full">
									<p className="font-baskervville italic text-soil14 text-2xl font-light">
										{index ? "Saturday, June 3, 2023" : "Friday, June 2, 2023"}
									</p>
									<button className="uppercase p-4 border rounded border-soil12 w-full">
										add to calender
									</button>
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
