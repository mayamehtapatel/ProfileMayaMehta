document.getElementById("show-more-btn").addEventListener("click", function() {
    const extraInfo = document.getElementById("extra-info");
    const button = document.getElementById("show-more-btn");

    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "inline";
        button.textContent = "Show Less";
    } else {
        extraInfo.style.display = "none";
        button.textContent = "Show More";
    }
});
