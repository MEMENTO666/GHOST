let indexValue =1;

showImg(indexValue);

function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e) {
// let i;
const IMG = document.querySelectorAll("img")
const sliders = document.querySelectorAll(".btm-sliders span")

if(e > IMG.length) {indexValue = 1};
if(e < 1) {indexValue = IMG.length};
for(i = 0; i < IMG.length; i++) {
  IMG[i].style.display = "none";
}

for(i = 0; i < sliders.length; i++) {
  sliders[i].style.backgroundColor = "rgba(255,255,255,0.7)";
}

IMG[indexValue-1].style.display = "block";
sliders[indexValue-1].style.backgroundColor = "#cb3b3e";
sliders[indexValue-1].style.transition = "0.7s";
}