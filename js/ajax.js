$(document).ready(function() {

    $('#formSend').submit(function(e) {
        e.preventDefault();

        var data = $(this).serialize();
        console.log(data);


        $.ajax({
            url: 'envia.php',
            method: 'POST',
            data: data,
            dataType: 'json'
        }).done(function(result) {
            $('#nome').val('');
            $('#opiniao').val('');
            console.log(result);
            getComments();
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

                $('#comments_1').prepend('<div id="comentario1"><h4> Nome: ' + result[i].nome + '</h4><p> Opinião:   ' + result[i].opiniao + '<br> Data: ' + dataAtual + '</p></div>')
                $('#comments_2').prepend('<div id="comentario2"><h4> Nome: ' + result[i].nome1 + '</h4><p> Opinião:   ' + result[i].opiniao1 + '<br> Data: ' + dataAtual + '</p></div>')
                $('#comments_3').prepend('<div id="comentario3"><h4> Nome: ' + result[i].nome2 + '</h4><p> Opinião:   ' + result[i].opiniao2 + '<br> Data: ' + dataAtual + '</p></div>')
            }

        });
    }

})