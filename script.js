
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let today = `${day}-${month}-${year}`;
document.getElementById('date-time').innerHTML = today;