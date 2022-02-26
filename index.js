let wordArray = [
    "Abhinav", "Amotivation",
    "Angried", "Beachside", "Blert", "Chewy", "Chillax", "Cryptocurrency", "Microfinance",
    "Nomophobia", "Simples", "Stuffie", "Knowledge", "Business", "Highway"
];
// document.getElementById("currentWord").innerHTML = wordArray;

function playTheGame() {
    document.getElementById("strt").style.display = "none";
    (function() {
        setTimeout(function() { $("#hideDiv").fadeOut(1500); }, 5000)

    })
    document.getElementById("main").style.display = "block";
    showWords();
}

function showWords() {

    // for (let i = 0; i < wordArray.length; i++) {
    // var i = -1;
    // (function loop() {
    //     if (i++ > wordArray.length) return;
    //     setTimeout(function() {
    //         console.log(wordArray[i]);
    //         document.getElementById("wordDiv").innerHTML = `<span id="currentWord">${wordArray[i]}</span>`;
    //         loop();
    //     }, 3000);
    // })()
    var i = 0;

    insertElement();

    var interval = setInterval(function() {
        slideElements();
    }, 5000);


    function slideElements() {
        if (i >= wordArray.length) {
            clearInterval(interval);
            document.getElementById("wordDiv").innerHTML = '';
            return;
        }
        insertElement();
    }

    function insertElement() {
        document.getElementById("wordDiv").innerHTML = `<span id="currentWord">${wordArray[i]}</span>`;
        const inputValue = document.getElementById("input").value;
        if (i > 0) {
            const html = `<div class="word_list">
            <span>${wordArray[i-1]}</span>
        </div>`;
            if (wordArray[i - 1] == inputValue) {
                document.getElementById('correctDiv').insertAdjacentHTML('beforeend', html);
            } else {
                document.getElementById('wrongDiv').insertAdjacentHTML('beforeend', html);
            }
        }
        i++;
    }


}