var audioTag;
var currentPlaylist;
var currentTracks;
var currentPlaylistIndex = 0;

const musicInformation = {
    rock: {
        musician: 'Algum nome',
        audioFile: 'resources/audios/countryrock%20Eduardo%20Ara%C3%BAjo%20(com%20Dr.%20Sin)%20-%20Meu%20Cavalo.mp3',
        albumImage: 'resources/images/alguma.jpg',
        backgroundImage: null
    },
    jazz: {
        musician: null,
        audioFile: null,
        albumImage: null,
        backgroundImage: null
    },
    electronic: {
        musician: null,
        audioFile: null,
        albumImage: null,
        backgroundImage: null
    },
    country: {
        musician: null,
        audioFile: null,
        albumImage: null,
        backgroundImage: null
    },
    pop: {
        musician: null,
        audioFile: null,
        albumImage: null,
        backgroundImage: null
    },

    country_rock: {
        musician: 'Algum nome',
        audioFile: 'resources/audios/countryrock%20Eduardo%20Ara%C3%BAjo%20(com%20Dr.%20Sin)%20-%20Meu%20Cavalo.mp3',
        albumImage: 'resources/images/alguma.jpg',
        backgroundImage: null
    },
    southern_jazz: {
        musician: null,
        audioFile: 'resources/audios/southernjazzfusion%20Dixie%20Dregs%20-%20Road%20Expense.mp3',
        albumImage: null,
        backgroundImage: null
    },
    electronic_country: {
        musician: null,
        audioFile: 'resources/audios/eletronic%20country%20Audien%20-%20Something%20Better%20ft.%20Lady%20Antebellum.mp3',
        albumImage: null,
        backgroundImage: null
    },
    country_pop: {
        musician: null,
        audioFile: 'resources/audios/countrypop%20Shania%20Twain%20-%20Man!%20I%20Feel%20Like%20A%20Woman.mp3',
        albumImage: null,
        backgroundImage: null
    },
    pop_rock: {
        musician: null,
        audioFile: 'resources/audios/poprock%20Nickelback%20-%20Photograph.mp3',
        albumImage: null,
        backgroundImage: null
    },
    jazz_pop: {
        musician: null,
        audioFile: 'resources/audios/jazzpop%20george-duke-shine-on.mp3',
        albumImage: null,
        backgroundImage: null
    },
    eletro_pop: {
        musician: null,
        audioFile: 'resources/audios/eletropop%20Owl%20City%20-%20Fireflies.mp3',
        albumImage: null,
        backgroundImage: null
    },
    nu_jazz: {
        musician: null,
        audioFile: 'resources/audios/nujazz%20Bonobo%20-%20Kiara.mp3',
        albumImage: null,
        backgroundImage: null
    },
    electronic_rock: {
        musician: null,
        audioFile: 'resources/audios/eletronicrock%20M83%20Reunion.mp3',
        albumImage: null,
        backgroundImage: null
    },
    jazz_fusion: {
        musician: null,
        audioFile: 'resources/audios/jazzfusion%20Casiopea%20-%20Galactic%20Funk.mp3',
        albumImage: null,
        backgroundImage: null
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
    }
    ;
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
        audioTag.pause();
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

function changeGenreInView() {
    let sId = "#genre-playing";
    let sText;
    if (isTwoGenres()) {
        sText = currentGenres.genre1 + "-" + currentGenres.genre2;
    } else if (isOneGenre()) {
        sText = currentGenres.genre1;
    } else {
        sText = "Pick Something :D";
    }
    changeHeaderText({text: sText, objectId: sId});
}

function playGenreMusic() {
    currentPlaylistIndex = 0;
    audioTag = $('audio')[0];
    currentPlaylist = $(resolveCurrentPlaylist());
    currentTracks = currentPlaylist.find('li a');
    len = currentTracks.length - 1;
    audioTag.volume = 1;

    let musicLinkComponent = currentPlaylist.find('a');

    run(musicLinkComponent, audioTag, currentPlaylist);
    audioTag.addEventListener('ended', function (e) {
        if (current == len) {
            current = 0;
            link = currentPlaylist.find('a')[0];
        } else {
            current++;
            link = currentPlaylist.find('a')[current];
        }
        run($(link), audioTag, currentPlaylist);
    });
}

function resolveCurrentPlaylist() {
    let genre;
    if(!isTwoGenres()){
        genre = currentGenres.genre1;
    } else{
        genre = determineMixedGenre();
    }
    return '#'.concat(genre);
}

function determineMixedGenre(){
    let mixedGenre = currentGenres.genre1.concat('-', currentGenres.genre2)

    switch (mixedGenre.toLowerCase()){
        case 'pop-rock':
        case 'rock-pop':
            return 'pop-rock';
        case 'country-rock':
        case 'rock-country':
            return 'country-rock'
        case 'country-jazz':
        case 'jazz-country':
            return 'southern-jazz';
        case 'electronic-country':
        case 'country-electronic':
            return 'electronic-country';
        case 'country-pop':
        case 'pop-country':
            return 'country-pop';
        case 'jazz-pop':
        case 'pop-jazz':
            return 'jazz-pop';
        case 'electronic-pop':
        case 'pop-electronic':
            return 'eletro-pop';
        case 'jazz-electronic':
        case 'electronic-jazz':
            return 'nu-jazz';
        case 'electronic-rock':
        case 'rock-electronic':
            return 'electronic-rock';
        case 'jazz-rock':
        case 'rock-jazz':
            return 'jazz-fusion';
    }
}

function run(musicLinkComponent, player, currentPlaylist) {
    player.src = getMusicFile(currentPlaylist);
    // player.src = musicLinkComponent.attr('href');
    par = musicLinkComponent.parent();
    par.addClass('active').siblings().removeClass('active');
    audioTag.load();
    audioTag.play();
}

function getMusicFile(currentPlaylist) {
    let playlistName = currentPlaylist.attr('id');
    let formattedMusicGenre = playlistName.replace("-", "_").toLowerCase();
    return musicInformation[formattedMusicGenre].audioFile
}

function isTwoGenres() {
    return (currentGenres.genre2 !== "");
}

function isOneGenre() {
    return (currentGenres.genre1 !== "");
}