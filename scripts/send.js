var Send = () => {
    var popup = document.getElementsByClassName("main-window")[0];
    var icon = document.getElementsByTagName("i")[0];
    var button = document.getElementById("mainBut");
    var askLabel = document.getElementsByClassName("askToHelp")[0];

    popup.style.display = 'none';
    icon.className = 'far fa-laugh';
    icon.style.fontSize = 26;
    button.className+=" arrow";
    askLabel.className = "sayThanks";
    askLabel.style.display = "block";
    askLabel.innerHTML = "Спасибо за отзыв";

}