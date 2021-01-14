export async function get(path) {
	try {
		return (
			await fetch(`/api/${path}`, {
				headers: {
					credentials: 'same-origin',
				},
			})
		).json();
	}
	catch (error) {
		console.debug(error);

		return {
			error: {
				ok: false,
				message: error.message || 'an unknown fetch api error occurred',
			},
		};
	}
}