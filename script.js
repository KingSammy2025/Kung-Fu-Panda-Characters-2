// Kung Fu Panda Search

// Inputs
document.getElementById("btn").addEventListener("click", clickMe);
function clickMe() {
  let characterName = document.getElementById("char-in").value.toLowerCase();

  // IF Statements
  if (characterName === "po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-img").src = "images/po.png";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
  } else if (characterName === "tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-img").src = "images/tigress.png";
    document.getElementById("char-quote").innerHTML =
      "Well, you should be! I am Tigress, Tigress the monster! A monster no one wants.";
  } else if (characterName === "boss wolf") {
    document.getElementById("char-name").innerHTML = "Boss Wolf";
    document.getElementById("char-img").src = "images/boss-wolf.png";
    document.getElementById("char-quote").innerHTML =
      "I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face!";
  } else if (characterName === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-img").src = "images/crane.png";
    document.getElementById("char-quote").innerHTML =
      "No no no, I meant you don't belong here—I mean, in this room. This is my room. Property of Crane.";
  } else if (characterName === "croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-img").src = "images/croc.png";
    document.getElementById("char-quote").innerHTML = "Vengeance is Served!";
  } else if (characterName === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-img").src = "images/kai.png";
    document.getElementById("char-quote").innerHTML =
      "You must be the Dragon Warrior!";
  } else if (characterName === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-img").src = "images/mantis.png";
    document.getElementById("char-quote").innerHTML =
      "Trust me, it will. It's just not easy finding the right nerve points under all this--";
  } else if (characterName === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-img").src = "images/monkey.png";
    document.getElementById("char-quote").innerHTML =
      "At the first sign of trouble, I'll give you a signal. Ka-ka! Kee-kee!";
  } else if (characterName === "mr ping") {
    document.getElementById("char-name").innerHTML = "Mr Ping";
    document.getElementById("char-img").src = "images/mr-ping.png";
    document.getElementById("char-quote").innerHTML =
      "The secret ingredient of my Secret Ingredient Soup.";
  } else if (characterName === "oogway") {
    document.getElementById("char-name").innerHTML = "Master Oogway";
    document.getElementById("char-img").src = "images/oogway.png";
    document.getElementById("char-quote").innerHTML =
      "I think they will all lose until they find a battle worth fighting.";
  } else if (characterName === "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-img").src = "images/shen.png";
    document.getElementById("char-quote").innerHTML =
      "Ah, there you are, Soothsayer. It seems your fortune-telling skills are not as good as you thought.";
  } else if (characterName === "shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-img").src = "images/shifu.png";
    document.getElementById("char-quote").innerHTML =
      "You are not a monster...you're just a little girl.";
  } else if (characterName === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-img").src = "images/soothsayer.png";
    document.getElementById("char-quote").innerHTML =
      "Now?... The most important time is now.";
  } else if (characterName === "storming ox") {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-img").src = "images/storming-ox.png";
    document.getElementById("char-quote").innerHTML =
      "I'd like to see you get me out!";
  } else if (characterName === "tai lung") {
    document.getElementById("char-name").innerHTML = "Tai Lung";
    document.getElementById("char-img").src = "images/tai-lung.png";
    document.getElementById("char-quote").innerHTML =
      "I have come home, Master.";
  } else if (characterName === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-img").src = "images/viper.png";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight!";
  } else {
    document.getElementById("char-name").innerHTML = "??????";
    document.getElementById("char-img").src = "images/question-mark.png";
    document.getElementById("char-quote").innerHTML =
      "????????????????????????????????????????????????????????????????????";
  }
}

// Custom theme
document.getElementById("theme-btn").addEventListener("click", changeMe);
function changeMe() {
  let color = document.getElementById("theme").value.toLowerCase();
  if (color === "black" || color === "dark") {
    document.getElementById("colour").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("char-title").style.color = "white";
    document.getElementById("char-name").style.color = "white";
    document.getElementById("char-quote").style.color = "white";
  } else if (color === "white" || color === "light") {
    document.getElementById("colour").style.backgroundColor =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("char-title").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("char-quote").style.color = "black";
  } else if (color === "random") {
    let r = Math.random() * 255;
    r = Math.round(r);
    let g = Math.random() * 255;
    g = Math.round(g);
    let b = Math.random() * 255;
    b = Math.round(b);
    let rgbString = "rgb" + "(" + r + ", " + g + ", " + b + ")";
    document.getElementById("char-title").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("char-quote").style.color = "black";
    document.getElementById("colour").style.background = rgbString;
  } else {
    document.getElementById("colour").style.backgroundColor = "red";
  }
}
