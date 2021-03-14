$(document).ready(function () {

    //Mover elementos por la pagina
    $('.element').draggable();


    //Redimencionar elementos.
    $('.element').resizable();


    //Seleccionar elementos
    var list = $('.select-list');
    //  list.selectable();
    list.sortable({
        update: function (event, ui) {
            console.log('Ha cambiado la lista!');
        }
    });



    //Dropable
    $('#moved-el').draggable();
    $('#area').droppable({
        drop: function () {
            console.log('Has solado algo dentro de la caja verde!');
        }
    })


    //Efectos

    var show = $("#show");
    var box = $(".box-efect");

    show.click(function () {
        box.toggle("explode", "slow"); //puedo poner la velocidad en milisegundos. Antes del tiempo, puedo usar un JSON para definir tamaño y otras cosas ("explode", {} ,"slow")
        //puedo usar "slide" "drop" "fade" "fold" "puff" y varios otros que encontraremos en la documentación.
    })

    //Tooltip

    $(document).tooltip();

    //Dialogo
    var pop = $('#popup');
    $('#lanzar-popup').click(function () {
        pop.dialog();
        pop.css('display', 'block');

    });


    //Calendario
    var calendario = $("#calendario");
    calendario.datepicker();

    //tabs
    $('#pestanas').tabs();

});


