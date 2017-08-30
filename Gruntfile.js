module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		}
	});
};