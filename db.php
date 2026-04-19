<?php

$conn = new mysqli("localhost","root","","bike_rental");

if($conn->connect_error){
die("Connection failed");
}

?>