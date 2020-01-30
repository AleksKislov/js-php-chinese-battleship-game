
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

    colors: ["famous","boring","rich","the best","reliable","modest","shy","verbose","lonely","sturdy", "cunning"],

    colorsObject: [
                   { chineseAdjectives: ["著名","无聊","有钱","最好","靠谱","谦虚","害羞","啰嗦","孤独","强壮", "狡猾"],
                     rusAdjectives: ["famous","boring","rich","the best","reliable","modest","shy","verbose","lonely","sturdy", "cunning"],
                     pinyinAdjectives: ["zhùmíng", "wúliáo", "yǒuqián","zuìhǎo","kàopǔ","qiānxū","hàixiū","luōsuo","gūdú","qiángzhuàng", "jiǎohuá"]}
                    ],   

    animalsObject: [
                    { chineseThings: ["教师", "教授", "音乐家", "部长", "哲学家", "会计", "导演", "司机", "医生", "运动员", "科学家", "工程师", "总统", "演员", "作家", "画家"],
                        rusNouns: ["teacher", "professor", "musician", "minister", "philosopher", "accountant", "director", "driver", "doctor", "sportsman", "scientist", "engineer", "president", "actor", "writer", "painter"],
                      pinyinThings: ["jiàoshī", "jiàoshòu", "yīnyuèjiā", "bùzhǎng", "zhéxuéjiā", "kuàijì", "dǎoyǎn", "sījī", "yīsheng", "yùndòngyuán", "kēxuéjiā", "gōngchéngshī", "zǒngtǒng", "yǎnyuán", "zuòjiā", "huàjiā"]}
                    ],

    animals: ["teacher", "professor", "musician", "minister", "philosopher", "accountant", "director", "driver", "doctor", "sportsman", "scientist", "engineer", "president", "actor", "writer", "painter"],

    displayReminder: function() {
        var reminder = document.getElementById("reminder");
        for (var i=0; i< 9; i++) {
            var index = this.animalsObject[0].rusNouns.indexOf(this.animals[i]);
            var elem = document.createElement("div");
            reminder.appendChild(elem);
            elem.style.marginLeft = "1em";
            elem.style.fontSize = "1em";
            elem.innerHTML += " " + this.animalsObject[0].rusNouns[index] + ": " + this.animalsObject[0].chineseThings[index] + " " + this.animalsObject[0].pinyinThings[index] + "</br>";
        }
    },

    displayAllAnimals: function() {
        // var allThings = document.getElementById("allThings");
        // allThings.innerHTML = "";
        // for (let i=0; i < this.animals.length; i++) {
        //     let elem = document.createElement("img");
        //     allThings.appendChild(elem);
        //     elem.style.height = "48px";
        //     elem.style.margin = "5px";
        // }
    },

    displayReminderColors: function() {
        var reminderNumbers = document.getElementById("reminderColors");
        for (var i=1; i< 10; i++) {
            var index = this.colorsObject[0].rusAdjectives.indexOf(this.colors[i]);
            var elem = document.createElement("div");
            reminderNumbers.appendChild(elem);
            elem.style.marginLeft = "1em";
            elem.style.fontSize = "1em";
            elem.innerHTML += this.colors[i] + ": " + this.colorsObject[0].chineseAdjectives[index] + " " + this.colorsObject[0].pinyinAdjectives[index] + "</br>";
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
            numberCell.style.fontWeight = "normal";
            numberCell.style.fontSize = "10px";
            numberCell.style.opacity = "1";
        }
    },

    displayAnimals: function(){
        this.shuffle(this.animals);
        for (var i = 1; i < 10; i++) {
            var animalCell = document.getElementById(i + "0");        
            animalCell.innerHTML = this.animals[i-1];
            animalCell.style.color = "black";
            animalCell.style.fontWeight = "normal";
            animalCell.style.fontSize = "10px";
            animalCell.style.textAlign = "center";
            animalCell.style.opacity = "1";

                // animalCell.setAttribute("class", this.animals[i-1]);
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


/////////////////
/// FUNCTION ///
/////////////////

// function parseGuess(guess) {

//     if (guess === null || guess.length > 5) {
//         alert("Совсем не то!");
//     } 
//     else if (guess.length < 3) {
//         alert("Фраза состоит из 3-4 иероглифов!");
//     } else if (guess.charAt(0) == "二") {
//         alert("Со счетными словами только 两 !!");
//     } else {
//         var firstChar = guess.charAt(0);
//         console.log(firstChar);

//         var columns = document.getElementsByTagName("th");
//         var index = view.colorsObject[0].chineseAdjectives.indexOf(firstChar);

//         for (let i = 0; i < columns.length; i++) {
//             if (index == view.colorsObject[0].rusAdjectives.indexOf(columns[i].innerHTML)) {
//                 column = columns[i].id.charAt(1)
//             }
//         }
// ////////////////

//         var lastWord = guess.substring(2);
//         var secondChar = guess.charAt(1);
//         console.log(secondChar);
//         console.log(lastWord);

//       //  var indexLiangCi = view.animalsObject[0].liangci.indexOf(secondChar);
//         var indexOfLastWord = view.animalsObject[0].chineseThings.indexOf(lastWord);

//             if (secondChar == view.animalsObject[0].liangci[indexOfLastWord]) {
//                 var row = document.getElementsByClassName(lastWord)[0].id.charAt(0);
//             } else {
//                 alert("Не то счетное слово!");
//             }

//         if (isNaN(row) || isNaN(column)) {
// //            alert("Упс, что-то не так!");
//         } else {
//             return row + column;
//         }
//     }
//     return null;
// }

function parseGuess(guess) {

    if (guess === null || guess.length > 7) {
        alert("It's all wrong!");
    } else if (guess.length < 4) {
        alert("The phrase should be 4-7 characters long!");
    } else {
        //confirm that guess has 的 in it
        if (guess.indexOf("的") > 0) {
            let indexOfDe = guess.indexOf("的");
            let firstWord = guess.substring(0, indexOfDe);

            console.log(firstWord);
    
            var columns = document.getElementsByTagName("th");
            var index = view.colorsObject[0].chineseAdjectives.indexOf(firstWord);
    
            for (let i = 0; i < columns.length; i++) {
                if (index == view.colorsObject[0].rusAdjectives.indexOf(columns[i].innerHTML)) {
                    column = columns[i].id.charAt(1)
                }
            }

            var lastWord = guess.substring(indexOfDe+1);
            // var row = document.getElementsByClassName(lastWord)[0].id.charAt(0);

            var index2 = view.animalsObject[0].chineseThings.indexOf(lastWord);
    
            for (let i = 0; i < columns.length; i++) {
                if (index2 == view.animalsObject[0].rusNouns.indexOf(columns[i].innerHTML)) {
                    row = columns[i].id.charAt(0)
                }
            }

        } else  {
            alert("There should be 的 somewhere, right?");
        }
        
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, something isn't right!");
        } else if (row == 0 || column == 0) {
            alert("Oops, something isn't right!");
        } else {
            return row + column;
        }
    }
    return null;
}