let hour_count = 0;
const display = document.getElementById("hour-display");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");

let canClickUp = true;
let canClickDown = true;

// 📦 Lade gespeicherten Wert aus localStorage
if (localStorage.getItem("hours")) {
    hour_count = parseInt(localStorage.getItem("hours"));
}
updateDisplay();

// 🔁 Anzeige aktualisieren & speichern
function updateDisplay() {
    display.textContent = hour_count + "h";
    localStorage.setItem("hours", hour_count);
}

// ⏳ Cooldown-Funktion
function setCooldown(buttonType) {
    if (buttonType === "up") {
        canClickUp = false;
        upBtn.classList.add("cooldown");
        setTimeout(() => {
            canClickUp = true;
            upBtn.classList.remove("cooldown");
        }, 2000);
    } else if (buttonType === "down") {
        canClickDown = false;
        downBtn.classList.add("cooldown");
        setTimeout(() => {
            canClickDown = true;
            downBtn.classList.remove("cooldown");
        }, 1000);
    }
}

// ⬆️ +1 Stunde
function btn_up() {
    if (!canClickUp) return; // Wenn Cooldown aktiv, nichts tun
    hour_count += 1;
    updateDisplay();
    setCooldown("up");
}

// ⬇️ -1 Stunde (nicht unter 0)
function btn_down() {
    if (!canClickDown) return; // Wenn Cooldown aktiv, nichts tun
    if (hour_count > 0) {
        hour_count -= 1;
        updateDisplay();
    }
    setCooldown("down");
}

// 🧱 Klick-Events stabil registrieren
upBtn.addEventListener("click", btn_up);
downBtn.addEventListener("click", btn_down);
