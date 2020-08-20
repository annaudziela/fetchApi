console.log('Hi you!😉');

fetch('https://api.github.com/users/annaudziela/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
    const {name, html_url} = repo;
    const repositoryList = document.querySelector('.list__details--js');
    const myTemplate = `<li>
    ${name} <a href="${html_url}" title="link to ${name} repository on gitHub"> go to Github</a>
    </li>`;
    repositoryList.innerHTML += myTemplate;
}
})
.catch(error => {
    console.log('Error: unable to download repos');
})
