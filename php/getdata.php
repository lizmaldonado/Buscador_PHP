<?php  //archivo para leer los datos y mostrarlos todos
//include("clase.php")
//de donde sacaremos los datos
$str=file_get_contents("../data-1.json");
echo $str;

//decodificaremos
//$obj=json_decode($str);

//print $obj -> {"Ciudad"};



 ?>
