var bot = ["Bonjour", "Bien et vous?", "Comment puis-je vous être utile?", "Débranchez la puis, rebranchez la"];
var question = ["Bonjour", "Comment vas tu?", "Ma box ne veux plus démarer", "Salut", "Yo"];
var open = document.getElementById("open");
var close = document.getElementById("close");
var write = document.getElementById("humain");
close.addEventListener('click', function() {
    document.getElementById("chat").style.display = "none";
    document.getElementById("open").style.display = "block";
})

function tutut() {
    document.getElementById("1").animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0px)" }
    ], { duration: 800, iterations: Infinity });
    document.getElementById("2").animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0px)" }
    ], { duration: 800, iterations: Infinity, delay: 300 });
    document.getElementById("3").animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0px)" }
    ], { duration: 800, iterations: Infinity, delay: 600 });
    document.getElementById("4").animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0px)" }
    ], { duration: 800, iterations: Infinity });
    document.getElementById("5").animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0px)" }
    ], { duration: 800, iterations: Infinity, delay: 300 });
    document.getElementById("6").animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0px)" }
    ], { duration: 800, iterations: Infinity, delay: 600 });

}

open.addEventListener('click', function() {
    document.getElementById("open").style.display = "none";
    document.getElementById("chat").style.display = "block";
})
write.addEventListener('input', function() {
    document.getElementById("write").style.display = "block";

    // setTimeout(function() {
    // 
    // }, 2000);
})

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
    document.getElementById("write").style.display = "none";
    var tape = form.elements["humain"].value = "";
    return false;
}
tutut();