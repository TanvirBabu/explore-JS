var Photos = ['image/1.jpg', 'image/2.jpg'];
var imgTaq = document.querySelector("img")

var count = 0;
function next(){
    count++;
    if (count >= Photos.length){
        count = 0;
        imgTaq.src = Photos[count];
    } else {
        imgTaq.src = Photos[count];
    }
}

function prev(){
    count--;
    if (count < 0){
        count = Photos.length -1;
        imgTaq.src = Photos[count];
    } else {
        imgTaq.src = Photos[count];
    }
}