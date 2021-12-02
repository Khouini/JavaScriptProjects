// Student : Khouini Med Yacine
// Declaration
const submit = document.getElementById('envoyer');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const majusLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'i', 'J', 'K', 'K', 'M', 'N', 'O', 'P', 'Q', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let checkLetters;
let checkMajus;
let checkLetters2;
let checkMajus2;
let minusPasswordFound = true;
let majusPasswordFound = true;
let numberPasswordFound = true;
//Functions
function verif() {
    // -------------------------------------- Nom ------------------------------------------------
    let name = document.forms['myForm']['inputNom'];
    for (let i = 1; i < name.value.length; i++) {
        for (let b = 0; b < letters.length; b++) {
            if (name.value[i] === letters[b]) {
                break;
            };
            if (name.value[i] != letters[b]) { if (b >= letters.length - 1) checkLetters = true };
        }
    }
    for (let c = 0; c < majusLetters.length; c++) {
        if (name.value[0] === majusLetters[c]) {
            break;
        };
        if (c >= majusLetters.length - 1) { checkMajus = true; }
    }
    if ((!checkMajus) && (!checkLetters)) {
        console.log(`Valid Name : ${name.value}`);
    }
    if (checkLetters) {
        alert('Invalid Name must be only letters');
        checkLetters = false;
    }
    if (checkMajus) {
        alert('Invalid Name, fist letter must be majus');
        checkMajus = false;
    }
    // ---------------------------------------- Prenom -----------------------------------------
    let Prenom = document.forms['myForm']['inputPrenom'];
    for (let i = 1; i < Prenom.value.length; i++) {
        for (let b = 0; b < letters.length; b++) {
            if (Prenom.value[i] === letters[b]) {
                break;
            };
            if (Prenom.value[i] != letters[b]) { if (b >= letters.length - 1) checkLetters2 = true };
        }
    }
    for (let c = 0; c < majusLetters.length; c++) {
        if (Prenom.value[0] === majusLetters[c]) {
            break;
        };
        if (c >= majusLetters.length - 1) { checkMajus2 = true; }
    }
    if ((!checkMajus2) && (!checkLetters2)) {
        console.log(`Valid Prenom : ${Prenom.value}`);
    }
    if (checkLetters2) {
        alert('Invalid Prenom must be only letters');
        checkLetters2 = false;
    }
    if (checkMajus2) {
        alert('Invalid Prenom, fist letter must be majus');
        checkMajus2 = false;
    }
    // ----------------------------------------- E-Mail --------------------------------------------
    let email = document.forms['myForm']['inputEmail'];
    let checkMail = false;
    const comparedEmailString = ['@', 'e', 's', 'p', 'r', 'i', 't', '.', 't', 'n'];
    if (email.value.length > 10) {
        for (let i = email.value.length - 10; i < email.value.length; i++) {

            if ((email.value[i]) != comparedEmailString[i - (email.value.length - comparedEmailString.length)]) {
                alert("Invalid Email. it must be ended by '@esprit.tn' ");
                checkMail = false;
                break;
            } else { checkMail = true; }
        }
    } else {
        console.log('short mail');
    }
    if (checkMail) {
        console.log(`Valid Email: ${email.value}`);
        checkMail = false;
    }
    // ---------------------------------------- Mot de passe ---------------------------------------
    let password = document.forms['myForm']['inputPassword'];
    for (let i = 0; i < password.value.length; i++) {
        if (minusPasswordFound) {
            for (let j = 0; j < letters.length; j++) {
                if (password.value[i] === letters[j]) {
                    minusPasswordFound = false;
                    break;
                }
            }
        }
        if (majusPasswordFound) {
            for (let j = 0; j < majusLetters.length; j++) {
                if (password.value[i] === majusLetters[j]) {
                    majusPasswordFound = false;
                    break;
                }
            }
        }
        // if (numberPasswordFound) {
        //     if ((typeof(password[i].value)) === 'number') {
        //         numberPasswordFound = false;
        //         break;
        //     }
        // }
        if ((minusPasswordFound === false) && (majusPasswordFound === false)) {
            break;
        }
    }
    if (minusPasswordFound) console.log('password must contain miniscule letter');
    if (majusPasswordFound) console.log('password must contain majuscule letter');
    // if (numberPasswordFound) console.log('password must contain a number');
    if ((minusPasswordFound === false) && (majusPasswordFound === false)) console.log(`Valid password: ${password.value}`);
    minusPasswordFound = true;
    minusPasswordFound = true;
}
//main
submit.addEventListener('click', verif);