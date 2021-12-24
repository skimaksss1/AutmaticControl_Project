// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAByxacWYr1s47nx-vNCApdT5ttOvP-f_A",
    authDomain: "automaticcontrol01.firebaseapp.com",
    projectId: "automaticcontrol01",
    storageBucket: "automaticcontrol01.appspot.com",
    messagingSenderId: "491275522414",
    appId: "1:491275522414:web:519db75ddf83071038717f",
    measurementId: "G-S0QKYQVECJ"
};

firebase.initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.

var g_uid = '';

function prov(qwer) {
    if (qwer === "") return false;
    else return true;
}

function testString(s) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 5;
}

function reg() {

    if (prov(document.getElementById('login_reg').value) && prov(password = document.getElementById('pass_reg').value) && prov(document.getElementById('repass_reg').value)) {
        var email = document.getElementById('login_reg').value;
        var password = document.getElementById('pass_reg').value;
        var repassword = document.getElementById('repass_reg').value;
        if (password === repassword) {
            if (testString(password)) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Signed in 

                        var uid = userCredential.user.uid;
                        sessionStorage.setItem("u_email", email);
                        firebase.database().ref("Users").child(uid).set({

                            activated: false
                        });
                        document.location.replace('activated.html');

                        // ...
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        alert(errorMessage);
                        // ..
                    });

                language();
            } else {
                smoke.alert("<b>Не удается зарегестрироваться</b><br><br> Пожалуйста проверьте правильность написания пароля.<br><ul><li><i>Минимум 6 символов</i></li><li><i>Минимум 1 буква</i></li></ul>");
            }
        } else {
            smoke.alert("<b>Введенные пароли не совпадают</b>");
        }
    } else {
        smoke.alert("<b>Заполните все поля для регистрации</b>");
    }

}


function auth() {
    if (prov(document.getElementById('login_auth').value) && prov(document.getElementById('pass_auth').value)) {
        var email = document.getElementById('login_auth').value;
        var password = document.getElementById('pass_auth').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                var uid = userCredential.user.uid;
                var active = user.emailVerified;
                console.log(uid);

                sessionStorage.setItem("uid", uid);
                sessionStorage.setItem('isloginIn', 'true');
                if (active) {
                    document.location.replace('general.html');

                } else
                    document.location.replace('activated.html');

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                smoke.alert("<b>Пользователь не найден</b>");
            });
        language();
    } else {
        smoke.alert("<b>Заполните все поля для авторизации</b>");
    }
}

function verify() {
    const user = firebase.auth().currentUser;
    var uid = firebase.auth().currentUser.uid;

    var u_surname = document.getElementById("u_surname").value;
    var u_name = document.getElementById("u_name").value;
    var u_patronymic = document.getElementById("u_patronymic").value;
    var u_date = document.getElementById("u_date").value;
    var u_iin = document.getElementById("u_iin").value;
    var u_bin = document.getElementById("u_bin").value;
    var u_phone = document.getElementById("u_phone").value;
    var u_email = sessionStorage.getItem("u_email");

    const foto = document.getElementById('upload').files[0];
    var path = 'user`s photo/' + uid + ".jpg";

    if (foto != null && prov(u_surname) && prov(u_name) && prov(u_patronymic) && prov(u_date) && prov(u_iin) && prov(u_bin) && prov(u_phone) && prov(u_email)) {
        firebase.storage().ref('user`s photo/').child(uid + '.jpg').put(foto).then((arg) => {

            firebase.database().ref("Users").child(uid).set({
                u_surname: u_surname,
                u_name: u_name,
                u_patronymic: u_patronymic,
                u_date: u_date,
                u_iin: u_iin,
                u_bin: u_bin,
                u_phone: u_phone,
                u_photo: path,
                u_email: u_email,
                activated: true
            }).then((subArg) => {

                send_verification(user);
                smoke.alert("<b>Подтвердите свой акаунт перейдя по ссылке отправленное вам на почту</b><br><i class='inform'>Сейчас вы будете перенаправлены на страницу входа</i>");
                setTimeout(() => { document.location.replace('index.html'); }, 100000);

            });


        });
    } else {
        smoke.alert("<b>Заполните все поля для активации профиля</b>");
    }

}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });


function exi() {
    firebase.auth().signOut().then(() => {
        sessionStorage.setItem('isloginIn', 'false');
        sessionStorage.clear();
        document.location.replace("index.html");
    }).catch((error) => {
        alert("Ошибка, попробуйте еще раз!");
    });
}

isLoginIn = false;


function check() {
    var isLogin = sessionStorage.getItem('isloginIn');
    if (isLogin != 'true') {
        document.location.replace("index.html");
    }

}

function language() {
    var en = sessionStorage.getItem('lang');
    if (en == 'en') {
        eng_loc();
    } else if (en == 'ru') {
        ru_loc();
    } else if (en == 'kz') {
        kz_loc();
    }
}

function send_verification(user) {
    user.sendEmailVerification().then(function() {

    }).catch(function(error) {

    });

}

function addProfile() {
    check();
    var uid = sessionStorage.getItem('uid');
    console.log(uid);
    var u_name;
    var u_surname;
    var u_patronymic;
    var u_date;
    var u_email;
    var u_phone;
    var u_photo;

    firebase.database().ref('Users').child(uid).once('value', (snapProfile) => {

        snapProfile.forEach(function(u_profile) {

            if (u_profile.key == "u_name") u_name = u_profile.val();
            if (u_profile.key == "u_surname") u_surname = u_profile.val();
            if (u_profile.key == "u_patronymic") u_patronymic = u_profile.val();
            if (u_profile.key == "u_date") u_date = u_profile.val();
            if (u_profile.key == "u_email") u_email = u_profile.val();
            if (u_profile.key == "u_phone") u_phone = u_profile.val();
            if (u_profile.key == "u_photo") u_photo = u_profile.val();

        });

        addCard(u_name, u_surname, u_patronymic, u_date, u_email, u_phone);

        firebase.storage().ref('user`s photo/' + uid + '.jpg').getDownloadURL().then((url) => {
            //alert(url);
            document.getElementById("profile-img").style.backgroundImage = 'url(' + url + ')';
        });
        language();
    });
}

function respPassw() {
    var email = document.getElementById("email_t").value;

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

}