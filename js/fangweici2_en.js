
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

    colors: ["床上面","盒子左边","椅子右边","床下面","盒子右边","椅子下面","盒子上面","盒子下面","桌子上面","盒子前面","椅子上面","桌子下面","盒子后面","椅子之间","盒子里面","椅子左边"],

    colorsObject: [
                   { chineseColors: ["床上面","盒子左边","椅子右边","床下面","盒子右边","椅子下面","盒子上面","盒子下面","桌子上面","盒子前面","椅子上面","桌子下面","盒子后面","椅子之间","盒子里面","椅子左边"],
                     englishColors: ["bed-above","box-left","chair-right","bed-under","box-right","chair-under","box-above","box-under","table-above","box-before","chair-above","table-under","box-behind","chair-between","box-inside","chair-left"],
                     pinyinColors: ["chuáng shàngmian","hézi zuǒbian","yǐzi yòubian"," chuáng xiàmian","hézi yòubian","yǐzi xiàmian","hézi shàngmian","hézi xiàmian","zhuōzi shàngmian","hézi qiánmian","yǐzi shàngmian","zhuōzi xiàmian","hézi hòumian","yǐzi zhījiān","hézi lǐmiàn","yǐzi zuǒbian"]}
                    ],   

    animalsObject: [
                    { chineseAnimals: ["笔记本","耳机","尺子","自行车","颜料","滑板","毛笔","钢笔","滑雪板","胶带","打印机","手机","铅笔","墨水","橡皮擦","溜冰鞋", "剪刀", "胶水", "冰刀鞋", "书包"],
                      englishAnimals: ["notebook","headphone","ruler","bike","paints","skateboard","brush","pen","ski","duct-tape","printer","smartphone","pencil","quill","eraser","roller-skate", "scissors", "glue", "ice-skating", "backpack"],
                      pinyinAnimals: ["bǐjìběn","ěrjī","chǐzi","zìxíngchē","yánliào","huábǎn","máobǐ","gāngbǐ","huáxuěbǎn","jiāodài","dǎyìnjī","shǒujī","qiānbǐ","mòshuǐ","xiàngpícā","liūbīngxié", "jiǎndāo", "jiāoshuǐ", "bīngdāoxié","shūbāo"]}
                    ],

    displayReminder: function() {
        var reminder = document.getElementById("reminder");
        for (var i=0; i< 9; i++) {
            var elem = document.createElement("img");
            reminder.appendChild(elem);
            var index = this.animalsObject[0].chineseAnimals.indexOf(this.animals[i]);
            elem.src = "img/2fangweici/" + this.animalsObject[0].englishAnimals[index] + ".png";
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
            elem.src = "img/2fangweici/" + this.animalsObject[0].englishAnimals[i] + ".png";
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
            elem.style.width = "48px";
            elem.style.height = "48px";
         //   elem.style.border = "1px solid grey";
            var elem2 = document.createElement("div");
            reminderColors.appendChild(elem2);
            elem2.style.marginLeft = "52px";
            elem2.style.marginTop = "-32px";
            elem2.innerHTML += this.colorsObject[0].chineseColors[index] + " " + this.colorsObject[0].pinyinColors[index] + "</br>";
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

    animals: ["笔记本","耳机","尺子","自行车","颜料","滑板","毛笔","钢笔","滑雪板","胶带","打印机","手机","铅笔","墨水","橡皮擦","溜冰鞋", "剪刀", "胶水", "冰刀鞋", "书包"],

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

    if (guess === null || guess.length > 8) {
        alert("It's all wrong!");
    } else if (guess.length < 5) {
        alert("The phrase should be 5-8 characters long!");
    } else {
        //if guess has 有 in it
        if (guess.indexOf("有") > 0) {
            let indexOfYou = guess.indexOf("有");
            let firstWord = guess.substring(0, indexOfYou);

            console.log(firstWord);
            var column = document.getElementsByClassName(firstWord)[1].id.charAt(1);

            var lastWord = guess.substring(indexOfYou+1);
            var row = document.getElementsByClassName(lastWord)[0].id.charAt(0);

        } else if (guess.indexOf("在") > 0) {
            let indexOfZai = guess.indexOf("在");
            let firstWord = guess.substring(0, indexOfZai);
            var row = document.getElementsByClassName(firstWord)[0].id.charAt(0);

            var lastWord = guess.substring(indexOfZai+1);
            var column = document.getElementsByClassName(lastWord)[1].id.charAt(1);

        }
        
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, something isn't right!");
        } else {
            return row + column;
        }
    }
    return null;
}