// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapTypeId: "terrain",
        zoom: 10,
        center: { lat: 51.841096, lng: 76.619814 },
    });
    const flightPlanCoordinates = [];

    firebase.database().ref('test').on('value', (snapTest) => {

        snapTest.forEach(function(reg) {
            var lt, ln;
            firebase.database().ref('test/' + reg.key).once('value', (snapD) => {

                snapD.forEach(function(cor) {

                    if (cor.key == "ln") ln = cor.val();
                    if (cor.key == "lt") lt = cor.val();


                });
                flightPlanCoordinates.push({ lat: lt, lng: ln });
            });
        });

        //Отрисовка
        const flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#FFAD62",
            strokeOpacity: 1.0,
            strokeWeight: 5,
        });
        const imageDanger = "../img/markerDanger.png";
        const imageNormal = "../img/markerNormal.png";
        const imageStable = "../img/markerStable.png";

        for (let i = 0; i < flightPlanCoordinates.length; i++) {
            const beachMarker = new google.maps.Marker({
                position: { lat: flightPlanCoordinates[i].lat, lng: flightPlanCoordinates[i].lng },
            });
            const contentStringDanger =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeadingDanger"><img src="img/alertDanger.png">Повышенная опасность</h1>' +
                '<div id="bodyContent">' +
                "<span><b>Температура:</b> " +
                "<span>130</span>" +
                "<span> °C</span></span>" +
                "<span><b>Поток:</b> " +
                "<span>500</span>" +
                "<span> л/мин</span></span>" +
                "<span><b>Давление:</b> " +
                "<span>120</span>" +
                "<span> бар</span></span>" +
                "<span><b>Активность:</b> " +
                "<span>Активна</span></span>" +
                "<p> Отправьте увдеомление нажав на кнопку ниже</p>" +
                '<button class="alert_btnDanger">Уведомить</button>'
            "</div>" +
            "</div>";
            const contentStringNormal =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeadingNormal"><img src="img/alertNormal.png">Приемлемо</h1>' +
                '<div id="bodyContent">' +
                "<span><b>Температура:</b> " +
                "<span>95</span>" +
                "<span> °C</span></span>" +
                "<span><b>Поток:</b> " +
                "<span>300</span>" +
                "<span> л/мин</span></span>" +
                "<span><b>Давление:</b> " +
                "<span>50</span>" +
                "<span> бар</span></span>" +
                "<span><b>Активность:</b> " +
                "<span>Активна</span></span>" +
                "<p> Отправьте увдеомление нажав на кнопку ниже</p>" +
                '<button class="alert_btnNormal">Уведомить</button>'
            "</div>" +
            "</div>";
            const contentStringStable =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeadingStable"><img src="img/alertStable.png">Стабильно</h1>' +
                '<div id="bodyContent">' +
                "<span><b>Температура:</b> " +
                "<span>90</span>" +
                "<span> °C</span></span>" +
                "<span><b>Поток:</b> " +
                "<span>200</span>" +
                "<span> л/мин</span></span>" +
                "<span><b>Давление:</b> " +
                "<span>26</span>" +
                "<span> бар</span></span>" +
                "<span><b>Активность:</b> " +
                "<span>Активна</span></span>" +
                "<p> Отправьте увдеомление нажав на кнопку ниже</p>" +
                '<button class="alert_btnStable">Уведомить</button>'
            "</div>" +
            "</div>";

            const infowindow = new google.maps.InfoWindow({
                content: contentStringNormal,
            });
            const marker = new google.maps.Marker({
                position: { lat: flightPlanCoordinates[i].lat, lng: flightPlanCoordinates[i].lng },
                map,
                title: "Состояние",
                icon: imageStable,
            });

            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            });
        }
        flightPath.setMap(map);
        //конец отрисовки

    });




}