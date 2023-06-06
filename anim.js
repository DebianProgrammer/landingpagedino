let content = "DinoGame";
let i = 0;
//let backspace = false;

//function sleep(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}

window.onload = () => {
    let mainhome = document.getElementById("mainhome");
    let lol = setInterval(() => {
        mainhome.innerHTML = content.substring(0, i + 1);
        i = i + (1);
        //if (i > content.length) {
        //    backspace = true;
        //}
        //if(i == 0) {
        //    backspace = false;
        //}
        if(mainhome.innerHTML == "DinoGame") {
            clearInterval(lol);
        }
    }, 200);
}