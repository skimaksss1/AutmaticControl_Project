var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function() {
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#' + target).addClass('active');
        }
    }

});

swiper.on('slideChange', function() {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#' + target).addClass('active');

    if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});



$(function() {
    $('.reg_btn').click(function() {
        $('.log').css({
            "display": "none"
        });
        $('.reg').css({
            "display": "block"
        });
    });
    $('.log_btn').click(function() {
        $('.reg').css({
            "display": "none"
        });
        $('.log').css({
            "display": "block"
        });
    });
});

$(function() {
    $('.eye1o').click(function() {
        $('#pass_auth').attr('type', 'text');
        $('.eye1o').css({
            "display": "none"
        });
        $('.eye1c').css({
            "display": "block"
        });
    });
});

$(function() {
    $('.eye1c').click(function() {
        $('#pass_auth').attr('type', 'password');
        $('.eye1c').css({
            "display": "none"
        });
        $('.eye1o').css({
            "display": "block"
        });
    });
});


$(function() {
    $('.eye2o').click(function() {
        $('#pass_reg').attr('type', 'text');
        $('.eye2o').css({
            "display": "none"
        });
        $('.eye2c').css({
            "display": "block"
        });
    });
});

$(function() {
    $('.eye2c').click(function() {
        $('#pass_reg').attr('type', 'password');
        $('.eye2c').css({
            "display": "none"
        });
        $('.eye2o').css({
            "display": "block"
        });
    });
});
$(function() {
    $('.eye3o').click(function() {
        $('#repass_reg').attr('type', 'text');
        $('.eye3o').css({
            "display": "none"
        });
        $('.eye3c').css({
            "display": "block"
        });
    });
});

$(function() {
    $('.eye3c').click(function() {
        $('#repass_reg').attr('type', 'password');
        $('.eye3c').css({
            "display": "none"
        });
        $('.eye3o').css({
            "display": "block"
        });
    });
});

function getName(str) {
    if (str.lastIndexOf('\\')) {
        var i = str.lastIndexOf('\\') + 1;
    } else {
        var i = str.lastIndexOf('/') + 1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}


// $('.autoplay').slick({
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: true,
//     speed: 800
// });


// 

/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function(i) {
        if (i == 0) {
            $current.prepend($('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder
            }));

            return;
        }

        $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
            text: $(this).text()
        }));
    });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
    $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
});







// Мультиязычность 
function eng_loc() {
    $('.eng').addClass('active_lang');
    $('.ru').removeClass('active_lang');
    $('.kz').removeClass('active_lang');
    sessionStorage.setItem('lang', 'en');


    let lc = document.querySelectorAll(".lc");
    for (let i = 0; i < lc.length; i++) {
        lc[i].textContent = "Personal account";
    }
    let myGS = document.querySelectorAll(".myGS");
    for (let i = 0; i < myGS.length; i++) {
        myGS[i].textContent = "Service stations";
    }
    let historyApplication = document.querySelectorAll(".historyApplication");
    for (let i = 0; i < historyApplication.length; i++) {
        historyApplication[i].textContent = "My orders";
    }
    let application = document.querySelectorAll(".application");
    for (let i = 0; i < application.length; i++) {
        application[i].textContent = "Request";
    }
    let pipelines = document.querySelectorAll(".pipelines");
    for (let i = 0; i < pipelines.length; i++) {
        pipelines[i].textContent = "Pipelines";
    }
    let more = document.querySelectorAll(".more");
    for (let i = 0; i < more.length; i++) {
        more[i].textContent = "More detail";
    }
    let quantity = document.querySelectorAll(".quantity");
    for (let i = 0; i < quantity.length; i++) {
        quantity[i].textContent = "Fuel quantity:";
    }
    let pressure = document.querySelectorAll(".pressure");
    for (let i = 0; i < pressure.length; i++) {
        pressure[i].textContent = "Fuel pressure:";
    }
    let liter = document.querySelectorAll(".liter");
    for (let i = 0; i < liter.length; i++) {
        liter[i].textContent = " liter";
    }
    let bar = document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
        bar[i].textContent = " bar";
    }
    let disel = document.querySelectorAll(".disel");
    for (let i = 0; i < disel.length; i++) {
        disel[i].textContent = "Disel: ";
    }
    let reset_lng = document.querySelectorAll(".reset_lng");
    for (let i = 0; i < reset_lng.length; i++) {
        reset_lng[i].textContent = "Reset";
    }
    let page_title = document.querySelectorAll(".page_title");
    for (let i = 0; i < page_title.length; i++) {
        page_title[i].textContent = "My gas stations";
    }
    let swpquery = document.querySelectorAll(".swpquery");
    for (let i = 0; i < swpquery.length; i++) {
        swpquery[i].placeholder = "Search...";
    }
    let consumption = document.querySelectorAll(".consumption");
    for (let i = 0; i < consumption.length; i++) {
        consumption[i].textContent = "Fuel consumption";
    }
    let temperature = document.querySelectorAll(".temperature");
    for (let i = 0; i < temperature.length; i++) {
        temperature[i].textContent = "Temperature";
    }
    let flame = document.querySelectorAll(".flame");
    for (let i = 0; i < flame.length; i++) {
        flame[i].textContent = "Flame";
    }
    let activity = document.querySelectorAll(".activity");
    for (let i = 0; i < activity.length; i++) {
        activity[i].textContent = "Activity";
    }
    let reset_btn = document.querySelectorAll(".reset_btn");
    for (let i = 0; i < reset_btn.length; i++) {
        reset_btn[i].textContent = "Reset";
    }
    let reset = document.querySelectorAll(".reset_pass");
    for (let i = 0; i < reset.length; i++) {
        reset[i].textContent = "Reset the password";
    }
    let exit_btn = document.querySelectorAll(".exit_btn");
    for (let i = 0; i < exit_btn.length; i++) {
        exit_btn[i].textContent = "Exit profile";
    }
    let full_information = document.querySelectorAll(".full_information");
    for (let i = 0; i < full_information.length; i++) {
        full_information[i].textContent = "Full information";
    }
    let f_name = document.querySelectorAll(".f_name");
    for (let i = 0; i < f_name.length; i++) {
        f_name[i].textContent = "First name";
    }
    let s_name = document.querySelectorAll(".s_name");
    for (let i = 0; i < s_name.length; i++) {
        s_name[i].textContent = "Second name";
    }
    let patronymic = document.querySelectorAll(".patronymic");
    for (let i = 0; i < patronymic.length; i++) {
        patronymic[i].textContent = "Patronymic";
    }
    let dob = document.querySelectorAll(".dob");
    for (let i = 0; i < dob.length; i++) {
        dob[i].textContent = "Date of birth";
    }
    let user_phone = document.querySelectorAll(".user_phone");
    for (let i = 0; i < user_phone.length; i++) {
        user_phone[i].textContent = "Phone number";
    }
    let select_city = document.querySelectorAll(".sel1 .sel__placeholder");
    for (let i = 0; i < select_city.length; i++) {
        select_city[i].textContent = "Select city";
    }
    let select_city2 = document.querySelectorAll(".sel1 .sel__placeholder");
    for (let i = 0; i < select_city2.length; i++) {
        $('.sel1 .sel__placeholder').attr('data-placeholder', 'Select city');
    }
    let select_station = document.querySelectorAll(".sel2 .sel__placeholder");
    for (let i = 0; i < select_station.length; i++) {
        select_station[i].textContent = "Select station";
    }
    let select_station2 = document.querySelectorAll(".sel2 .sel__placeholder");
    for (let i = 0; i < select_station2.length; i++) {
        $('.sel2 .sel__placeholder').attr('data-placeholder', 'Select station');
    }
    let select_filling = document.querySelectorAll(".sel3 .sel__placeholder");
    for (let i = 0; i < select_filling.length; i++) {
        select_filling[i].textContent = "Select the type of filling";
    }
    let select_filling2 = document.querySelectorAll(".sel3 .sel__placeholder");
    for (let i = 0; i < select_filling2.length; i++) {
        $('.sel3 .sel__placeholder').attr('data-placeholder', 'Select the type of filling');
    }
    let sel_ta = document.querySelectorAll(".sel4 .sel_ta");
    for (let i = 0; i < sel_ta.length; i++) {
        sel_ta[i].placeholder = "Additional field";
    }
    let send_request = document.querySelectorAll(".send_request");
    for (let i = 0; i < send_request.length; i++) {
        send_request[i].textContent = "Send a request";
    }
    let entry = document.querySelectorAll(".entry");
    for (let i = 0; i < entry.length; i++) {
        entry[i].textContent = "Entry";
    }
    let registry = document.querySelectorAll(".registry");
    for (let i = 0; i < registry.length; i++) {
        registry[i].textContent = "Registration";
    }
    let forgot_pass = document.querySelectorAll(".forgot_pass");
    for (let i = 0; i < forgot_pass.length; i++) {
        forgot_pass[i].textContent = "Forgot your password?";
    }
    let cancel = document.querySelectorAll(".cancel");
    for (let i = 0; i < cancel.length; i++) {
        cancel[i].textContent = "Cancel";
    }
    let file = document.querySelectorAll(".file");
    for (let i = 0; i < file.length; i++) {
        file[i].textContent = "File";
    }
    let agreements = document.querySelectorAll(".agreements");
    for (let i = 0; i < agreements.length; i++) {
        agreements[i].textContent = "By clicking the ''Confirm'' button, you accept the terms of the ";
    }
    let agreement = document.querySelectorAll(".agreement");
    for (let i = 0; i < agreement.length; i++) {
        agreement[i].textContent = "User Agreement";
    }
    let acrivate_profile = document.querySelectorAll(".acrivate_profile");
    for (let i = 0; i < acrivate_profile.length; i++) {
        acrivate_profile[i].textContent = "Activate your profile";
    }
    let contact_d = document.querySelectorAll(".contact_d");
    for (let i = 0; i < contact_d.length; i++) {
        contact_d[i].textContent = "To activate, you need to fill in your contact details";
    }
    let u_surname = document.querySelectorAll("#u_surname ");
    for (let i = 0; i < u_surname.length; i++) {
        u_surname[i].placeholder = "Ivanov";
    }
    let u_name = document.querySelectorAll("#u_name ");
    for (let i = 0; i < u_name.length; i++) {
        u_name[i].placeholder = "Ivan";
    }
    let u_patronymic = document.querySelectorAll("#u_patronymic ");
    for (let i = 0; i < u_patronymic.length; i++) {
        u_patronymic[i].placeholder = "Ivanovich";
    }
    let fileformlabel = document.querySelectorAll("#fileformlabel ");
    for (let i = 0; i < fileformlabel.length; i++) {
        fileformlabel[i].textContent = "Select your photo";
    }
    //Befor's начало
    let sel1 = document.querySelectorAll(".sel1");
    for (let i = 0; i < sel1.length; i++) {
        $('.sel1').removeClass('kz_before-city');
        $('.sel1').removeClass('ru_before-city');
        $('.sel1').addClass('eng_before-city');
    }
    let sel2 = document.querySelectorAll(".sel2");
    for (let i = 0; i < sel2.length; i++) {
        $('.sel2').removeClass('kz_before-station');
        $('.sel2').removeClass('ru_before-station');
        $('.sel2').addClass('eng_before-station');
    }
    let sel3 = document.querySelectorAll(".sel3");
    for (let i = 0; i < sel3.length; i++) {
        $('.sel3').removeClass('kz_before-application');
        $('.sel3').removeClass('ru_before-application');
        $('.sel3').addClass('eng_before-application');
    }
    let sel4 = document.querySelectorAll(".sel4");
    for (let i = 0; i < sel4.length; i++) {
        $('.sel4').removeClass('kz_before-comments');
        $('.sel4').removeClass('ru_before-comments');
        $('.sel4').addClass('eng_before-comments');
    }
    let input_pass = document.querySelectorAll(".input_pass");
    for (let i = 0; i < input_pass.length; i++) {
        $('.input_pass').removeClass('kz_before-pass');
        $('.input_pass').removeClass('ru_before-pass');
        $('.input_pass').addClass('eng_before-pass');
    }
    let re_pass = document.querySelectorAll(".re_pass");
    for (let i = 0; i < re_pass.length; i++) {
        $('.re_pass').removeClass('kz_before-rePass');
        $('.re_pass').removeClass('ru_before-rePass');
        $('.re_pass').addClass('eng_before-rePass');
    }
    let a_lastname = document.querySelectorAll(".a_lastname");
    for (let i = 0; i < a_lastname.length; i++) {
        $('.a_lastname').removeClass('kz_before-a_lastname');
        $('.a_lastname').removeClass('ru_before-a_lastname');
        $('.a_lastname').addClass('eng_before-a_lastname');
    }
    let a_firstname = document.querySelectorAll(".a_firstname");
    for (let i = 0; i < a_firstname.length; i++) {
        $('.a_firstname').removeClass('kz_before-a_firstname');
        $('.a_firstname').removeClass('ru_before-a_firstname');
        $('.a_firstname').addClass('eng_before-a_firstname');
    }
    let a_patronymic = document.querySelectorAll(".a_patronymic");
    for (let i = 0; i < a_patronymic.length; i++) {
        $('.a_patronymic').removeClass('kz_before-a_patronymic');
        $('.a_patronymic').removeClass('ru_before-a_patronymic');
        $('.a_patronymic').addClass('eng_before-a_patronymic');
    }
    let a_dob = document.querySelectorAll(".a_dob");
    for (let i = 0; i < a_dob.length; i++) {
        $('.a_dob').removeClass('kz_before-a_dob');
        $('.a_dob').removeClass('ru_before-a_dob');
        $('.a_dob').addClass('eng_before-a_dob');
    }
    let a_iin = document.querySelectorAll(".a_iin");
    for (let i = 0; i < a_iin.length; i++) {
        $('.a_iin').removeClass('kz_before-a_iin');
        $('.a_iin').removeClass('ru_before-a_iin');
        $('.a_iin').addClass('eng_before-a_iin');
    }
    let a_bin = document.querySelectorAll(".a_bin");
    for (let i = 0; i < a_bin.length; i++) {
        $('.a_bin').removeClass('kz_before-a_bin');
        $('.a_bin').removeClass('ru_before-a_bin');
        $('.a_bin').addClass('eng_before-a_bin');
    }
    let a_phone = document.querySelectorAll(".a_phone");
    for (let i = 0; i < a_phone.length; i++) {
        $('.a_phone').removeClass('kz_before-a_phone');
        $('.a_phone').removeClass('ru_before-a_phone');
        $('.a_phone').addClass('eng_before-a_phone');
    }
    let a_photo = document.querySelectorAll(".a_photo");
    for (let i = 0; i < a_photo.length; i++) {
        $('.a_photo').removeClass('kz_before-a_photo');
        $('.a_photo').removeClass('ru_before-a_photo');
        $('.a_photo').addClass('eng_before-a_photo');
    }

    // Befor's конец

}
$('.eng').click(function() {
    eng_loc();
});








function ru_loc() {
    $('.eng').removeClass('active_lang');
    $('.ru').addClass('active_lang');
    $('.kz').removeClass('active_lang');
    sessionStorage.setItem('lang', 'ru');



    let lc = document.querySelectorAll(".lc");
    for (let i = 0; i < lc.length; i++) {
        lc[i].textContent = "Личный кабинет";
    }
    let myGS = document.querySelectorAll(".myGS");
    for (let i = 0; i < myGS.length; i++) {
        myGS[i].textContent = "Мои АЗС";
    }
    let historyApplication = document.querySelectorAll(".historyApplication");
    for (let i = 0; i < historyApplication.length; i++) {
        historyApplication[i].textContent = "История заявок";
    }
    let application = document.querySelectorAll(".application");
    for (let i = 0; i < application.length; i++) {
        application[i].textContent = "Оставить заявку";
    }
    let pipelines = document.querySelectorAll(".pipelines");
    for (let i = 0; i < pipelines.length; i++) {
        pipelines[i].textContent = "Трубопроводы";
    }
    let more = document.querySelectorAll(".more");
    for (let i = 0; i < more.length; i++) {
        more[i].textContent = "Подробнее";
    }
    let quantity = document.querySelectorAll(".quantity");
    for (let i = 0; i < quantity.length; i++) {
        quantity[i].textContent = "Количество топлива:";
    }
    let pressure = document.querySelectorAll(".pressure");
    for (let i = 0; i < pressure.length; i++) {
        pressure[i].textContent = "Давление топлива:";
    }
    let liter = document.querySelectorAll(".liter");
    for (let i = 0; i < liter.length; i++) {
        liter[i].textContent = " литр";
    }
    let bar = document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
        bar[i].textContent = " бар";
    }
    let disel = document.querySelectorAll(".disel");
    for (let i = 0; i < disel.length; i++) {
        disel[i].textContent = "Дизель: ";
    }
    let reset_lng = document.querySelectorAll(".reset_lng");
    for (let i = 0; i < reset_lng.length; i++) {
        reset_lng[i].textContent = "Повторить";
    }
    let page_title = document.querySelectorAll(".page_title");
    for (let i = 0; i < page_title.length; i++) {
        page_title[i].textContent = "Мои автозаправочные станции";
    }
    let swpquery = document.querySelectorAll(".swpquery");
    for (let i = 0; i < swpquery.length; i++) {
        swpquery[i].placeholder = "Поиск...";
    }
    let consumption = document.querySelectorAll(".consumption");
    for (let i = 0; i < consumption.length; i++) {
        consumption[i].textContent = "Расход топлива";
    }
    let temperature = document.querySelectorAll(".temperature");
    for (let i = 0; i < temperature.length; i++) {
        temperature[i].textContent = "Температура";
    }
    let flame = document.querySelectorAll(".flame");
    for (let i = 0; i < flame.length; i++) {
        flame[i].textContent = "Пламя";
    }
    let activity = document.querySelectorAll(".activity");
    for (let i = 0; i < activity.length; i++) {
        activity[i].textContent = "Активность";
    }
    let reset_btn = document.querySelectorAll(".reset_btn");
    for (let i = 0; i < reset_btn.length; i++) {
        reset_btn[i].textContent = "Сбросить";
    }
    let reset = document.querySelectorAll(".reset_pass");
    for (let i = 0; i < reset.length; i++) {
        reset[i].textContent = "Сбросить пароль";
    }
    let exit_btn = document.querySelectorAll(".exit_btn");
    for (let i = 0; i < exit_btn.length; i++) {
        exit_btn[i].textContent = "Выйти из профиля";
    }
    let full_information = document.querySelectorAll(".full_information");
    for (let i = 0; i < full_information.length; i++) {
        full_information[i].textContent = "Подробная информация";
    }
    let f_name = document.querySelectorAll(".f_name");
    for (let i = 0; i < f_name.length; i++) {
        f_name[i].textContent = "Имя";
    }
    let s_name = document.querySelectorAll(".s_name");
    for (let i = 0; i < s_name.length; i++) {
        s_name[i].textContent = "Фамилия";
    }
    let patronymic = document.querySelectorAll(".patronymic");
    for (let i = 0; i < patronymic.length; i++) {
        patronymic[i].textContent = "Отчество";
    }
    let dob = document.querySelectorAll(".dob");
    for (let i = 0; i < dob.length; i++) {
        dob[i].textContent = "Дата рождения";
    }
    let user_phone = document.querySelectorAll(".user_phone");
    for (let i = 0; i < user_phone.length; i++) {
        user_phone[i].textContent = "Номер телефона";
    }
    let select_city = document.querySelectorAll(".sel1 .sel__placeholder");
    for (let i = 0; i < select_city.length; i++) {
        select_city[i].textContent = "Выберите город";
    }
    let select_city2 = document.querySelectorAll(".sel1 .sel__placeholder");
    for (let i = 0; i < select_city2.length; i++) {
        $('.sel1 .sel__placeholder').attr('data-placeholder', 'Выберите город');
    }
    let select_station = document.querySelectorAll(".sel2 .sel__placeholder");
    for (let i = 0; i < select_station.length; i++) {
        select_station[i].textContent = "Выберите станцию";
    }
    let select_station2 = document.querySelectorAll(".sel2 .sel__placeholder");
    for (let i = 0; i < select_station2.length; i++) {
        $('.sel2 .sel__placeholder').attr('data-placeholder', 'Выберите станцию');
    }
    let select_filling = document.querySelectorAll(".sel3 .sel__placeholder");
    for (let i = 0; i < select_filling.length; i++) {
        select_filling[i].textContent = "Выберите тип заявки";
    }
    let select_filling2 = document.querySelectorAll(".sel3 .sel__placeholder");
    for (let i = 0; i < select_filling2.length; i++) {
        $('.sel3 .sel__placeholder').attr('data-placeholder', 'Выберите тип заявки');
    }
    let sel_ta = document.querySelectorAll(".sel4 .sel_ta");
    for (let i = 0; i < sel_ta.length; i++) {
        sel_ta[i].placeholder = "Дополнительное поле";
    }
    let send_request = document.querySelectorAll(".send_request");
    for (let i = 0; i < send_request.length; i++) {
        send_request[i].textContent = "Отправить запрос";
    }
    let entry = document.querySelectorAll(".entry");
    for (let i = 0; i < entry.length; i++) {
        entry[i].textContent = "Войти";
    }
    let registry = document.querySelectorAll(".registry");
    for (let i = 0; i < registry.length; i++) {
        registry[i].textContent = "Регистрация";
    }
    let forgot_pass = document.querySelectorAll(".forgot_pass");
    for (let i = 0; i < forgot_pass.length; i++) {
        forgot_pass[i].textContent = "Забыли пароль?";
    }
    let cancel = document.querySelectorAll(".cancel");
    for (let i = 0; i < cancel.length; i++) {
        cancel[i].textContent = "Отменить";
    }
    let file = document.querySelectorAll(".file");
    for (let i = 0; i < file.length; i++) {
        file[i].textContent = "Файл";
    }
    let agreements = document.querySelectorAll(".agreements");
    for (let i = 0; i < agreements.length; i++) {
        agreements[i].textContent = "Нажимая кнопку “Подтвердить” , Вы принимаете условия ";
    }
    let agreement = document.querySelectorAll(".agreement");
    for (let i = 0; i < agreement.length; i++) {
        agreement[i].textContent = "Пользовательского соглашения";
    }
    let acrivate_profile = document.querySelectorAll(".acrivate_profile");
    for (let i = 0; i < acrivate_profile.length; i++) {
        acrivate_profile[i].textContent = "Активируйте профиль";
    }
    let contact_d = document.querySelectorAll(".contact_d");
    for (let i = 0; i < contact_d.length; i++) {
        contact_d[i].textContent = "Активируйте профиль";
    }
    let u_surname = document.querySelectorAll("#u_surname ");
    for (let i = 0; i < u_surname.length; i++) {
        u_surname[i].placeholder = "Иваноа";
    }
    let u_name = document.querySelectorAll("#u_name ");
    for (let i = 0; i < u_name.length; i++) {
        u_name[i].placeholder = "Ивае";
    }
    let u_patronymic = document.querySelectorAll("#u_patronymic ");
    for (let i = 0; i < u_patronymic.length; i++) {
        u_patronymic[i].placeholder = "Иванович";
    }
    let fileformlabel = document.querySelectorAll("#fileformlabel ");
    for (let i = 0; i < fileformlabel.length; i++) {
        fileformlabel[i].textContent = "Выберите свою фотографию";
    }
    //Befor's начало
    let sel1 = document.querySelectorAll(".sel1");
    for (let i = 0; i < sel1.length; i++) {
        $('.sel1').removeClass('kz_before-city');
        $('.sel1').addClass('ru_before-city');
        $('.sel1').removeClass('eng_before-city');
    }
    let sel2 = document.querySelectorAll(".sel2");
    for (let i = 0; i < sel2.length; i++) {
        $('.sel2').removeClass('kz_before-station');
        $('.sel2').addClass('ru_before-station');
        $('.sel2').removeClass('eng_before-station');
    }
    let sel3 = document.querySelectorAll(".sel3");
    for (let i = 0; i < sel3.length; i++) {
        $('.sel3').removeClass('kz_before-application');
        $('.sel3').addClass('ru_before-application');
        $('.sel3').removeClass('eng_before-application');
    }
    let sel4 = document.querySelectorAll(".sel4");
    for (let i = 0; i < sel4.length; i++) {
        $('.sel4').removeClass('kz_before-comments');
        $('.sel4').addClass('ru_before-comments');
        $('.sel4').removeClass('eng_before-comments');
    }
    let input_pass = document.querySelectorAll(".input_pass");
    for (let i = 0; i < input_pass.length; i++) {
        $('.input_pass').removeClass('kz_before-pass');
        $('.input_pass').addClass('ru_before-pass');
        $('.input_pass').removeClass('eng_before-pass');
    }
    let re_pass = document.querySelectorAll(".re_pass");
    for (let i = 0; i < re_pass.length; i++) {
        $('.re_pass').removeClass('kz_before-rePass');
        $('.re_pass').addClass('ru_before-rePass');
        $('.re_pass').removeClass('eng_before-rePass');
    }
    let a_lastname = document.querySelectorAll(".a_lastname");
    for (let i = 0; i < a_lastname.length; i++) {
        $('.a_lastname').removeClass('kz_before-a_lastname');
        $('.a_lastname').addClass('ru_before-a_lastname');
        $('.a_lastname').removeClass('eng_before-a_lastname');
    }
    let a_firstname = document.querySelectorAll(".a_firstname");
    for (let i = 0; i < a_firstname.length; i++) {
        $('.a_firstname').removeClass('kz_before-a_firstname');
        $('.a_firstname').addClass('ru_before-a_firstname');
        $('.a_firstname').removeClass('eng_before-a_firstname');
    }
    let a_patronymic = document.querySelectorAll(".a_patronymic");
    for (let i = 0; i < a_patronymic.length; i++) {
        $('.a_patronymic').removeClass('kz_before-a_patronymic');
        $('.a_patronymic').addClass('ru_before-a_patronymic');
        $('.a_patronymic').removeClass('eng_before-a_patronymic');
    }
    let a_dob = document.querySelectorAll(".a_dob");
    for (let i = 0; i < a_dob.length; i++) {
        $('.a_dob').removeClass('kz_before-a_dob');
        $('.a_dob').addClass('ru_before-a_dob');
        $('.a_dob').removeClass('eng_before-a_dob');
    }
    let a_iin = document.querySelectorAll(".a_iin");
    for (let i = 0; i < a_iin.length; i++) {
        $('.a_iin').removeClass('kz_before-a_iin');
        $('.a_iin').addClass('ru_before-a_iin');
        $('.a_iin').removeClass('eng_before-a_iin');
    }
    let a_bin = document.querySelectorAll(".a_bin");
    for (let i = 0; i < a_bin.length; i++) {
        $('.a_bin').removeClass('kz_before-a_bin');
        $('.a_bin').addClass('ru_before-a_bin');
        $('.a_bin').removeClass('eng_before-a_bin');
    }
    let a_phone = document.querySelectorAll(".a_phone");
    for (let i = 0; i < a_phone.length; i++) {
        $('.a_phone').removeClass('kz_before-a_phone');
        $('.a_phone').addClass('ru_before-a_phone');
        $('.a_phone').removeClass('eng_before-a_phone');
    }
    let a_photo = document.querySelectorAll(".a_photo");
    for (let i = 0; i < a_photo.length; i++) {
        $('.a_photo').removeClass('kz_before-a_photo');
        $('.a_photo').addClass('ru_before-a_photo');
        $('.a_photo').removeClass('eng_before-a_photo');
    }

    // Befor's конец
}
$('.ru').click(function() {
    ru_loc();
});











function kz_loc() {
    $('.eng').removeClass('active_lang');
    $('.ru').removeClass('active_lang');
    $('.kz').addClass('active_lang');
    sessionStorage.setItem('lang', 'kz');


    let lc = document.querySelectorAll(".lc");
    for (let i = 0; i < lc.length; i++) {
        lc[i].textContent = "Жеке кабинет";
    }
    let myGS = document.querySelectorAll(".myGS");
    for (let i = 0; i < myGS.length; i++) {
        myGS[i].textContent = "Жанармай бекеттерім";
    }
    let historyApplication = document.querySelectorAll(".historyApplication");
    for (let i = 0; i < historyApplication.length; i++) {
        historyApplication[i].textContent = "Тапсырыстарым";
    }
    let application = document.querySelectorAll(".application");
    for (let i = 0; i < application.length; i++) {
        application[i].textContent = "Тапсырыс";
    }
    let pipelines = document.querySelectorAll(".pipelines");
    for (let i = 0; i < pipelines.length; i++) {
        pipelines[i].textContent = "Құбырлар";
    }
    let more = document.querySelectorAll(".more");
    for (let i = 0; i < more.length; i++) {
        more[i].textContent = "Толығырақ";
    }
    let quantity = document.querySelectorAll(".quantity");
    for (let i = 0; i < quantity.length; i++) {
        quantity[i].textContent = "Жанармай мөлшері:";
    }
    let pressure = document.querySelectorAll(".pressure");
    for (let i = 0; i < pressure.length; i++) {
        pressure[i].textContent = "Жанармай қысымы:";
    }
    let liter = document.querySelectorAll(".liter");
    for (let i = 0; i < liter.length; i++) {
        liter[i].textContent = " литр";
    }
    let bar = document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
        bar[i].textContent = " бар";
    }
    let disel = document.querySelectorAll(".disel");
    for (let i = 0; i < disel.length; i++) {
        disel[i].textContent = "Дизель: ";
    }
    let reset_lng = document.querySelectorAll(".reset_lng");
    for (let i = 0; i < reset_lng.length; i++) {
        reset_lng[i].textContent = "Қайталау";
    }
    let page_title = document.querySelectorAll(".page_title");
    for (let i = 0; i < page_title.length; i++) {
        page_title[i].textContent = "Жанармай бекеттерім";
    }
    let swpquery = document.querySelectorAll(".swpquery");
    for (let i = 0; i < swpquery.length; i++) {
        swpquery[i].placeholder = "Іздеу...";
    }
    let consumption = document.querySelectorAll(".consumption");
    for (let i = 0; i < consumption.length; i++) {
        consumption[i].textContent = "Жанармай шығыны";
    }
    let temperature = document.querySelectorAll(".temperature");
    for (let i = 0; i < temperature.length; i++) {
        temperature[i].textContent = "Температура";
    }
    let flame = document.querySelectorAll(".flame");
    for (let i = 0; i < flame.length; i++) {
        flame[i].textContent = "Жалын";
    }
    let activity = document.querySelectorAll(".activity");
    for (let i = 0; i < activity.length; i++) {
        activity[i].textContent = "Белсенді";
    }
    let reset_btn = document.querySelectorAll(".reset_btn");
    for (let i = 0; i < reset_btn.length; i++) {
        reset_btn[i].textContent = "Жіберу";
    }
    let reset = document.querySelectorAll(".reset_pass");
    for (let i = 0; i < reset.length; i++) {
        reset[i].textContent = "Құпия сөзді қалпына келтіру";
    }
    let exit_btn = document.querySelectorAll(".exit_btn");
    for (let i = 0; i < exit_btn.length; i++) {
        exit_btn[i].textContent = "Профильден шығу";
    }
    let full_information = document.querySelectorAll(".full_information");
    for (let i = 0; i < full_information.length; i++) {
        full_information[i].textContent = "Толық ақпарат";
    }
    let f_name = document.querySelectorAll(".f_name");
    for (let i = 0; i < f_name.length; i++) {
        f_name[i].textContent = "Аты";
    }
    let s_name = document.querySelectorAll(".s_name");
    for (let i = 0; i < s_name.length; i++) {
        s_name[i].textContent = "Жөні";
    }
    let patronymic = document.querySelectorAll(".patronymic");
    for (let i = 0; i < patronymic.length; i++) {
        patronymic[i].textContent = "Тегі";
    }
    let dob = document.querySelectorAll(".dob");
    for (let i = 0; i < dob.length; i++) {
        dob[i].textContent = "Туған күні";
    }
    let user_phone = document.querySelectorAll(".user_phone");
    for (let i = 0; i < user_phone.length; i++) {
        user_phone[i].textContent = "Телефон нөмірі";
    }
    let select_city = document.querySelectorAll(".sel1 .sel__placeholder");
    for (let i = 0; i < select_city.length; i++) {
        select_city[i].textContent = "Қаланы таңдаңыз";
    }
    let select_city2 = document.querySelectorAll(".sel1 .sel__placeholder");
    for (let i = 0; i < select_city2.length; i++) {
        $('.sel1 .sel__placeholder').attr('data-placeholder', 'Қаланы таңдаңыз');
    }
    let select_station = document.querySelectorAll(".sel2 .sel__placeholder");
    for (let i = 0; i < select_station.length; i++) {
        select_station[i].textContent = "Станцияны таңдаңыз";
    }
    let select_station2 = document.querySelectorAll(".sel2 .sel__placeholder");
    for (let i = 0; i < select_station2.length; i++) {
        $('.sel2 .sel__placeholder').attr('data-placeholder', 'Станцияны таңдаңыз');
    }
    let select_filling = document.querySelectorAll(".sel3 .sel__placeholder");
    for (let i = 0; i < select_filling.length; i++) {
        select_filling[i].textContent = "Қолданба түрін таңдаңыз";
    }
    let select_filling2 = document.querySelectorAll(".sel3 .sel__placeholder");
    for (let i = 0; i < select_filling2.length; i++) {
        $('.sel3 .sel__placeholder').attr('data-placeholder', 'Қолданба түрін таңдаңыз');
    }
    let sel_ta = document.querySelectorAll(".sel4 .sel_ta");
    for (let i = 0; i < sel_ta.length; i++) {
        sel_ta[i].placeholder = "Қосымша өріс";
    }
    let send_request = document.querySelectorAll(".send_request");
    for (let i = 0; i < send_request.length; i++) {
        send_request[i].textContent = "Тасырыс жіберу";
    }
    let entry = document.querySelectorAll(".entry");
    for (let i = 0; i < entry.length; i++) {
        entry[i].textContent = "Кіру";
    }
    let registry = document.querySelectorAll(".registry");
    for (let i = 0; i < registry.length; i++) {
        registry[i].textContent = "Тіркелу";
    }
    let forgot_pass = document.querySelectorAll(".forgot_pass");
    for (let i = 0; i < forgot_pass.length; i++) {
        forgot_pass[i].textContent = "Құпия сөзіңізді ұмыттыңыз ба?";
    }
    let cancel = document.querySelectorAll(".cancel");
    for (let i = 0; i < cancel.length; i++) {
        cancel[i].textContent = "Баст тарту";
    }
    let file = document.querySelectorAll(".file");
    for (let i = 0; i < file.length; i++) {
        file[i].textContent = "Файл";
    }
    let agreements = document.querySelectorAll(".agreements");
    for (let i = 0; i < agreements.length; i++) {
        agreements[i].textContent = "«Растау» түймесін басу арқылы сіз шарттарды қабылдайсыз.";
    }
    let agreement = document.querySelectorAll(".agreement");
    for (let i = 0; i < agreement.length; i++) {
        agreement[i].textContent = "Қолдану ережелері";
    }
    let acrivate_profile = document.querySelectorAll(".acrivate_profile");
    for (let i = 0; i < acrivate_profile.length; i++) {
        acrivate_profile[i].textContent = "Профильді іске қосыңыз";
    }
    let contact_d = document.querySelectorAll(".contact_d");
    for (let i = 0; i < contact_d.length; i++) {
        contact_d[i].textContent = "Іске қосу үшін байланыс деректерін толтыру қажет";
    }
    let u_surname = document.querySelectorAll("#u_surname ");
    for (let i = 0; i < u_surname.length; i++) {
        u_surname[i].placeholder = "Иванов";
    }
    let u_name = document.querySelectorAll("#u_name ");
    for (let i = 0; i < u_name.length; i++) {
        u_name[i].placeholder = "Иван";
    }
    let u_patronymic = document.querySelectorAll("#u_patronymic ");
    for (let i = 0; i < u_patronymic.length; i++) {
        u_patronymic[i].placeholder = "Иванұлы";
    }
    let fileformlabel = document.querySelectorAll("#fileformlabel ");
    for (let i = 0; i < fileformlabel.length; i++) {
        fileformlabel[i].textContent = "Фотосуретіңізді таңдаңыз";
    }
    //Befor's начало
    let sel1 = document.querySelectorAll(".sel1");
    for (let i = 0; i < sel1.length; i++) {
        $('.sel1').addClass('kz_before-city');
        $('.sel1').removeClass('ru_before-city');
        $('.sel1').removeClass('eng_before-city');
    }
    let sel2 = document.querySelectorAll(".sel2");
    for (let i = 0; i < sel2.length; i++) {
        $('.sel2').addClass('kz_before-station');
        $('.sel2').removeClass('ru_before-station');
        $('.sel2').removeClass('eng_before-station');
    }
    let sel3 = document.querySelectorAll(".sel3");
    for (let i = 0; i < sel3.length; i++) {
        $('.sel3').addClass('kz_before-application');
        $('.sel3').removeClass('ru_before-application');
        $('.sel3').removeClass('eng_before-application');
    }
    let sel4 = document.querySelectorAll(".sel4");
    for (let i = 0; i < sel4.length; i++) {
        $('.sel4').addClass('kz_before-comments');
        $('.sel4').removeClass('ru_before-comments');
        $('.sel4').removeClass('eng_before-comments');
    }
    let input_pass = document.querySelectorAll(".input_pass");
    for (let i = 0; i < input_pass.length; i++) {
        $('.input_pass').addClass('kz_before-pass');
        $('.input_pass').removeClass('ru_before-pass');
        $('.input_pass').removeClass('eng_before-pass');
    }
    let re_pass = document.querySelectorAll(".re_pass");
    for (let i = 0; i < re_pass.length; i++) {
        $('.re_pass').addClass('kz_before-rePass');
        $('.re_pass').removeClass('ru_before-rePass');
        $('.re_pass').removeClass('eng_before-rePass');
    }
    let a_lastname = document.querySelectorAll(".a_lastname");
    for (let i = 0; i < a_lastname.length; i++) {
        $('.a_lastname').addClass('kz_before-a_lastname');
        $('.a_lastname').removeClass('ru_before-a_lastname');
        $('.a_lastname').removeClass('eng_before-a_lastname');
    }
    let a_firstname = document.querySelectorAll(".a_firstname");
    for (let i = 0; i < a_firstname.length; i++) {
        $('.a_firstname').addClass('kz_before-a_firstname');
        $('.a_firstname').removeClass('ru_before-a_firstname');
        $('.a_firstname').removeClass('eng_before-a_firstname');
    }
    let a_patronymic = document.querySelectorAll(".a_patronymic");
    for (let i = 0; i < a_patronymic.length; i++) {
        $('.a_patronymic').addClass('kz_before-a_patronymic');
        $('.a_patronymic').removeClass('ru_before-a_patronymic');
        $('.a_patronymic').removeClass('eng_before-a_patronymic');
    }
    let a_dob = document.querySelectorAll(".a_dob");
    for (let i = 0; i < a_dob.length; i++) {
        $('.a_dob').addClass('kz_before-a_dob');
        $('.a_dob').removeClass('ru_before-a_dob');
        $('.a_dob').removeClass('eng_before-a_dob');
    }
    let a_iin = document.querySelectorAll(".a_iin");
    for (let i = 0; i < a_iin.length; i++) {
        $('.a_iin').addClass('kz_before-a_iin');
        $('.a_iin').removeClass('ru_before-a_iin');
        $('.a_iin').removeClass('eng_before-a_iin');
    }
    let a_bin = document.querySelectorAll(".a_bin");
    for (let i = 0; i < a_bin.length; i++) {
        $('.a_bin').addClass('kz_before-a_bin');
        $('.a_bin').removeClass('ru_before-a_bin');
        $('.a_bin').removeClass('eng_before-a_bin');
    }
    let a_phone = document.querySelectorAll(".a_phone");
    for (let i = 0; i < a_phone.length; i++) {
        $('.a_phone').addClass('kz_before-a_phone');
        $('.a_phone').removeClass('ru_before-a_phone');
        $('.a_phone').removeClass('eng_before-a_phone');
    }
    let a_photo = document.querySelectorAll(".a_photo");
    for (let i = 0; i < a_photo.length; i++) {
        $('.a_photo').addClass('kz_before-a_photo');
        $('.a_photo').removeClass('ru_before-a_photo');
        $('.a_photo').removeClass('eng_before-a_photo');
    }

    // Befor's конец


}
$('.kz').click(function() {
    kz_loc();
});







$("#text_search").keyup(function(event) {
    //if(event.keyCode == 13){
    //$("#id_of_button").click();
    if ($(this).val().length > 0) {
        resetSearch();
        search();
    } else {
        resetSearch();
    }
    //  $(this).val('');
    // }
});
//