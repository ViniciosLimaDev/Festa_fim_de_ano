<?php 

require 'config.php';

    header('Content-type: application/json');

    $name =$_POST['nome'];
    $opiniao =$_POST['opiniao'];

    $name1 =$_POST['nome1'];
    $opiniao1 =$_POST['opiniao1'];

    $name2 =$_POST['nome2'];
    $opiniao2 =$_POST['opiniao2'];

    if($name && $opiniao && $name1 && $opiniao1 && $name2 && $opiniao2){
        $sql = $pdo->prepare('INSERT INTO opiniao (nome,opiniao,nome1,opiniao1,nome2,opiniao2) VALUES (:nome, :opiniao, :nome1, :opiniao1, :nome2, :opiniao2)');
        $sql->bindValue(':nome', $name);
        $sql->bindValue(':opiniao', $opiniao);
        $sql->bindValue(':nome1', $name1);
        $sql->bindValue(':opiniao1', $opiniao1);
        $sql->bindValue(':nome2', $name2);
        $sql->bindValue(':opiniao2', $opiniao2);
        $sql->execute();

        if ($sql->rowCount() >= 1){
            echo json_encode ('comentario salvo com sucesso');
        } else {
            echo json_encode('erro ao salvar comentario');
        }
    }else{
        echo json_encode('erro ao salvar comentario');
    }

 


    

