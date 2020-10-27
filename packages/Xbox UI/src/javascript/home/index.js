function setDataProfileInPage(profileData) {
    const profile_avatar = document.querySelector(".profile_avatar img")
    const profile_name = document.querySelector("#profile_name")
    const profile_account = document.querySelector("#profile_account")
    const container_gamescore = document.querySelector("#container_gamescore .gamescore_text")

    profile_avatar.setAttribute("src", profileData.profile.avatar_url)
    profile_name.innerHTML = profileData.profile.gamertag
    profile_account.innerHTML = profileData.type_account
    container_gamescore.innerHTML = profileData.profile.gamescore
}

function getHistoryGames(profileData) {
    const listOfCards = document.querySelector(".list_card")

    const lastestGames = () => {
        profileData?.history?.lastest_games.forEach(item => {
            listOfCards.innerHTML += `<div class="card_very_small" id="item1" onmouseover="handlerSetCardTheme(event)">
         <div class="card_content" style="background-image:url('${item?.small_background}')">
         </div>
        </div>`
        })
    }

    const lasteGame = () => {
        listOfCards.innerHTML += `<div class="card" id="item0" onmouseover="handlerSetCardTheme(event)">
                                <div class="card_content" style="background-image:url('${profileData?.history?.last_game?.background}')">
                                </div>
                            </div>`
    }

    Promise.all([lasteGame(), lastestGames()]).then(() => { }).catch(error => console.log(error.message))




}
