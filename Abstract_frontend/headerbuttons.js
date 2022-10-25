Menu();

function Menu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
    headerBackground()
}

function headerBackground() {
    var header = document.getElementById("flex-container");

    if (header.style.background == "black") {
        header.style.background = "rgb(22, 22, 22)";
        header.style.borderBottom = "1px solid grey"
    } else {
        header.style.background = "black";
        header.style.border = "none";
    }
    buttonBackground()
}

function buttonBackground() {
    var buttonFirst = document.getElementById("button-top-1");
    var buttonSecond = document.getElementById("button-top-2");

    if (buttonFirst.style.background == "black") {
        buttonFirst.style.background = "rgb(22, 22, 22)";
        buttonSecond.style.background = "rgb(22, 22, 22)";
    }
    else {
        buttonFirst.style.background = "black";
        buttonSecond.style.background = "black";
    }

}