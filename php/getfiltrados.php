<?php
//echo "<h1>Se han recibido los datos exitosamente</h1>";

//$Opciudad=$_GET["ciudad"];   // debe ser el mismo que lo que tiene name


//echo "recibimos la opcion de ciudad elegida por el cliente que es: ".$Opciudad;
$str=file_get_contents("../data-1.json");
echo $str;



 ?>
