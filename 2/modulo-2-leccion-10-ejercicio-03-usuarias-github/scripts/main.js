"use strict";
const btn = document.querySelector(".js-btn");
const nameElement = document.querySelector(".js-name-result");
const img = document.querySelector(".js-img");
const repoElement = document.querySelector(".js-repo-result");
const inputElement = document.querySelector(".js-input");

function getGitHubUser() {
	const userName = inputElement.value;

	fetch(`https://api.github.com/users/${userName}`)
		.then((response) => response.json())
		.then((data) => {
			nameElement.innerHTML = data.login;
			img.src = data.avatar_url;
			repoElement.innerHTML = data.public_repos;
			console.log(data);
			console.log(data.public_repos);
		});
}

btn.addEventListener("click", getGitHubUser);
