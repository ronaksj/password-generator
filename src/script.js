const result1 = document.getElementById('firstpass');
const result2 = document.getElementById('secondpass');
const generatel = document.getElementById('generatePassword');
const len = document.getElementById('length');


const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "@#$%^&*()_+~|}{[]></-="
}

const getKey = [
    function upperCase() {
        return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
        return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
];

const clipboard1 = document.getElementById('clipboard');
const clipboard2 = document.getElementById('clipboard1');

clipboard1.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password0 = result1.innerText;

    if (!password0) {
        return;
    }

    textarea.value = password0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});

clipboard2.addEventListener('click', () => {
    const textarea1 = document.createElement('textarea');
    const password1 = result2.innerText;

    if (!password1) {
        return;
    }

    textarea1.value = password1;
    document.body.appendChild(textarea1);
    textarea1.select();
    document.execCommand('copy');
    textarea1.remove();
    alert('Password copied to clipboard');
});

generatel.addEventListener('click', () => {
    result1.textContent = genpassword();
    result2.textContent = genpassword();
});

function genpassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;

    if (upper + lower + number + symbol === 0) {
        alert("Please check atleast one box!");
        return;
    }

    let password = "";
    const length = document.getElementById('length');
    while (length.value > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
            password += keyToAdd();
        }
    }

    return password;
}

