// 
$(document).ready(function (){
    let arrayButtonDelete = document.querySelectorAll('#delete')
    $(arrayButtonDelete).each(function(index){
        $(this).on('click', function (){
            let value = $(this).val(); //Создал переменную для проверки зеачения кнопки
            $.ajax({
                contentType: 'application/json',
                url: '/shop/delete',
                type: 'post',
                data: JSON.stringify({ id: value }), //Отправил значение айди в формате JSON
                success: function (response){
                    console.log(response)
                }
            })
        })
    })
})