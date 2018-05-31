const musicGenres = {
  gender1: {
    text: "Rock",
    color: ""},
  gender2: {
    text: "Country",
    color: ""},
  gender3: {
    text: "Pop",
    color: ""},
  gender4: {
    text: "Jazz",
    color: ""},
  gender5: {
    text: "Electronic",
    color: ""}
 };

let currentGenres = {
  genre1: "",
  genre2: "",
}

function insertTextInButton(sText, oButton){
  oButton.textContent = sText;
}

function initializeMusicButtons(){
  let aButtons = $(".music-button");
  for (let button in aButtons){
    let currentButton = aButtons[button];
    let sGenre        = getMusicGenre(currentButton.id);
    insertTextInButton(sGenre, currentButton);
  };
}

$(document).ready(function(){
  initializeMusicButtons();
});


function isGenreInList(sGenre){
  return currentGenres.genre1 == sGenre || currentGenres.genre2 == sGenre;
}

function addGenreInList(sGenre){
  currentGenres.genre2 = currentGenres.genre1;
  currentGenres.genre1 = sGenre;
}

function removeGenreFromList(sGenre){
  if (currentGenres.genre1 === sGenre){
    currentGenres.genre1 = currentGenres.genre2;
    currentGenres.genre2 = "";
  } else if(currentGenres.genre2 === sGenre){
    currentGenres.genre2 = "";
  }
}

function getMusicGenre(sMusicGenreProperty){
  return musicGenres[sMusicGenreProperty].text;
}

function addGender(){
  let sClickSource = event.path[0].id;
  let sMusicGenre  = getMusicGenre(sClickSource); 
  
  if(isGenreInList(sMusicGenre)){
    removeGenreFromList(sMusicGenre);
  } else {
    addGenreInList(sMusicGenre);
  }
  
  changeGenreInView();
}

function changeHeaderText({text: sText, objectId: sId}){
  let header = $(sId);
  header.text(sText);
}

function changeGenreInView(){
  let sId = "#genre-playing";
  let sText;
  if(isTwoGenres()){
    sText = currentGenres.genre1 + "-" + currentGenres.genre2;
  } else if(isOneGenre()){
    sText = currentGenres.genre1;
  } else {
    sText = "Pick Something :D";
    }
  changeHeaderText({text: sText, objectId: sId});
}

function isTwoGenres(){
  return (currentGenres.genre2 !== "");
}

function isOneGenre(){
  return (currentGenres.genre1 !== "");
}