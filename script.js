let newVD = document.getElementById("addVD");
let newDT = document.getElementById("addDT");

let checkSys = document.getElementById("checkSys");
let allInfo = document.getElementById("allInfo");

var options = {
    host: 'api.github.com', // <-- Private github api url. If not passed, defaults to 'api.github.com'
    pathPrefix: null, // <-- Private github api url prefix. If not passed, defaults to null.
    protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
    user: 'semVer4', // <-- Your Github username
    repo: 'github-db.io', // <-- Your repository to be used a db
    remoteFilename: 'db' // <- File with extension .json
};

// Require GithubDB
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var GithubDB = require('..').default;
// Initialize it with the options from above.
var githubDB = new GithubDB(options);

githubDB.auth("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");
 
// Connect to repository
githubDB.connectToRepo();
 
// You are now authenticated with Github and you are ready to use it as your database.
githubDB.save({"message": "wooohoo"});

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
