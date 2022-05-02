<?<?php 
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];

	$mailTo = "Professor.Cervisia@hotmail.com";
	$header = "Van: ".$email;
	$tekst = "Er is een nieuwe inschrijving voor de presale lijst van: ".$name;

	mail($mailTo, $header, $tekst, $email);
	header("Location: ../index.html");
}

