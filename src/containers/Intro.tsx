import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import And from "../../public/and.svg";
import DownArrow from "../../public/down-arrow.svg";

// ? RIBET JUGA YA ANIMASI, GA HAFAL GW INI URUTANNYA BENER DEH
const Intro = () => {
	// ? trigger untuk dari tanda & besar ke kecil dan ganti background
	const [firstAnimation, setFirstAnimation] = useState<boolean>(false);
	// ? trigger untuk menampilkan nama groom and bride
	const [secondAnimation, setSecondAnimation] = useState<boolean>(false);
	// ? trigger untuk menghilangkan nama groom dan bride
	const [thirdAnimation, setThirdAnimation] = useState<boolean>(false);

	const [forthAnimation, setForthAnimation] = useState<boolean>(false);
	const [fifthAnimation, setFifthAnimation] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setFirstAnimation(true);
			setTimeout(() => {
				setSecondAnimation(true);
				setTimeout(() => {
					setSecondAnimation(false);
					setThirdAnimation(true);
					setTimeout(() => {
						setForthAnimation(true);
						setTimeout(() => setFifthAnimation(true), 100);
					}, 1000);
				}, 1500);
			}, 1000);
		}, 500);
	}, []);

	return (
		<>
			<div className="bg-soil8 text-soil2 font-circular">
				<div className="bg-intro bg-center bg-cover bg-no-repeat">
					<div
						className={`bg-soil11 transition-all duration-1000 ease-in ${
							!firstAnimation ? "bg-opacity-100" : "bg-opacity-0"
						}`}
					>
						<Image
							src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/flower_left.png"
							alt="QR Code"
							width={313}
							height={313}
							priority
							className="absolute bottom-0 left-0"
						/>
						<Image
							src="https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/flower_right.png"
							alt="QR Code"
							width={313}
							height={313}
							priority
							className="absolute bottom-0 right-0"
						/>
						<div className="container pb-0 flex flex-col items-center md:w-ultra-wide h-tall">
							<div className="text-center py-52 flex flex-col gap-10 md:w-narrow">
								{forthAnimation && (
									<div
										className={`uppercase font-safira text-4xl leading-9 transition-all duration-1000 ease-in ${
											!fifthAnimation ? "opacity-0" : "opacity-100"
										}`}
									>
										<p>I HOLD YOU IN MY HEART,</p>
										<p>FOR WE HAVE SHARED TOGETHER GOD&apos;S BLESSINGS</p>
									</div>
								)}
								{forthAnimation && (
									<p
										className={`italic font-baskervville text-lg transition-all duration-1000 ease-in ${
											!fifthAnimation ? "opacity-0" : "opacity-100"
										}`}
									>
										Philippians 1:7
									</p>
								)}
								{forthAnimation && (
									<div className="flex justify-center items-center mt-72">
										<Link href="#invitation" scroll={false}>
											<button>
												<Image
													src={DownArrow}
													alt="down arrow button"
													width={64}
													height={64}
													className={`rounded-full transition-all duration-1000 ease-in ${
														!fifthAnimation ? "opacity-0" : "opacity-100"
													}`}
												/>
											</button>
										</Link>
									</div>
								)}
								{!forthAnimation && (
									<div className="uppercase font-safira leading-9">
										<p
											className={`transition-all duration-1000 ease-in ${
												!secondAnimation ? "opacity-0" : "opacity-100"
											}`}
										>
											the
										</p>
										<p
											className={`font-baskervville transition-all duration-1000 ease-in ${
												!secondAnimation ? "opacity-0" : "opacity-100"
											}`}
										>
											wedding{" "}
											<span className="italic lowercase text-3xl">of</span>
										</p>
										<p
											className={`text-5xl transition-all duration-1000 ease-in ${
												!secondAnimation ? "opacity-0" : "opacity-100"
											}`}
										>
											irwan
										</p>
										<div className="flex justify-center items-center">
											<Image
												src={And}
												alt="and symbol"
												width={!firstAnimation ? 90 : 22}
												height={!firstAnimation ? 160 : 40}
												className={`transition-all duration-1000 ease-linear ${
													!secondAnimation && firstAnimation && thirdAnimation
														? "opacity-0"
														: "opacity-100"
												}`}
											/>
										</div>
										<p
											className={`text-5xl transition-all duration-1000 ease-in ${
												!secondAnimation ? "opacity-0" : "opacity-100"
											}`}
										>
											claudia
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
