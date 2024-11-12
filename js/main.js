$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(**) *****-****'
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            }, 
            phone: {
                required:true
            },
            email: {
                required: true, 
                email: true
            }, 
            message: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, insira o seu nome completo',
            phone: 'Por favor, insira um telofone para contato',
            email: 'Por favor, insira seu e-mail'
        },
        submitHandler: function(form) {
            console.log(form)
        }
    })
})