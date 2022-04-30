readTimeEstimate();

function readTimeEstimate() {
    // get the text of the article using innerText property
    const text = document.getElementById("article").innerText; 
    // hard-coded reading speed -- adults = ~220-350wpm
    const wpm = 200;
    // get total no. of words by splitting the text by spaces
    const words = text.split(' ').length;
    const minutes = Math.ceil(words / wpm);
    document.getElementById("time").innerText = `${minutes} minute read \u00A0 | \u00A0 ${words} words`;
}