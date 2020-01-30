<?php include("a_config.php"); ?>

<?php require("db.php");

	//post comments

	if(isset($_POST['submit'])) {

		$author = mysqli_real_escape_string($conn, $_POST['author']);
		$body = mysqli_real_escape_string($conn, $_POST['body']);

		$postquery = "INSERT INTO comments(author, body) VALUES('$author', '$body')";

		if(mysqli_query($conn, $postquery)) {
			header('Location: ' .$ROOT_URL . 'index.php');
		} else {
			echo 'ERROR ' . mysqli_error($conn);
		}
    }
    
?>


<!DOCTYPE html>
<html lang="en">

<head>
    
    <link rel="icon" type="image/png" href="img/favicon.png" sizes="32x32">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  	<title>Добавить комментарий</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


</head>

<body>

    <div class="container">

                
            <a href="<?php echo $ROOT_URL ?>" class="btn btn-outline-primary" style="margin-top: 1rem; margin-bottom: 1rem">Назад</a>

                <div class="card border-secondary mb-3">
                    <div class="card-header"><h5>Оставить Комментарий</h5></div>
                    <div class="card-body text-secondary">
                        <form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
                            <div class="form-group">
                                <label>Author:</label>
                                <input type="text" name="author" class="form-control" placeholder="Аноним" value="Аноним">
                            </div>
                            <div class="form-group">
                                <label>Комментарий:</label>
                                <textarea name="body" class="form-control"></textarea>
                            </div>

                            <input type="submit" name="submit" value="Отправить" class="btn btn-outline-primary">
                        </form>				
                    </div>
                </div>


    </div>



</body>

</html>

