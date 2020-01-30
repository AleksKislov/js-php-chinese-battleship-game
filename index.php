<?php include("php/a_config.php"); ?>



<!DOCTYPE html>
<html lang="en">

<head>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-73132243-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-73132243-3');
</script>

    
    <link rel="icon" type="image/png" href="img/favicon.png" sizes="32x32">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  	<title>Морской Бой на Китайском от ChinesePlus.ru</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" <?php echo "href=\"$activeCSS\"" ?>>


</head>

<body onresize="resize()">

<div class="container">


	<?php include("php/header.php"); ?>


	<?php include($currentBoard); ?>


</div>

<?php include("php/footer.php"); ?>


</body>

</html>

