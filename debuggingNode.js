'use strict';

//start a console timer
console.time('start');

//log to console
console.log('console.log statement');

//console warn message, ends up in stderr
console.warn('console.warn statement');

//console error message, ends up in stderr
console.error('console error statement');

//create a sample object
var record = {
	id: 1,
	active: true,
	name: 'Sample Record',
	date: new Date()
};

//force a breakpoint
debugger;

//produce a hierarchical display of an object
console.dir(record);

//show timing for "start"
console.timeEnd('start');

//produce a stack trace. currently shows up in stderr
console.trace();

//redirecting stdout to a file
//$node debuggingNode > stdout.txt

//redirecting stderr to a file
//$node debuggingNode 2> stderr.txt

//redirecting stdout and stderr to a file
//$node debuggingNode &> out.txt

//redirecting stdout to a file, stderr to another file
//$node debuggingNode > stdout.txt 2> stderr.txt

//redirecting stdout, stderr to a file and also the screen using tee
//$node debuggingNode 2>&1 | tee tee.txt

//swap stdout and stderr so that stderr is shown on the screen
//$node debuggingNode 3>&1 1> stdout.txt 2>&3- | tee -a stderr.txt
