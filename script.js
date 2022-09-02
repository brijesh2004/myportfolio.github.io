setInterval(() => {
    setTimeout(() => {
      let x = document.getElementById("name").innerHTML = "HI";
      document.getElementById("name").style.color = "red";
    }, 500);
    setTimeout(() => {
      let x = document.getElementById("name").innerHTML = "HI I";
      document.getElementById("name").style.color = "yellow";
    }, 1000);
    setTimeout(() => {
      document.getElementById("name").innerHTML = "HI I AM";
      document.getElementById("name").style.color = "blue";
    }, 1500);
    setTimeout(() => {
      document.getElementById("name").innerHTML = "HI I AM BRIJESH";
      document.getElementById("name").style.color = "gray";
    }, 2000);
    setTimeout(() => {
      document.getElementById("name").innerHTML = "HI I AM BRIJESH SINGH";
      document.getElementById("name").style.color = "green";
    }, 2500);
    setTimeout(() => {
        document.getElementById("name").innerHTML = "HI I AM BRIJESH";
        document.getElementById("name").style.color = "gray";
      }, 3000);
      setTimeout(() => {
        document.getElementById("name").innerHTML = "HI I AM";
        document.getElementById("name").style.color = "blue";
      }, 3500);
      setTimeout(() => {
        document.getElementById("name").innerHTML = "HI I ";
        document.getElementById("name").style.color = "blue";
      }, 4000);
      setTimeout(() => {
        document.getElementById("name").innerHTML = "HI";
        document.getElementById("name").style.color = "blue";
      }, 4500);
  }, 5000);


let hero=document.getElementById("hero");
function Changehero(){
  hero.src="hero2.jpg";
}
function ChangeAgain(){
  hero.src="hero.jpg";
}