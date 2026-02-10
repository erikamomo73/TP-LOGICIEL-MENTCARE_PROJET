<?php

include("db.php");

$email=$_POST['email'];
$password=$_POST['password'];

$sql="SELECT * FROM user WHERE email='$email' AND motdepasse='$password'";

$result=mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){

$row=mysqli_fetch_assoc($result);

echo json_encode([
"status"=>"success",
"role"=>$row['role']
]);

}else{

echo json_encode([
"status"=>"error"
]);

}

?>
