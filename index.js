let homePoints = 0
let awayPoints = 0
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")


function home1() {
    console.log(homePoints)
    homePoints += 1
    homeScore.textContent = homePoints
    console.log(homePoints)
}

function home2() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function home3() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function away1() {
    awayPoints += 1
    awayScore.textContent = awayPoints
}

function away2() {
    awayPoints += 2
    awayScore.textContent = awayPoints
}

function away3() {
    awayPoints += 3
    awayScore.textContent = awayPoints
}