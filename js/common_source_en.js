//MODEL, Controller, emoticon image, sounds

const hitImg = new Image();
hitImg.src = "emoticons/hit.png";
hitImgSrc = hitImg.src;

const defaultImg = new Image();
defaultImg.src = "emoticons/default.png";
defaultImgSrc = defaultImg.src;

const shipSunkImg = new Image();
shipSunkImg.src = "emoticons/sunk.png";
shipSunkImgSrc = shipSunkImg.src;

const misskImg = new Image();
misskImg.src = "emoticons/miss.png";
misskImgSrc = misskImg.src;

const allSunkImg = new Image();
allSunkImg.src = "emoticons/allsunk.png";
allSunkImgSrc = allSunkImg.src;

var model = {
    boardSize: 9,
    numShips: 9,
    shipSunk: 0,
    ships: [
            { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] },
            { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] }],

    mediumShips: [
        { locations: [0, 0], hits: ["", ""], borders: [0,0,0,0,0,0,0,0,0,0] },
        { locations: [0, 0], hits: ["", ""], borders: [0,0,0,0,0,0,0,0,0,0] },
        { locations: [0, 0], hits: ["", ""], borders: [0,0,0,0,0,0,0,0,0,0] }],

    smallShips: [
            { locations:[0], hits:[""], borders:[0,0,0,0,0,0,0,0] },
            { locations:[0], hits:[""], borders:[0,0,0,0,0,0,0,0] },
            { locations:[0], hits:[""], borders:[0,0,0,0,0,0,0,0] },
            { locations:[0], hits:[""], borders:[0,0,0,0,0,0,0,0] }],

    fire: function(guess) {
        for (var i=0; i < this.ships.length; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("You hit it!");
                view.displayShipsDamage();
                if (this.isSunk(ship)) {
                    view.displayMessage("You sunk my battleship!");
                    view.displayShipIsSunk(ship);
                    this.shipSunk++;
                }
                return true;
            }
        }
            for (var i=0; i < this.mediumShips.length; i++) {
                var ship = this.mediumShips[i];
                var index = ship.locations.indexOf(guess);
                if (index >= 0) {
                    ship.hits[index] = "hit";
                    view.displayHit(guess);
                    view.displayMessage("You hit it!");
                    view.displayShipsDamage();
                    if (this.isSunk(ship)) {
                        view.displayMessage("You sunk my battleship!");
                        view.displayShipIsSunk(ship);
                        this.shipSunk++;
                    }
                    return true;
                }
            }
            for (let i=0; i < this.smallShips.length; i++) {
                var ship = this.smallShips[i];
                var index = ship.locations.indexOf(guess);
                if (index >= 0) {
                    ship.hits[index] = "hit";
                    view.displayHit(guess);
                    view.displayMessage("You hit it!");
                    view.displayShipsDamage();
                    if (this.isSunk(ship)) {
                        view.displayMessage("You sunk my battleship!");
                        view.displayShipIsSunk(ship);
                        this.shipSunk++;
                    }
                    return true;
                }
            }
        
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        return false;
    },

    isSunk: function(ship) {
        for (let i=0; i < ship.hits.length; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        var locations;
        var borders;
        var medLocations;
        var medBorders;
        var smLocations;
        var smBorders;
        for (var i=0; i < this.ships.length; i++) {
            do {
                locations = this.generateShip();

            } while (this.collision(locations)){
                this.ships[i].locations = locations;
                borders = this.generateShipBorders(locations);
                this.ships[i].borders = borders;
            }
        }

        for (var i=0; i < this.mediumShips.length; i++) {
            do {
                medLocations = this.generateMediumShip();

            } while (this.collision(medLocations)){
                this.mediumShips[i].locations = medLocations;
                medBorders = this.generateMediumShipBorders(medLocations);
                this.mediumShips[i].borders = medBorders;

            }
        }

        for (var i=0; i < this.smallShips.length; i++) {
            do {
                smLocations = this.generateSmallShip();

            } while (this.collision(smLocations)){
                this.smallShips[i].locations = smLocations;
                smBorders = this.generateSmallShipBorders(smLocations);
                this.smallShips[i].borders = smBorders;

            }
        }

    },

    generateSmallShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var col, row;
        var newShipLocations = [];

                if (direction === 1) {
                    row = Math.ceil(Math.random() * this.boardSize);
                    col = Math.ceil(Math.random() * (this.boardSize - this.smallShips[0].locations.length));
                    newShipLocations.push(row + "" + col);

                } else {
                    col = Math.ceil(Math.random() * this.boardSize);
                    row = Math.ceil(Math.random() * (this.boardSize - this.smallShips[0].locations.length));
                    newShipLocations.push(row + "" + col);
                }

                return newShipLocations;

    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var col, row;

        var newShipLocations = [];

        // horizontal direction === 1
        if (direction === 1) {
            row = Math.ceil(Math.random() * this.boardSize);
            col = Math.ceil(Math.random() * (this.boardSize - this.ships[1].locations.length));
        } else {
            col = Math.ceil(Math.random() * this.boardSize);
            row = Math.ceil(Math.random() * (this.boardSize - this.ships[1].locations.length));
        }

        for (var i=0; i < this.ships[1].locations.length; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col+i));

            } else {
                newShipLocations.push((row+i) + "" + col);
            }
        }
        return newShipLocations;
    },

    generateMediumShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var col, row;

        var newShipLocations = [];

        // horizontal direction === 1
        if (direction === 1) {
            row = Math.ceil(Math.random() * this.boardSize);
            col = Math.ceil(Math.random() * (this.boardSize - this.mediumShips[1].locations.length));
        } else {
            col = Math.ceil(Math.random() * this.boardSize);
            row = Math.ceil(Math.random() * (this.boardSize - this.mediumShips[1].locations.length));
        }

        for (var i=0; i < this.mediumShips[1].locations.length; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col+i));

            } else {
                newShipLocations.push((row+i) + "" + col);
            }
        }
        return newShipLocations;
    },

    generateShipBorders: function(locations) {
        var newShipBorders = [];
            // modulo identical if ship is vertical
            if (locations[0] % 10 == locations[1] % 10) {

                newShipBorders[0] = (parseInt(locations[0]) + 1);
                newShipBorders[1] = (parseInt(locations[1]) + 1);
                newShipBorders[2] = (parseInt(locations[2]) + 1);

                newShipBorders[3] = (parseInt(locations[0]) - 1);
                newShipBorders[4] = (parseInt(locations[1]) - 1);
                newShipBorders[5] = (parseInt(locations[2]) - 1);

                newShipBorders[6] = (parseInt(locations[0]) - 10);
                newShipBorders[7] = (parseInt(locations[0]) - 11);
                newShipBorders[8] = (parseInt(locations[0]) - 9);

                newShipBorders[9] = (parseInt(locations[2]) + 9);
                newShipBorders[10] = (parseInt(locations[2]) + 10);
                newShipBorders[11] = (parseInt(locations[2]) + 11);

            } else {

                newShipBorders[0] = (parseInt(locations[0]) - 1);
                newShipBorders[1] = (parseInt(locations[0]) - 11);
                newShipBorders[2] = (parseInt(locations[0]) + 9);

                newShipBorders[3] = (parseInt(locations[0]) - 10);
                newShipBorders[4] = (parseInt(locations[0]) + 10);

                newShipBorders[5] = (parseInt(locations[1]) - 10);
                newShipBorders[6] = (parseInt(locations[1]) + 10);

                newShipBorders[7] = (parseInt(locations[2]) - 10);
                newShipBorders[8] = (parseInt(locations[2]) + 10);

                newShipBorders[9] = (parseInt(locations[2]) + 1);
                newShipBorders[10] = (parseInt(locations[2]) - 9);
                newShipBorders[11] = (parseInt(locations[2]) + 11);

            }
        
        return newShipBorders;
    },

    generateMediumShipBorders: function(locations) {
        var newShipBorders = [];
            // modulo identical if ship is vertical
            if (locations[0] % 10 == locations[1] % 10) {

                newShipBorders[0] = (parseInt(locations[0]) + 1);
                newShipBorders[1] = (parseInt(locations[1]) + 1);

                newShipBorders[2] = (parseInt(locations[0]) - 1);
                newShipBorders[3] = (parseInt(locations[1]) - 1);

                newShipBorders[4] = (parseInt(locations[0]) - 10);
                newShipBorders[5] = (parseInt(locations[0]) - 11);
                newShipBorders[6] = (parseInt(locations[0]) - 9);

                newShipBorders[7] = (parseInt(locations[1]) + 9);
                newShipBorders[8] = (parseInt(locations[1]) + 10);
                newShipBorders[9] = (parseInt(locations[1]) + 11);

            } else {

                newShipBorders[0] = (parseInt(locations[0]) - 1);
                newShipBorders[1] = (parseInt(locations[0]) - 11);
                newShipBorders[2] = (parseInt(locations[0]) + 9);

                newShipBorders[3] = (parseInt(locations[0]) - 10);
                newShipBorders[4] = (parseInt(locations[0]) + 10);

                newShipBorders[5] = (parseInt(locations[1]) - 10);
                newShipBorders[6] = (parseInt(locations[1]) + 10);

                newShipBorders[7] = (parseInt(locations[1]) + 1);
                newShipBorders[8] = (parseInt(locations[1]) - 9);
                newShipBorders[9] = (parseInt(locations[1]) + 11);

            }
        
        return newShipBorders;
    },

    generateSmallShipBorders: function(locations) {
        var newShipBorders = [];
                newShipBorders[0] = (parseInt(locations[0]) - 1);
                newShipBorders[1] = (parseInt(locations[0]) + 1);

                newShipBorders[2] = (parseInt(locations[0]) - 10);
                newShipBorders[3] = (parseInt(locations[0]) - 11);
                newShipBorders[4] = (parseInt(locations[0]) - 9);

                newShipBorders[5] = (parseInt(locations[0]) + 10);
                newShipBorders[6] = (parseInt(locations[0]) + 9);
                newShipBorders[7] = (parseInt(locations[0]) + 11);
        
        return newShipBorders;
    },

    collision: function(locations) {
        for (let i=0; i < this.ships.length; i++) {
            let ship = model.ships[i];
            for (let j=0; j < locations.length; j++) {
                if (ship.borders.indexOf(parseInt(locations[j])) >= 0) {
                    return true;
                }
            }

            for (let j=0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }

        for (let i=0; i < this.mediumShips.length; i++) {
            let ship = model.mediumShips[i];
            for (let j=0; j < locations.length; j++) {
                if (ship.borders.indexOf(parseInt(locations[j])) >= 0) {
                    return true;
                }
            }

            for (let j=0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }

        for (let i=0; i < this.smallShips.length; i++) {
            let ship = model.smallShips[i];
            for (let j=0; j < locations.length; j++) {
                if (ship.borders.indexOf(parseInt(locations[j])) >= 0) {
                    return true;
                }
            }

            for (let j=0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        
        return false;
    }

};

var controller = {
    guesses: 0,
    guessesArray: [],

    processGuess: function(guess) {
        var location = parseGuess(guess);
        console.log(location);
        if (location) {
            if (this.guessesArray.indexOf(location) < 0) {
                this.guessesArray.push(location);
                this.guesses++;
                var hit = model.fire(location);
                if (hit && (model.shipSunk === model.numShips)) {
                    view.displayMessage("棒棒的！We sunk all the enemy ships in " + this.guesses + " tries.");
                    var emo = document.getElementById("emo");
                    emo.src = allSunkImgSrc;
                    var victory = document.getElementById("guessInput");
                    victory.setAttribute("placeholder", " ПОБЕДА!");
                    victory.setAttribute("disabled", "");
                    victory.setAttribute("class", "victoryInput");
                    var modalVictoryMsg = document.getElementById("gameOver");
                    modalVictoryMsg.setAttribute("class", "modalImg");
                    modalVictoryMsg.innerHTML = "棒棒的！We sunk all the enemy ships in " + this.guesses + " tries.";
                    $('#myModal').modal('show')
                } 
            } else {
                view.displayMessage("You hit there already!");
            }
        }
    }
};

var audioHit = {
    hit0: new Audio('audio/hit/shot.mp3'),
    hit1: new Audio('audio/hit/baobei.mp3'),
    hit2: new Audio('audio/hit/beishezhong.mp3'),
    hit3: new Audio('audio/hit/bucuo.mp3'),
    hit4: new Audio('audio/hit/dazhongle.mp3'),
    hit5: new Audio('audio/hit/gaoshou.mp3'),
    hit6: new Audio('audio/hit/haoteng.mp3'),
    hit7: new Audio('audio/hit/pashui.mp3'),
    hit8: new Audio('audio/hit/qiufang.mp3'),

    playHit: function() {
        var propertyObj = Object.keys(this);
        this[propertyObj[Math.floor(Math.random() * (propertyObj.length -1))]].play();
    }
};

var audioMiss = {
    miss0: new Audio('audio/miss/splash.mp3'),
    miss1: new Audio('audio/miss/chadian.mp3'),
    miss2: new Audio('audio/miss/haha.mp3'),
    miss3: new Audio('audio/miss/huibuhui.mp3'),
    miss4: new Audio('audio/miss/meidazhong.mp3'),
    miss5: new Audio('audio/miss/meishezhong.mp3'),
    miss6: new Audio('audio/miss/meiyanjing.mp3'),
    miss7: new Audio('audio/miss/miaobuzhun.mp3'),
    miss8: new Audio('audio/miss/zaishiyixia.mp3'),
    miss9: new Audio('audio/miss/haoxian.mp3'),

    playMiss: function() {
        var propertyObj = Object.keys(this);
        this[propertyObj[Math.floor(Math.random() * (propertyObj.length -1))]].play();
    }
}

/////////////////
/// FUNCTIONS ///
/////////////////

function init() {
    view.displayAllAnimals();
    view.displayColors();
    view.displayAnimals();
    view.displayReminder();
    view.displayReminderColors();
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    var imgSpeech = document.getElementById("imgSpeech");
    imgSpeech.onkeypress = handleKeyPress;
    model.generateShipLocations();
    
    //passing zero to all variables to restart the game
    view.msgCount = 0;
    model.shipSunk = 0;    
    controller.guesses = 0;
    controller.guessesArray = [];

    //function for resizing game table in resize.js
    resize();

    //activate input form again (and reset modal)
    var guessInputReset = document.getElementById("guessInput");
    guessInputReset.setAttribute("placeholder", " 简体字");
    guessInputReset.removeAttribute("disabled");
    guessInputReset.removeAttribute("class", "victoryInput");
    var modalVictoryMsg = document.getElementById("gameOver");
    modalVictoryMsg.innerHTML = "";
    modalVictoryMsg.removeAttribute("class", "modalImg");

   // view.displayShipLocations();
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    var messageArea = document.querySelector('#messageArea');
    messageArea.scrollTop = messageArea.scrollHeight - messageArea.clientHeight;
    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
    if (e.keyCode === 32) {
        imgSpeech.click();
        return false;
    }
}

window.onload = init;

function replayClick() {
    var reminderReplay = document.getElementById("reminder");
    reminderReplay.style.display = "none";
    reminderReplay.innerHTML = "";
    var reminderReplayColors = document.getElementById("reminderColors");
    reminderReplayColors.style.display = "none";
    reminderReplayColors.innerHTML = "";
    var replayMessageArea = document.getElementById("messageArea");
    replayMessageArea.innerHTML = "консоль";

    // remove css from battleship 
    var resetTable = document.getElementsByTagName("td");
    for (var i=0; i < resetTable.length; i++) {
        resetTable[i].classList.remove("miss");
        resetTable[i].classList.remove("hit");
        resetTable[i].classList.remove("ship");
    };

    // clear objects before new game 
    for (let i = 0; i < model.ships.length; i++) {
        model.ships[i].hits = ["","",""];
        model.ships[i].locations = [0,0,0];
        model.ships[i].borders = [0,0,0,0,0,0,0,0,0,0,0,0];
    }
    for (let i = 0; i < model.mediumShips.length; i++) {
        model.mediumShips[i].hits = ["",""];
        model.mediumShips[i].locations = [0,0];
        model.mediumShips[i].borders = [0,0,0,0,0,0,0,0,0,0];
    }
    for (let i = 0; i < model.smallShips.length; i++) {
        model.smallShips[i].hits = [""];
        model.smallShips[i].locations = [0];
        model.smallShips[i].borders = [0,0,0,0,0,0,0,0];
    }

    //reset console models of ships
    var resetConsoleShips = document.getElementsByClassName("shipModels");
    for (let i=0; i < resetConsoleShips.length; i++) {
        resetConsoleShips[i].style.backgroundColor = "rgb(194, 55, 55)";
    }
    var resetSmallConsoleShips = document.getElementsByClassName("smallShipModels");
    for (let i=0; i < resetSmallConsoleShips.length; i++) {
        resetSmallConsoleShips[i].style.backgroundColor = "rgb(194, 55, 55)";
    }
    var resetMediumConsoleShips = document.getElementsByClassName("mediumShipModels");
    for (let i=0; i < resetMediumConsoleShips.length; i++) {
        resetMediumConsoleShips[i].style.backgroundColor = "rgb(194, 55, 55)";
    }

    
    //return to default emoticon
    var emo = document.getElementById("emo");
    emo.src = defaultImgSrc;

	init();
};