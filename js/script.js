var bot = ["Bonjour", "Bien et vous?", "Comment puis-je vous être utile?", "Débranchez la puis, rebranchez la"];
var question = ["Bonjour", "Comment vas tu?", "Ma box ne veux plus démarer", "bonjour", "salut", "yo"];
var total = document.getElementById("chat");

function close(form) {
    total.style.display = "none";
}

function rep(bot) {
    var node = document.createElement("div");
    var textnode = document.createTextNode(bot);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "rep";
    var x = document.getElementById('msg');
    x.scrollTop += 1000
    return false;
}

function wait() {
    setTimeout(function() {
        document.getElementById("wait").style.display = "block";
    }, 1000);
    setTimeout(function() {
        document.getElementById("wait").style.display = "none";
    }, 3000)
}

function erreur() {
    var node = document.createElement("div");
    var textnode = document.createTextNode("Je ne sais pas comment vous aider");
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "nope";
    var x = document.getElementById('msg');
    x.scrollTop += 1000
}


function getAnswer(form) {
    var tape = form.elements["humain"].value;
    var node = document.createElement("div");
    var textnode = document.createTextNode(tape);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "ques";
    var x = document.getElementById('msg');
    x.scrollTop += 1000;
    wait();

    if ((tape == question[0]) || (tape == question[3]) || (tape == question[4]) || (tape == question[5])) {
        setTimeout('rep(bot[0])', 3000);
    } else if (tape === question[1]) {
        setTimeout('rep(bot[1])', 3000);
        setTimeout('rep(bot[2])', 4000);
    } else if (tape == question[2]) {
        setTimeout('rep(bot[3])', 3000);
    } else {
        setTimeout(erreur, 3000);
    }

    return false;
}




// setTimeout('quest(question[0])', 5000);
// setTimeout('rep(bot[0])', 5000);
// setTimeout('quest(question[1])', 9000);
// setTimeout('rep(bot[1])', 10000);
// setTimeout('rep(bot[2])', 12000);
// setTimeout('quest(question[2])', 14000);
// setTimeout('rep(bot[3])', 18000);