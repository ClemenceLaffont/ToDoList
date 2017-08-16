let callFunctions = function() {
    showToDo();
    deleteElement();
    checkCheckbox();
    detectModif();
}

function addElement(status, title, modif) {
    let element = {
        status: status,
        title: title,
        modif: modif
    }
    toDo.push(element);
};

function deleteElement() {
    let elements = document.querySelectorAll('.element');
    for(let i = 0; i<elements.length; i++) {
        elements[i].querySelector('button').addEventListener('click', function(e) {
            toDo.splice(i, 1);
            callFunctions();
            e.preventDefault();
        });
    }
};

function checkCheckbox() {
    let elements = document.querySelectorAll('.squared');
    for(let i = 0; i<elements.length; i++) {
        elements[i].addEventListener('click', function(e) {
            if(toDo[i].status === true) {
                toDo[i].status = false;
            } else if(toDo[i].status === false) {
                toDo[i].status = true;
            }
            callFunctions();
            e.preventDefault();
        });
    }
};

function detectModif() {
    let elements = document.querySelectorAll('.modif');
    for(let i = 0; i<elements.length; i++) {
        elements[i].addEventListener('click', function(e) {
            if(toDo[i].modif === false) {
                toDo[i].modif = true;
                callFunctions();
            }
            e.preventDefault();
        });
        elements[i].addEventListener('dblclick', function(e) {
            if(toDo[i].modif === false) {
                toDo[i].modif = true;
                callFunctions();
            }
            e.preventDefault();
        });
        elements[i].querySelector('input[type="text"]').addEventListener("blur", function(e) {
            if(toDo[i].modif === true) {
                toDo[i].modif = false;
                let value = elements[i].querySelector('input[type="text"]').value;
                modifTitle(i, value);
                callFunctions();
            }
            e.preventDefault();
        });
        elements[i].addEventListener("submit", function(e) {
            if(toDo[i].modif === true) {
                toDo[i].modif = false;
                let value = elements[i].querySelector('input[type="text"]').value;
                modifTitle(i, value);
                callFunctions();
            }
            e.preventDefault();
        });
    }
};

function modifTitle(i, value) {
    toDo[i].title = value;
}

callFunctions();

document.querySelector("#ajouter").addEventListener("submit", function(e) {
    let content = document.querySelector("#caf").value;
    if (content !== "") {
        document.querySelector("#caf").value = "";
        addElement(false, content, false);
        callFunctions();
    }
    e.preventDefault();
});






    // form.addEventListener("dblclick", function() {
    //     label2.style.display = "none";
    //     inputtext.style.display = "inline-block";
    //     inputsubmit.style.display = "inline-block";
    //     inputtext.focus();
    //     inputtext.addEventListener("blur", function() {
    //         let newcontent = inputtext.value;
    //         modifie(newcontent, i);
    //         afficheListe();
    //     });
    //     form.addEventListener("submit", function(e) {
    //         let newcontent = inputtext.value;
    //         modifie(newcontent, i);
    //         afficheListe();
    //         e.preventDefault();
    //     });
    // });