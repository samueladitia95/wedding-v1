import MakeAWish from "./(containers)/MakeAWish";
import Rsvp from "./(containers)/Rsvp";

export default async function Home() {
	return (
		<div>
			{/* Disable ts lint recommended by next js documentation */}

			{/* @ts-expect-error Server Component */}
			<Rsvp />
			{/* @ts-expect-error Server Component */}
			<MakeAWish />
		</div>
	);
}
