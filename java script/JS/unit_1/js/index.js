
$(function () {
    //alert($('h1').text());  //t1

    // alert($('.link-moto').text());

    // $('.slide-btn').hide();

    // $('.hd').hide(3000);

    // $('.categorie').show(2000);

    // alert($('li').text());

    // $('.swhd').hide(3500);
    // $('.swhd').show(2000);

    // $('h3 > span').hide(1000);
    // $('h3 > span').show(2000);

    // alert($('.sp').text());

    // alert($('.nm').text());

    // alert($('.post-head').text());

    // $('.i').hide();

    // hide("my_form");  //t2 
    // hide("img_2");
    // // hide("moto_models");

    // function hide(name_id_obj){
    //     obj=$("#"+name_id_obj);
    //     obj.hide(3000);
    //     obj.show(3000);
    // }

    // $('h1').fadeOut(3000);
    // $('h1').fadeIn(3000);

    // $(".head-moto-img").fadeTo(7000, 0.2)
    // $(".head-moto-img").fadeTo(7000, 0.8)

    // $("h1").slideUp(3000)
    // $("h1").slideDown(3000)

    // $(".head-moto-img").fadeOut(3000, function(){
    //     alert('ended')
    // });

    // $('.blog-post').fadeOut(1500);
    // $(".blog-time-line").slideUp(2000);
    // $(".blog-time-line").slideDown(3000);
    // $(".blog-post").fadeIn(6000);

    // zr("#img_1", 2000, 10000);
    // zr("#img_2", 2000, 10000);
    // zr("#img_3", 2000, 10000);
    // zr("#img_4", 2000, 10000);

    // function zr(name_obj, t1, t2){
    //     obj = $("name_obj");
    //     obj.slideUp(t1);
    //     obj.slideDown(t2);

    // }

    // trnsp("#img_1", 2000, 0.3);  //2.5
    // trnsp("#img_2", 2000, 0,7);
    // trnsp("#img_3", 2000, 0.3);
    // trnsp("#img_4", 2000, 0);

    // function trnsp(name_obj, time, opacity){
    //     obj = $(name_obj);
    //     obj.fadeTo(time, opacity);
    //     obj.slideUp(time);
    //     obj.slideDown(time);
    //     obj.fadeTo(time, 1);

    // }


    // slide("#img_1", 3000, 2000);   //2.6
    // slide("#img_2", 2000, 3000);
    // slide("#img_3", 3000, 2000);
    // slide("#img_4", 2000, 3000);

    // function slide(name_obj, time1, time2){
    //     obj = $(name_obj);
    //     obj.slideUp(time1);
    // obj.slideDown(time2);


    // }

    //  $('.moto1').slideUp(2000);    //2.3
    //  $('.moto1').slideDown(1000);


    // $(".head-moto-img").fadeTo("slow", 0.05);  //2.2
    // $(".head-moto-img").fadeTo(7000, 1);

    // $(".top-nav").hide(3000, function(){
    // alert('Меню було сховано використовуючи callback функцію')  //2.7
    // });


    // $('.slide-text').slideUp(3000, function () {          //2.8


    //     trnsp("#img_3", 2000, 0.3);


    //     function trnsp(name_obj, time, opacity) {
    //         obj = $(name_obj);
    //         obj.fadeTo(time, opacity);
    //         obj.slideUp(time);
    //         obj.slideDown(time);
    //         obj.fadeTo(time, 1);

    //     }



    //     slide("#img_2", 2000, 3000);

    //     slide("#img_4", 3000, 2000);

    //     function slide(name_obj, time1, time2) {
    //         obj = $(name_obj);
    //         obj.slideUp(time1);
    //         obj.slideDown(time2);
    //     }
    // });

    // $(".slide-btn").click(function () {
    //     alert('ffff');
    // });

    // $(".features-grids").click(function () {
    // $('.head-moto-img').slideToggle(2000);
    // });

    //  $(".head-moto-img").click(function () {
    //      $(this).fadeToggle(2000);
    //  });

    // $(".slide-btn").click(function () {
    //     $(this).text("you clicked 'slide-btn' button");
    // });


    // $(".blog-post-date").click(function () {
    //     $('+.blog-post-info>.categorie',this).fadeToggle(2000);
    // });


    //  $(".blog-post-date").click(function(){
    // $('+.blog-post-info>.categorie',this).fadeToggle(2000);


    // })


    // $(".features-grids").click(function () {
    //     $(".head-moto-img").slideToggle(2000);
    // })

    //     $(".features-grid").click(function () {          //неудачная попытка
    //         $(".head-moto-img").slideUp(2000, function () {
    //             $(".features-grid").click(function () {
    //                 $(".head-moto-img").slideDown(2000)
    //             })
    //         })

    //   })



    //    $(".moto-hider").click(function () {
    //         $(".head-moto-img").slideUp(2000);
    //      })

    // $(".moto-hider").click(function () {
    //     $(".head-moto-img").slideUp(2000);
    //     $(this).text("Подивитись фото")
    // })

    var text1 = "Показати фото";
    var text2 = "Сховати фото";
    $(".moto-hider").click(function () {
        $(".head-moto-img").slideToggle(2000);
        if ($(".moto-hider").text() != text1)
            $('.moto-hider').text(text1)
        else
            $('.moto-hider').text(text2);
    })
})