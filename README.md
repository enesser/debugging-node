# Debugging Node
## JavaScript and Bash techniques to assist in debugging Node.

I created this project for a presentation I gave to developers on Node. Here you'll find how to access the console timer, write console warn and error statements, traverse an object in the console, force a breakpoint, and show a stack trace in Node.

You'll also see some Bash tactics in the comments for redirecting STDOUT and STDERR. While these aren't specific to the Node environment, you can use them to help you debug, reroute output to log files, or other useful things.

## Bash examples

````
# redirecting stdout, stderr to a file and also the screen using tee
$ node debuggingNode 2>&1 | tee tee.txt
console.log statement
console.warn statement
{ id: 1,
  active: true,
  name: 'Sample Record',
  date: Fri Sep 26 2014 21:21:15 GMT-0500 (Central Daylight Time) }
console error statement
start: 3ms
Trace
    at Object.<anonymous> (~/projects/debuggingNode/debuggingNode.js:33:9)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3
````
````
# swap stdout and stderr so that stderr is shown on the screen
$ node debuggingNode 3>&1 1> stdout.txt 2>&3- | tee -a stderr.txt
console.warn statement
console error statement
Trace
    at Object.<anonymous> (~/projects/debuggingNode/debuggingNode.js:33:9)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3

# showing the contents of 'stdout.txt' from the example above
$ cat stdout.txt
console.log statement
{ id: 1,
  active: true,
  name: 'Sample Record',
  date: Fri Sep 26 2014 21:22:47 GMT-0500 (Central Daylight Time) }
start: 4ms

# showing the contents of 'stderr.txt' from the example above
$ cat stdout.txt
console.warn statement
console error statement
Trace
    at Object.<anonymous> (~/projects/debuggingNode/debuggingNode.js:33:9)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3
````
## Recommended Debuggers
I highly recommend
[node-inspector](https://github.com/node-inspector/node-inspector "node-inspector") for the best GUI debugging experience using Blink Developer Tools.

If you're more hardcore, you can also use the built-in [node-inspector](http://nodejs.org/api/debugger.html "node debug").

## Contributions
Have any corrections or suggestions? Please feel free to contribute or contact me!

enesser@gmail.com