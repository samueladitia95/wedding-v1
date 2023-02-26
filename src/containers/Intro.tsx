import Image from "next/image";
import { useEffect, useState } from "react";
import And from "../../public/and.svg";

const Intro = () => {
	// ? trigger untuk dari tanda & besar ke kecil dan ganti background
	const [firstAnimation, setFirstAnimation] = useState<boolean>(false);
	// ? trigger untuk menampilkan nama groom and bride
	const [secondAnimation, setSecondAnimation] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setFirstAnimation(true);
			setTimeout(() => setSecondAnimation(true), 1000);
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
						<div className="container pb-0 flex flex-col items-center md:w-ultra-wide h-tall">
							<div className="text-center py-52 flex flex-col gap-10 md:w-narrow">
								{/* <div
									className={`uppercase font-safira text-4xl leading-9 transition-all duration-500 ease-out ${
										!isIntro ? "opacity-0" : "opacity-100"
									}`}
								>
									<p>I HOLD YOU IN MY HEART,</p>
									<p>FOR WE HAVE SHARED TOGETHER GOD&apos;S BLESSINGS</p>
								</div> */}

								{/* <p className="italic font-baskervville text-lg">Philippians 1:7</p> */}
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
											className="transition-all duration-1000 ease-linear"
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
							</div>
						</div>
					</div>

					{/* <button>
						<Image
							src="https://via.placeholder.com/64"
							alt="QR Code"
							width={64}
							height={64}
							className="rounded-full"
						/>
					</button> */}
				</div>
			</div>
		</>
	);
};

export default Intro;
