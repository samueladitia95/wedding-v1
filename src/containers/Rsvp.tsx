import { useState } from "react";
import { useCookies } from "react-cookie";
import { Rsvp } from "@/type";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rsvp = () => {
	const [rsvpSubmitCookie, setRsvpSubmitCookie] = useCookies(["rsvpCookie"]);
	const [submitRsvp, setSubmitRsvp] = useState<Rsvp>({
		name: "",
		phone: "",
		email: "",
		isAttending: "",
		isNeedAccomodation: "",
	});

	// post functionality

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSubmitRsvp({
			...submitRsvp,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			if (
				submitRsvp.name === "" ||
				submitRsvp.email === "" ||
				submitRsvp.phone === "" ||
				submitRsvp.isAttending === "" ||
				submitRsvp.isNeedAccomodation === ""
			) {
				toast.error("please fill all data in rsvp form", {
					position: "bottom-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});

				return;
			}

			const body = {
				...submitRsvp,
				isAttending: submitRsvp.isAttending === "true",
				isNeedAccomodation: submitRsvp.isNeedAccomodation === "true",
			};

			const expirationDate = new Date();
			expirationDate.setDate(expirationDate.getDate() + 7);

			if (rsvpSubmitCookie.rsvpCookie) {
				toast.error("you already submit the rsvp!", {
					position: "bottom-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});

				return;
			} else {
				// const response = await fetch("/api/rsvp", {
				// 	method: "POST",
				// 	headers: { "Content-Type": "application/json" },
				// 	body: JSON.stringify(body),
				// });

				// if (response.ok) {
				await fetch("https://api.sheetmonkey.io/form/hi4Pry5cpnMjDNpZb49Wbv", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...body,
						createdAt: "x-sheetmonkey-current-date-time",
					}),
				});

				if (!rsvpSubmitCookie.rsvpCookie) {
					setRsvpSubmitCookie("rsvpCookie", true, {
						expires: expirationDate,
					});
				}

				setSubmitRsvp({
					name: "",
					phone: "",
					email: "",
					isAttending: "",
					isNeedAccomodation: "",
				});

				toast.success("rsvp submitted!", {
					position: "bottom-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				// } else {
				// 	console.error("Error:", response.statusText);
				// }
			}
		} catch (error) {
			console.error("Error:", error);
		}

		return;
	};

	return (
		<>
			<div className="bg-soil8 text-white font-circular">
				<div className="container py-28 flex flex-col gap-14 md:w-narrow">
					<div className="uppercase">
						<p className="font-safira text-center text-8xl">rsvp</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className="uppercase flex flex-col gap-6"
					>
						<div className="flex flex-col gap-1">
							<label htmlFor="full-name" className="font-medium text-sm">
								full name
							</label>
							<input
								id="full-name"
								name="name"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8"
								value={submitRsvp.name}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label htmlFor="phone-number" className="font-medium text-sm">
								phone number
							</label>
							<input
								id="phone-number"
								name="phone"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8"
								value={submitRsvp.phone}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label htmlFor="email" className="font-medium text-sm">
								email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								className="w-full rounded bg-soil8 border border-soil1 p-2 focus:outline-soil8"
								value={submitRsvp.email}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">will you be attending?</p>
							<div className="flex gap-4 md:gap-24 lg:gap-48">
								<div className="flex gap-2 items-center">
									<input
										name="isAttending"
										id="attending-yes"
										type="radio"
										className="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-soil8 checked:ring-inset"
										onChange={() =>
											setSubmitRsvp({
												...submitRsvp,
												isAttending: "true",
											})
										}
										value="true"
										checked={submitRsvp.isAttending === "true"}
									/>
									<label
										htmlFor="attending-yes"
										className="font-semibold text-sm"
									>
										yes
									</label>
								</div>
								<div className="flex gap-2 items-center">
									<input
										name="isAttending"
										id="attending-no"
										type="radio"
										className="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-soil8 checked:ring-inset"
										onChange={() =>
											setSubmitRsvp({
												...submitRsvp,
												isAttending: "false",
											})
										}
										value="false"
										checked={submitRsvp.isAttending === "false"}
									/>
									<label
										htmlFor="attending-no"
										className="font-semibold text-sm"
									>
										sorry, i can&apos;t make it
									</label>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-medium text-sm">
								do you need hotel accommodation?
							</p>
							<div className="flex gap-4 md:gap-24 lg:gap-48">
								<div className="flex gap-2 items-center">
									<input
										name="isNeedAccomodation"
										id="hotel-yes"
										type="radio"
										className="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-soil8 checked:ring-inset"
										onChange={() =>
											setSubmitRsvp({
												...submitRsvp,
												isNeedAccomodation: "true",
											})
										}
										value="true"
										checked={submitRsvp.isNeedAccomodation === "true"}
									/>
									<label htmlFor="hotel-yes" className="font-semibold text-sm">
										yes
									</label>
								</div>
								<div className="flex gap-2 items-center">
									<input
										name="isNeedAccomodation"
										id="hotel-no"
										type="radio"
										className="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-soil8 checked:ring-inset"
										onChange={() =>
											setSubmitRsvp({
												...submitRsvp,
												isNeedAccomodation: "false",
											})
										}
										value="false"
										checked={submitRsvp.isNeedAccomodation === "false"}
									/>
									<label htmlFor="hotel-no" className="font-semibold text-sm">
										no
									</label>
								</div>
							</div>
						</div>

						<button
							type="submit"
							className="rounded bg-soil7 text-white text-center w-full p-4 font-semibold shadow-md hover:bg-soil21 transition-colors ease-in duration-50"
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
			<div>
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		</>
	);
};

export default Rsvp;
