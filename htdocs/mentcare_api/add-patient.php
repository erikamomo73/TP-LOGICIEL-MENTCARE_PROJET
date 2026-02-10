<?php

include("db.php");

$nomP = $_POST["nomP"];
$age = $_POST["age"];
$sexe = $_POST["sexe"];

$sql = "INSERT INTO patient(nomP,age,sexe) VALUES(?,?,?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sis",$nomP,$age,$sexe);

if($stmt->execute()){

echo json_encode(["status"=>"success"]);

}else{

echo json_encode(["status"=>"error"]);

}

?>
