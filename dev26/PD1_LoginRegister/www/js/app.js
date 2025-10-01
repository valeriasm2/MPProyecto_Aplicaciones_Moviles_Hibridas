// Diccionari inicial d'usuaris
let users = {
  "admin": "1234"
};

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

// LOGIN
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (users[user] && users[user] === pass) {
    message.textContent = "✅ Login correcte! Benvingut/da " + user;
    message.style.color = "green";
  } else {
    message.textContent = "❌ Usuari o contrasenya incorrecta";
    message.style.color = "red";
  }
});

// REGISTRE
registerForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("regEmail").value.trim();
  const user = document.getElementById("regUser").value.trim();
  const pass1 = document.getElementById("regPass").value.trim();
  const pass2 = document.getElementById("regPass2").value.trim();

  if (pass1 !== pass2) {
    message.textContent = "❌ Les contrasenyes no coincideixen";
    message.style.color = "red";
    return;
  }

  if (users[user]) {
    message.textContent = "❌ L'usuari ja existeix";
    message.style.color = "red";
    return;
  }

  // Afegim usuari al diccionari global
  users[user] = pass1;

  message.textContent = "✅ Usuari registrat correctament: " + user;
  message.style.color = "green";

  // Netejar formulari
  registerForm.reset();
});
