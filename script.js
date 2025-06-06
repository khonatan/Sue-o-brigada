// Calculadora
const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".calc-buttons button");
const options = document.getElementById("options");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "AC") {
            display.value = "";
        } else if (button.textContent === "=") {
            if (display.value === "18+19") {
                display.value = "AMOR";
                document.getElementById("calculator").classList.add("hidden");
                options.classList.remove("hidden");
            } else {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "ERROR";
                }
            }
        } else {
            display.value += button.textContent;
        }
    });
});

// Opciones
document.getElementById("btn-white").addEventListener("click", () => {
    showCard("white");
});
document.getElementById("btn-black").addEventListener("click", () => {
    showCard("black");
});
document.getElementById("btn-blue").addEventListener("click", () => {
    showCard("blue");
});

function showCard(color) {
    document.getElementById("main-screen").classList.add("hidden");
    document.getElementById(`card-${color}`).classList.remove("hidden");
    document.getElementById(`audio-${color}`).play();
}

// Botón cerrar tarjetas
document.querySelectorAll(".back-button").forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById("main-screen").classList.remove("hidden");
        document.querySelectorAll(".card").forEach(card => {
            card.classList.add("hidden");
        });
        document.querySelectorAll("audio").forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    });
});

// Mini nota blanca
document.getElementById("note-button").addEventListener("click", () => {
    document.getElementById("mini-note").classList.remove("hidden");
});
document.getElementById("close-note").addEventListener("click", () => {
    document.getElementById("mini-note").classList.add("hidden");
});

// Contador de amor
function updateLoveCounter() {
    const startDate = new Date("2024-12-13T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("love-counter").textContent =
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateLoveCounter, 1000);