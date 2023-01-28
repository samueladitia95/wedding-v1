// async function getTestData(): Promise<{ name: string }> {
// 	const res: Response = await fetch(`${process.env.BASE_URL}/api/hello`);
// 	return res.json();
// }

export default async function Home() {
	// const testData = await getTestData();
	return <div className="container"></div>;
}
