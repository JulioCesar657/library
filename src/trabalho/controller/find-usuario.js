function selectAuthor() {
    $('.result-autor').click(function(e) {
        e.preventDefault()

        let idElement = $(this).attr('id')
        let nameElement = $(this).attr('data-name')

        $('#result').append(`
        <div type="text" class="alert alert-info">${nameElement}</div>
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
                        $('#autores').append(`
                        <div class="alert alert-secondary" id="${dado.IDUSUARIO}" data-name="${dado.NOME}" role="alert">${dado.NOME}</div>
                        `)
                    }
                    selectAuthor()
                }
            })

        }else{
        $('#autores').empty()

        }
    })
})
