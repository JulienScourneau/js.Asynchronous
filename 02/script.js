let storage = [];
document.getElementById("button").addEventListener("click", () => {
    let name = document.getElementById("text").value;
    let country = document.getElementById("select").value;
    fetchName(name, country)
        .then((response) => response.json())
        .then((json) => {
            newLog(name, json.age, country);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
});

document.getElementById("reset").addEventListener("click", () => {
    clearLog();
});

const newLog = (name, age, country) => {
    let p = document.createElement("p");
    let string = "Name:" + name + " age:" + age + " " + country;
    storage.push(string);
    localStorage.setItem("log", JSON.stringify(storage));
    p.innerHTML = string;
    document.querySelector("p").appendChild(p);
};

const fetchName = (name, country) =>
    fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);

const loadLog = () => {
    if (JSON.parse(localStorage.getItem("log")) !== null) {
        storage = JSON.parse(localStorage.getItem("log"));
        for (let elem of storage) {
            let p = document.createElement("p");
            p.innerHTML = elem;
            document.querySelector("p").appendChild(p);
        }
    }
};
loadLog();

const clearLog = () => {
    localStorage.clear();
    storage = [];
};
