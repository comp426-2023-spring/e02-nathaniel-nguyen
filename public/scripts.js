// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function homeNav() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
}

function helpNav() {
    reset();
    document.getElementById("home").className = "inactive";
    document.getElementById("disp").className = "inactive";
    document.getElementById("help").className = "active";
}

function reset() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
    document.getElementById("opponent").className = "inactive";
    document.getElementById("disp2").className = "inactive";
    document.getElementById("opponent-options-rps").className = "inactive";
    document.getElementById("opponent-options-rpsls").className = "inactive";
    var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
    var ele = document.getElementsByName("opp");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
    var ele = document.getElementsByName("player");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
    var ele2 = document.getElementsByName("player2");
        for(var i=0;i<ele2.length;i++)
            ele2[i].checked = false;
    document.getElementById("disp2").innerHTML
            = "";
    document.getElementById("disp").innerHTML
            = "";
    document.getElementById("result2").className = "inactive"
    document.getElementById("result").className = "inactive"
    document.getElementById("result3").className = "inactive"
    document.getElementById("result4").className = "inactive"
    document.getElementById("result5").className = "inactive"
    document.getElementById("result6").className = "inactive"
}

function display() {
    document.getElementById("disp").className = "active";
    if (document.getElementById("rps").checked) {
        document.getElementById("disp").innerHTML = "Opponent or random draw?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
        document.getElementById("game").innerHTML = "rps";
    } else if (document.getElementById("rpsls").checked) {
        document.getElementById("disp").innerHTML = "Opponent or random draw?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
        document.getElementById("game").innerHTML = "rpsls";
    } else {
        document.getElementById("disp").innerHTML
                    = "Select an option.";
    }
}

function getGame() {
    if (document.getElementById("opps").checked) {
        document.getElementById("disp2").innerHTML = "Select an option.";
        if (document.getElementById("game").innerHTML == "rps") {
            document.getElementById("opponent-options-rpsls").className = "inactive";
            document.getElementById("opponent-options-rps").className = "active";
        } else {
            document.getElementById("opponent-options-rps").className = "inactive";
            document.getElementById("opponent-options-rpsls").className = "active";
        }
    } else if (document.getElementById("no-opponent").checked) {
        document.getElementById("opponent-options-rps").className = "inactive";
        document.getElementById("opponent-options-rpsls").className = "inactive";
        document.getElementById("disp2").innerHTML = "Random Opponent";
        playRandom();
    } else {
        document.getElementById("disp2").innerHTML = "Select an option.";
}
}

async function playRandom() {
    document.getElementById("result").className = "active";

    let game = document.getElementById("game").innerHTML
    let baseurl = window.location.href + 'app/';
    let url = baseurl + game + '/';

    let response = await fetch(url);
    let result = await response.json();
    console.log(result)

    document.getElementById("result2").className = "active"
    result = result['player']
    document.getElementById("result2").innerHTML = "<img src='/img/" +result+ ".jpg'>";
    

}

function getOpp() {
    if (document.getElementById("rock").checked) {
        document.getElementById("shot").innerHTML = "rock";
        playOpp();
    } else if (document.getElementById("paper").checked) {
        document.getElementById("shot").innerHTML = "paper";
        playOpp();
    } else if (document.getElementById("scissors").checked) {
        document.getElementById("shot").innerHTML = "scissors";
        playOpp();
    } else if (document.getElementById("lizard").checked) {
        document.getElementById("shot").innerHTML = "lizard";
        playOpp();
    } else {
        document.getElementById("shot").innerHTML = "spock";
        playOpp();
    }
    
}   

async function playOpp() {
    document.getElementById("result").className = "active";

    let game = document.getElementById("game").innerHTML
    let opp = document.getElementById("shot").innerHTML
    let baseurl = window.location.href + 'app/';
    let url = baseurl + game + '/play/' + opp + '/';

    let response = await fetch(url);
    let result = await response.json();
    console.log(result)

    document.getElementById("result2").className = "active"
    document.getElementById("result5").className = "active"
    document.getElementById("result5").innerHTML = result['result'].toUpperCase();
    document.getElementById("result6").className = "active"
    player = result['player']
    document.getElementById("result2").innerHTML = "<img src='/img/" +player+ ".jpg'>";
    document.getElementById("result3").className = "active"
    document.getElementById("result4").className = "active"
    opponent = result['opponent']
    document.getElementById("result4").innerHTML = "<img src='/img/" +opponent+ ".jpg'>";
    

}