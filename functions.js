var audioTag;
var currentPlaylist;
var currentPlaylistIndex = 0;
var currentPlaylistInformation;
var status = 0;

const musicInformation = {
    rock: {
        musician        : ['Algum nome', null],
        audioFile       : ['resources/audios/countryrock%20Eduardo%20Ara%C3%BAjo%20(com%20Dr.%20Sin)%20-%20Meu%20Cavalo.mp3', 'resources/audios/southernjazzfusion%20Dixie%20Dregs%20-%20Road%20Expense.mp3'],
        albumImage      : ['resources/images/rock.jpg', null],
        backgroundImage : null
    },

    jazz: {
        musician        : [null, null],
        audioFile       : ['resources/audios/southernjazzfusion%20Dixie%20Dregs%20-%20Road%20Expense.mp3', null],
        albumImage      : ['resources/images/jazz.jpg', null],
        backgroundImage : null
    },

    electronic: {
        musician        : [null, null],
        audioFile       : ['resources/audios/eletronic%20country%20Audien%20-%20Something%20Better%20ft.%20Lady%20Antebellum.mp3', null],
        albumImage      : ['resources/images/electronic.jpg', null],
        backgroundImage : null
    },

    country: {
        musician        : [null, null],
        audioFile       : ['resources/audios/countrypop%20Shania%20Twain%20-%20Man!%20I%20Feel%20Like%20A%20Woman.mp3', null],
        albumImage      : ['resources/images/country.jpg', null],
        backgroundImage : null
    },

    pop: {
        musician        : [null, null],
        audioFile       : ['resources/audios/poprock%20Nickelback%20-%20Photograph.mp3', null],
        albumImage      : ['resources/images/pop.jpg', null],
        backgroundImage : null
    },

    country_rock: {
        musician        : 'Algum nome',
        audioFile       : ['resources/audios/countryrock%20Eduardo%20Ara%C3%BAjo%20(com%20Dr.%20Sin)%20-%20Meu%20Cavalo.mp3', null],
        albumImage      : ['resources/images/countrypop.jpg', null],
        backgroundImage : null
    },

    jazz_southern: {
        musician        : [null, null],
        audioFile       : ['resources/audios/southernjazzfusion%20Dixie%20Dregs%20-%20Road%20Expense.mp3', null],
        albumImage      : ['resources/images/southernjazz.jpg', null],
        backgroundImage : null
    },

    country_electronic: {
        musician        : [null, null],
        audioFile       : ['resources/audios/eletronic%20country%20Audien%20-%20Something%20Better%20ft.%20Lady%20Antebellum.mp3', null],
        albumImage      : 'resources/images/electroniccountry.jpg',
        backgroundImage : null
    },

    country_pop: {
        musician        : [null, null],
        audioFile       : ['resources/audios/countrypop%20Shania%20Twain%20-%20Man!%20I%20Feel%20Like%20A%20Woman.mp3', null],
        albumImage      : ['resources/images/countrypop.jpg', null],
        backgroundImage : null
    },

    pop_rock: {
        musician        : [null, null],
        audioFile       : ['resources/audios/poprock%20Nickelback%20-%20Photograph.mp3', null],
        albumImage      : ['resources/images/poprock.jpg', null],
        backgroundImage : null
    },

    jazz_pop: {
        musician        : [null, null],
        audioFile       : ['resources/audios/jazzpop%20george-duke-shine-on.mp3', null],
        albumImage      : ['resources/images/jazzpop.jpg', null],
        backgroundImage : null
    },

    eletro_pop: {
        musician        : [null, null],
        audioFile       : ['resources/audios/eletropop%20Owl%20City%20-%20Fireflies.mp3', null],
        albumImage      : ['resources/images/eletropop.jpg', null],
        backgroundImage : null
    },

    jazz_nu: {
        musician        : [null, null],
        audioFile       : ['resources/audios/nujazz%20Bonobo%20-%20Kiara.mp3', null],
        albumImage      : ['resources/images/nujazz.jpg', null],
        backgroundImage : null
    },

    electronic_rock: {
        musician        : [null, null],
        audioFile       : ['resources/audios/eletronicrock%20M83%20Reunion.mp3', null],
        albumImage      : ['resources/images/electronicrock.jpg', null],
        backgroundImage : null
    },

    fusion_jazz: {
        musician        : [null, null],
        audioFile       : ['resources/audios/jazzfusion%20Casiopea%20-%20Galactic%20Funk.mp3', null],
        albumImage      : ['resources/images/jazzfusion.jpg', null],
        backgroundImage : null
    }
}

const musicGenres = {
    gender1: {
        text: "Rock",
        color: ""
    },
    gender2: {
        text: "Country",
        color: ""
    },
    gender3: {
        text: "Pop",
        color: ""
    },
    gender4: {
        text: "Jazz",
        color: ""
    },
    gender5: {
        text: "Electronic",
        color: ""
    }
};

let currentGenres = {
    genre1: "",
    genre2: "",
}

function insertTextInButton(sText, oButton) {
    oButton.textContent = sText;
}

function initializeMusicButtons() {
    let aButtons = $(".music-button");
    for (let button in aButtons) {
        let currentButton = aButtons[button];
        let sGenre = getMusicGenre(currentButton.id);
        insertTextInButton(sGenre, currentButton);
    };
}

$(document).ready(function () {
    initializeMusicButtons();
});


function isGenreInList(sGenre) {
    return currentGenres.genre1 == sGenre || currentGenres.genre2 == sGenre;
}

function addGenreInList(sGenre) {
    currentGenres.genre2 = currentGenres.genre1;
    currentGenres.genre1 = sGenre;
}

function removeGenreFromList(sGenre) {
    if(isOneGenre()){
        pauseSong();
    }

    if (currentGenres.genre1 === sGenre) {
        currentGenres.genre1 = currentGenres.genre2;
        currentGenres.genre2 = "";
    } else if (currentGenres.genre2 === sGenre) {
        currentGenres.genre2 = "";
    }
}

function getMusicGenre(sMusicGenreProperty) {
    return musicGenres[sMusicGenreProperty].text;
}

function addGender() {
    let sClickSource = event.path[0].id;
    let sMusicGenre = getMusicGenre(sClickSource);

    if (isGenreInList(sMusicGenre)) {
        removeGenreFromList(sMusicGenre);

    } else {
        addGenreInList(sMusicGenre);
    }

    changeGenreInView();
    playGenreMusic();
}

function changeHeaderText({text: sText, objectId: sId}) {
    let header = $(sId);
    header.text(sText);
}

function getGenreCompleteText(){
    let sId = "#genre-playing";
    let sText;
    if (isTwoGenres()) {
        sText = determineMixedGenre("-")
    } else if (isOneGenre()) {
        sText = currentGenres.genre1;
    } else {
        sText = "Pick Something :D";
    }

    return sText;
}

function changeGenreInView() {
    let sId = "#genre-playing";
    let sText = getGenreCompleteText;
    changeHeaderText({text: sText, objectId: sId});
}

function playGenreMusic() {
    currentPlaylistIndex = 0;
    audioTag = $('audio')[0];

    currentPlaylist = resolveCurrentPlaylist();
    currentPlaylistInformation = musicInformation[currentPlaylist.toLowerCase()];

    len = currentPlaylistInformation.audioFile.length - 1;

    audioTag.volume = 1;

    run(currentPlaylistInformation, audioTag);

    audioTag.addEventListener('ended', playNextSong);
}

function run(plInformation, player) {
    player.src = getMusicFile(plInformation);
    audioTag.load();
    handleMediaPlayButtonAction();
}

function handleMediaPlayButtonAction(pauseButton) {
    if(pauseButtonPressed(pauseButton)){
        pauseSong();
        $("#play").attr("class","glyphicon glyphicon-play aligned")
        status = 2;
    }else {
        playSong();
        $("#play").attr("class", "glyphicon glyphicon-pause aligned")
        status = 1;
    }
}

function playNextSong() {
    if (currentPlaylistIndex == len) {
        currentPlaylistIndex = 0;
    } else {
        currentPlaylistIndex++;
    }
    run(currentPlaylistInformation, audioTag, currentPlaylist);
}

function playPreviousSong() {
    if (currentPlaylistIndex == 0) {
        currentPlaylistIndex = 0;
    } else {
        currentPlaylistIndex--;
    }
    run(currentPlaylistInformation, audioTag, currentPlaylist);
}

function resolveCurrentPlaylist() {
    let genre;
    if(!isTwoGenres()){
        genre = currentGenres.genre1;
    } else{
        genre = determineMixedGenre("_");
    }
    return genre;
}

function determineMixedGenre(separator){
    let aGenre = [currentGenres.genre1, currentGenres.genre2];
    aGenre.sort();
    aGenre = aGenre.join(separator)

    return aGenre;
}

function volumeUp() {
    myFunction();
    audioTag.volume = audioTag.volume + .1;
}

function volumeDown() {
    myFunction();
    audioTag.volume = audioTag.volume - .1;
}

function pauseSong() {
    audioTag.pause();
}

function playSong() {
    audioTag.play();
}

function getMusicFile(currentPlaylist) {
    return currentPlaylist.audioFile[currentPlaylistIndex];
}

function isTwoGenres() {
    return (currentGenres.genre2 !== "");
}

function isOneGenre() {
    return (currentGenres.genre1 !== "");
}

function pauseButtonPressed(pauseButton) {
    return status == 1 && pauseButton === true;
}