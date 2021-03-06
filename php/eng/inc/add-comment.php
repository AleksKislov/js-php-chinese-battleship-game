<?php 
    include("config.php"); 
    require("../../inc/db.php");

    //post comments
	if(isset($_POST['submit'])) {

        // check if there is an author
        $author = mysqli_real_escape_string($conn, $_POST['author']);
        $author = (strlen($author) === 0 ? 'Anon' : $author);

        $body = mysqli_real_escape_string($conn, $_POST['body']);

        if( strlen($body) !== 0 ) {
            $postquery = "INSERT INTO comments(author, body) VALUES('$author', '$body')";
    
            if(mysqli_query($conn, $postquery)) {
                ob_start();
                header('Location: ' . $ROOT_URL . 'index_en.php');
                exit();
            } else {
                echo 'ERROR ' . mysqli_error($conn);
            }
        } else {
            $msg = 'It seems, that there is nothing to submit yet.';
        }
    }
    
?>


<!DOCTYPE html>
<html lang="en">

<head>
    
    <link rel="icon" type="image/png" href="../../../img/favicon.png" sizes="32x32">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  	<title>Add Your Comment</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="../../../css/style.css">

</head>

<body>

    <div class="container">

    <?php include("navbar.php"); ?>
                
        <a href="<?php echo $ROOT_URL . 'index_en.php' ?>" class="btn btn-outline-primary" style="margin-top: 1rem; margin-bottom: 1rem">Back</a>

        <div class="card border-secondary mb-3">
            <div class="card-header"><h5>Leave a Comment</h5></div>
            <div class="card-body text-secondary">
                <form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
                    <div class="form-group">
                        <label>Author:</label>
                        <input type="text" name="author" class="form-control" placeholder="Anon">
                    </div>
                    <div class="form-group">
                        <label>Comment:</label>
                        <textarea name="body" class="form-control"></textarea>
                    </div>

                    <input type="submit" name="submit" value="Submit" class="btn btn-outline-primary">
                    <span style="color: red; margin-left: 1rem; opacity: 0.7"><?php echo $msg ?></span>
                </form>				
            </div>
        </div>

    </div>



</body>

</html>

