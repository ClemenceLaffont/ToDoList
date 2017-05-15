let liste = [];

let afficheListe = function() {
    document.querySelector("ul").innerHTML = "";
    for (let = i = 0; i < liste.length; i = i + 1) {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.className = "squared";
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = "none";
        input.id = i;
        input.name = "check";
        let label = document.createElement("label");
        label.htmlFor = i;
        let label2 = document.createElement("label");
        let button = document.createElement("button");
        button.id = i;
        button.addEventListener("click", function() {
            j = button.id
            supprime(j);
            afficheListe();
        })
        label2.textContent = liste[i];
        div.appendChild(input);
        div.appendChild(label);
        li.appendChild(div);
        li.appendChild(label2);
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

afficheListe();

document.querySelector("form").addEventListener("submit", function(e) {
    let content = document.querySelector("#caf").value;
    if (content != "") {
        ajoute(content);
        afficheListe();
    }
    document.querySelector("#caf").value = "";
    e.preventDefault();
});