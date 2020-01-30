
var view = {
    msgCount: 0,

    displayMessage: function(msg) {
        this.msgCount++;
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML += "</br>" + this.msgCount + ". " + msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
        var emo = document.getElementById("emo");
        emo.src = hitImgSrc;
        this.returndefaultImg();    
        audioHit.playHit();

    },

    returndefaultImg: function() {
        var emo = document.getElementById("emo");

        if ((model.shipSunk) === model.numShips) {
            emo.src = allSunkImgSrc;
        } else {
            setTimeout(function() {
                emo.src = defaultImgSrc;
            }, 3500);
        }

    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
        var emo = document.getElementById("emo");
        emo.src = misskImgSrc;
        this.returndefaultImg();
        audioMiss.playMiss();
    },

    colors: ["1","2","3","4","5","6","7","8","9","10"],

    colorsObject: [
                   { chineseNumbers: ["一","两","三","四","五","六","七","八","九","十"],
                     arabicNumbers: ["1","2","3","4","5","6","7","8","9","10"],
                     pinyinNumbers: ["yī", "liǎng", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ", "shí"]}
                    ],   

    animalsObject: [
                    { chineseThings: ["鸟", "鱼", "马", "牛", "书", "桌子", "电脑", "花", "汽车", "肉", "树", "椅子", "衬衫", "山", "袜子"],
                      liangci: ["只", "条", "匹", "头", "本", "张", "台", "朵", "辆", "块", "棵", "把", "件", "座", "双"],
                      liangciPinyin: ["zhī", "tiáo", "pǐ", "tóu", "běn", "zhāng", "tái", "duǒ", "liàng", "kuài", "kē", "bǎ", "jiàn", "zuò", "shuāng"],
                      englishThings: ["bird", "fish", "horse", "cow", "book", "table", "computer", "flower", "car", "meat", "tree", "chair", "shirt", "mountain", "socks"],
                      pinyinThings: ["niǎo", "yú", "mǎ", "niú", "shū", "zhuōzi", "diànnǎo", "huā", "qìchē", "ròu", "shù", "yǐzi", "chènshān", "shān", "wàzi"]}
                    ],

    displayReminder: function() {
        var reminder = document.getElementById("reminder");
        for (var i=0; i< 9; i++) {
            var elem = document.createElement("img");
            reminder.appendChild(elem);
            var index = this.animalsObject[0].chineseThings.indexOf(this.animals[i]);
            elem.src = "img/1numbers/" + this.animalsObject[0].englishThings[index] + ".png";
            elem.style.height = "48px";
            elem.style.marginBottom = "5px";
            reminder.innerHTML += " " + this.animalsObject[0].chineseThings[index] + " " + this.animalsObject[0].pinyinThings[index] + " (сч. сл.: " + this.animalsObject[0].liangci[index] + " " + this.animalsObject[0].liangciPinyin[index] + ")</br>";
        }
    },

    displayAllAnimals: function() {
        var allThings = document.getElementById("allThings");
        allThings.innerHTML = "";
        for (let i=0; i < this.animals.length; i++) {
            let elem = document.createElement("img");
            allThings.appendChild(elem);
            elem.src = "img/1numbers/" + this.animalsObject[0].englishThings[i] + ".png";
            elem.style.height = "48px";
            elem.style.margin = "5px";
        }
    },

    displayReminderColors: function() {
        var reminderNumbers = document.getElementById("reminderColors");
        for (var i=1; i< 10; i++) {
            var elem = document.createElement("div");
            reminderNumbers.appendChild(elem);
            var index = this.colorsObject[0].arabicNumbers.indexOf(this.colors[i]);
            elem.innerHTML = this.colors[i];
            elem.style.fontSize = "20px";
            elem.style.fontWeight = "bold";

            var elem2 = document.createElement("div");
            reminderNumbers.appendChild(elem2);
            elem2.style.marginLeft = "30px";
            elem2.style.marginTop = "-29px";
            elem2.style.fontSize = "20px";

            elem2.innerHTML +=  this.colorsObject[0].chineseNumbers[index] + " " + this.colorsObject[0].pinyinNumbers[index] + "</br>";
        }
    },

    shuffle: function(arr) {
        for (let i = 0; i < arr.length; i++) {
          let swapIdx = Math.trunc(Math.random() * arr.length);
          let tmp = arr[swapIdx];
          arr[swapIdx] = arr[i];
          arr[i] = tmp;
        }
      },
      
    displayColors: function(){
        this.shuffle(this.colors);
        for (var i = 1; i < 10; i++) {
            var  numberCell = document.getElementById("0" + i);        
            numberCell.innerHTML = this.colors[i];
            numberCell.style.color = "black";

        }
    },

    animals: ["鸟", "鱼", "马", "牛", "书", "桌子", "电脑", "花", "汽车", "肉", "树", "椅子", "衬衫", "山", "袜子"],

    displayAnimals: function(){
        this.shuffle(this.animals);
        for (var i = 1; i < 10; i++) {
            var animalCell = document.getElementById(i + "0");        
                animalCell.setAttribute("class", this.animals[i-1]);
        }
    },

    displayShipIsSunk: function(ship) {
        if (model.isSunk(ship)) {
            for(let i = 0; i < ship.borders.length; i++) {
                var cell = document.getElementById(ship.borders[i]);
                    if (cell && cell.tagName == "TD") {
                        cell.setAttribute("class", "miss");
                    }
            }
            var emo = document.getElementById("emo");
            emo.src = shipSunkImgSrc;
            this.returndefaultImg();
        }
        
    },

    // displayShipsDamage: function() {
    //     for (let i = 0; i < model.numShips; i++) {
    //         var ship = model.ships[i];
    //         var consoleShips = document.getElementsByClassName("shipModelsDiv");
    //         var consoleShip = consoleShips[i];
    //         for (let j=0; j < ship.locations.length; j++) {
    //             var consoleShipCells = consoleShip.getElementsByClassName("shipModels");
    //             if (ship.hits[j] === "hit") {
    //                 consoleShipCells[j].style.backgroundColor = "green";
    //             }
    //         }
    //     }
    // },

    displayShipsDamage: function() {
        for (let i = 0; i < model.ships.length; i++) {
            var ship = model.ships[i];
            var consoleShips = document.getElementsByClassName("shipModelsDiv");
            var consoleShip = consoleShips[i];
            for (let j=0; j < ship.locations.length; j++) {
                var consoleShipCells = consoleShip.getElementsByClassName("shipModels");
                if (ship.hits[j] === "hit") {
                    consoleShipCells[j].style.backgroundColor = "green";
                }
            }
        }
        for (let i = 0; i < model.mediumShips.length; i++) {
            var ship = model.mediumShips[i];
            var consoleShips = document.getElementsByClassName("mediumShipModelsDiv");
            var consoleShip = consoleShips[i];
            for (let j=0; j < ship.locations.length; j++) {
                var consoleShipCells = consoleShip.getElementsByClassName("mediumShipModels");
                if (ship.hits[j] === "hit") {
                    consoleShipCells[j].style.backgroundColor = "green";
                }
            }
        }
        for (let i = 0; i < model.smallShips.length; i++) {
            var ship = model.smallShips[i];
            var consoleShips = document.getElementsByClassName("smallShipModelsDiv");
            var consoleShip = consoleShips[i];
            for (let j=0; j < ship.locations.length; j++) {
                var consoleShipCells = consoleShip.getElementsByClassName("smallShipModels");
                if (ship.hits[j] === "hit") {
                    consoleShipCells[j].style.backgroundColor = "green";
                }
            }
        }

    },

    // displayShipLocations: function() {
    //     console.log("Ах ты ж читер!");
    //     for (var i=0; i < model.numShips; i++) {
    //         var ship = model.ships[i];
    //         for (var j=0; j < model.shipLength; j++) {
    //             var showShip = document.getElementById(ship.locations[j]);
    //             showShip.setAttribute("class", "ship");
    //         }
    //     }
    // }

    displayShipLocations: function() {
        console.log("Ах ты ж читер!");
        for (var i=0; i < model.ships.length; i++) {
            var ship = model.ships[i];
            for (var j=0; j < model.ships[0].locations.length; j++) {
                var showShip = document.getElementById(ship.locations[j]);
                showShip.setAttribute("class", "ship");
            }
        }

        for (var i=0; i < model.smallShips.length; i++) {
            var ship = model.smallShips[i];
            for (var j=0; j < model.smallShips[0].locations.length; j++) {
                var showShip = document.getElementById(ship.locations[j]);
                showShip.setAttribute("class", "ship");
            }
        }

        for (var i=0; i < model.mediumShips.length; i++) {
            var ship = model.mediumShips[i];
            for (var j=0; j < model.mediumShips[0].locations.length; j++) {
                var showShip = document.getElementById(ship.locations[j]);
                showShip.setAttribute("class", "ship");
            }
        }
    }

};

// var model = {
//     boardSize: 9,
//     numShips: 5,
//     shipLength: 3,
//     shipSunk: 0,
//     ships: [
//             { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] },
//             { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] },
//             { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] },
//             { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] },
//             { locations:[0,0,0], hits:["","",""], borders:[0,0,0,0,0,0,0,0,0,0,0,0] }],

//     fire: function(guess) {
//         for (var i=0; i < this.numShips; i++) {
//             var ship = this.ships[i];
//             var index = ship.locations.indexOf(guess);
//             if (index >= 0) {
//                 ship.hits[index] = "hit";
//                 view.displayHit(guess);
//                 view.displayMessage("Попал!");
//                 view.displayShipsDamage();
//                 if (this.isSunk(ship)) {
//                     view.displayMessage("Потопил корабль!");
//                     view.displayShipIsSunk(ship);
//                     this.shipSunk++;
//                 }
//                 return true;
//             }
//         }
//         view.displayMiss(guess);
//         view.displayMessage("Промазал!");
//         return false;
//     },

//     isSunk: function(ship) {
//         for (var i=0; i < this.shipLength; i++) {
//             if (ship.hits[i] !== "hit") {
//                 return false;
//             }
//         }
//         return true;
//     },

//     generateShipLocations: function() {
//         var locations;
//         var borders;
//         for (var i=0; i < this.numShips; i++) {
//             do {
//                 locations = this.generateShip();

//             } while (this.collision(locations)){
//                 this.ships[i].locations = locations;
//                 borders = this.generateShipBorders(locations);
//                 this.ships[i].borders = borders;
//             }
//         }

//     },

//     generateShip: function() {
//         var direction = Math.floor(Math.random() * 2);
//         var col, row;

//         // horizontal direction === 1
//         if (direction === 1) {
//             row = Math.ceil(Math.random() * this.boardSize);
//             col = Math.ceil(Math.random() * (this.boardSize - this.shipLength));
//         } else {
//             col = Math.ceil(Math.random() * this.boardSize);
//             row = Math.ceil(Math.random() * (this.boardSize - this.shipLength));
//         }

//         var newShipLocations = [];
//         for (var i=0; i < this.shipLength; i++) {
//             if (direction === 1) {
//                 newShipLocations.push(row + "" + (col+i));

//             } else {
//                 newShipLocations.push((row+i) + "" + col);
//             }
//         }
//         return newShipLocations;
//     },

//     generateShipBorders: function(locations) {
//         var newShipBorders = [];
//             // modulo identical if ship is vertical
//             if (locations[0] % 10 == locations[1] % 10) {

//                 newShipBorders[0] = (parseInt(locations[0]) + 1);
//                 newShipBorders[1] = (parseInt(locations[1]) + 1);
//                 newShipBorders[2] = (parseInt(locations[2]) + 1);

//                 newShipBorders[3] = (parseInt(locations[0]) - 1);
//                 newShipBorders[4] = (parseInt(locations[1]) - 1);
//                 newShipBorders[5] = (parseInt(locations[2]) - 1);

//                 newShipBorders[6] = (parseInt(locations[0]) - 10);
//                 newShipBorders[7] = (parseInt(locations[0]) - 11);
//                 newShipBorders[8] = (parseInt(locations[0]) - 9);

//                 newShipBorders[9] = (parseInt(locations[2]) + 9);
//                 newShipBorders[10] = (parseInt(locations[2]) + 10);
//                 newShipBorders[11] = (parseInt(locations[2]) + 11);

//                 // newShipBorders.push(parseInt(locations[0]));
//                 // newShipBorders.push(parseInt(locations[1]));
//                 // newShipBorders.push(parseInt(locations[2]));

//             } else {

//                 newShipBorders[0] = (parseInt(locations[0]) - 1);
//                 newShipBorders[1] = (parseInt(locations[0]) - 11);
//                 newShipBorders[2] = (parseInt(locations[0]) + 9);

//                 newShipBorders[3] = (parseInt(locations[0]) - 10);
//                 newShipBorders[4] = (parseInt(locations[0]) + 10);

//                 newShipBorders[5] = (parseInt(locations[1]) - 10);
//                 newShipBorders[6] = (parseInt(locations[1]) + 10);

//                 newShipBorders[7] = (parseInt(locations[2]) - 10);
//                 newShipBorders[8] = (parseInt(locations[2]) + 10);

//                 newShipBorders[9] = (parseInt(locations[2]) + 1);
//                 newShipBorders[10] = (parseInt(locations[2]) - 9);
//                 newShipBorders[11] = (parseInt(locations[2]) + 11);

//                 // newShipBorders.push(parseInt(locations[0]));
//                 // newShipBorders.push(parseInt(locations[1]));
//                 // newShipBorders.push(parseInt(locations[2]));
//             }
        
//         return newShipBorders;
//     },

//     collision: function(locations) {
//         for (var i=0; i < this.numShips; i++) {
//             var ship = model.ships[i];
//                 for (let j=0; j < locations.length; j++) {
//                     if (ship.borders.indexOf(parseInt(locations[j])) >= 0) {
//                         return true;
//                     }
//                 }

//                 for (let j=0; j < locations.length; j++) {
//                     if (ship.locations.indexOf(locations[j]) >= 0) {
//                         return true;
//                     }
//                 }
//         }
//         return false;
//     }

// };

// var controller = {
//     guesses: 0,
//     guessesArray: [],

//     processGuess: function(guess) {
//         var location = parseGuess(guess);
//         console.log(location);
//         if (location) {
//             if (this.guessesArray.indexOf(location) < 0) {
//                 this.guessesArray.push(location);
//                 this.guesses++;
//                 var hit = model.fire(location);
//                 if (hit && (model.shipSunk === model.numShips)) {
//                     view.displayMessage("棒棒的！Мы потопили все корабли за " + this.guesses + " попыток.");
//                     var emo = document.getElementById("emo");
//                     emo.src = allSunkImgSrc;
//                     var victory = document.getElementById("guessInput");
//                     victory.setAttribute("placeholder", " ПОБЕДА!");
//                     victory.setAttribute("disabled", "");
//                     victory.setAttribute("class", "victoryInput");
//                     var modalVictoryMsg = document.getElementById("gameOver");
//                     modalVictoryMsg.setAttribute("class", "modalImg");
//                     modalVictoryMsg.innerHTML = "棒棒的！Мы потопили все корабли всего лишь за " + this.guesses + " попыток.";
//                     $('#myModal').modal('show')
//                 } 
//             } else {
//                 view.displayMessage("Уже было!");
//             }
//         }
//     }
// };

// var audioHit = {
//     hit0: new Audio('audio/hit/shot.mp3'),
//     hit1: new Audio('audio/hit/baobei.mp3'),
//     hit2: new Audio('audio/hit/beishezhong.mp3'),
//     hit3: new Audio('audio/hit/bucuo.mp3'),
//     hit4: new Audio('audio/hit/dazhongle.mp3'),
//     hit5: new Audio('audio/hit/gaoshou.mp3'),
//     hit6: new Audio('audio/hit/haoteng.mp3'),
//     hit7: new Audio('audio/hit/pashui.mp3'),
//     hit8: new Audio('audio/hit/qiufang.mp3'),

//     playHit: function() {
//         var propertyObj = Object.keys(this);
//         this[propertyObj[Math.floor(Math.random() * (propertyObj.length -1))]].play();
//     }
// };

// var audioMiss = {
//     miss0: new Audio('audio/miss/splash.mp3'),
//     miss1: new Audio('audio/miss/chadian.mp3'),
//     miss2: new Audio('audio/miss/haha.mp3'),
//     miss3: new Audio('audio/miss/huibuhui.mp3'),
//     miss4: new Audio('audio/miss/meidazhong.mp3'),
//     miss5: new Audio('audio/miss/meishezhong.mp3'),
//     miss6: new Audio('audio/miss/meiyanjing.mp3'),
//     miss7: new Audio('audio/miss/miaobuzhun.mp3'),
//     miss8: new Audio('audio/miss/zaishiyixia.mp3'),
//     miss9: new Audio('audio/miss/haoxian.mp3'),

//     playMiss: function() {
//         var propertyObj = Object.keys(this);
//         this[propertyObj[Math.floor(Math.random() * (propertyObj.length -1))]].play();
//     }
// }


/////////////////
/// FUNCTIONS ///
/////////////////

function parseGuess(guess) {

    if (guess === null || guess.length > 5) {
        alert("Совсем не то!");
    } 
    else if (guess.length < 3) {
        alert("Фраза состоит из 3-4 иероглифов!");
    } else if (guess.charAt(0) == "二") {
        alert("Со счетными словами только 两 !!");
    } else {
        var firstChar = guess.charAt(0);
        console.log(firstChar);

        var columns = document.getElementsByTagName("th");
        var index = view.colorsObject[0].chineseNumbers.indexOf(firstChar);

        for (let i = 0; i < columns.length; i++) {
            if (index == view.colorsObject[0].arabicNumbers.indexOf(columns[i].innerHTML)) {
                column = columns[i].id.charAt(1)
            }
        }
////////////////

        var lastWord = guess.substring(2);
        var secondChar = guess.charAt(1);
        console.log(secondChar);
        console.log(lastWord);

      //  var indexLiangCi = view.animalsObject[0].liangci.indexOf(secondChar);
        var indexOfLastWord = view.animalsObject[0].chineseThings.indexOf(lastWord);

            if (secondChar == view.animalsObject[0].liangci[indexOfLastWord]) {
                var row = document.getElementsByClassName(lastWord)[0].id.charAt(0);
            } else {
                alert("Не то счетное слово!");
            }

        if (isNaN(row) || isNaN(column)) {
//            alert("Упс, что-то не так!");
        } else {
            return row + column;
        }
    }
    return null;
}


// function init() {
//     view.displayAllAnimals();
//     view.displayColors();
//     view.displayAnimals();
//     view.displayReminder();
//     view.displayReminderColors();
//     var fireButton = document.getElementById("fireButton");
//     fireButton.onclick = handleFireButton;
//     var guessInput = document.getElementById("guessInput");
//     guessInput.onkeypress = handleKeyPress;
//     var imgSpeech = document.getElementById("imgSpeech");
//     imgSpeech.onkeypress = handleKeyPress;
//     model.generateShipLocations();
    
//     //passing zero to all variables to restart the game
//     view.msgCount = 0;
//     model.shipSunk = 0;    
//     controller.guesses = 0;
//     controller.guessesArray = [];

//     //function for resizing game table in resize.js
//     resize();

//     //activate input form again (and reset modal)
//     var guessInputReset = document.getElementById("guessInput");
//     guessInputReset.setAttribute("placeholder", " 简体字");
//     guessInputReset.removeAttribute("disabled");
//     guessInputReset.removeAttribute("class", "victoryInput");
//     var modalVictoryMsg = document.getElementById("gameOver");
//     modalVictoryMsg.innerHTML = "";
//     modalVictoryMsg.removeAttribute("class", "modalImg");
// }



// function handleFireButton() {
//     var guessInput = document.getElementById("guessInput");
//     var guess = guessInput.value;
//     controller.processGuess(guess);
//     var messageArea = document.querySelector('#messageArea');
//     messageArea.scrollTop = messageArea.scrollHeight - messageArea.clientHeight;
//     guessInput.value = "";
// }

// function handleKeyPress(e) {
//     var fireButton = document.getElementById("fireButton");
//     if (e.keyCode === 13) {
//         fireButton.click();
//         return false;
//     }

//     if (e.keyCode === 32) {
//         imgSpeech.click();
//         return false;
//     }
// }

// window.onload = init;

// function replayClick() {
//     var reminderReplay = document.getElementById("reminder");
//     reminderReplay.style.display = "none";
//     reminderReplay.innerHTML = "";
//     var reminderReplayColors = document.getElementById("reminderColors");
//     reminderReplayColors.style.display = "none";
//     reminderReplayColors.innerHTML = "";
//     var replayMessageArea = document.getElementById("messageArea");
//     replayMessageArea.innerHTML = "консоль";

//     // remove css from battleship 
//     var resetTable = document.getElementsByTagName("td");
//     for (var i=0; i < resetTable.length; i++) {
//         resetTable[i].classList.remove("miss");
//         resetTable[i].classList.remove("hit");
//         resetTable[i].classList.remove("ship");
//     };

//     for (let i = 0; i < model.ships.length; i++) {
//         model.ships[i].hits = ["","",""];
//     }

//     //reset console models of ships
//     var resetConsoleShips = document.getElementsByClassName("shipModels");
//     for (let i=0; i < resetConsoleShips.length; i++) {
//         resetConsoleShips[i].style.backgroundColor = "rgb(194, 55, 55)";
//     }
    
//     //return to default emoticon
//     var emo = document.getElementById("emo");
//     emo.src = defaultImgSrc;

// 	init();
// };