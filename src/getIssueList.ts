import { octokit } from './lib/octokit';

type issueConfig = {
  owner: string,
  repo: string,
}

const getIssueList = async (issueConf: issueConfig) => {
  try {
    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner: issueConf.owner,
      repo: issueConf.repo
    })

    // プルリクエストも取れるので除く
    const filteredIssues = issues.filter(issue => !issue.pull_request);

    console.log(filteredIssues)
  } catch (e) {
    console.error(e)
  }
};

const issueConf: issueConfig = {
  owner: 'shun57',
  repo: 'praha-challenge-task',
}

getIssueList(issueConf)
