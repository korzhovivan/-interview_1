var ChooseRate = (rate) => {
    var bottomPart = document.getElementsByClassName("bottom-part")[0];
    bottomPart.style.display = 'block';
    var rates = document.getElementsByClassName("rates-blocks")[0];
    var line1 = document.getElementsByClassName("line1")[0];
    var line2 = document.getElementsByClassName("line2")[0];
    var mainWindow = document.getElementsByClassName("main-window")[0];
    if(screen && screen.width > 600){
        mainWindow.style.height = 407;
    }
   
    var rateCount =  document.getElementsByClassName("rate").length;

    var allRates = rates.getElementsByTagName("div");
    if(rateCount == 4){
        var rateSpecial = document.getElementsByClassName("rateSpec")[0];
        rateSpecial.className = "rate";
    }
    for (let i = 0; i < allRates.length; i++) {
        if(i != rate){ allRates[i].className+=" greyscale"; }
    }
    
    allRates[rate].className = "rateSpec";
    
    
    switch (rate) {
        case 0:
            line1.style.right = 278;
            line2.style.right = 277;
            
            break;
        case 1:
            line1.style.right = 214;
            line2.style.right = 213;
            break;
        case 2:
            line1.style.right = 151;
            line2.style.right = 150;
            break;
        case 3:
            line1.style.right = 89;
            line2.style.right = 88;
            break;
        case 4:
            line1.style.right = 26;
            line2.style.right = 25;
            break;
    
        default:
            break;
    }
}
