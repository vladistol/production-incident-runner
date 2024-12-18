document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const resetButton = document.getElementById("reset");

    // Load saved progress
    steps.forEach((step, index) => {
        const completed = localStorage.getItem(`step-${index}`);
        if (completed === "true") {
            step.checked = true;
        }
    });

    // Save progress on change
    steps.forEach((step, index) => {
        step.addEventListener("change", () => {
            localStorage.setItem(`step-${index}`, step.checked);
        });
    });

    // Reset progress
    resetButton.addEventListener("click", () => {
        steps.forEach((step, index) => {
            step.checked = false;
            localStorage.removeItem(`step-${index}`);
        });
    });
});
