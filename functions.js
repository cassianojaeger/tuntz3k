const musicGenres = {
  gender1: "Rock",
  gender2: "Blues",
  gender3: "Soul",
  gender4: "Jazz",
 };

let currentGenres = {
  genre1: "",
  genre2: "",
}

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
  return musicGenres[sMusicGenreProperty];
}

function addGender(){
  let sClickSource = event.path[0].id;
  let sMusicGenre  = getMusicGenre(sClickSource); 
  
  if(isGenreInList(sMusicGenre)){
    removeGenreFromList(sMusicGenre);
  } else {
    addGenreInList(sMusicGenre);
  }
  
  console.log(currentGenres);
}
