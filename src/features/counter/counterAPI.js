// A mock function to mimic making an async request for data
export function fetchData(amount) {
	return new Promise((resolve) =>
		setTimeout(() => resolve({ data: amount }), 500)
	);
}
