const inputValue = document.querySelector(".search-bar")
const searchBtn = document.querySelector(".btn-search")
const errorMessage = document.querySelector(".error-msg")

const avatar = document.querySelector(".avatar")
const username = document.querySelector(".username")
const name_ = document.querySelector(".accent")
const date = document.querySelector(".date")
const bio = document.querySelector(".bio")
const repos = document.querySelector(".repos")
const followers = document.querySelector(".followers")
const following = document.querySelector(".following")
const place = document.querySelector(".place-span")
const website = document.querySelector(".blog-span")
const twitter = document.querySelector(".twitter-span")
const company = document.querySelector(".company-span")



searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${inputValue.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            updateUserInfo(data)
        })
        .catch(error => console.error('Error:', error));
})

const checkIfHasValue = (val1, val2) => {
    if (val1 === "" || val1 === null) {
      val2.style.opacity = 0.5
      val2.previousElementSibling.style.opacity = 0.5
      return "Not available"
    } else {
      return `${val1}`
    }
}

const updateUserInfo = (data) => {
    if (data.message !== "Not Found") {
        avatar.src = `${data.avatar_url}`
        username.innerText = `${data.name}`
        name_.innerText = `${data.login}`
        date.innerText = `${data.created_at}`
        bio.innerText = data.bio == null ? "This profile has no bio" : `${data.bio}`
        repos.innerText = `${data.public_repos}`
        followers.innerText = `${data.followers}`
        following.innerText = `${data.following}`
        place.innertext = checkIfHasValue(data.location, place)
        website.innertext = checkIfHasValue(data.blog, website)
        twitter.innertext = checkIfHasValue(data.twitter_username, twitter)
        company.innertext = checkIfHasValue(data.company, company)
    } else {
        errorMessage.style.display = "block"
    }
}








/**
 * 
 * buttonModeSubmit.addEventListener("click", () => {
    if (githubDarkMode) {
        updateToLightMode();
    } else {
        updateToDarkMode();
    }
});
 */



