class GitHub {
    constructor(){
        this.client_id = 'f95cc56e280a07fcc678';
        this.client_secret = '707f49aaeb25b82a6192abd33855658905e28290';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    //Function to get the user
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&cliend_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}