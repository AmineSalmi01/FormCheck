var input = document.getElementsByTagName("input");
var form = document.getElementsByTagName("form")[0];
var select = document.getElementById("lang");
var type = document.getElementsByClassName("book")
var para = document.getElementById("para");
var table = document.getElementById("table")
var form_valid = 0;

function valider(e){
    form_valid = 0;
    e.preventDefault();
    for(i=0;i<input.length-3;i++){
        if(input[i].value==''){
           input[i].nextElementSibling.innerHTML = "no"
           input[i].nextElementSibling.style.color = "red"
           input[i].style.borderColor = "red"
           form_valid++;
            
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
        form_valid++;
    }
    
    // author validation
    if(input[1].value.length>3){
        input[1].nextElementSibling.innerHTML = "too big"
        input[1].nextElementSibling.style.color = "red"
        form_valid++;
    }

    // price 
    if(isNaN(Number(input[2].value))){
        input[2].nextElementSibling.innerHTML = "enter a number"
        input[2].nextElementSibling.style.color = "red"
        form_valid++;
    }
    else if(Number(input[2].value<0)){
        input[2].nextElementSibling.innerHTML = "positive number"
        input[2].nextElementSibling.style.color = "red"
        form_valid++;
    }
     
    // language
    if(select.value == ""){
        select.nextElementSibling.innerHTML = "select a language"
        select.nextElementSibling.style.color = "red"
        select.style.borderColor = "red"
        form_valid++;
    }
    else{
        select.nextElementSibling.innerHTML = "yes"
        select.nextElementSibling.style.color = "green"
        select.style.borderColor = "green"
    }
    var is_checked = false;
    for(i=0;i<type.length;i++){
        if(type[i].checked){
            is_checked = true;
            break;
        }
        else{
            is_checked = false;
        }
    }
    if(is_checked){
        para.innerHTML = "ok";
        para.style.color = "green";
    }
    else{
        para.innerHTML = "no";
        para.style.color = "red";
        form_valid++;
    }
    
    if(form_valid == 0){
        var tr = table.insertRow(-1);
        tr.insertCell(0).innerHTML = input[0].value;
        tr.insertCell(1).innerHTML = input[1].value;
        tr.insertCell(2).innerHTML = input[2].value;
        tr.insertCell(3).innerHTML = input[3].value;
        tr.insertCell(4).innerHTML = select.value;
        tr.insertCell(5).innerHTML = type[0].value;
    }
}

form.addEventListener("submit", valider);