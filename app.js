const icon = document.getElementById('iconmoonnsun')
const headh2 = document.getElementById('headh2')

icon.onclick = function () {
    document.body.classList.toggle('Light-mode')
    if(document.body.classList.contains('Light-mode')){
        headh2.innerHTML = 'DARK'
        icon.src = '/assets/Moon-mob.svg'
    }else {
        icon.src = '/assets/Sun-mob.svg'
        headh2.innerHTML = 'LIGHT'
    }
}

const searchBut = document.querySelector('.Search-But');
const inputText = document.querySelector('.Input-Text');
const nameDisplay = document.querySelector('.Name');
const userShch = document.querySelector('.Addres');
const joinDate = document.querySelector('.Joint');
const bioShech = document.querySelector('.Bio');
const repos = document.querySelector('.Box-2-2');
const followers = document.querySelector('.Box-2-4');
const following = document.querySelector('.Box-2-6');
const locationAI = document.querySelector('.let1');
const gitiBlog = document.querySelector('.let2');
const twitterSoc = document.querySelector('.let3');
const offBuild = document.querySelector('.let4');
const persIcon = document.getElementById('GitIconMob');

searchBut .addEventListener('click', () => {
    const username = inputText.value;
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json()) 
            .then(userData => {
                nameDisplay.textContent = userData.name || 'Not available';
                userShch.textContent = `@${userData.login}`;
                joinDate.textContent = userData.created_at;
                bioShech.textContent = userData.bio || 'Not available';
                repos.textContent = userData.public_repos;
                followers.textContent = userData.followers;
                following.textContent = userData.following;
                locationAI.textContent = userData.location || 'Not available';
                gitiBlog.textContent = 'Not available';
                gitiBlog.href = userData.blog || '#';
                twitterSoc.textContent = userData.twitter_username || 'Not available';
                offBuild.textContent = userData.company || 'Not available';
                persIcon.src = userData.avatar_url;
             })
            .catch(error => {
                console.error('Error:', error);
            });
    }
);




