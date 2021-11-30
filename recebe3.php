<?php 
    header('Content-type: application/json');


    $pdo = new PDO('mysql:host=localhost; dbname=bd-opiniao;', 'root', '');

    $stmt = $pdo->prepare('SELECT * FROM comments2');
    $stmt->execute();


    if ($stmt->rowCount() >= 1){
        echo json_encode ($stmt->fetchAll(PDO::FETCH_ASSOC));
    } else {
        echo json_encode('erro ao pegar comentario');
    }
