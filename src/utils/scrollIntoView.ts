export function exportIntoView(id: string) {
	const target = document.getElementById(id);
	if (target) {
		window.scrollTo({
			top: target.offsetTop - 60,
			behavior: "smooth",
		});
	}
}
