
function generatePassword() {
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;
    let password = document.getElementById("password");
    let characters = "";
    let generatedPassword = "";

    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
     if (numbers) {
        characters += "0123456789";
    }
    if (symbols) {
        characters += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
        generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    password.value = generatedPassword;
};
