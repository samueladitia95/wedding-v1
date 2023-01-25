async function getTestData(): Promise<{ name: string }> {
	const res: Response = await fetch(`${process.env.BASE_URL}/api/hello`);
	return res.json();
}

export default async function Home() {
	const testData = await getTestData();
	return (
		<div className="container text-center">
			<p>Hello World</p>
			<p>{testData.name}</p>
		</div>
	);
}
