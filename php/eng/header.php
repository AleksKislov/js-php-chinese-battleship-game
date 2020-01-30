<nav class="navbar">
            <div id="myHeader">
                <h4>Морской Бой</h4>
                <span id="bringLower">汉语版</span>
            </div>

            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <a href="index.php" class="btn btn-secondary btn-lg" role="button">Рус</a>
                    <a href="#" class="btn btn-info btn-lg active" role="button">Eng</a>
            </div>
</nav>
<hr style="width: 100%; color: rgb(163, 162, 162); height: 1px; background-color:rgb(139, 137, 137); margin-top: 5px" />    



<div class="row">
			<div class="col-sm-6">
				<p><span class="font-weight-bold">Colors:</span> 
                <a <?php echo "class=\"$activeLink\""; ?> href="index_en.php">Animals 1</a>, 
                <a <?php echo "class=\"$activeLink2\""; ?> href="?page=animals2">Animals 2</a>, 
                <a <?php echo "class=\"$activeLink3\""; ?> href="?page=animals3">Animals 3</a>, 
                <a <?php echo "class=\"$activeLink4\""; ?> href="?page=animals4">Animals 4</a>, 
                <a <?php echo "class=\"$activeLink5\""; ?> href="?page=animals5">Animals 5</a></br> 
					<span class="font-weight-bold">Measure Words:</span> 
                    <a <?php echo "class=\"$activeLink6\""; ?> href="?page=liangci">Miscellaneous</a>, 
                    <a <?php echo "class=\"$activeLink7\""; ?> href="?page=liangci2">Clothing 1</a>, 
                    <a <?php echo "class=\"$activeLink8\""; ?> href="?page=liangci3">Clothing 2</a></p>
            </div>
            <div class="col-sm-6">
                    <p><span class="font-weight-bold">Nouns of Locality:</span> 
                    <a <?php echo "class=\"$activeLink9\""; ?> href="?page=fangweici">Miscellaneous</a>, 
                    <a <?php echo "class=\"$activeLink10\""; ?> href="?page=fangweici2">School</a></br>
                    <span class="font-weight-bold">Noun Phrases:</span> 
                    <a <?php echo "class=\"$activeLink11\""; ?> href="?page=words">Places</a>, 
                    <a <?php echo "class=\"$activeLink12\""; ?> href="?page=words2">Professions</a></p> 
            </div>
</div>

<div class="row">
			<div class="col-sm-12">
            <?php echo "<p class=\"text-center font-weight-bold\"> $nameH1 </p>";
            ?>
			</div>
</div>