window.onload = function(){
   setTimeout(loadAfterTime, 2000);
};


function loadAfterTime() { 
    document.getElementById("mainBut").style.display = 'block';
    document.getElementsByClassName("askToHelp")[0].style.display = 'block';
}