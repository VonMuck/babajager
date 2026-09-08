/* SOINC */
function displaySoinc(){
 const displayZine = document.getElementById('soincZine');
 if (displayZine.style.display.match("grid"))
 {
 displayZine.style.display='none';
 }
 else
 {
 displayZine.style.display='grid';
 }
}

function changeSoinc(){
    const PageSoinc_1=document.getElementById('soinc');
    if (PageSoinc_1.src.match("Back")){
    PageSoinc_1.src="./Soinc/Soinc.png";}
    else{
    PageSoinc_1.src="./Soinc/BackSoinc.png";}
    }

function changeLaits(){
    const PageSoinc_2=document.getElementById('laits');
    if (PageSoinc_2.src.match("Laits")){
    PageSoinc_2.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_2.src="./Soinc/Laits.png";}
    }

function changeShwoad(){
    const PageSoinc_3=document.getElementById('shwoad');
    if (PageSoinc_3.src.match("Shwoad")){
    PageSoinc_3.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_3.src="./Soinc/Shwoad.png";}
    }

function changeElmerad(){
    const PageSoinc_4=document.getElementById('elmerad');
    if (PageSoinc_4.src.match("Elmerad")){
    PageSoinc_4.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_4.src="./Soinc/Elmerad.png";}
    }

function changeKneckl(){
    const PageSoinc_5=document.getElementById('kneckl');
    if (PageSoinc_5.src.match("Kneckl")){
    PageSoinc_5.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_5.src="./Soinc/Kneckl.png";}
    }

function changeMya(){
    const PageSoinc_6=document.getElementById('mya');
    if (PageSoinc_6.src.match("Mya")){
    PageSoinc_6.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_6.src="./Soinc/Mya.png";}
    }

function changeVertoc(){
    const PageSoinc_7=document.getElementById('vertoc');
    if (PageSoinc_7.src.match("Vertoc")){
    PageSoinc_7.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_7.src="./Soinc/Vertoc.png";}
    }

function changeEgmang(){
    const PageSoinc_8=document.getElementById('egmang');
    if (PageSoinc_8.src.match("Egmang")){
    PageSoinc_8.src="./Soinc/BackSoinc.png";}
    else{
    PageSoinc_8.src="./Soinc/Egmang.png";}
    }

/* Bete De Nuit */
function displayBeteDeNuit2(){
 const displayZine = document.getElementById('beteDeNuitZine2');
 if (displayZine.style.display.match("grid"))
 {
 displayZine.style.display='none';
 }
 else
 {
 displayZine.style.display='grid';
 }
}

function displayBdNp1(){
document.getElementById('BdNp4').style.display="none";
document.getElementById('BdNp6').style.display="none";
document.getElementById('BdNp10').style.display="none";
document.getElementById('BdNp11').style.display="none";
document.getElementById('BdNp12').style.display="none";
document.getElementById('BdNp14').style.display="none";
document.getElementById('BdNp1').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P1cite.png";
}

function displayBdNp2(){
document.getElementById('BdNp1').style.display="none";
document.getElementById('BdNp2').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P2bar.png";
}

function displayBdNp3(){
document.getElementById('BdNp7').style.display="none";
document.getElementById('BdNp3').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P3oracle.png";
}

function displayBdNp4(){
document.getElementById('BdNp8').style.display="none";
document.getElementById('BdNp4').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P4tordboyaud.png";
}

function displayBdNp5(){
document.getElementById('BdNp13').style.display="none";
document.getElementById('BdNp5').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P5grange.png";
}

function displayBdNp6(){
document.getElementById('BdNp3').style.display="none";
document.getElementById('BdNp6').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P6cimetiere.png";
}

function displayBdNp7(){
document.getElementById('BdNp1').style.display="none";
document.getElementById('BdNp7').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P7maisonclose.png";
}

function displayBdNp8(){
document.getElementById('BdNp2').style.display="none";
document.getElementById('BdNp8').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P8menu.png";
}

function displayBdNp9(){
document.getElementById('BdNp3').style.display="none";
document.getElementById('BdNp7').style.display="none";
document.getElementById('BdNp9').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P9baise.png";
}

function displayBdNp10(){
document.getElementById('BdNp13').style.display="none";
document.getElementById('BdNp10').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P10couteau.png";
}

function displayBdNp11(){
document.getElementById('BdNp5').style.display="none";
document.getElementById('BdNp11').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P11piege.png";
}

function displayBdNp12(){
document.getElementById('BdNp2').style.display="none";
document.getElementById('BdNp12').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P12citronnade.png";
}

function displayBdNp13(){
document.getElementById('BdNp8').style.display="none";
document.getElementById('BdNp9').style.display="none";
document.getElementById('BdNp13').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P13silhouette.png";
}

function displayBdNp14(){
document.getElementById('BdNp5').style.display="none";
document.getElementById('BdNp14').style.display="inline";
document.getElementById('BdNCurrentPage').src="./BeteDeNuit/BdN_P14chaton.png";
}
