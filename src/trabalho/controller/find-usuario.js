function selectAuthor() {
    $('.result-autor').click(function(e) {
        e.preventDefault()

        let idElement = $(this).attr('id')
        let nameElement = $(this).attr('data-name')

        $('#result').append(`
        <input type="text" class="form-control" value="${nameElement}" disabled>
        <input type="hidden" name="USUARIO_IDUSUARIO" id="USUARIO_IDUSUARIO" value="${idElement}" />`)

        $('#' + idElement).hide()

    })
}



$(document).ready(function() {

    $('#AUTOR').keyup(function(e) {
        e.preventDefault()

        let NOME = `NOME=${$(this).val()}`


        if ($(this).val().length >= 3) {
            
            $('#autores').empty()

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/find-usuario.php',
                success: function(dados) {
                    for (const dado of dados) {
<<<<<<< HEAD
                        $('#autores').append(`<input type="text" id="${dado.IDUSUARIO}" data-name="${dado.NOME}" class="form-control result-autor" value="${dado.NOME}">`)
                    }
                    selectAuthor()
=======
                        $('#autores').append(`<input type="text" name="" id="${dado.IDUSUARIO}" class="form-control result-autor" value="${dado.NOME}" >`)
                    }
                    $('.result-autor').click(function(e) {
                        $('#autores').empty()
                        $('#AUTOR').empty()
                        $('#lista').append(`< input type="text" name="" id="${dado.IDUSUARIO}" class="form-control result-autor" value="${dado.NOME}"> `)
                    })
>>>>>>> 4917cf22a6d45f52daa5a4884b8ec0dae84773d6
                }
            })

        }else{
        $('#autores').empty()

        }
    })
})
