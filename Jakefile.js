var fs = require("fs");
var path = require("path");

var compilerDir = "bin/";
var coreDirectory = "src/";
var builtDirectory = "built/";

var coreSources = [
	"entity.ts",
    "entitycontext.ts",
	"typesystem/class.ts",
].map(function (f) {
	return path.join(coreDirectory, f);
});

coreSources.push("app.ts");

directory(builtDirectory);

// Prepends the contents of prefixFile to destinationFile
function prependFile(prefixFile, destinationFile) {
	if (!fs.existsSync(prefixFile)) {
		fail(prefixFile + " does not exist!");
	}
	if (!fs.existsSync(destinationFile)) {
		fail(destinationFile + " failed to be created!");
	}
	var temp = "temptemp";
	jake.cpR(prefixFile, temp);
	fs.appendFileSync(temp, fs.readFileSync(destinationFile));
	fs.renameSync(temp, destinationFile);
}

var useDebugMode = false;
/* Compiles a file from a list of sources
	* @param outFile: the target file name
	* @param sources: an array of the names of the source files
	* @param prereqs: prerequisite tasks to compiling the file
	* @param prefixes: a list of files to prepend to the target file
	* @param useBuiltCompiler: true to use the built compiler, false to use the LKG
	*/
function compileFile(outFile, sources, prereqs, prefixes, useBuiltCompiler) {
	file(outFile, prereqs, function () {
		var dir = "bin/";
		var cmd = "node" + " " + dir + 'tsc.js  --target ES5 -c -const -declaration -disallowbool -disallowimportmodule ' + sources.join(" ") + " -out " + outFile;
		if (useDebugMode) {
			cmd = cmd + " -sourcemap -fullSourceMapPath";
		}
		console.log(cmd);
		var ex = jake.createExec([cmd]);
		ex.addListener("stdout", function (output) {
			process.stdout.write(output);
		});
		ex.addListener("stderr", function (error) {
			process.stderr.write(error);
		});
		ex.addListener("cmdEnd", function () {
			if (!useDebugMode && prefixes && fs.existsSync(outFile)) {
				for (var i in prefixes) {
					prependFile(prefixes[i], outFile);
				}
			}
			complete();
		});
		ex.addListener("error", function () {
			fs.unlinkSync(outFile);
			console.log("Compilation of " + outFile + " unsuccessful");
		});
		ex.run();


	}, { async: true });
}
directory(builtDirectory);
compileFile("built/jaydata.js", coreSources, []);

desc("abc");
task("jaydata", ["built/jaydata.js"]);

desc("Cleans the compiler output, declare files, and tests");
task("clean", function () {
    jake.rmRf("built/");
});

task("default", ["built/jaydata.js"]);
