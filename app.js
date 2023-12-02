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

    searchBut.addEventListener('click', () => {
        const username = inputText.value.trim();
        if (username) {
            fetchUserDetails(username);
        }
    });

    function fetchUserDetails(username) {
        const apiUrl = `https://api.github.com/users/${username}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    nameDisplay.textContent = data.name || 'Not available';
                    userShch.textContent = data.login ||  'Not available';
                    joinDate.textContent = `Joined ${formatDate(data.created_at)}`;
                    bioShech.textContent = data.bio || 'Not available';
                    repos.textContent = data.public_repos;
                    followers.textContent = data.followers;
                    following.textContent = data.following;
                    locationAI.textContent = data.location || 'Not available';
                    gitiBlog.href = data.blog || '#';
                    gitiBlog.textContent = 'Im hiding here';
                    twitterSoc.textContent = data.twitter_username || 'Not available';
                    offBuild.textContent = data.company || 'Not available';
                    persIcon.src = data.avatar_url;
                    persIcon.style.width = '70px'
                    persIcon.style.borderRadius = '70px'
                }
            })
            .catch(error => {
                console.error('Error user data:', error);
            });
    }

    function formatDate(dateString) {
        const dateObj = new Date(dateString);
        const chavaformatot = `${dateObj.toLocaleString('default', { month: 'short' })} ${dateObj.getDate()} ${dateObj.getFullYear()}`;
        return chavaformatot;
    }



