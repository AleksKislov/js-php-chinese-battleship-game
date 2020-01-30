<?php 
		if(isset($_GET['page'])) {
				if($_GET['page'] == 'animals2'){
					$nameH1 = "Набор 2 / Животные и Цвета";
					$activeLink2 = "activeLink";
					$activeJS = "js/game2.js";
					$activeCSS = "style.css";
					$currentBoard = "php/board0.php";
				} elseif($_GET['page'] == 'animals3'){
					$nameH1 = "Набор 3 / Животные и Цвета";
					$activeLink3 = "activeLink";
					$activeJS = "js/game3.js";
					$activeCSS = "style.css";
					$currentBoard = "php/board0.php";
				} elseif($_GET['page'] == 'animals4'){
					$nameH1 = "Набор 4 / Животные и Цвета";
					$activeLink4 = "activeLink";
					$activeCSS = "style.css";
					$activeJS = "js/game4.js";
					$currentBoard = "php/board0.php";
				} elseif($_GET['page'] == 'animals5'){
					$nameH1 = "Набор 5 / Животные и Цвета";
					$activeLink5 = "activeLink";
					$activeJS = "js/game5.js";
					$activeCSS = "style.css";
					$currentBoard = "php/board0.php";
				} elseif($_GET['page'] == 'liangci'){
					$nameH1 = "Набор 1 / Счетные Слова для Всякой Всячины";
					$activeLink6 = "activeLink";
					$activeJS = "js/liangci.js";
					$activeCSS = "stylenumbers.css";
					$currentBoard = "php/board_liangci.php";
				} elseif($_GET['page'] == 'liangci2'){
					$nameH1 = "Набор 2 / Одежда и Аксессуары";
					$activeLink7 = "activeLink";
					$activeJS = "js/liangci2.js";
					$activeCSS = "stylenumbers.css";
					$currentBoard = "php/board_liangci.php";
				} elseif($_GET['page'] == 'liangci3'){
					$nameH1 = "Набор 3 / Еще Одежда и Аксессуары";
					$activeLink8 = "activeLink";
					$activeJS = "js/liangci3.js";
					$activeCSS = "stylenumbers.css";
					$currentBoard = "php/board_liangci.php";
				} elseif($_GET['page'] == 'fangweici'){
					$nameH1 = "Набор 1 / Разные Объекты и Локации";
					$activeLink9 = "activeLink";
					$activeJS = "js/fangweici.js";
					$activeCSS = "fangweici.css";
					$currentBoard = "php/board_fangweici.php";
				} elseif($_GET['page'] == 'fangweici2'){
					$nameH1 = "Набор 2 / Школьное";
					$activeLink10 = "activeLink";
					$activeJS = "js/fangweici2.js";
					$activeCSS = "fangweici.css";
					$currentBoard = "php/board_fangweici.php";
				} elseif($_GET['page'] == 'words'){
					$nameH1 = "Набор 1 / Места";
					$activeLink11 = "activeLink";
					$activeJS = "js/words.js";
					$activeCSS = "style.css";
					$currentBoard = "php/board_words.php";
				} elseif($_GET['page'] == 'words2'){
					$nameH1 = "Набор 2 / Профессии";
					$activeLink12 = "activeLink";
					$activeJS = "js/words2.js";
					$activeCSS = "style.css";
					$currentBoard = "php/board_words.php";
				} 
		} else {
			$nameH1 = "Набор 1 / Животные и Цвета";
			$activeLink = "activeLink";
			$activeJS = "js/game.js";
			$activeCSS = "style.css";
			$currentBoard = "php/board0.php";
		}
?>