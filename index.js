
let homePoint = document.getElementById("home-points")
let awayPoint = document.getElementById("guest-points")
let homeCount = 0
let awayCount = 0

/*Home Points Start*/
function homepointOne(){
    homeCount = homeCount +1
    homePoint.innerText = homeCount
}

function homepointTwo(){
    homeCount = homeCount + 2
    homePoint.innerText = homeCount
}

function homepointThree(){
    homeCount = homeCount + 3
    homePoint.innerText = homeCount
}
/*Home Points End*/

/*Away Points Start*/
function awaypointOne(){
    awayCount = awayCount +1
    awayPoint.innerText = awayCount
}

function awaypointTwo(){
    awayCount = awayCount + 2
    awayPoint.innerText = awayCount
}

function awaypointThree(){
    awayCount = awayCount + 3
    awayPoint.innerText = awayCount
}
/*Away Points End*/