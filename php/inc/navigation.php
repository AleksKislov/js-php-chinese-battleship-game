<?php include("navbar.php"); ?>

<div class="row">
			<div class="col-sm-6">
				<p><span class="font-weight-bold">Цвета:</span> 
                <a <?php echo "class=\"$activeLink\""; ?> href="index.php">Животные 1</a>, 
                <a <?php echo "class=\"$activeLink2\""; ?> href="?page=animals2">Животные 2</a>, 
                <a <?php echo "class=\"$activeLink3\""; ?> href="?page=animals3">Животные 3</a>, 
                <a <?php echo "class=\"$activeLink4\""; ?> href="?page=animals4">Животные 4</a>, 
                <a <?php echo "class=\"$activeLink5\""; ?> href="?page=animals5">Животные 5</a></br> 
					<span class="font-weight-bold">Сч. слова:</span> 
                    <a <?php echo "class=\"$activeLink6\""; ?> href="?page=liangci">Разное</a>, 
                    <a <?php echo "class=\"$activeLink7\""; ?> href="?page=liangci2">Одежда 1</a>, 
                    <a <?php echo "class=\"$activeLink8\""; ?> href="?page=liangci3">Одежда 2</a></p>
            </div>
            <div class="col-sm-6">
                    <p><span class="font-weight-bold">Послелоги:</span> 
                    <a <?php echo "class=\"$activeLink9\""; ?> href="?page=fangweici">Разное</a>, 
                    <a <?php echo "class=\"$activeLink10\""; ?> href="?page=fangweici2">Школа</a></br>
                    <span class="font-weight-bold">Им. словосочетания:</span> 
                    <a <?php echo "class=\"$activeLink11\""; ?> href="?page=words">Места</a>, 
                    <a <?php echo "class=\"$activeLink12\""; ?> href="?page=words2">Профессии</a></p> 
            </div>
</div>

<div class="row">
			<div class="col-sm-12">
            <?php echo "<p class=\"text-center font-weight-bold\"> $nameH1 </p>";
            ?>
			</div>
</div>