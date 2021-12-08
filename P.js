var input = document.getElementsByTagName("input");
var form = document.getElementsByTagName("form")[0];
var select = document.getElementById("lang");
var type = document.getElementsByClassName("book")
var para = document.getElementById("para");

function valider(e){
    e.preventDefault();
    for(i=0;i<input.length-3;i++){
        if(input[i].value==''){
           input[i].nextElementSibling.innerHTML = "no"
           input[i].nextElementSibling.style.color = "red"
           input[i].style.borderColor = "red"
           
        }
        else{
            input[i].nextElementSibling.innerHTML = "yes"
            input[i].nextElementSibling.style.color = "green"
            input[i].style.borderColor = "green"
        }
    }

    // title validation
    if(input[0].value.length>3){
        input[0].nextElementSibling.innerHTML = "too big"
        input[0].nextElementSibling.style.color = "red"
    }
    
    // author validation
    if(input[1].value.length>3){
        input[1].nextElementSibling.innerHTML = "too big"
        input[1].nextElementSibling.style.color = "red"
    }

    // price 
    if(isNaN(Number(input[2].value))){
        input[2].nextElementSibling.innerHTML = "enter a number"
        input[2].nextElementSibling.style.color = "red"
    }
    else if(Number(input[2].value<0)){
        input[2].nextElementSibling.innerHTML = "positive number"
        input[2].nextElementSibling.style.color = "red"
    }
     
    // language
    if(select.value == ""){
        select.nextElementSibling.innerHTML = "select a language"
        select.nextElementSibling.style.color = "red"
        select.style.borderColor = "red"
    }
    else{
        select.nextElementSibling.innerHTML = "yes"
        select.nextElementSibling.style.color = "green"
        select.style.borderColor = "green"
    }

    for(i=0;i<type.length;i++){
        if(type[i].checked){
            para.innerHTML = "yes"
            para.style.color = "green"
            break;
        }
        else{
            para.innerHTML = "no"
            para.style.color = "red"
        }
    }
}

form.addEventListener("submit", valider);