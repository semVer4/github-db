let newVD = document.getElementById("addVD");
let newDT = document.getElementById("addDT");

let checkSys = document.getElementById("checkSys");
let allInfo = document.getElementById("allInfo");

let product = {
    video: ["NVIDIA", "AMD"]
};

function checkSystem() {
    for (let key in product) {
        allInfo.innerHTML += `Марка: ${key} - Модель: ${product[key]}`;
    } 
}

checkSys.addEventListener("click", checkSystem);

newVD.addEventListener("click", addElement);
newDT.addEventListener("click", addDetail);

function addElement() {
    let element = prompt();
    let part = prompt();

    try {
        product[element].push(part);
    } catch(err) {
        product[element] = [product[element], part];
    }
}

function addDetail() {
    let detail = prompt();
    let param = prompt();
    product[detail] = param;
}