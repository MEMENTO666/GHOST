
document.querySelectorAll(".WallPaper_01 img").forEach(image =>{
  image.onclick = () => {
    document.querySelector(".popup_image").style.display = "block";
    document.querySelector(".popup_image img").src= image.getAttribute("src");
    console.log("팝업나와");
  }
});

document.querySelector(".popup_image span").onclick = () => {
  document.querySelector(".popup_image").style.display = "none";

  console.log("팝업 저리가");
};

// todo 아무 공간이나 클릭 했을 때, ESC 눌렀을 때 display none으로...!