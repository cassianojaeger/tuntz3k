var audioTag;
var currentPlaylist;
var currentPlaylistIndex = 0;
var currentPlaylistInformation;
var status = 0;

var musicInformation = {
    rock: {
        musician: ['Led Zeppelin - Rock and Roll (Live)', 'Harem Scarem - No Justice', 'Black Rebel Motorcycle Club - Let the Day Begin', 'The Cult - Fire Woman'],
        audioFile: ['resources/audios/rock%20Led%20Zeppelin%20-%20Rock%20And%20Roll%20(Live%20Video).mp3', 'resources/audios/rock%20Harem%20Scarem%20-%20No%20Justice.mp3', 'resources/audios/rock%20Black%20Rebel%20Motorcycle%20Club%20-%20Let%20the%20Day%20Begin.mp3', 'resources/audios/rock%20The%20Cult%20-%20Fire%20Woman.mp3'],
        albumImage: ['resources/images/album/rock.jpg', 'resources/images/album/rock2.jpg', 'resources/images/album/rock3.jpg', 'resources/images/album/rock4.jpg'],
        backgroundImage: 'resources/images/background/rockbackground.jpg'
    },

    jazz: {
        musician: ['Justin Hurwitzz - Caravan', 'Ryo Fukui - It Could Happen To You', 'Chet Baker  Paul Desmond Together- Autumn Leaves', 'Dave Brubeck - Take Five'],
        audioFile: ['resources/audios/jazz%20Justin%20Hurwitzz%20-Whiplash%20Soundtrack%20-%20Caravan.mp3', 'resources/audios/jazz%20Ryo%20Fukui%20-%20It%20Could%20Happen%20To%20You.mp3', 'resources/audios/jazz%20Chet%20Baker%20%20Paul%20Desmond%20Together-%20Autumn%20Leaves.mp3' , 'resources/audios/jazz%20Dave%20Brubeck%20-%20Take%20Five.mp3'],
        albumImage: ['resources/images/album/jazz.jpg', 'resources/images/album/jazz2.jpg', 'resources/images/album/jazz3.jpg', 'resources/images/album/jazz4.jpg'],
        backgroundImage: 'resources/images/background/jazzbackground.jpg'
    },

    electronic: {
        musician: ['Daft Punk - Harder Better Faster Stronger', 'DATADEBT - California Special (Remix)', 'MITCH MURDER - In The News', 'Satin Jackets feat. Niya Wells - Never Enough'],
        audioFile: ['resources/audios/electronic%20Daft%20Punk%20-%20Harder%20Better%20Faster%20Stronger.mp3', 'resources/audios/electronic%20DATADEBT%20-%20California%20Special%20(Eumig%20%20Chinon%20Remix).mp3', 'resources/audios/electronic%20MITCH%20MURDER%20-%20In%20The%20News.mp3', 'resources/audios/electronic%20Satin%20Jackets%20feat.%20Niya%20Wells%20-%20Never%20Enough%20%20Eskimo%20Recordings.mp3'],
        albumImage: ['resources/images/album/electronic.jpg', 'resources/images/album/electronic2.jpg', 'resources/images/album/electronic3.jpg', 'resources/images/album/electronic4.jpg'],
        backgroundImage: 'resources/images/background/electronicbackground.jpg'
    },

    country: {
        musician: ['Chris Stapleton - Tennessee Whiskey', 'Blues Saraceno - Dogs of War', 'John Denver - Take Me Home, Country Roads', 'Justin Moore - Kinda Dont Care'],
        audioFile: ['resources/audios/country%20Chris%20Stapleton%20-%20Tennessee%20Whiskey%20(Audio).mp3', 'resources/audios/country%20Blues%20Saraceno%20-%20Dogs%20of%20War.mp3', 'resources/audios/country%20John%20Denver%20-%20Take%20Me%20Home,%20Country%20Roads%20%20Fallout%2076.mp3', 'resources/audios/country%20Justin%20Moore%20-%20Kinda%20Dont%20Care.mp3'],
        albumImage: ['resources/images/album/country.jpg', 'resources/images/album/country2.jpg', 'resources/images/album/country3.jpg', 'resources/images/album/country4.jpg'],
        backgroundImage: 'resources/images/background/countrybackground.jpg'
    },

    popular: {
        musician: ['Britney Spears - Toxic', 'Ariana Grande - Focus', 'Oh Land - White Nights', 'Stellar - Sting'],
        audioFile: ['resources/audios/pop%20Britney%20Spears%20-%20Toxic%20(Official%20Video).mp3', 'resources/audios/pop%20Ariana%20Grande%20-%20Focus.mp3', 'resources/audios/pop%20Oh%20Land%20-%20White%20Nights.mp3',  'resources/audios/pop%20Stellar%20-%20Sting.mp3'],
        albumImage: ['resources/images/album/pop.jpg', 'resources/images/album/pop2.jpg', 'resources/images/album/pop3.jpg', 'resources/images/album/pop4.jpg'],
        backgroundImage: 'resources/images/background/popbackground.jpg'
    },

    country_rock: {
        musician: ['Eduardo Araújo (Feat. Dr. Sin) - Meu Cavalo', 'Lonnie Mack - Too Rock For Country Too Country For Rock And Roll', 'Creedence Clearwater Revival - Ramble Tamble', 'Rodney Atkins - Watching You'],
        audioFile: ['resources/audios/countryrock%20Eduardo%20Ara%C3%BAjo%20(com%20Dr.%20Sin)%20-%20Meu%20Cavalo.mp3', 'resources/audios/countryrock%20Lonnie%20Mack%20-%20Too%20Rock%20For%20Country%20Too%20Country%20For%20Rock%20And%20Roll.mp3', 'resources/audios/countryrock%20Creedence%20Clearwater%20Revival%20-%20Ramble%20Tamble.mp3', 'resources/audios/countryrock%20Rodney%20Atkins%20-%20Watching%20You%20(Official).mp3'],
        albumImage: ['resources/images/album/countryrock.jpg', 'resources/images/album/countryrock2.jpg', 'resources/images/album/countryrock3.jpg', 'resources/images/album/countryrock4.jpg'],
        backgroundImage: 'resources/images/background/countryrockbackground.jpg'
    },

    country_jazz: {
        musician: ['Dixie Dregs - Road Expense', 'The Steve Morse Band -  General Lee', 'Allman Brothers Band - Ramblin Man', 'Kansas - Carry On Wayward Son'],
        audioFile: ['resources/audios/southernjazzfusion%20Dixie%20Dregs%20-%20Road%20Expense.mp3', 'resources/audios/southernjazzfusion%20General%20Lee%20The%20Steve%20Morse%20Band.mp3', 'resources/audios/southernjazzfusion%20Allman%20Brothers%20Band%20-%20Ramblin%20Man.mp3', 'resources/audios/southernjazzfusion%20Kansas%20-%20Carry%20On%20Wayward%20Son.mp3'],
        albumImage: ['resources/images/album/southernjazzfusion.jpg', 'resources/images/album/southernjazzfusion2.jpg', 'resources/images/album/southernjazzfusion3.jpg', 'resources/images/album/southernjazzfusion4.jpg'],
        backgroundImage: 'resources/images/background/southernjazzfusionbackground.jpg'
    },

    country_electronic: {
        musician: ['Audien (Feat. Lady Antebellum) - Something Better', 'Gazzo (Feat. Chase Rice) - Sun Turns Cold', 'Big and Rich - Fake I.D.', 'Electric Six - Danger High Voltage'],
        audioFile: ['resources/audios/electroniccountry%20Audien%20-%20Something%20Better%20ft.%20Lady%20Antebellum.mp3', 'resources/audios/electroniccountry%20Gazzo%20Featuring%20Chase%20Rice%20-%20Sun%20Turns%20Cold.mp3', 'resources/audios/electroniccountry%20Big%20and%20Rich%20-%20Fake%20I.D.%20ft.%20Gretchen%20Wilson.mp3', 'resources/audios/electroniccountry%20Electric%20Six%20-%20Danger%20High%20Voltage.mp3'],
        albumImage: ['resources/images/album/electroniccountry.jpg', 'resources/images/album/electroniccountry2.jpg', 'resources/images/album/electroniccountry3.jpg', 'resources/images/album/electroniccountry4.jpg'],
        backgroundImage: 'resources/images/background/eletroniccountrybackground.jpg'
    },

    country_popular: {
        musician: ['Shania Twain - Man! I Feel Like A Woman', 'Lady Gaga - Joanne', 'Cavetown - Lemon Boy', 'PHOX - Slow Motion'],
        audioFile: ['resources/audios/countrypop%20Shania%20Twain%20-%20Man!%20I%20Feel%20Like%20A%20Woman.mp3', 'resources/audios/countrypop%20Lady%20Gaga%20-%20Joanne%20(Audio).mp3', 'resources/audios/countrypop%20Cavetown%20–%20Lemon%20Boy.mp3', 'resources/audios/countrypop%20PHOX%20-%20Slow%20Motion.mp3'],
        albumImage: ['resources/images/album/countrypop.jpg', 'resources/images/album/countrypop2.jpg', 'resources/images/album/countrypop3.jpg', 'resources/images/album/countrypop4.jpg'],
        backgroundImage: 'resources/images/background/countrypopbackground.jpg'
    },

    popular_rock: {
        musician: ['Nickelback - Photograph', 'Fall Out Boy - Dance Dance', 'Incubus - Summer Romance', 'Last Resort- Papa Roach'],
        audioFile: ['resources/audios/poprock%20Nickelback%20-%20Photograph.mp3', 'resources/audios/poprock%20Fall%20Out%20Boy%20-%20Dance%20Dance%20Lyrics.mp3','resources/audios/poprock%20Incubus%20-%20Summer%20Romance.mp3', 'resources/audios/poprock%20Last%20Resort%20(explicit)%20-%20Papa%20Roach.mp3'],
        albumImage: ['resources/images/album/poprock.jpg', 'resources/images/album/poprock2.jpg'],
        backgroundImage: 'resources/images/background/poprockbackground.jpg'
    },

    jazz_popular: {
        musician: ['George Duke - Shine On', 'Street Life - The Crusaders', 'Spyro Gyra - Morning Dance', 'The Blackbyrds - Walking In Rhythm'],
        audioFile: ['resources/audios/jazzpop%20george-duke-shine-on.mp3', 'resources/audios/jazzpop%20Street%20Life%20-%20The%20Crusaders%201979.mp3', 'resources/audios/jazzpop%20Spyro%20Gyra-Morning%20Dance.mp3', 'resources/audios/jazzpop%20The%20Blackbyrds%20-%20Walking%20In%20Rhythm%20%20(1974).mp4.mp3'],
        albumImage: ['resources/images/album/jazzpop.jpg', 'resources/images/album/jazzpop2.jpg', 'resources/images/album/jazzpop3.jpg', 'resources/images/album/jazzpop4.jpg'],
        backgroundImage: 'resources/images/background/jazzpopbackground.jpg'
    },

    electronic_popular: {
        musician: ['Owl City - Fireflies', 'Lonely Island - Jizz In My Pants', 'Clairo - 4EVER', 'Foster The People - Sit Next to Me'],
        audioFile: ['resources/audios/electropop%20Owl%20City%20-%20Fireflies.mp3', 'resources/audios/electropop%20lonelyisland%20Jizz%20In%20My%20Pants.mp3', 'resources/audios/electropop%20Clairo%20-%204EVER.mp3', 'resources/audios/electropop%20Foster%20The%20People%20-%20Sit%20Next%20to%20Me%20(Audio).mp3'],
        albumImage: ['resources/images/album/eletropop.jpg', 'resources/images/album/eletropop2.jpg', 'resources/images/album/eletropop3.jpg', 'resources/images/album/eletropop4.jpg'],
        backgroundImage: 'resources/images/background/eletropopbackground.jpg'
    },

    electronic_jazz: {
        musician: ['Bonobo - Kiara', 'Quantic - Transatlantic', 'Royksopp - So Easy', 'Teardrop - Massive Attack'],
        audioFile: ['resources/audios/nujazz%20Bonobo%20-%20Kiara.mp3', 'resources/audios/nujazz%20Quantic%20-%20Transatlantic.mp3', 'resources/audios/nujazz%20Royksopp%20-%20So%20Easy.mp3','resources/audios/nujazz%20Teardrop%20-%20Massive%20Attack.mp3' ],
        albumImage: ['resources/images/album/nujazz.jpg', 'resources/images/album/nujazz2.jpg', 'resources/images/album/nujazz3.jpg', 'resources/images/album/nujazz4.jpg'],
        backgroundImage: 'resources/images/background/nujazzbackground.jpg'
    },

    electronic_rock: {
        musician: ['M83 - Reunion', 'MGMT - Eletric Feel', 'explosions in the sky - so long, lonesome', 'Perturbator - Disco Inferno'],
        audioFile: ['resources/audios/electronicrock%20M83%20Reunion.mp3', 'resources/audios/electronicrock%20MGMT%20-%20Electric%20Feel.mp3', 'resources/audios/electronicrock%20explosions%20in%20the%20sky%20-%20so%20long,%20lonesome.mp3', 'resources/audios/electronicrock%20Perturbator%20Disco%20Inferno%20[The%20Uncanny%20Valley%20-%202016].mp3'],
        albumImage: ['resources/images/album/electronicrock.jpg', 'resources/images/album/electronicrock2.jpg', 'resources/images/album/electronicrock3.jpg', 'resources/images/album/electronicrock4.jpg'],
        backgroundImage: 'resources/images/background/eletronicrockbackground.jpg'
    },

    jazz_rock: {
        musician: ['Casiopea - Galactic Funk', 'T-Square - Little League Star', 'Greg Howes - Jump Start', 'Trix - Recollection'],
        audioFile: ['resources/audios/jazzfusion%20Casiopea%20-%20Galactic%20Funk.mp3', 'resources/audios/jazzfusion%20t-square%20little%20league%20star.mp3', 'resources/audios/jazzfusion%20Greg%20Howes%20Jump%20Start.mp3', 'resources/audios/jazzfusion%20Trix%20-%20Recollection.mp3'],
        albumImage: ['resources/images/album/jazzfusion.jpg', 'resources/images/album/jazzfusion2.jpg', 'resources/images/album/jazzfusion3.jpg', 'resources/images/album/jazzfusion4.jpg'],
        backgroundImage: 'resources/images/background/jazzfusionbackground.jpg'
    },
    no_genre: {
        musician: ['And a Music Will Play by: Some Artist', null],
        audioFile: [null, null],
        albumImage: [null, null],
        backgroundImage: null
    }
};

var musicGenres = {
    Rock: {
        mainColor: "#ff0000",
        beforeColor: "#cc0000",
        afterColor: "#ffb3b3",
        pressedColor: "#cc0000",
        shadowColor: "#ffad99"
    },
    Country: {
        mainColor: "#66ccff",
        beforeColor: "#b3ccff",
        afterColor: "#4d88ff",
        pressedColor: "#0099e6",
        shadowColor: "#cce6ff"

    },
    Popular: {
        mainColor: "#ff33cc",
        beforeColor: "#ffccf2",
        afterColor: "#ff66d9",
        pressedColor: "#990073",
        shadowColor: "#ffb3e6"

    },
    Jazz: {
        mainColor: "#ff9900",
        beforeColor: "#ffd699",
        afterColor: "#ffebcc",
        pressedColor: "#e68a00",
        shadowColor: "#ffe6cc"

    },
    Electronic: {
        mainColor: "#00cc00",
        beforeColor: "#b3ffb3",
        afterColor: "#4dff4d",
        pressedColor: "#008000",
        shadowColor: "#b3ffb3"
    }
};

var currentGenres = {
    genre1: "",
    genre2: ""
};

function createAllMusicButtons() {

    var oPlaceToInsertButtons = $("#menu")[0];
    audioTag = $('audio')[0];
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
    oNewButton.style.setProperty("--shadow-color", oProperties.shadowColor);

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

function setupArtyom() {
     var artyom = new Artyom();
        // Start the commands !
        artyom.initialize({
            lang: "en-GB", // GreatBritain english
            continuous: true, // Listen forever
            soundex: true, // Use the soundex algorithm to increase accuracy
            debug: true, // Show messages in the console
            executionKeyword: "and do it now",
            listen: true, // Start to listen commands !

        }).then(() => {
            console.log("Artyom has been succesfully initialized");
            artyom.say("Hello, I´m Artyom. Your voice assistant. Any doubt, say Explain voice commands");
        }).catch((err) => {
            console.error("Artyom couldn't be initialized: ", err);
        });

        artyom.on(['Rock', 'Country', 'Popular', 'Jazz', 'Electronic', 'Stop Song', 'Play Song', 'Next Song', 'Previous Song', 'Explain voice commands']).then((i) => {
            switch (i) {
                case 0:
                    addGender("Rock");
                    break;
                case 1:
                    addGender("Country");
                    break;
                case 2:
                    addGender("Popular");
                    break;
                case 3:
                    addGender("Jazz");
                    break;
                case 4:
                    addGender("Electronic");
                    break;
                case 5:
                    pauseSong();
                    break;
                case 6:
                    playSong();
                    break;   
                case 7:
                    playNextSong();
                    break;  
                case 8:
                    playPreviousSong();
                    break;  
                case 9:
                    artyom.say("Say the name of the genre to make it play. You also have the following commands: Stop song, play song, Next Song and Previous Song");
                    break;    
            }
        });
}

$(document).ready(function () {
    createAllMusicButtons();
    addAnimationEventToMusicButtons();
    $('#modal-warning').modal();
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
        sMusicGenre = event.path[0].id;
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

    currentPlaylist = resolveCurrentPlaylist();
    currentPlaylistInformation = musicInformation[currentPlaylist.toLowerCase()];

    len = currentPlaylistInformation.audioFile.length - 1;

    audioTag.volume = 1;

    run(currentPlaylistInformation);

    audioTag.addEventListener('ended', playNextSong);
}

function run(plInformation) {
    audioTag.src = getMusicFile(plInformation);
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
        sColor = musicGenres[sGenre].afterColor;
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
    if(audioTag.volume > 0.9) {
        audioTag.volume = 1.0;
        return;
    }
    audioTag.volume = audioTag.volume + .1;
}

function volumeDown() {
    if(audioTag.volume < 0.1) {
        audioTag.volume = 0.0;
        return;
    }
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

