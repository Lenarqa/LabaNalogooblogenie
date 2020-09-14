function getResult(){
    // init variable
    let dateReg = document.getElementById('date');
    let dayReg = dateReg.valueAsDate.getDate();//день регистрации
    let mounthReg = dateReg.valueAsDate.getMonth() + 1;//месяц регистрации
    let releaseDate = document.getElementById('releaseDate').value;//дата выхода автомобиля
    let cost = document.getElementById('cost').value;//цена автомобиля
    let horsPower = document.getElementById('horsPower').value;//лошадиные силы
    let yearСalculation = document.getElementById('yearСalculation').value;
    let mounthСalculation = document.getElementById('mounthСalculation').value;
    let machineAge = document.getElementById('machineAge').value;

    let nalogRate = 2.5;//налоговая ставка
    let upperRate = 1;//повышающий коэффициент
    let avancePay = [0,0,0];//авансовый платеж
    let nalogSize = 0;//размер налога
    let moungthTotal = 0;

    // находим налоговую ставку
    if(horsPower <= 100) {
        nalogRate = 2.5;
    }else if(horsPower > 100 && horsPower <= 150) {
        nalogRate = 3.5;
    }else if(horsPower > 150 && horsPower <= 200) {
        nalogRate = 5;
    }else if(horsPower > 200 && horsPower <= 250) {
        nalogRate = 7.5;
    }else if(horsPower > 250) {
        nalogRate = 15;
    }
    
    // находим повышающий коэффициент
    if(cost > 3 && cost <= 5 && machineAge <= 3) {
        upperRate = 1.1;
    }else if(cost > 5 && cost <= 10 && machineAge > 3  && machineAge <= 5) {
        upperRate = 2;
    }else if(cost > 10 && cost < 15 && machineAge > 5  && machineAge <= 10) {
        upperRate = 3;
    }else if(cost > 15 && machineAge > 10  && machineAge <= 20) {
        upperRate = 3;
    }

    // находим авансовый платеж
    if(mounthReg <= 9) {
        if(mounthReg > 0 && mounthReg <= 3) {
            console.log('Первый квартал');
            switch (mounthReg) {
                case 1:
                    if(dayReg <= 15) {
                        avancePay[0] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[1] = avancePay[0];
                        avancePay[2] = avancePay[0];
                    }else {
                        avancePay[0] = 1/4 * nalogRate * horsPower * (2/3) * upperRate;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }
                    break;

                case 2:
                    if(dayReg <= 15) {
                        avancePay[0] = 1/4 * nalogRate * horsPower * (2/3) * upperRate;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }else {
                        avancePay[0] = 1/4 * nalogRate * horsPower * (1/3) * upperRate;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }
                    break;
            
                case 3:
                    if(dayReg <= 15) {
                        avancePay[0] = 1/4 * nalogRate * horsPower * upperRate * (1/3);
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }else {
                        avancePay[0] = 1/4 * nalogRate * horsPower * upperRate * 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }
                    break;
            }
        }else if(mounthReg > 3 && mounthReg <= 6) {
            console.log('Второй квартал');
            switch (mounthReg) {
                case 4:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate;
                        avancePay[2] = avancePay[1];
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * (2/3) * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }
                    break;

                case 5:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * (2/3) * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * (1/3) * upperRate;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }
                    break;
            
                case 6:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate * (1/3);
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }else {
                        avancePay[0] = 1/4 * nalogRate * horsPower * upperRate * 0;
                        avancePay[1] = 1/4 * nalogRate * horsPower * upperRate * 0;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }
                    break;
            }

        }else if(mounthReg > 6 && mounthReg <= 9) {
            console.log('Третий квартал');
            switch (mounthReg) {
                case 7:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogRate * horsPower * (2/3) * upperRate;
                    }
                    break;

                case 8:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogRate * horsPower * (2/3) * upperRate;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogRate * horsPower * (1/3) * upperRate;
                    }
                    break;
            
                case 9:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogRate * horsPower * upperRate * (1/3);
                    }
                    break;
            }
        }
    }

    //находим количество месяцев во владении
    if(dayReg <= 15){
        moungthTotal = 12 - mounthReg + 1;
    }else {
        moungthTotal = 12 - mounthReg;
    }

    // находим размер налога
    nalogSize = nalogRate * horsPower * moungthTotal/12 * upperRate - avancePay[0] - avancePay[1] - avancePay[2];

    let result = document.getElementById('result');
    console.log(result)
    if(result.innerText != ''){
       result.innerText = '';
       result.innerHTML = `
            <div class="left">
                <h2>Авансовые платежи:</h2>
                <h3>Первый квартал: ${avancePay[0].toFixed(2)}</h3>
                <h3>Второй квартал: ${avancePay[1].toFixed(2)}</h3>
                <h3>Третий квартал: ${avancePay[2].toFixed(2)}</h3>
            </div>

            <div class="left">
                <h2>Сумма налога: ${nalogSize.toFixed(2)}</h2>
            </div>
            `;
    }else{
        result.innerHTML = `
            <div class="left">
                <h2>Авансовые платежи:</h2>
                <h3>Первый квартал: ${avancePay[0].toFixed(2)}</h3>
                <h3>Второй квартал: ${avancePay[1].toFixed(2)}</h3>
                <h3>Третий квартал: ${avancePay[2].toFixed(2)}</h3>
            </div>

            <div class="left">
                <h2>Сумма налога: ${nalogSize.toFixed(2)}</h2>
            </div>
            `;
    }
    
    //debugLog
    console.log('День регистрации = ' + dayReg);
    console.log('Месяц регистрации = ' + mounthReg);
    console.log('Год релиза = ' + releaseDate);
    console.log('Стоимость = ' + cost);
    console.log('Мощность = ' + horsPower);
    console.log('Год расчета = ' + yearСalculation);
    console.log('Месяц расчета = ' + mounthСalculation);
    console.log('Возраст машины = ' + machineAge);
    console.log("Налоговая ставка = " + nalogRate);
    console.log("повышающий коэффициент = " + upperRate);
    console.log('1 квартал = ' + avancePay[0]);
    console.log('2 квартал = ' + avancePay[1]);
    console.log('3 квартал = ' + avancePay[2]);
    console.log('Количество месяцев во владении = ' + moungthTotal);
    console.log('Размер налога = ' + nalogSize);
}