function addCard(u_name, u_surname, u_patronymic, u_date, u_email, u_phone) {

    userInfo.insertAdjacentHTML("beforeend",
        `        <div class="profile_page">
        <div class="profile_line">
            <div class="container">
                <div class="profile_flex">
                    <div id="profile-img" class="profile-img"></div>
                    <div class="profile-content">
                        <h2 class="profile_user-name">` + u_surname + ' ' + u_name + ' ' + u_patronymic + `</h2>
                        <div class="profile_user-info">
                            <p>E-Mail</p>
                            <span>` + u_email + `</span>
                        </div>
                        <div class="profile_user-info">
                            <p class="dob">Дата рождения</p>
                            <span>` + u_date + ` </span>
                        </div>
                        <div class="profile_user-info">
                            <p  class="user_phone">Номер телефона</p>
                            <span>` + u_phone + `</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="profile_full">
                <h3 class="full_information">Полная информация</h3>
                <div class="profile_full-info">
                    <div class="profile_full-info">
                        <span class="profile_full-title f_name">Имя</span><span>` + u_name + `</span>
                    </div>
                    <div class="profile_full-info">
                        <span class="profile_full-title s_name">Фамилия</span><span>` + u_surname + `</span>
                    </div>
                    <div class="profile_full-info">
                        <span class="profile_full-title patronymic">Отчество</span><span>` + u_patronymic + `</span>
                    </div>
                    <div class="profile_full-info">
                        <span class="profile_full-title dob">Дата рождения</span><span>` + u_date + `</span>
                    </div>
                    <div class="profile_full-info">
                        <span class="profile_full-title user_email">Email</span><span>` + u_email + `</span>
                    </div>
                    <div class="profile_full-info">
                        <span class="profile_full-title user_phone">Номер телефона</span><span>` + u_phone + `</span>
                    </div>
                </div>
            </div>
            <a href="reset.html"><button class="reset btn_style3 reset_pass">Сбросить пароль</button></a>
            <a onclick="exi()"><button class="reset btn_style1 exit_btn">Выйти из профиля</button></a>
        </div>
    </div>`

    );


}