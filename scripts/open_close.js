var open_close = () => {
    var popup = document.getElementsByClassName("main-window")[0];
    var icon = document.getElementsByTagName("i")[0];
    var button = document.getElementById("mainBut");
    
    if(popup.style.display == 'none'){
        popup.style.display = 'block';
        icon.className = 'fas fa-times';
        icon.style.fontSize = 17;
        button.className = "mainButton";
        document.getElementsByClassName("askToHelp")[0].style.display = 'none';
    }
    else{
        popup.style.display = 'none';
        icon.className = 'far fa-laugh';
        icon.style.fontSize = 26;
        button.className+=" arrow";
        document.getElementsByClassName("askToHelp")[0].style.display = 'block';
    }
}