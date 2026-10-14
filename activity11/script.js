function pickRandomName() {
    const inputElement = document.getElementById("namesInput");
    const infoDisplay = document.getElementById("infoDisplay");
    const nameDisplay = document.getElementById("nameDisplay");

    const input = inputElement.value;

    const names = input
        .split(/[\n,]+/)
        .map(name => name.trim())
        .filter(name => name !== "");

    if (names.length === 0) {
        infoDisplay.innerText = "";
        nameDisplay.innerText = "Please enter at least one name!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);

    infoDisplay.innerHTML = `
        Total Names: <strong>${names.length}</strong><br>
        Random Number Picked: <strong>${randomIndex + 1}</strong>
    `;

    nameDisplay.innerText = names[randomIndex];
}

function clearNames() {
    document.getElementById("namesInput").value = "";
    document.getElementById("infoDisplay").innerText = "";
    document.getElementById("nameDisplay").innerText = "";
}