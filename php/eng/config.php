<?php 
		if(isset($_GET['page'])) {
				if($_GET['page'] == 'animals2'){
					$nameH1 = "Set 2 / Animals and Colors";
					$activeLink2 = "activeLink";
					$activeJS = "js/game2_en.js";
					$activeCSS = "style.css";
					$currentBoard = "php/eng/board0.php";
				} elseif($_GET['page'] == 'animals3'){
					$nameH1 = "Set 3 / Animals and Colors";
					$activeLink3 = "activeLink";
					$activeJS = "js/game3_en.js";
					$activeCSS = "style.css";
					$currentBoard = "php/eng/board0.php";
				} elseif($_GET['page'] == 'animals4'){
					$nameH1 = "Set 4 / Animals and Colors";
					$activeLink4 = "activeLink";
					$activeCSS = "style.css";
					$activeJS = "js/game4_en.js";
					$currentBoard = "php/eng/board0.php";
				} elseif($_GET['page'] == 'animals5'){
					$nameH1 = "Set 5 / Animals and Colors";
					$activeLink5 = "activeLink";
					$activeJS = "js/game5_en.js";
					$activeCSS = "style.css";
					$currentBoard = "php/eng/board0.php";
				} elseif($_GET['page'] == 'liangci'){
					$nameH1 = "Set 1 / Measure Words for Stuff";
					$activeLink6 = "activeLink";
					$activeJS = "js/liangci_en.js";
					$activeCSS = "stylenumbers.css";
					$currentBoard = "php/eng/board_liangci.php";
				} elseif($_GET['page'] == 'liangci2'){
					$nameH1 = "Set 2 / Сlothing and Accessories";
					$activeLink7 = "activeLink";
					$activeJS = "js/liangci2_en.js";
					$activeCSS = "stylenumbers.css";
					$currentBoard = "php/eng/board_liangci.php";
				} elseif($_GET['page'] == 'liangci3'){
					$nameH1 = "Set 3 / More Clothing and Accessories";
					$activeLink8 = "activeLink";
					$activeJS = "js/liangci3_en.js";
					$activeCSS = "stylenumbers.css";
					$currentBoard = "php/eng/board_liangci.php";
				} elseif($_GET['page'] == 'fangweici'){
					$nameH1 = "Set 1 / Objects and Locations";
					$activeLink9 = "activeLink";
					$activeJS = "js/fangweici_en.js";
					$activeCSS = "fangweici.css";
					$currentBoard = "php/eng/board_fangweici.php";
				} elseif($_GET['page'] == 'fangweici2'){
					$nameH1 = "Set 2 / For School";
					$activeLink10 = "activeLink";
					$activeJS = "js/fangweici2_en.js";
					$activeCSS = "fangweici.css";
					$currentBoard = "php/eng/board_fangweici.php";
				} elseif($_GET['page'] == 'words'){
					$nameH1 = "Set 1 / Places";
					$activeLink11 = "activeLink";
					$activeJS = "js/words_en.js";
					$activeCSS = "style.css";
					$currentBoard = "php/eng/board_words.php";
				} elseif($_GET['page'] == 'words2'){
					$nameH1 = "Set 2 / Professions";
					$activeLink12 = "activeLink";
					$activeJS = "js/words2_en.js";
					$activeCSS = "style.css";
					$currentBoard = "php/eng/board_words.php";
				} 
		} else {
			$nameH1 = "Set 1 / Animals and Colors";
			$activeLink = "activeLink";
			$activeJS = "js/game_en.js";
			$activeCSS = "style.css";
			$currentBoard = "php/eng/board0.php";
		}
?>