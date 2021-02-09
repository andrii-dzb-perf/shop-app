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

export async function post(path, data = {}, isFormData) {
	const headers = isFormData ? {} : { 'Content-Type': 'application/json' }
	const body = isFormData ? data : JSON.stringify(data);
	try {
		const response = await fetch(`/api/${path}`, {
			method: 'POST',
			headers,
			body,
		});

		/**
		 * response may or may not have a json body
		 * so attempt to jsonify safely
		 */
		try {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
		catch (e) {
			return response.ok;
		}
	}
	catch (error) {
		// eslint-disable-next-line no-console
		console.debug(error);

		return {
			error: {
				ok: false,
				message: error.message || 'an unknown fetch api error occurred',
			},
		};
	}
}