function displayEDH(){
 const displayEDHcz = document.getElementById('EDH');
 if (displayEDHcz.style.display.match("flex"))
 {
 displayEDHcz.style.display='none';
 }
 else
 {
 displayEDHcz.style.display='flex';
 }
}

function displayModern(){
 const displayModernDecks = document.getElementById('Modern');
 if (displayModernDecks.style.display.match("flex"))
 {
 displayModernDecks.style.display='none';
 }
 else
 {
 displayModernDecks.style.display='flex';
 }
}
