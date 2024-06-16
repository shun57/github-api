import { octokit } from './lib/octokit';

type issueComment = {
    owner: string,
    repo: string,
    issue_number: number,
    body: string,
}

const createIssueComment = async (comment: issueComment) => {
    try {
        const { data: result } = await octokit.rest.issues.createComment({
            owner: comment.owner,
            repo: comment.repo,
            issue_number: comment.issue_number,
            body: comment.body
        })

        console.log(result)
    } catch (e) {
        console.error(e)
    }
};

const comment: issueComment = {
    owner: 'shun57',
    repo: 'praha-challenge-task',
    issue_number: 69,
    body: 'post api comment test'
}

createIssueComment(comment)
