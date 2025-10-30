const toggle = document.querySelector("#toggleButton");
const toggleLabel = document.querySelector("#toggleButtonLabel");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("light-mode");
        toggleLabel.innerText = "Light Mode";
    } else {
        document.body.classList.remove("light-mode");
        toggleLabel.innerText = "Dark Mode"
    }
});
