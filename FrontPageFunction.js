function changeCursor(){
  const cursorImage=document.getElementById('sword');
  if (cursorImage.src.match("Sword"))
  {
  cursorImage.src="./FrontPageVisu/DefaultCursor.png";
  document.body.style.cursor="url('./FrontPageVisu/SwordCursor.cur'), default";
  document.body.style.pointer="url('./FrontPageVisu/FairyCursor.cur'), pointer";
  }
  else
  {
  cursorImage.src="./FrontPageVisu/Sword.png";
  document.body.style.cursor="default";
  }
} 



function displayRandomImage(){
const disclaimer=document.getElementById('disclaimer');
const randomImage=document.getElementById('randomImage');
  if (randomImage.style.display.match('block'))
  {
  randomImage.style.display='none';
  disclaimer.style.display='block';
  }
  else
  {
  disclaimer.style.display='none';
  randomImage.style.display='block';
  }
}

let randomizerSpeed;
function startRandomizer(){
  if (!randomizerSpeed){
  randomizerSpeed = setInterval(srcRandomizer, 80);
  }
  else{
  clearInterval(randomizerSpeed);
  randomizerSpeed = undefined;
  }
}

function srcRandomizer(){
let srcNumber = Math.floor((Math.random()*45)+1);
let randomSource = "./Zine/123img/" + srcNumber + ".jpg";
document.getElementById('randomImage').src = randomSource;
}


/* https://stackoverflow.com/questions/4564251/change-the-mouse-pointer-using-javascript */
/* function changeCursor(){
document.getElementsByTagName("body")[0].style.cursor="url('./FrontPageVisu/SwordCursor.cur'), default";
} */

/* var elementToChange=document.getElementsByTagName("homePageGrid")[0];
elementToChange.style.cursor="url('./FrontPageVisu/SwordCursor.cur'), default"; */
