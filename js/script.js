let liste = [];

let afficheListe = function() {
    document.querySelector("ul").innerHTML = "";
    for (let i = 0; i < liste.length; i = i + 1) {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.className = "squared";
        let inputcheck = document.createElement("input");
        inputcheck.type = "checkbox";
        inputcheck.value = "None";
        inputcheck.id = i;
        inputcheck.name = "check";
        let inputtext = document.createElement("input");
        inputtext.type = "text";
        inputtext.id = i;
        inputtext.name = "modifcaf";
        inputtext.value = liste[i];
        inputtext.style.display = "none";
        let inputsubmit = document.createElement("input");
        inputsubmit.type = "submit";
        inputsubmit.id = i;
        inputsubmit.name = "modifsub";
        inputsubmit.value = "";
        inputsubmit.style.display = "none";
        let form = document.createElement("form");
        form.method = "post";
        form.action = "#";
        form.classList = "modif";
        let label = document.createElement("label");
        label.htmlFor = i;
        let label2 = document.createElement("label");
        let button = document.createElement("button");
        button.id = i;
        button.addEventListener("click", function() {
            j = button.id;
            supprime(j);
            afficheListe();
        });
        label2.textContent = liste[i];
        form.addEventListener("dblclick", function() {
            label2.style.display = "none";
            inputtext.style.display = "inline-block";
            inputsubmit.style.display = "inline-block";
            inputtext.focus();
            inputtext.addEventListener("blur", function() {
                let newcontent = inputtext.value;
                modifie(newcontent, i);
                afficheListe();
            });
            form.addEventListener("submit", function(e) {
                let newcontent = inputtext.value;
                modifie(newcontent, i);
                afficheListe();
                e.preventDefault();
            });
        });
        div.appendChild(inputcheck);
        div.appendChild(label);
        form.appendChild(label2);
        form.appendChild(inputtext);
        form.appendChild(inputsubmit);
        li.appendChild(div);
        li.appendChild(form);
        li.appendChild(button);
        ul.appendChild(li);
    }
}

function ajoute(content) {
    liste.push(content);
};

function supprime(element) {
    liste.splice(element, 1);
};

function modifie(element, emplacement) {
    liste[emplacement] = element;
}

afficheListe();

document.querySelector("#ajouter").addEventListener("submit", function(e) {
    let content = document.querySelector("#caf").value;
    if (content != "") {
        ajoute(content);
        afficheListe();
    }
    document.querySelector("#caf").value = "";
    e.preventDefault();
});