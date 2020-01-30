
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

    colors: ["黄","黑","白","蓝","绿","灰","橙","紫","红","粉","棕"],

    colorsObject: [
                   { chineseColors: ["黄","黑","白","蓝","绿","灰","橙","紫","红","粉","棕"],
                     englishColors: ["yellow", "black", "white", "blue", "green", "grey", "orange", "purple", "red", "pink", "brown"],
                     pinyinColors: ["huáng", "hēi", "bái", "lán", "lǜ", "huī", "chéng", "zǐ", "hóng", "fěn", "zōng"]}
                    ],   

    animalsObject: [
                    { chineseAnimals: ["北极熊","河狸","丹顶鹤","豚鼠","猎豹","狐狸","鸭嘴兽","蝙蝠","蟑螂","大猩猩","树懒","仓鼠","袋熊"],
                      englishAnimals: ["polar_bear","beaver","crane","guinea_pig","cheetah","fox","platypus","bat","cockroach","gorilla","sloth","hamster","wombat"],
                      pinyinAnimals: ["běijíxióng", "hélí", "dāndǐnghè","túnshǔ","lièbào","húli","yāzuǐshòu","biānfú","zhāngláng","dàxīngxing","shùlǎn","cāngshǔ","dàixióng"]}
                    ],

    displayReminder: function() {
        var reminder = document.getElementById("reminder");
        for (var i=0; i< 9; i++) {
            var elem = document.createElement("img");
            reminder.appendChild(elem);
            var index = this.animalsObject[0].chineseAnimals.indexOf(this.animals[i]);
            elem.src = "img/5level/" + this.animalsObject[0].englishAnimals[index] + ".png";
            elem.style.height = "48px";
            elem.style.marginBottom = "5px";
            reminder.innerHTML += " " + this.animalsObject[0].chineseAnimals[index] + " " + this.animalsObject[0].pinyinAnimals[index] + "</br>";
        }
    },

    displayAllAnimals: function() {
        var allAnimals = document.getElementById("allAnimals");
        allAnimals.innerHTML = "";
        for (let i=0; i < this.animals.length; i++) {
            let elem = document.createElement("img");
            allAnimals.appendChild(elem);
            elem.src = "img/5level/" + this.animalsObject[0].englishAnimals[i] + ".png";
            elem.style.height = "48px";
            elem.style.margin = "5px";
        }
    },

    displayReminderColors: function() {
        var reminderColors = document.getElementById("reminderColors");
        for (var i=0; i< 9; i++) {
            var elem = document.createElement("div");
            reminderColors.appendChild(elem);
            var index = this.colorsObject[0].chineseColors.indexOf(this.colors[i]);
            elem.setAttribute("class", this.colors[i]);
            elem.style.width = "20px";
            elem.style.height = "20px";
            elem.style.border = "1px solid grey";
            var elem2 = document.createElement("div");
            reminderColors.appendChild(elem2);
            elem2.style.marginLeft = "30px";
            elem2.style.marginTop = "-21px";
            elem2.innerHTML += " " + (i+1) + ". " + this.colorsObject[0].chineseColors[index] + " " + this.colorsObject[0].pinyinColors[index] + "</br>";
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
            var colorCell = document.getElementById("0" + i);        
                colorCell.setAttribute("class", this.colors[i-1]);
        }
    },

    animals: ["北极熊","河狸","丹顶鹤","豚鼠","猎豹","狐狸","鸭嘴兽","蝙蝠","蟑螂","大猩猩","树懒","仓鼠","袋熊"],

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
/// FUNCTIONS ///
/////////////////

function parseGuess(guess) {

    if (guess === null || guess.length > 6) {
        alert("Совсем не то!");
    } else if (guess.length < 4) {
        alert("Фраза состоит из 4-6 иероглифов!");
    } else {
        var firstChar = guess.charAt(0);
        console.log(firstChar);
        var column = document.getElementsByClassName(firstChar)[1].id.charAt(1);
        var lastWord = guess.substring(3);
        var row = document.getElementsByClassName(lastWord)[0].id.charAt(0);
        
        if (isNaN(row) || isNaN(column)) {
            alert("Упс, что-то не так!");
        } else {
            return row + column;
        }
    }
    return null;
}