// === JavaScript funksionallığı ===

const words = ["apple", "study", "learn", "travel", "success", "brilliant", "improve"];

// Login funksiyası
function login() {
  const user = document.getElementById('username').value.trim();
  if (user === "") {
    alert("Zəhmət olmasa istifadəçi adını daxil et!");
    return;
  }
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('home').style.display = 'block';
  showWords();

  // === Backend hissəsi üçün təxmini skelet ===
  // burda backend kodu vasitəsilə (məsələn, Node.js və ya PHP)
  // istifadəçi məlumatı bazaya göndərilə bilər.
  // fetch('/login', {method: 'POST', body: JSON.stringify({user})});
}

// Qeydiyyat funksiyası
function register() {
  alert("Qeydiyyat funksiyası demo mərhələsindədir 🧩");
}

// Flashcard sistemi
function showWords() {
  const flashcards = document.getElementById('flashcards');
  flashcards.innerHTML = "";
  const randomWords = words.sort(() => 0.5 - Math.random()).slice(0, 5);
  randomWords.forEach(w => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerText = w;
    flashcards.appendChild(div);
  });
}
