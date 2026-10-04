const pseudoArray = ["BabaJager", "VonMuck", "Muckus",  "Shayulin", "Unipopcorn", "Mimic Mathy", "Ugin Agaz", "UwU"];
document.getElementById('pseudo').innerHTML = pseudoArray[0];
function pseudoTimer(){
setInterval(randomPseudo, 1200);
}
function randomPseudo(){
let pseudoNumber = Math.floor((Math.random()*8));
document.getElementById('pseudo').innerHTML = pseudoArray[pseudoNumber];
}

const likeArray = ["B-movies", "Kendama", "Crawling Dungeon", "Fast Electronic Music", "TCG", "Retro Gaming", "Parties"]
document.getElementById('like').innerHTML = likeArray[0];
function randomLike(){
let likeNumber = Math.floor((Math.random()*7));
document.getElementById('like').innerHTML = likeArray[likeNumber];
}

const dislikeArray = ["Lychee", "Blue", "Reggae", "Capitalism"]
document.getElementById('dislike').innerHTML = dislikeArray[0];
function randomDislike(){
let dislikeNumber = Math.floor((Math.random()*4));
document.getElementById('dislike').innerHTML = dislikeArray[dislikeNumber];
}

const profilPicArray = ["WaifuckornPP.jpg", "TartinePP.png", "ShayulinPP.png", "MuckusPP.png", "UnipopcornPP.png", "VonMuckPP.jpg"]
profilPicSource = "./FrontPageVisu/PP/" + profilPicArray[0];
console.log(profilPicSource);
document.getElementById('profilPic').src = profilPicSource;
function randomProfilPic(){
let profilPicNumber = Math.floor((Math.random()*6));
profilPicSource = "./FrontPageVisu/PP/" + profilPicArray[profilPicNumber];
document.getElementById('profilPic').src = profilPicSource;
}
