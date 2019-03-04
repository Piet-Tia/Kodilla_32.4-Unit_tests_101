const formatDate = (timeInSeconds=0) => {
	const time = Math.floor(parseFloat(timeInSeconds));

	const hours = Math.floor(time / 60 / 60);
	const displayHours = hours===0 ? '' : `${hours}h`;

	const minutes = Math.floor(time / 60) % 60;
	const displayMinutes = minutes===0 ? '' : `${minutes}m`;

	const seconds = Math.floor(time - (minutes * 60) - (hours * 3600));
	const displaySeconds = seconds===0 && (minutes !== 0 || hours !== 0) ? '' : `${seconds}s`


	return `${displayHours}${displayHours && (displayMinutes || displaySeconds) ? ' ' : ''}${displayMinutes}${displayMinutes && displaySeconds ? ' ' : ''}${displaySeconds}`;
}


//my evolution of an if statement returning a variable + string

/* 

if (a!==0) {
	return a + "some text";
}
else {
	return '';
} 

------------------------

if (a===0) {
	return ''
}
return a + 'some text';

------------------------

a===0 ? '' : a + 'some text'

------------------------

`${a===0 ? '' : ${a}some text}`

*/

module.exports = formatDate;
