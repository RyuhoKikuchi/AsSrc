// Execute with the command: osascript
const NOW = new Date();
const APP = Application.currentApplication();


let temp = NOW.getMinutes();
APP.includeStandardAdditions = true;

if (typeof setInterval === 'undefined') {
	setInterval = require('./jxa-timeout').setInterval;
	clearInterval = require('./jxa-timeout').clearInterval;
}

const test = require('tape');

test('setTimeout', function (t) {
	console.log(setInterval);
	setInterval(() => {
		const [HOURS, MINUTES] = [NOW.getHours(), NOW.getMinutes()];
		if (temp != MINUTES) {
			APP.say(`${HOURS} ${MINUTES}`);
			temp = MINUTES;
		}
		t.end();
	}, 5000)
});

module.exports = undefined;
if (setInterval.run) setInterval.run()