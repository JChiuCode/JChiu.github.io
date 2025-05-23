document.addEventListener("DOMContentLoaded", function() {
    /* 
    Homepage and Navigation buttons
    */
    const buttons = document.querySelectorAll(".navbar-list button");
    const sections = document.querySelectorAll(".content-section");

    //Display homepage upon load
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? "block" : "none";
    });

    //Navigation Buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target"); // Get target section

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the target section
            document.getElementById(target).style.display = "block";
        });
    });

    /* 
    Portfolio Filter
    */
   document.querySelectorAll(".filter-btn").forEach(item => {
    item.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        document.querySelectorAll(".portfolio-item").forEach(item => {
            const itemCategory = item.getAttribute("data-category");
            if (filter == "all" || itemCategory === filter) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
   });


    /*
    Portfolio Modal
    */
    const modal = document.getElementById("portfolioModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", function () {
            modalImage.src = this.getAttribute("data-image");
            modalTitle.textContent = this.getAttribute("data-title");
            modalDescription.textContent = this.getAttribute("data-description");
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});