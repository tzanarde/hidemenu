$(".menu a").mouseover(function () { 
    var menu = $(this).parent().children(".submenu");
    var submenu = $(this).parent().parent();
    if(menu.length > 0 && menu.is(":hidden")){
        $(".menu a").removeClass("ativo");
        $(this).addClass("ativo");
        $(".submenu").slideUp();
        menu.slideDown();
    }
    if(!submenu.hasClass('submenu') && menu.length == 0){
        $("#menu a").removeClass('ativo');
        $(this).addClass('ativo');
        $('.submenu').slideUp();
     }
});



/*
$(".submenu1").toggle();

//Button's click event
$("#menu1").click(function (e) { 
    e.preventDefault();
});

$("#menu1").mouseover(function () { 
    $(".submenu1").toggle();
});

$("#menu1").mouseout(function () { 
    $(".submenu1").toggle();
});

$(".submenu1").mouseover(function () { 
    $(".submenu1").toggle();
});
*/


/*
//Button's mouse over event
$("#menu1").mouseover(function () { 
    $("#submenu1").addClass("menu-aparecendo");
    $("#submenu1").removeClass("menu-escondido");
});

$("#menu1").mouseout(function () { 
    $("#submenu1").addClass("menu-escondido");
    $("#submenu1").removeClass("menu-aparecendo");
});

$("#submenu1").mouseover(function () { 
    $("#submenu1").addClass("menu-aparecendo");
});

$("#submenu1").mouseout(function () { 
    $("#submenu1").addClass("menu-escondido");
    console.log("Saiu do SubMenu");
});*/

/*
function createHideMenu(){
    var ul = $("<ul>");
    var li11 = $("<li>").text("Menu 1 1");
    var li12 = $("<li>").text("Menu 1 2");
    var li13 = $("<li>").text("Menu 1 2");
    
    ul.append(li11);
    ul.append(li12);
    ul.append(li13);

    return ul;

}*/