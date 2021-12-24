function addCard(reg, cardName, colFuelDT, davFuel, colFuel98, colFuel95, colFuel92, activated) {
    var activ = 'not_activated';
    var name = cardName.replace(/\s+/g, '_');
    if (activated == 1) activ = 'activated';
    cards.insertAdjacentHTML("beforeend",
        `<div id="` + name + `" class="card_fild">
        <div class="card_fild-img"></div>
        <div class="card_fild-content">
            <div class="card_title_add">
                <span class="card_fild-title">` + cardName + `</span>
                <a class="btn_application more" onclick="goMore('` + reg + `', '` + cardName + `')">Подробнее</a>
            </div>
            <hr class="hr_line">
            <div class="card_fild-stat">
                <span class="card_fild-fuel disel">ДТ:</span>
                <div class="fluel-xs">
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="24" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.43657 14.5C11.2738 14.5 13.6583 12.4018 13.6583 9.71429C13.6583 8.13508 12.8871 6.5574 12.0041 5.25651C11.113 3.94374 10.0617 2.84601 9.40763 2.21435C8.8613 1.68673 8.01185 1.68673 7.46552 2.21435C6.81144 2.84601 5.76017 3.94374 4.86907 5.25651C3.98604 6.5574 3.21484 8.13508 3.21484 9.71429C3.21484 12.4018 5.59938 14.5 8.43657 14.5Z" stroke="#F18F02"/>
                                <path d="M8.43666 12C8.08233 12 7.73148 11.931 7.40413 11.797C7.07677 11.663 6.77933 11.4666 6.52879 11.219C6.27825 10.9713 6.0795 10.6774 5.94391 10.3538C5.80831 10.0303 5.73853 9.68353 5.73853 9.33334" stroke="#F18F02" stroke-linecap="round"/>
                            </svg>
                            <span class="fuel-title quantity ">Количество топлива:</span>
                        </div>
                        <span class="few">` + colFuelDT + `<span class="dimension liter">л</span></span>
                    </div>
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="28" height="26" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9967 11.5529C14.2378 10.6639 14.2686 9.7321 14.087 8.82946C13.9053 7.92682 13.516 7.07758 12.9491 6.34743C12.3822 5.61729 11.653 5.02581 10.8179 4.61876C9.9827 4.21171 9.06399 4 8.13281 4C7.20162 4 6.28292 4.21171 5.44776 4.61876C4.61261 5.02581 3.88339 5.61729 3.31652 6.34743C2.74965 7.07758 2.36033 7.92682 2.17866 8.82946C1.997 9.7321 2.02786 10.6639 2.26887 11.5529" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M8.64916 10.3882C8.97797 10.8611 8.74673 11.5825 8.13268 11.9996C7.51862 12.4167 6.75428 12.3714 6.42547 11.8985C6.11777 11.4559 5.14755 9.21698 4.41821 7.49082C4.21025 6.99861 4.81511 6.5878 5.20547 6.95613C6.57447 8.24785 8.34146 9.94565 8.64916 10.3882Z" stroke="#F18F02"/>
                                <path d="M8.13281 4V5.33333" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M3.84009 5.75716L4.79402 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M12.4255 5.75716L11.4716 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M13.9966 11.5527L12.6935 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M2.2688 11.5527L3.5719 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                </svg>
                            <span class="fuel-title pressure ">Давление топлива:</span>

                        </div>
                        <span class="few">` + davFuel + `<span class="dimension bar">бар</span></span>
                    </div>
                    <div class="fuel_condition ` + activ + `"></div>
                </div>
            </div>
            <div class="card_fild-stat">
                <span class="card_fild-fuel">98:</span>
                <div class="fluel-xs">
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="24" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.43657 14.5C11.2738 14.5 13.6583 12.4018 13.6583 9.71429C13.6583 8.13508 12.8871 6.5574 12.0041 5.25651C11.113 3.94374 10.0617 2.84601 9.40763 2.21435C8.8613 1.68673 8.01185 1.68673 7.46552 2.21435C6.81144 2.84601 5.76017 3.94374 4.86907 5.25651C3.98604 6.5574 3.21484 8.13508 3.21484 9.71429C3.21484 12.4018 5.59938 14.5 8.43657 14.5Z" stroke="#F18F02"/>
                                <path d="M8.43666 12C8.08233 12 7.73148 11.931 7.40413 11.797C7.07677 11.663 6.77933 11.4666 6.52879 11.219C6.27825 10.9713 6.0795 10.6774 5.94391 10.3538C5.80831 10.0303 5.73853 9.68353 5.73853 9.33334" stroke="#F18F02" stroke-linecap="round"/>
                            </svg>
                            <span class="fuel-title quantity ">Количество топлива:</span>
                        </div>
                        <span class="few">` + colFuel98 + `<span class="dimension liter">л</span></span>
                    </div>
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="28" height="26" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9967 11.5529C14.2378 10.6639 14.2686 9.7321 14.087 8.82946C13.9053 7.92682 13.516 7.07758 12.9491 6.34743C12.3822 5.61729 11.653 5.02581 10.8179 4.61876C9.9827 4.21171 9.06399 4 8.13281 4C7.20162 4 6.28292 4.21171 5.44776 4.61876C4.61261 5.02581 3.88339 5.61729 3.31652 6.34743C2.74965 7.07758 2.36033 7.92682 2.17866 8.82946C1.997 9.7321 2.02786 10.6639 2.26887 11.5529" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M8.64916 10.3882C8.97797 10.8611 8.74673 11.5825 8.13268 11.9996C7.51862 12.4167 6.75428 12.3714 6.42547 11.8985C6.11777 11.4559 5.14755 9.21698 4.41821 7.49082C4.21025 6.99861 4.81511 6.5878 5.20547 6.95613C6.57447 8.24785 8.34146 9.94565 8.64916 10.3882Z" stroke="#F18F02"/>
                                <path d="M8.13281 4V5.33333" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M3.84009 5.75716L4.79402 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M12.4255 5.75716L11.4716 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M13.9966 11.5527L12.6935 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M2.2688 11.5527L3.5719 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                </svg>
                            <span class="fuel-title pressure ">Давление топлива:</span>

                        </div>
                        <span class="few">` + davFuel + `<span class="dimension bar">бар</span></span>
                    </div>
                    <div class="fuel_condition ` + activ + `"></div>
                </div>
            </div>
            <div class="card_fild-stat">
                <span class="card_fild-fuel">95:</span>
                <div class="fluel-xs">
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="24" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.43657 14.5C11.2738 14.5 13.6583 12.4018 13.6583 9.71429C13.6583 8.13508 12.8871 6.5574 12.0041 5.25651C11.113 3.94374 10.0617 2.84601 9.40763 2.21435C8.8613 1.68673 8.01185 1.68673 7.46552 2.21435C6.81144 2.84601 5.76017 3.94374 4.86907 5.25651C3.98604 6.5574 3.21484 8.13508 3.21484 9.71429C3.21484 12.4018 5.59938 14.5 8.43657 14.5Z" stroke="#F18F02"/>
                                <path d="M8.43666 12C8.08233 12 7.73148 11.931 7.40413 11.797C7.07677 11.663 6.77933 11.4666 6.52879 11.219C6.27825 10.9713 6.0795 10.6774 5.94391 10.3538C5.80831 10.0303 5.73853 9.68353 5.73853 9.33334" stroke="#F18F02" stroke-linecap="round"/>
                            </svg>
                            <span class="fuel-title quantity ">Количество топлива:</span>
                        </div>
                        <span class="few">` + colFuel95 + `<span class="dimension liter">л</span></span>
                    </div>
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="28" height="26" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9967 11.5529C14.2378 10.6639 14.2686 9.7321 14.087 8.82946C13.9053 7.92682 13.516 7.07758 12.9491 6.34743C12.3822 5.61729 11.653 5.02581 10.8179 4.61876C9.9827 4.21171 9.06399 4 8.13281 4C7.20162 4 6.28292 4.21171 5.44776 4.61876C4.61261 5.02581 3.88339 5.61729 3.31652 6.34743C2.74965 7.07758 2.36033 7.92682 2.17866 8.82946C1.997 9.7321 2.02786 10.6639 2.26887 11.5529" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M8.64916 10.3882C8.97797 10.8611 8.74673 11.5825 8.13268 11.9996C7.51862 12.4167 6.75428 12.3714 6.42547 11.8985C6.11777 11.4559 5.14755 9.21698 4.41821 7.49082C4.21025 6.99861 4.81511 6.5878 5.20547 6.95613C6.57447 8.24785 8.34146 9.94565 8.64916 10.3882Z" stroke="#F18F02"/>
                                <path d="M8.13281 4V5.33333" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M3.84009 5.75716L4.79402 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M12.4255 5.75716L11.4716 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M13.9966 11.5527L12.6935 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M2.2688 11.5527L3.5719 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                </svg>
                            <span class="fuel-title pressure ">Давление топлива:</span>

                        </div>
                        <span class="few">` + davFuel + `<span class="dimension bar">бар</span></span>
                    </div>
                    <div class="fuel_condition ` + activ + `"></div>
                </div>
            </div>
            <div class="card_fild-stat">
                <span class="card_fild-fuel">92:</span>
                <div class="fluel-xs">
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="24" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.43657 14.5C11.2738 14.5 13.6583 12.4018 13.6583 9.71429C13.6583 8.13508 12.8871 6.5574 12.0041 5.25651C11.113 3.94374 10.0617 2.84601 9.40763 2.21435C8.8613 1.68673 8.01185 1.68673 7.46552 2.21435C6.81144 2.84601 5.76017 3.94374 4.86907 5.25651C3.98604 6.5574 3.21484 8.13508 3.21484 9.71429C3.21484 12.4018 5.59938 14.5 8.43657 14.5Z" stroke="#F18F02"/>
                                <path d="M8.43666 12C8.08233 12 7.73148 11.931 7.40413 11.797C7.07677 11.663 6.77933 11.4666 6.52879 11.219C6.27825 10.9713 6.0795 10.6774 5.94391 10.3538C5.80831 10.0303 5.73853 9.68353 5.73853 9.33334" stroke="#F18F02" stroke-linecap="round"/>
                            </svg>
                            <span class="fuel-title quantity ">Количество топлива:</span>
                        </div>
                        <span class="few">` + colFuel92 + `<span class="dimension liter">л</span></span>
                    </div>
                    <div class="fuel_info">
                        <div class="fuel">
                            <svg class="" width="28" height="26" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9967 11.5529C14.2378 10.6639 14.2686 9.7321 14.087 8.82946C13.9053 7.92682 13.516 7.07758 12.9491 6.34743C12.3822 5.61729 11.653 5.02581 10.8179 4.61876C9.9827 4.21171 9.06399 4 8.13281 4C7.20162 4 6.28292 4.21171 5.44776 4.61876C4.61261 5.02581 3.88339 5.61729 3.31652 6.34743C2.74965 7.07758 2.36033 7.92682 2.17866 8.82946C1.997 9.7321 2.02786 10.6639 2.26887 11.5529" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M8.64916 10.3882C8.97797 10.8611 8.74673 11.5825 8.13268 11.9996C7.51862 12.4167 6.75428 12.3714 6.42547 11.8985C6.11777 11.4559 5.14755 9.21698 4.41821 7.49082C4.21025 6.99861 4.81511 6.5878 5.20547 6.95613C6.57447 8.24785 8.34146 9.94565 8.64916 10.3882Z" stroke="#F18F02"/>
                                <path d="M8.13281 4V5.33333" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M3.84009 5.75716L4.79402 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M12.4255 5.75716L11.4716 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M13.9966 11.5527L12.6935 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                <path d="M2.2688 11.5527L3.5719 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                </svg>
                            <span class="fuel-title pressure ">Давление топлива:</span>

                        </div>
                        <span class="few">` + davFuel + `<span class="dimension bar">бар</span></span>
                    </div>
                    <div class="fuel_condition ` + activ + `"></div>
                </div>
            </div>
        </div>
    </div>`

    );


}

function addAzs() {
    check();
    var bar;
    var col;


    console.log(firebase.auth().currentUser);
    firebase.database().ref('regions').on('value', (snapRegion) => {

        snapRegion.forEach(function(Reg) {
            var Region = Reg.key;
            console.log(reg);
            firebase.database().ref('regions/' + Region).once('value', (snapAzs) => {

                snapAzs.forEach(function(Azs) {
                    firebase.database().ref('regions/' + Region + '/' + Azs.key + '/fuel').once('value', (chSnapFuel) => {
                        chSnapFuel.forEach(function(fuel) {


                            firebase.database().ref('regions/' + Region + '/' + Azs.key + '/fuel' + '/' + fuel.key).once('value', (snapData) => {

                                snapData.forEach(function(data) {

                                    if (data.key == "bar") bar = data.val();
                                    if (data.key == "col") col = data.val();

                                });

                            });

                        });
                    });
                    addCard(Region, Azs.key, col, bar, 3, 4, 5);

                });
            });
        });

        language();
    });



}

function search() {
    var elems = document.getElementById("cards").getElementsByClassName("card_fild");
    var s = document.getElementById('text_search').value.replace(/\s+/g, '_').toLowerCase();

    if (s.length > 0) {
        for (let i = 0; i < elems.length; i++) {
            var sSearch = elems[i].id.toString().toLowerCase().search(s);
            var ss = s.search(s);
            if (sSearch != ss) {
                elems[i].classList.toggle("none");
            }
        }
    }
}

function resetSearch() {
    var elems = document.getElementById("cards").getElementsByClassName("card_fild");
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].classList.contains("none")) {
            elems[i].classList.toggle("none");
        }
    }
}

function addCardMore(nameF, amount, press, flowM, temp, fire, activated) {

    var isFire = (fire == 0) ? 'Всё нормально' : 'Пожар!';
    var isActive = (activated == 0) ? 'Не активна' : 'Активна';
    read_more.insertAdjacentHTML("beforeend",
        `<hr class="page_title-hr">
    <div class="card_read-fuel-info">
                        <span class="card_read-fuel">` + nameF + `:</span>
                        <div class="fuel_info">
                            <div class="fuel">
                                <svg class="" width="24" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.43657 14.5C11.2738 14.5 13.6583 12.4018 13.6583 9.71429C13.6583 8.13508 12.8871 6.5574 12.0041 5.25651C11.113 3.94374 10.0617 2.84601 9.40763 2.21435C8.8613 1.68673 8.01185 1.68673 7.46552 2.21435C6.81144 2.84601 5.76017 3.94374 4.86907 5.25651C3.98604 6.5574 3.21484 8.13508 3.21484 9.71429C3.21484 12.4018 5.59938 14.5 8.43657 14.5Z" stroke="#F18F02"/>
                                    <path d="M8.43666 12C8.08233 12 7.73148 11.931 7.40413 11.797C7.07677 11.663 6.77933 11.4666 6.52879 11.219C6.27825 10.9713 6.0795 10.6774 5.94391 10.3538C5.80831 10.0303 5.73853 9.68353 5.73853 9.33334" stroke="#F18F02" stroke-linecap="round"/>
                                </svg>
                                <span class="fuel-title quantity  ">Количество топлива:</span>
                            </div>
                            <span class="few">` + amount + `<span class="dimension liter"> литров</span></span>
                        </div>
                        <div class="fuel_info">
                            <div class="fuel">
                                <svg class="" width="28" height="26" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9967 11.5529C14.2378 10.6639 14.2686 9.7321 14.087 8.82946C13.9053 7.92682 13.516 7.07758 12.9491 6.34743C12.3822 5.61729 11.653 5.02581 10.8179 4.61876C9.9827 4.21171 9.06399 4 8.13281 4C7.20162 4 6.28292 4.21171 5.44776 4.61876C4.61261 5.02581 3.88339 5.61729 3.31652 6.34743C2.74965 7.07758 2.36033 7.92682 2.17866 8.82946C1.997 9.7321 2.02786 10.6639 2.26887 11.5529" stroke="#F18F02" stroke-linecap="round"/>
                                    <path d="M8.64916 10.3882C8.97797 10.8611 8.74673 11.5825 8.13268 11.9996C7.51862 12.4167 6.75428 12.3714 6.42547 11.8985C6.11777 11.4559 5.14755 9.21698 4.41821 7.49082C4.21025 6.99861 4.81511 6.5878 5.20547 6.95613C6.57447 8.24785 8.34146 9.94565 8.64916 10.3882Z" stroke="#F18F02"/>
                                    <path d="M8.13281 4V5.33333" stroke="#F18F02" stroke-linecap="round"/>
                                    <path d="M3.84009 5.75716L4.79402 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                    <path d="M12.4255 5.75716L11.4716 6.69997" stroke="#F18F02" stroke-linecap="round"/>
                                    <path d="M13.9966 11.5527L12.6935 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                    <path d="M2.2688 11.5527L3.5719 11.2076" stroke="#F18F02" stroke-linecap="round"/>
                                    </svg>
                                <span class="fuel-title pressure ">Давление топлива:</span>

                            </div>
                            <span class="normal">` + press + `<span class="dimension bar"> бар</span></span>
                        </div>
                        <div class="fuel_info">
                            <div class="fuel">
                                <svg width="28" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3.58824L7.66667 5.52941L6.33333 4.23529H3.66667M11 3.58824L13 5.52941M11 3.58824L8.33333 8.11765H1V4.23529H3.66667M3.66667 4.23529V1M3.66667 1H1.66667M3.66667 1H5.66667M1 12L2 11.0294C2.0531 10.9779 2.07965 10.9521 2.10316 10.9314C2.61171 10.4827 3.38829 10.4827 3.89684 10.9314C3.92035 10.9521 3.9469 10.9779 4 11.0294L4.09902 11.1255C4.59662 11.6085 5.40338 11.6085 5.90098 11.1255L6.15016 10.8837C6.58981 10.4569 7.32178 10.5273 7.66667 11.0294C8.01156 11.5315 8.74352 11.6019 9.18317 11.1752L9.43235 10.9333C9.92995 10.4503 10.7367 10.4503 11.2343 10.9333L12.3333 12" stroke="#F18F02" stroke-linejoin="round"/>
                                    </svg>

                                <span class="fuel-title consumption ">Расход топлива:</span>

                            </div>
                            <span class="few">` + flowM + ` <span class="dimension liter"> литров/день</span></span>
                        </div>
                        <div class="fuel_info">
                            <div class="fuel">
                                <svg width="28" height="18" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.77291 6.33145L5.41083 6.67627L5.77291 6.33145ZM2.3001 2.40001C2.3001 1.68204 2.88213 1.10001 3.6001 1.10001V0.100006C2.32984 0.100006 1.3001 1.12975 1.3001 2.40001H2.3001ZM2.3001 5.50024V2.40001H1.3001V5.50024H2.3001ZM1.1001 8.40001C1.1001 7.73153 1.3618 7.12524 1.78936 6.67627L1.0652 5.98664C0.467658 6.61411 0.100098 7.46467 0.100098 8.40001H1.1001ZM3.6001 10.9C2.21939 10.9 1.1001 9.78072 1.1001 8.40001H0.100098C0.100098 10.333 1.6671 11.9 3.6001 11.9V10.9ZM6.1001 8.40001C6.1001 9.78072 4.98081 10.9 3.6001 10.9V11.9C5.53309 11.9 7.1001 10.333 7.1001 8.40001H6.1001ZM5.41083 6.67627C5.83839 7.12524 6.1001 7.73153 6.1001 8.40001H7.1001C7.1001 7.46467 6.73254 6.61411 6.135 5.98664L5.41083 6.67627ZM4.9001 2.40001V5.50024H5.9001V2.40001H4.9001ZM3.6001 1.10001C4.31807 1.10001 4.9001 1.68204 4.9001 2.40001H5.9001C5.9001 1.12975 4.87035 0.100006 3.6001 0.100006V1.10001ZM6.135 5.98664C5.97442 5.81803 5.9001 5.64621 5.9001 5.50024H4.9001C4.9001 5.98326 5.13762 6.38938 5.41083 6.67627L6.135 5.98664ZM1.3001 5.50024C1.3001 5.64622 1.22577 5.81803 1.0652 5.98664L1.78936 6.67627C2.06257 6.38938 2.3001 5.98327 2.3001 5.50024H1.3001Z" fill="#F18F02"/>
                                    <path d="M4.90005 8.40001C4.90005 9.11798 4.31802 9.70001 3.60005 9.70001C2.88208 9.70001 2.30005 9.11798 2.30005 8.40001C2.30005 7.68204 2.88208 7.10001 3.60005 7.10001C4.31802 7.10001 4.90005 7.68204 4.90005 8.40001Z" stroke="#F18F02"/>
                                    </svg>

                                <span class="fuel-title temperature ">Температура:</span>

                            </div>
                            <span class="normal">` + temp + `<span class="dimension"> °C</span></span>
                        </div>
                        <div class="fuel_info">
                            <div class="fuel">
                                <svg width="28" height="18" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.375 4.50022C6.375 3.90657 7.16458 3.74921 7.37406 4.30468C7.88079 5.64832 8.25 6.85031 8.25 7.50016C8.25 9.57123 6.57107 11.2502 4.5 11.2502C2.42893 11.2502 0.75 9.57123 0.75 7.50016C0.75 6.80198 1.17617 5.4665 1.74117 4.00274C2.47307 2.10659 2.83902 1.15852 3.29075 1.10745C3.4353 1.09111 3.59299 1.12049 3.72196 1.18779C4.125 1.39809 4.125 2.43214 4.125 4.50022C4.125 5.12154 4.62868 5.62522 5.25 5.62522C5.87132 5.62522 6.375 5.12154 6.375 4.50022Z" stroke="#F18F02"/>
                                    <path d="M3.75 11.25L3.55291 10.7573C3.2112 9.90299 3.35524 8.93095 3.93001 8.21248V8.21248C4.22223 7.84722 4.77777 7.84722 5.06999 8.21248V8.21248C5.64476 8.93095 5.7888 9.90299 5.44709 10.7573L5.25 11.25" stroke="#F18F02"/>
                                    </svg>

                                <span class="fuel-title flame ">Пламя:</span>

                            </div>
                            <span class="normal">` + isFire + `</span>
                        </div>
                        <div class="fuel_info">
                            <div class="fuel">
                                <div class="fuel_active">
                                    <div class="fuel_condition2 activated"></div>
                                </div>
                                <span class="fuel-title activity ">Активность:</span>

                            </div>
                            <span class="enough">` + isActive + `</span>
                        </div>
                    </div>`);
}

function addMore() {
    check();

    var bar;
    var col;
    var active;
    var nameF;
    var flowM;
    var temp;
    var fire;

    var query = window.location.href.split("?")[1]; // query two params
    var params = query.split("&"); // split two params // 0 region // 1 azs
    var region = params[0].split("=")[1].replace("%20", " "); // region
    var azs = sessionStorage.getItem('name'); // azs

    document.getElementById("nameAzs").innerHTML = azs;

    console.log(region);
    console.log(azs);


    firebase.database().ref('regions/' + region + '/' + azs + '/fuel').once('value', (chSnapFuel) => {
        chSnapFuel.forEach(function(fuel) {


            firebase.database().ref('regions/' + region + '/' + azs + '/fuel/' + fuel.key).once('value', (snapData) => {

                nameF = fuel.key;
                snapData.forEach(function(data) {

                    if (data.key == "bar") bar = data.val();
                    if (data.key == "col") col = data.val();
                    if (data.key == "active") active = data.val();
                    if (data.key == "flowM") flowM = data.val();
                    if (data.key == "temp") temp = data.val();
                    if (data.key == "fire") fire = data.val();

                });
                addCardMore(nameF, col, bar, flowM, temp, fire, active);
                language();
            });

        });
    });

}

function goMore(reg, name) {
    document.location = "readmore.html?reg=" + reg + "&name=" + name;
    sessionStorage.setItem('name', name);
}