
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
                    { chineseThings: ["书包", "领结", "文胸", "鸭舌帽", "包包", "帽子", "牛仔裤", "口红", "裤子", "旗袍", "围巾", "短裤", "裙子", "西装", "墨镜", "T恤", "内裤", "马甲", "手表"],
                      liangci:       ["个",   "个",   "个",     "顶",  "个",  "顶",    "条",    "支",   "条",  "件",   "条",  "条",   "条",   "套",   "副",  "件",  "条",   "件",  "块"],
                      liangciPinyin: ["ge", "ge", "ge", "dǐng", "ge", "dǐng", "tiáo", "zhī", "tiáo", "jiàn", "tiáo", "tiáo", "tiáo", "tào", "fù", "jiàn", "tiáo", "jiàn", "kuài"],
                      englishThings: ["backpack","bow-tie","bra","cap","hand-bag","hat","jeans","lipstick","pants","qipao","scarf","shorts","skirt","suit","sunglasses","tshirt","underwear","vest","watch"],
                      pinyinThings: ["shūbāo", "lǐngjié", "wénxiōng", "yāshémào", "bāobāo", "màozi", "niúzǎikù", "kǒuhóng", "kùzi", "qípáo", "wéijīn", "duǎnkù", "qúnzi", "xīzhuāng", "mòjìng", "tixù", "nèikù", "mǎjiǎ", "shǒubiǎo"]}
                    ],

    displayReminder: function() {
        var reminder = document.getElementById("reminder");
        for (var i=0; i< 9; i++) {
            var elem = document.createElement("img");
            reminder.appendChild(elem);
            var index = this.animalsObject[0].chineseThings.indexOf(this.animals[i]);
            elem.src = "img/2numbers/" + this.animalsObject[0].englishThings[index] + ".png";
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
            elem.src = "img/2numbers/" + this.animalsObject[0].englishThings[i] + ".png";
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

    animals: ["书包", "领结", "文胸", "鸭舌帽", "包包", "帽子", "牛仔裤", "口红", "裤子", "旗袍", "围巾", "短裤", "裙子", "西装", "墨镜", "T恤", "内裤", "马甲", "手表"],

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
/// FUNCTION ///
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