const mainSection = document.getElementById("main-section");
// Portfolio Section Handling
const portfolioSections = ["lighting", "projections", "programming"];
for (let sectionId of portfolioSections) {
    const btn = document.getElementById(sectionId + "-btn");
    const section = document.getElementById(sectionId);
    btn.addEventListener("click", (event) => {
        section.scrollIntoView({ behavior: "smooth" });
    });
}
;
// Page Scroll Handling
const scrollThresh = window.innerHeight / 4;
const scrollTopBtn = document.getElementById("scroll-to-top");
window.onscroll = function (event) {
    if (document.body.scrollTop > scrollThresh || document.documentElement.scrollTop > scrollThresh) {
        scrollTopBtn.style.display = "block";
    }
    else {
        scrollTopBtn.style.display = "none";
    }
    ;
};
scrollTopBtn.addEventListener("click", (event) => {
    mainSection.scrollIntoView({ behavior: "smooth" });
});
export {};
//# sourceMappingURL=index.js.map