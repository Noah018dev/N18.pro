function checkPassword() {
    if (getElementById("password").value == "018019") {
        window.location.href = "/dev/page";
    } else {
        alert("Incorrect password!");
        return false;
    }
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('password')
console.log(product);
if (product == "018019") {
    window.location.href = "/dev/page";
}