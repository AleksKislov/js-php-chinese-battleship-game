
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
                    { chineseThings: ["围裙","斗笠","手套","项链","毛衣","皮带","连衣裙","高跟鞋","领带","背心","大衣","耳环","外套","戒指","钱包","梳子","眼镜","口罩","拖鞋"],
                      liangci: ["条","顶","双","条","件","条","条","双","条","件","件","双","件","枚","个","把","副","副","双"],
                      liangciPinyin: ["tiáo","dǐng","shuāng","tiáo","jiàn","tiáo","tiáo","shuāng","tiáo","jiàn","jiàn","shuāng","jiàn","méi","ge","bǎ","fù","fù","shuāng"],
                      englishThings: ["apron","douli","gloves","necklace","sweater","belt","dress","highheels","necktie","undershirt","coat","earrings","jacket","ring","wallet","comb","eyeglasses","mask","slippers"],
                      pinyinThings: ["wéiqún", "dǒulì","shǒutào","xiàngliàn","máoyī","pídài","liányīqún","gāogēnxié","lǐngdài","bèixīn","dàyī","ěrhuán","wàitào","jièzhi","qiánbāo","shūzi","yǎnjìng","kǒuzhào","tuōxié"]}
                    ],

    displayReminder: function() {
        var reminder = document.getElementById("reminder");
        for (var i=0; i< 9; i++) {
            var elem = document.createElement("img");
            reminder.appendChild(elem);
            var index = this.animalsObject[0].chineseThings.indexOf(this.animals[i]);
            elem.src = "img/3numbers/" + this.animalsObject[0].englishThings[index] + ".png";
            elem.style.height = "48px";
            elem.style.marginBottom = "5px";
            reminder.innerHTML += " " + this.animalsObject[0].chineseThings[index] + " " + this.animalsObject[0].pinyinThings[index] + " (classifier: " + this.animalsObject[0].liangci[index] + " " + this.animalsObject[0].liangciPinyin[index] + ")</br>";
        }
    },

    displayAllAnimals: function() {
        var allThings = document.getElementById("allThings");
        allThings.innerHTML = "";
        for (let i=0; i < this.animals.length; i++) {
            let elem = document.createElement("img");
            allThings.appendChild(elem);
            elem.src = "img/3numbers/" + this.animalsObject[0].englishThings[i] + ".png";
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

    animals: ["围裙","斗笠","手套","项链","毛衣","皮带","连衣裙","高跟鞋","领带","背心","大衣","耳环","外套","戒指","钱包","梳子","眼镜","口罩","拖鞋"],

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
        alert("It's all wrong!");
    } 
    else if (guess.length < 3) {
        alert("The phrase should be 3-5 characters long!");
    } else if (guess.charAt(0) == "二") {
        alert("You need to use 两 with measure words, ok?!!");
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
                alert("The measure word is wrong!");
            }

        if (isNaN(row) || isNaN(column)) {
//            alert("Упс, что-то не так!");
        } else {
            return row + column;
        }
    }
    return null;
}