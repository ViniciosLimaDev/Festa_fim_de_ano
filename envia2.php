<?php 

    header('Content-type: application/json');

    $name =$_POST['name1'];
    $opiniao =$_POST['opiniao1'];


    $pdo = new PDO('mysql:host=localhost; dbname=bd-opiniao;', 'root', '');

    $stmt = $pdo->prepare('INSERT INTO comments1 (name,opiniao) VALUES (:na, :op)' );
    $stmt->bindValue(':na', $name);
    $stmt->bindValue(':op', $opiniao);
    $stmt->execute();


    if ($stmt->rowCount() >= 1){
        echo json_encode ('comentario salvo com sucesso');
    } else {
        echo json_encode('erro ao salvar comentario');
    }
