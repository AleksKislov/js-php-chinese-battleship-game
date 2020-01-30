<?php require("db.php");

	$query = 'SELECT * FROM comments ORDER BY date DESC';

	$result = mysqli_query($conn, $query);

	$comments = mysqli_fetch_all($result, MYSQLI_ASSOC);

	mysqli_free_result($result);

	mysqli_close($conn);

?>


<div class="container">
	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-8 comments">
			<h3>Комментарии <button type="button" class="btn btn-outline-secondary btn-sm" id="commentsToggle">Тумблер</button></h3>

			<div id="allComments">
				<?php foreach($comments as $comment) : ?>

					<div class="card bg-light mb-3">
						<div class="card-header"><?php echo $comment['author']; ?> <?php echo $comment['date'] ?> написал:</div>
						<div class="card-body">
							<p><?php echo $comment['body']; ?></p>
						</div>
					</div>

				<?php endforeach; ?>
			</div>

            <a href="<?php echo $ROOT_URL . 'php/add-comment.php' ?>" class="btn btn-outline-primary" style="margin-bottom: 1rem; margin-top: 1rem">Добавить Комментарий</a>

		</div>
	</div>
</div>

<hr style="width: 100%; color: rgb(163, 162, 162); height: 1px; background-color:rgb(139, 137, 137); margin-top: 5px" />    


<footer class="page-footer">

	<div class="footer-copyright text-center py-3">༼ つ ◕_◕ ༽つ 2019 Ки©лов для 
		<a href="https://chineseplus.ru"> ChinesePlus.ru</a>
	</div>
  
</footer>


	<!-- Bootstrap core JavaScript -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	 <!-- Custom scripts -->

	 
	<script>
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
	  	})
	</script>
	
	<script>
		$("table").delegate('td','mouseover mouseleave', function(e) {
				if (e.type == 'mouseover') {
					$(this).parent().addClass("hoverMe");
					$("colgroup").eq($(this).index()).addClass("hoverMe");
				}
				else {
					$(this).parent().removeClass("hoverMe");
					$("colgroup").eq($(this).index()).removeClass("hoverMe");
				}
		});
	</script>
    
    <script src="resize.js?v=4"></script>
	<script src="dictation.js?v=4"></script>
	<script src="reminder.js?v=4"></script>
	<script src="js/common_source.js?v=4"></script>
	<script <?php echo "src=\"$activeJS\"" ?>></script>