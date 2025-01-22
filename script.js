function countElements() {
    let amountOfElements = document.body.querySelectorAll('body *');
    console.log(amountOfElements, amountOfElements.length);
}


function fillCopyright() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("copyright").innerHTML = `© ${year}`;
}