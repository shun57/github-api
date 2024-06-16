import { Octokit } from "@octokit/rest";
import { load } from 'ts-dotenv';

const env = load({
    GITHUB_API_KEY: String,
});

export const octokit = new Octokit({
    auth: env.GITHUB_API_KEY,
});
