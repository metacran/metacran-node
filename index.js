
function get_gh_repo(package) {
    if (package.BugReports &&
	package.BugReports.match(/https?:\/\/github\.com\//)) {
	repo_field = package.BugReports;
    } else if (package.URL && package.URL.match(/https?:\/\/github\.com\//)) {
	repo_field = package.URL;
    } else {
	repo_field = "";
    }
    repo = repo_field
	.replace(/^[\s\S]*https?:\/\/github\.com\/([^\/]+\/[^\/, ]+)\/?[\s\S]*$/m, '$1');
    return repo;
}

api = { 'get_gh_repo': get_gh_repo };

module.exports = api;