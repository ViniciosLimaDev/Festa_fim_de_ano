<?php 

$db_name = 'festa_fim_ano';
$db_host = 'localhost';
$db_user = 'root';
$db_passaword = '';

$pdo = new PDO("mysql:dbname=".$db_name.";host=".$db_host,$db_user, $db_passaword);