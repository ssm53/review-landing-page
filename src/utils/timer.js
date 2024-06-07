import { lastReviewTime } from '../stores/store';
import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

// Function to check if 10 minutes have passed
function hasTenMinutesPassed(lastTime) {
	const TEN_MINUTES = 10 * 60 * 1000; // 10 minutes in milliseconds
	const currentTime = new Date();
	return currentTime - new Date(lastTime) >= TEN_MINUTES;
}

// Function to send empty review data
async function sendEmptyReview() {
	const emptyReviewData = {
		recommendation: ''
	};

	await fetch(PUBLIC_BACKEND_BASE_URL + '/new-bad-review', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(emptyReviewData)
	});
}

// Function to check and send empty review if needed
export async function checkAndSendReview() {
	let lastTime;
	lastReviewTime.subscribe((value) => {
		lastTime = value;
	})();

	if (hasTenMinutesPassed(lastTime)) {
		await sendEmptyReview();
		lastReviewTime.set(new Date()); // Update last review time after sending
	}
}
