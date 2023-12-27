const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image_miku.png") {
    myImage.setAttribute("src", "images/image_mikumiku.png");
  } else {
    myImage.setAttribute("src", "images/image_miku.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName} さん、ミクさんはかわいいよ。`;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `ミクさんはかわいいよ、${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
      