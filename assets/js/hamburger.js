let checkbox = document.querySelector("input[name=Hamburger]");

checkbox.addEventListener('change', function () { // Shows or hides the "section" depending on the hamberger input
    let section = document.querySelector("section");
    if (this.checked) {
        (section.classList.contains('section')) ? section.classList.remove('section') : false;
        (section.classList.contains('hidden')) ? true : section.classList.add('hidden');
    } else {
        (section.classList.contains('hidden')) ? section.classList.remove('hidden') : false;
        (section.classList.contains('section')) ? true : section.classList.add('section');
    }
});