var audioTag;
var currentPlaylist;
var currentPlaylistIndex = 0;
var currentPlaylistInformation;
var status = 0;

var musicInformation = {
    rock: {
        musician: ['Led Zeppelin - Rock and Roll (Live)', 'Harem Scarem - No Justice'],
        audioFile: ['resources/audios/rock%20Led%20Zeppelin%20-%20Rock%20And%20Roll%20(Live%20Video).mp3', 'resources/audios/rock%20Harem%20Scarem%20-%20No%20Justice.mp3'],
        albumImage: ['resources/images/album/rock.jpg', 'resources/images/album/rock2.jpg'],
        backgroundImage: 'resources/images/background/rockbackground.jpg'
    },

    jazz: {
        musician: ['Justin Hurwitzz - Caravan', 'Ryo Fukui - It Could Happen To You'],
        audioFile: ['resources/audios/jazz%20Justin%20Hurwitzz%20-Whiplash%20Soundtrack%20-%20Caravan.mp3', 'resources/audios/jazz%20Ryo%20Fukui%20-%20It%20Could%20Happen%20To%20You.mp3'],
        albumImage: ['resources/images/album/jazz.jpg', 'resources/images/album/jazz2.jpg'],
        backgroundImage: 'resources/images/background/jazzbackground.jpg'
    },

    electronic: {
        musician: ['Daft Punk - Harder Better Faster Stronger', 'DATADEBT - California Special (Remix)'],
        audioFile: ['resources/audios/electronic%20Daft%20Punk%20-%20Harder%20Better%20Faster%20Stronger.mp3', 'resources/audios/electronic%20DATADEBT%20-%20California%20Special%20(Eumig%20%20Chinon%20Remix).mp3'],
        albumImage: ['resources/images/album/electronic.jpg', 'resources/images/album/electronic2.jpg'],
        backgroundImage: 'resources/images/background/electronicbackground.jpg'
    },

    country: {
        musician: ['Chris Stapleton - Tennessee Whiskey', 'Blues Saraceno - Dogs of War'],
        audioFile: ['resources/audios/country%20Chris%20Stapleton%20-%20Tennessee%20Whiskey%20(Audio).mp3', 'resources/audios/country%20Blues%20Saraceno%20-%20Dogs%20of%20War.mp3'],
        albumImage: ['resources/images/album/country.jpg', 'resources/images/album/country2.jpg'],
        backgroundImage: 'resources/images/background/countrybackground.jpg'
    },

    pop: {
        musician: ['Britney Spears - Toxic', 'Ariana Grande - Focus'],
        audioFile: ['resources/audios/pop%20Britney%20Spears%20-%20Toxic%20(Official%20Video).mp3', 'resources/audios/pop%20Ariana%20Grande%20-%20Focus.mp3'],
        albumImage: ['resources/images/album/pop.jpg', 'resources/images/album/pop2.jpg'],
        backgroundImage: 'resources/images/background/popbackground.jpg'
    },

    country_rock: {
        musician: ['Eduardo Araújo (Feat. Dr. Sin) - Meu Cavalo', 'Lonnie Mack - Too Rock For Country Too Country For Rock And Roll'],
        audioFile: ['resources/audios/countryrock%20Eduardo%20Ara%C3%BAjo%20(com%20Dr.%20Sin)%20-%20Meu%20Cavalo.mp3', 'resources/audios/countryrock%20Lonnie%20Mack%20-%20Too%20Rock%20For%20Country%20Too%20Country%20For%20Rock%20And%20Roll.mp3'],
        albumImage: ['resources/images/album/countrypop.jpg', 'resources/images/album/countrypop2.jpg'],
        backgroundImage: 'resources/images/background/countryrockbackground.jpg'
    },

    country_jazz: {
        musician: ['Dixie Dregs - Road Expense', 'The Steve Morse Band -  General Lee'],
        audioFile: ['resources/audios/southernjazzfusion%20Dixie%20Dregs%20-%20Road%20Expense.mp3', 'resources/audios/southernjazzfusion%20General%20Lee%20The%20Steve%20Morse%20Band.mp3'],
        albumImage: ['resources/images/album/southernjazz.jpg', 'resources/images/album/southernjazz2.jpg'],
        backgroundImage: 'resources/images/background/southernjazzfusionbackground.jpg'
    },

    country_electronic: {
        musician: ['Audien (Feat. Lady Antebellum) - Something Better', 'Gazzo (Feat. Chase Rice) - Sun Turns Cold'],
        audioFile: ['resources/audios/eletronic%20country%20Audien%20-%20Something%20Better%20ft.%20Lady%20Antebellum.mp3', 'resources/audios/electroniccountry%20Gazzo%20Featuring%20Chase%20Rice%20-%20Sun%20Turns%20Cold.mp3'],
        albumImage: ['resources/images/album/electroniccountry.jpg', 'resources/images/album/electroniccountry2.jpg'],
        backgroundImage: 'resources/images/background/eletroniccountrybackground.jpg'
    },

    country_pop: {
        musician: ['Shania Twain - Man! I Feel Like A Woman', 'Lady Gaga - Joanne'],
        audioFile: ['resources/audios/countrypop%20Shania%20Twain%20-%20Man!%20I%20Feel%20Like%20A%20Woman.mp3', 'resources/audios/country%20pop%20Lady%20Gaga%20-%20Joanne%20(Audio).mp3'],
        albumImage: ['resources/images/album/countrypop.jpg', 'resources/images/album/countrypop2.jpg'],
        backgroundImage: 'resources/images/background/countrypopbackground.jpg'
    },

    pop_rock: {
        musician: ['Nickelback - Photograph', 'Fall Out Boy - Dance Dance'],
        audioFile: ['resources/audios/poprock%20Nickelback%20-%20Photograph.mp3', 'resources/audios/poprock%20Fall%20Out%20Boy%20-%20Dance%20Dance%20Lyrics.mp3'],
        albumImage: ['resources/images/album/poprock.jpg', 'resources/images/album/poprock2.jpg'],
        backgroundImage: 'resources/images/background/poprockbackground.jpg'
    },

    jazz_pop: {
        musician: ['George Duke - Shine On', 'Street Life - The Crusaders'],
        audioFile: ['resources/audios/jazzpop%20george-duke-shine-on.mp3', 'resources/audios/jazzpop%20Street%20Life%20-%20The%20Crusaders%201979.mp3'],
        albumImage: ['resources/images/album/jazzpop.jpg', 'resources/images/album/jazzpop2.jpg'],
        backgroundImage: 'resources/images/background/jazzpopbackground.jpg'
    },

    electronic_pop: {
        musician: ['Owl City - Fireflies', 'Lonely Island - Jizz In My Pants'],
        audioFile: ['resources/audios/eletropop%20Owl%20City%20-%20Fireflies.mp3', 'resources/audios/electropop%20lonelyisland%20Jizz%20In%20My%20Pants.mp3'],
        albumImage: ['resources/images/album/eletropop.jpg', 'resources/images/album/eletropop2.jpg'],
        backgroundImage: 'resources/images/background/eletropopbackground.jpg'
    },

    electronic_jazz: {
        musician: ['Bonobo - Kiara', 'Quantic - Transatlantic'],
        audioFile: ['resources/audios/nujazz%20Bonobo%20-%20Kiara.mp3', 'resources/audios/nujazz%20Quantic%20-%20Transatlantic.mp3'],
        albumImage: ['resources/images/album/nujazz.jpg', 'resources/images/album/nujazz2.jpg'],
        backgroundImage: 'resources/images/background/nujazzbackground.jpg'
    },

    electronic_rock: {
        musician: ['M83 - Reunion', 'MGMT - Eletric Feel'],
        audioFile: ['resources/audios/eletronicrock%20M83%20Reunion.mp3', 'resources/audios/electronicrock%20MGMT%20-%20Electric%20Feel.mp3'],
        albumImage: ['resources/images/album/electronicrock.jpg', 'resources/images/album/electronicrock2.jpg'],
        backgroundImage: 'resources/images/background/eletronicrockbackground.jpg'
    },

    jazz_rock: {
        musician: ['Casiopea - Galactic Funk', 'T-Square - Little League Star'],
        audioFile: ['resources/audios/jazzfusion%20Casiopea%20-%20Galactic%20Funk.mp3', 'resources/audios/jazz%20fusion%20t-square%20little%20league%20star.mp3'],
        albumImage: ['resources/images/album/jazzfusion.jpg', 'resources/images/album/jazzfusion2.jpg'],
        backgroundImage: 'resources/images/background/jazzfusionbackground.jpg'
    },
    no_genre: {
        musician: ['And a Music Will Play by: Some Artist', null],
        audioFile: [null, null],
        albumImage: [null, null],
        backgroundImage: null
    }
};

const musicGenres = {
    Rock: {
        mainColor: "#ff0000",
        beforeColor: "#cc0000",
        afterColor: "#ffb3b3",
        pressedColor: "#cc0000",
        shadorColor: "#ffad99"
    },
    Country: {
        mainColor: "#66ccff",
        beforeColor: "#b3ccff",
        afterColor: "#4d88ff",
        pressedColor: "#0099e6",
        shadorColor: "#cce6ff"

    },
    Pop: {
        mainColor: "#ff33cc",
        beforeColor: "#ffccf2",
        afterColor: "#ff66d9",
        pressedColor: "#990073",
        shadorColor: "#ffb3e6"

    },
    Jazz: {
        mainColor: "#ff9900",
        beforeColor: "#ffd699",
        afterColor: "#ffebcc",
        pressedColor: "#e68a00",
        shadorColor: "#ffe6cc"

    },
    Electronic: {
        mainColor: "#00cc00",
        beforeColor: "#b3ffb3",
        afterColor: "#4dff4d",
        pressedColor: "#008000",
        shadorColor: "#b3ffb3"
    }
};

let currentGenres = {
    genre1: "",
    genre2: ""
};

function createAllMusicButtons() {

    var oPlaceToInsertButtons = $("#menu")[0];
    for (let sGenre in musicGenres) {
        if (musicGenres[sGenre] === undefined) {
            break;
        } else {
            let oButton = createMusicButton({
                elementProperties: musicGenres[sGenre],
                sId: sGenre,
                onClickFunction: addGender
            });

            oPlaceToInsertButtons.appendChild(oButton);
        }
    }
}

function createMusicButton({
    elementProperties: oProperties,
    sId: sGenre,
    onClickFunction: fOnCLickFunction
}) {
    let oNewButton = document.createElement("BUTTON");
    let oButtonText = document.createTextNode(sGenre);

    oNewButton.id = sGenre;
    oNewButton.appendChild(oButtonText);
    oNewButton.classList.add("confetti-button");

    oNewButton.style.setProperty("--main-bg-color", oProperties.mainColor);
    oNewButton.style.setProperty("--before-bg-color", oProperties.beforeColor);
    oNewButton.style.setProperty("--after-bg-color", oProperties.afterColor);
    oNewButton.style.setProperty("--active-bg-color", oProperties.pressedColor);
    oNewButton.style.setProperty("--shadow-color", oProperties.shadorColor);

    oNewButton.onclick = function (event) {
        fOnCLickFunction()
    };

    return oNewButton;
}

function addAnimationEventToMusicButtons() {
    var animateButton = function (e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function () {
            e.target.classList.remove('animate');
        }, 700);
    };

    var classname = document.getElementsByClassName("confetti-button");

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', animateButton, false);
    }
}

$(document).ready(function () {
    createAllMusicButtons();
    addAnimationEventToMusicButtons();
});

function isGenreInList(sGenre) {
    return currentGenres.genre1 === sGenre || currentGenres.genre2 === sGenre;
}

function addGenreInList(sGenre) {
    currentGenres.genre2 = currentGenres.genre1;
    currentGenres.genre1 = sGenre;
}

function removeGenreFromList(sGenre) {
    if (isOneGenre()) {
        pauseSong();
    }

    if (currentGenres.genre1 === sGenre) {
        currentGenres.genre1 = currentGenres.genre2;
        currentGenres.genre2 = "";
    } else if (currentGenres.genre2 === sGenre) {
        currentGenres.genre2 = "";
    }
}

function addGender(artyomInput) {
    let sMusicGenre = artyomInput;
    if(typeof artyomInput == 'undefined'){
        let sMusicGenre = event.path[0].id;
    }

    if (isGenreInList(sMusicGenre)) {
        removePulseAnimation({
            id: sMusicGenre
        });
        removeSelectedAnimation({
            id: sMusicGenre
        });
        removeGenreFromList(sMusicGenre);

    } else {

        removePulseAnimation({
            id: currentGenres.genre2
        });
        removeSelectedAnimation({
            id: currentGenres.genre2
        });

        addGenreInList(sMusicGenre);
        addPulseAnimation({
            id: sMusicGenre
        });
        addSelectedAnimation({
            id: sMusicGenre
        });
    }

    changeGenrePlayingInView();
    playGenreMusic();
    changeBackgroundImage();
    var sColor1 = getGenreColor(currentGenres.genre1);
    var sColor2 = getGenreColor(currentGenres.genre2);
    changeBackgroundOverlay({
        color1: sColor1,
        color2: sColor2
    });
}

function removeClass({
    id: sObjectId,
    class: sClass
}) {
    if (sObjectId !== undefined && sObjectId !== "") {
        oElement = $("#" + sObjectId)[0];
        oElement.classList.remove(sClass);
    }
}

function addClass({
    id: sObjectId,
    class: sClass
}) {
    if (sObjectId !== undefined && sObjectId !== "") {
        oElement = $("#" + sObjectId)[0];
        oElement.classList.add(sClass);
    }
}

function removeSelectedAnimation({
    id: sObjectId
}) {
    removeClass({
        id: sObjectId,
        class: "selected"
    })
}

function addSelectedAnimation({
    id: sObjectId
}) {
    addClass({
        id: sObjectId,
        class: "selected"
    })
}

function removePulseAnimation({
    id: sObjectId
}) {
    removeClass({
        id: sObjectId,
        class: "pulsingButton"
    })
}

function addPulseAnimation({
    id: sObjectId
}) {
    addClass({
        id: sObjectId,
        class: "pulsingButton"
    })
}

function changeElementText({
    text: sText,
    objectId: sId
}) {
    let header = $(sId);
    header.text(sText);
}

function changeElementImage({
    image: oImage,
    objectId: sId
}) {
    return null;
}

function getGenreCompleteText() {
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

function changeGenrePlayingInView() {
    let sText = getGenreCompleteText;
    changeElementText({
        text: sText,
        objectId: "#genre-playing"
    });
}

function changeMusicPlayingInView({
    musicPlaying: sText
}) {
    changeElementText({
        text: sText,
        objectId: "#music-playing"
    });
}

function changeArtistPlayingInView(oMusician) {
    changeElementText({
        text: oMusician.text,
        objectId: "#music-playing"
    });
    changeElementImage({
        image: oMusician.image,
        objectId: "#album"
    });
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

    let oMusicianInformation = getCurrentMusicianInformation()
    changeArtistPlayingInView(oMusicianInformation)
}

function handleMediaPlayButtonAction(pauseButton) {
    if (isPauseButtonPressed(pauseButton)) {
        pauseSong();
        removePulseAnimation({
            id: currentGenres.genre1
        });
        removePulseAnimation({
            id: currentGenres.genre2
        });
        $("#play-pause").attr("class", "glyphicon glyphicon-play aligned mediaCustomButtom")
        status = 2;
    } else {
        playSong();
        addPulseAnimation({
            id: currentGenres.genre1
        });
        addPulseAnimation({
            id: currentGenres.genre2
        });
        $("#play-pause").attr("class", "glyphicon glyphicon-pause aligned mediaCustomButtom")
        status = 1;
    }
}

function resolveCurrentPlaylist() {
    let genre;
    if (!isTwoGenres()) {
        genre = currentGenres.genre1;
    } else {
        genre = determineMixedGenre("_");
    }
    if (genre === "") {
        genre = "no_genre";
    }
    return genre;
}

function determineMixedGenre(separator) {
    let aGenre = [currentGenres.genre1, currentGenres.genre2];
    aGenre.sort();
    aGenre = aGenre.join(separator);

    return aGenre;
}

function getGenreColor(sGenre) {
    let sColor;
    if (sGenre === undefined || sGenre === "") {
        sColor = "";
    } else {
        sColor = musicGenres[sGenre].mainColor;
        if (sColor === undefined) {
            sColor = "";
        }
    }

    return sColor;
}

function changeBackgroundOverlay({
    color1: sRGB1,
    color2: sRGB2
}) {
    if (sRGB1 === "" || sRGB1 === undefined) {
        sRGB1 = "#fff";
    }

    if (sRGB2 === "" || sRGB2 === undefined) {
        sRGB2 = sRGB1;
    }

    var oElement = $("#overlay")[0];
    oElement.style.background = "linear-gradient(" + sRGB2 + ", " + sRGB1 + ")";

}

function changeBackgroundImage() {
    let sImage = "url(" + currentPlaylistInformation.backgroundImage + ")";

    let oImageContainer = $("#image-container")[0];
    oImageContainer.style.backgroundImage = sImage;
}

function getCurrentMusicianInformation() {
    let sText = currentPlaylistInformation.musician[currentPlaylistIndex];
    let oImage = currentPlaylistInformation.albumImage[currentPlaylistIndex]

    return {
        text: sText,
        image: oImage
    };
}

function playNextSong() {
    if (currentPlaylistIndex === len) {
        currentPlaylistIndex = 0;
    } else {
        currentPlaylistIndex++;
    }
    run(currentPlaylistInformation, audioTag);
}

function playPreviousSong() {
    if (currentPlaylistIndex === 0) {
        currentPlaylistIndex = 0;
    } else {
        currentPlaylistIndex--;
    }
    run(currentPlaylistInformation, audioTag);
}

function volumeUp() {
    audioTag.volume = audioTag.volume + .1;
}

function volumeDown() {
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

function isPauseButtonPressed(pauseButton) {
    return status === "1" && pauseButton === true;
}
