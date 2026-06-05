let form = document.querySelector("form");
let main = document.querySelector("#main");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);
    let h2 = document.createElement("h2");
    h2.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach((inp) => {
        if(inp.type !== 'submit'){
            inp.value = "";
        }
    })
})