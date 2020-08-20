console.log('Hi you!😉');

fetch('https://api.github.com/users/annaudziela/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
    const {name, html_url} = repo;
    const repositoryList = document.querySelector('.list__details--js');
    const myTemplate = `<li>
    ${name} || <a href="${html_url}" title="link to ${name} repository on gitHub"> go to Github</a>
    </li>`;
    repositoryList.innerHTML += myTemplate;
}
})
.catch(error => {
    console.log('Error: unable to download repos');
})

let isDark = false; 
const switchModes = document.querySelector('.button--js');
switchModes.addEventListener('click' , () => {
if (isDark) {
    document.documentElement.style.setProperty('--background-color', 'whitesmoke');
    document.documentElement.style.setProperty('--text-color', '#373F47');
    document.documentElement.style.setProperty('--border-style', '#373F47 1px solid');
    document.documentElement.style.setProperty('--link-color', 'rgba(0, 0, 0, 0.781)');
    isDark = false; 
} else {
document.documentElement.style.setProperty('--background-color', 'rgba(140, 144, 144, 0.800)');
    document.documentElement.style.setProperty('--text-color', 'whitesmoke');
    document.documentElement.style.setProperty('--border-style', 'whitesmoke 1px solid');
    document.documentElement.style.setProperty('--link-color', 'whitesmoke');
    isDark = true; 
}
});

