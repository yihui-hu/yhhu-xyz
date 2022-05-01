var imagesArray = ["./images/war_and_peace.jpg", "./images/flowers-graphite.png", "./images/mercy-otis-warren.png"];

displayImage(imagesArray);

function displayImage(imagesArray) {
    var index = Math.floor(Math.random() * imagesArray.length);
    var imageSrc = imagesArray[index];
    var imgString = '<img class="normal" src="' + imageSrc + '" alt="">';
    document.write(imgString); document.close();
}