<?php

include("db.php");

$idPatient=$_POST["idPatient"];
$diagnostic=$_POST["diagnostic"];
$traitement=$_POST["traitement"];
$noteClinique=$_POST["noteClinique"];

$sql="INSERT INTO dossier_medical(idPatient,diagnostic,traitement,noteClinique)
VALUES(?,?,?,?)";

$stmt=$conn->prepare($sql);
$stmt->bind_param("isss",$idPatient,$diagnostic,$traitement,$noteClinique);

if($stmt->execute()){

echo json_encode(["status"=>"success"]);

}else{

echo json_encode(["status"=>"error"]);

}

?>
