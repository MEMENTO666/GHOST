const menu = document.querySelector(".ClickMenu");
const subBar=document.querySelector(".ClickMenu>.sub");
const MenuList = document.querySelector(".MenuList");
const LiList = document.querySelectorAll(".li_list");
const ClickMenu = document.querySelector(".ClickMenu");
const MENUBOX = document.querySelector(".menu");
const MenuHeight = MENUBOX.getBoundingClientRect().height;

const IconImage = [
  {url: '../image/SPLogo.png'},
  {url: '../image/red_button.png'},
  {url: '../image/menuIcon.png'},
]

// let subToggle=true;
// function show_sub(){
//   if(subToggle){
//     subBar.style.height="0px";
//     subToggle =! subToggle;
//   }else{
//     subBar.style.height="200px";
//     subToggle =! subToggle;
//   }
// };


// menu.addEventListener("mouseover",show_sub);

//console.log(LiList);

menu.addEventListener("mouseover", () => {
  subBar.style.height = "120px";
  subBar.style.opacity = "0.8";
});

menu.addEventListener("mouseout", () => {
  subBar.style.height = "0px";
});


const makeEvents1 = () => {
  for(let i=0; i<LiList.length; i++) {
    LiList[i].addEventListener("mouseover", () => {
      LiList[i].style.backgroundImage ="url('../image/menuIcon.png')";
    });
    
    LiList[i].addEventListener("mouseout", () => {
      LiList[i].style.backgroundImage ="none";
      //todo 여기 반응형으로 다시 손봐야 할듯, matchmedia 사용해서 작아지면 이미지 안보이게.
    });
  }
}



const makeEvents2 = () => {
  LiList.forEach( (singleNode, idx) => {
    console.log('singleNode !!!!!!!!!!', idx);
  
    if(idx === 1) {
      console.log('가운데 메뉴는 아무것도 처리하지 않음...');
    } else {
      singleNode.addEventListener("mouseover", () => {
        singleNode.style.backgroundImage = "url('../image/menuIcon.png')";
      });
    
      singleNode.addEventListener("mouseout", () => {
        singleNode.style.backgroundImage = "none";
      });
    }
  });
}

makeEvents1(); //! for
// makeEvents2(); //! forEach


ClickMenu.addEventListener("mouseover", () => {
  ClickMenu.style.backgroundImage ="url('../image/menuIcon.png')";
  ClickMenu.style.backgroundrepeat ="no-repeat"
});

ClickMenu.addEventListener("mouseout", () => {
  ClickMenu.style.backgroundImage ="none";
});

window.addEventListener("mousewheel", () =>{
  if(window.scrollY > MenuHeight) {
    MENUBOX.style.backgroundColor = "white";
    MENUBOX.style.top = "0px";
    MenuList.style.color = "black";
    ClickMenu.style.color = "black";
  } else {
    MENUBOX.style.backgroundColor = "transparent"
    MenuList.style.color = "white";
    ClickMenu.style.color = "white";
    MENUBOX.style.top = "10px";

  }
});

  



