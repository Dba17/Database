//visibility control logic
function displayForm(show, hideOne, hideTwo, hideThree){
    document.getElementsByClassName(show)[0].style.display="block";
    document.getElementsByClassName(hideOne)[0].style.display="none";
    document.getElementsByClassName(hideTwo)[0].style.display="none";
    document.getElementsByClassName(hideThree)[0].style.display="none";
}
