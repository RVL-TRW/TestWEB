document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.querySelector(".Input-O1");
    const input2 = document.querySelector(".Input-O2");
    const startBtn = document.querySelector(".Start-btn");
    const heading = document.querySelector(".Heading");
    const body = document.body;

    // Begrenzung der Zeichenanzahl auf 20 Zeichen
    input1.maxLength = 20;
    input2.maxLength = 20;

    startBtn.addEventListener("click", function () {
        const option1 = input1.value.trim();
        const option2 = input2.value.trim();

        if (option1 === "" || option2 === "") {
            alert("Please fill in both fields!");
            return;
        }

        const choices = [option1, option2];
        const selected = choices[Math.floor(Math.random() * choices.length)];

        // Alles ausblenden
        input1.style.display = "none";
        input2.style.display = "none";
        startBtn.style.display = "none";
        heading.style.display = "none";

        // Ergebnis anzeigen
        const resultText = document.createElement("h2");
        resultText.textContent = `${selected}`;
        resultText.classList.add("result-text");
        resultText.className = "Answ-txt";
        body.appendChild(resultText);

        // Try Again Button hinzufügen
        const tryAgainBtn = document.createElement("button");
        tryAgainBtn.textContent = "Try Again";
        tryAgainBtn.classList.add("TryAgain-btn");
        tryAgainBtn.className = "Start-btn";
        body.appendChild(tryAgainBtn);

        tryAgainBtn.addEventListener("click", function () {
            // Seite zurücksetzen
            input1.value = "";
            input2.value = "";
            input1.style.display = "inline-block";
            input2.style.display = "inline-block";
            startBtn.style.display = "inline-block";
            heading.style.display = "block";
            resultText.remove();
            tryAgainBtn.remove();
        });
    });
});
