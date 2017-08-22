let showElement = function(i) {
    let ul = document.querySelector("ul");

    let li = document.createElement("li");
    let div = document.createElement("div");
    let inputcheck = document.createElement("input");
    let inputtext = document.createElement("input");
    let inputsubmit = document.createElement("input");
    let form = document.createElement("form");
    let label = document.createElement("label");
    let label2 = document.createElement("label");
    let button = document.createElement("button");

    li.className = "element";

    div.className = "squared";
    
    inputcheck.type = "checkbox";
    inputcheck.value = "None";
    inputcheck.id = "check"+i;
    inputcheck.name = "check";
    if (toDo[i].status === true) {
        inputcheck.checked = "checked";
    }
    
    inputtext.type = "text";
    inputtext.id = "text"+i;
    inputtext.name = "modifcaf";
    inputtext.value = toDo[i].title;
    if(toDo[i].modif === true) {
        inputtext.style.display = "block";
    } else if(toDo[i].modif === false) {
        inputtext.style.display = "none";
    }
    
    inputsubmit.type = "submit";
    inputsubmit.id = "submit"+i;
    inputsubmit.name = "modifsub";
    inputsubmit.value = "";
    if(toDo[i].modif === true) {
        inputsubmit.style.display = "block";
    } else if(toDo[i].modif === false) {
        inputsubmit.style.display = "none";
    }
    
    form.method = "post";
    form.action = "#";
    form.classList = "modif";
    
    label.htmlFor = "check"+i;
    
    button.id = i;

    label2.textContent = toDo[i].title;
    if(toDo[i].modif === false) {
        label2.style.display = "block";
    } else if(toDo[i].modif === true) {
        label2.style.display = "none";
    }

    div.appendChild(inputcheck);
    div.appendChild(label);
    form.appendChild(label2);
    form.appendChild(inputtext);
    form.appendChild(inputsubmit);
    li.appendChild(div);
    li.appendChild(form);
    li.appendChild(button);
    ul.appendChild(li);

    if(toDo[i].modif === true) {
        label2.style.display = "none";
        inputtext.style.display = "inline-block";
        inputsubmit.style.display = "inline-block";
        inputtext.focus();
    }
}


let showToDo = function() {
    document.querySelector("ul").innerHTML = "";
    for (let i = 0; i < toDo.length; i = i + 1) {
        if (display.all === true) {
            showElement(i);
        } else if (display.toDo === true) {
            if (toDo[i].status === true) {
                 showElement(i);
            }
        } else if (display.do === true) {
            if (toDo[i].status === false) {
                 showElement(i);
            }
        }
    }
}