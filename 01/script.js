document.querySelector("button").addEventListener("click", () => {
    generateList();
    console.log("Click");
});

const generateList = () => {
    fetch("data.json")
        .then((Response) => Response.json())
        .then((list) => {
            let ul = document.createElement("ul");
            for (const elem of list) {
                let li = document.createElement("li");
                li.innerHTML = elem;
                ul.appendChild(li);
            }
            document.querySelector("main").appendChild(ul);
        });
};
