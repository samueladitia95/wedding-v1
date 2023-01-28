import MakeAWish from "./(containers)/MakeAWish";

export default async function Home() {
	return (
		<div>
			{/* Disable ts recommended by next js documentation */}
			{/* @ts-expect-error Server Component */}
			<MakeAWish />
		</div>
	);
}
