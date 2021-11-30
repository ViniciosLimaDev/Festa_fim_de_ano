$(function() {

    $('.formSend').submit(function(e) {
        e.preventDefault();

        console.log($(this));

        var u_name = $('#nome').val();
        var u_opiniao = $('#opiniao').val();

        console.log(u_name, u_opiniao);

        $.ajax({
            url: 'envia.php',
            method: 'POST',
            data: { name: u_name, opiniao: u_opiniao },
            dataType: 'json'
        }).done(function(result) {
            $('#nome').val('');
            $('#opiniao').val('');
            console.log(result);
            getComments();
        });



    });

    $('#formComments_2').submit(function(e) {
        e.preventDefault();

        console.log($(this));

        var u_name = $('#nome1').val();
        var u_opiniao = $('#opiniao1').val();

        console.log(u_name, u_opiniao);

        $.ajax({
            url: 'envia2.php',
            method: 'POST',
            data: { name1: u_name, opiniao1: u_opiniao },
            dataType: 'json'
        }).done(function(result) {
            $('#nome1').val('');
            $('#opiniao1').val('');
            console.log(result + 'segundo');
            getComments1();
        });



    });

    $('#formComments_3').submit(function(e) {
        e.preventDefault();

        console.log($(this));

        var u_name = $('#nome2').val();
        var u_opiniao = $('#opiniao2').val();

        console.log(u_name, u_opiniao);

        $.ajax({
            url: 'envia3.php',
            method: 'POST',
            data: { name2: u_name, opiniao2: u_opiniao },
            dataType: 'json'
        }).done(function(result) {
            $('#nome2').val('');
            $('#opiniao2').val('');
            console.log(result + 'segundo');
            getComments2();
        });



    });

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    console.log(dataAtual);

    function getComments() {
        $.ajax({
            url: 'recebe.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(result) {

            console.log(result);

            for (var i = 0; i < result.length; i++) {
                $('#comments_1').prepend('<div id="comentario1"><h4> Nome: ' + result[i].name + '</h4><p> Opinião:   ' + result[i].opiniao + '<br> Data: ' + dataAtual + '</p></div>')
            }

        });
    }

    function getComments1() {
        $.ajax({
            url: 'recebe2.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(result1) {

            console.log(result1);

            for (var i = 0; i < result1.length; i++) {
                $('#comments_2').prepend('<div id="comentario2"><h4> Nome: ' + result1[i].name + '</h4><p> Opinião:   ' + result1[i].opiniao + '<br> Data: ' + dataAtual + '</p></div>')
            }

        });
    }

    function getComments2() {
        $.ajax({
            url: 'recebe3.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(result2) {

            console.log(result2);

            for (var i = 0; i < result2.length; i++) {
                $('#comments_3').prepend('<div id="comentario3"><h4> Nome: ' + result2[i].name + '</h4><p> Opinião:   ' + result2[i].opiniao + '<br> Data: ' + dataAtual + '</p></div>')
            }

        });
    }

})