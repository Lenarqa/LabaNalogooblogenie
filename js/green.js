function getResult() {
    let greenCost = document.getElementById('greenCost').value; //кадастровая стоимость
    let dateReg = document.getElementById('date');
    let dateEnd = document.getElementById('dateEnd');
    let dayReg = dateReg.valueAsDate.getDate();//день регистрации
    let mounthReg = dateReg.valueAsDate.getMonth() + 1;//месяц регистрации
    let yearBegin = dateReg.valueAsDate.getYear();//год регистрации
    let yearEnd = dateEnd.valueAsDate.getYear();//год регистрации
    let category = document.getElementById('category').value;
    let buildKoef = document.getElementById('buildKoef').value;
    let nalogKoef;
    let moungthTotal;
    let avancePay = [];
    let nalogSize;


    console.log(yearBegin);
    console.log(yearEnd);

    //находим количество месяцев во владении
    if(dayReg <= 15){
        moungthTotal = 12 - mounthReg + 1;
    }else {
        moungthTotal = 12 - mounthReg;
    }

    nalogKoef = document.getElementById('nalogKoef').value;

    if(mounthReg <= 9) {
        if(mounthReg > 0 && mounthReg <= 3) {
            console.log('Первый квартал');
            switch (mounthReg) {
                case 1:
                    if(dayReg <= 15) {
                        avancePay[0] = 1/4 * nalogKoef * greenCost * buildKoef;
                        avancePay[1] = avancePay[0];
                        avancePay[2] = avancePay[0];
                    }else {
                        avancePay[0] =  1/4 * nalogKoef * greenCost * (2/3) * buildKoef;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }
                    break;

                case 2:
                    if(dayReg <= 15) {
                        avancePay[0] = 1/4 * nalogKoef * greenCost * (2/3) * buildKoef;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }else {
                        avancePay[0] = 1/4 * nalogKoef * greenCost * (1/3) * buildKoef;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * buildKoef; 
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }
                    break;
            
                case 3:
                    if(dayReg <= 15) {
                        avancePay[0] = 1/4 * nalogKoef * greenCost * (1/3) * buildKoef;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }else {
                        avancePay[0] = 1/4 * nalogKoef * greenCost * 0 * buildKoef;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }
                    break;
            }
        }else if(mounthReg > 3 && mounthReg <= 6) {
            console.log('Второй квартал');
            switch (mounthReg) {
                case 4:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * buildKoef;
                        avancePay[2] = avancePay[1] * buildKoef;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * (2/3) * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }
                    break;

                case 5:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * (2/3) * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost* buildKoef;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * (1/3)* buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost* buildKoef;
                    }
                    break;
            
                case 6:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 1/4 * nalogKoef * greenCost * (1/3) * buildKoef;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
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
                        avancePay[2] = 1/4 * nalogKoef * greenCost * buildKoef;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * (2/3) * buildKoef;
                    }
                    break;

                case 8:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * (2/3) * buildKoef;
                    }else {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * (1/3) * buildKoef;
                    }
                    break;
            
                case 9:
                    if(dayReg <= 15) {
                        avancePay[0] = 0;
                        avancePay[1] = 0;
                        avancePay[2] = 1/4 * nalogKoef * greenCost * (1/3) * buildKoef;
                    }
                    break;
            }
        }
    }

    if(category == 0) {
        nalogSize = (greenCost * nalogKoef * buildKoef * (moungthTotal/12) - avancePay[0] - avancePay[1] - avancePay[2]) * 1000000;
    }else{
        //Налоговая база уменьшается на величину 
        //кадастровой стоимости 600 квадратных метров площади земельного участка
        let greenSize = document.getElementById('greenSize').value;
        avancePay = avancePay.map(el => el = 0)
        nalogSize = ((greenCost * ((greenSize-600)/greenSize)) * nalogKoef * buildKoef * (moungthTotal/12)) * 1000000;
    }
    // console.log(greenCost);
    // console.log("День = " + dayReg + " Месяц = " + mounthReg + " Всего месяцев = " + moungthTotal);
    // console.log(category);
    // console.log(nalogKoef);

    avancePay = avancePay.map(el => el*= 1000000);
    // console.log('avancePay = ', avancePay);
    // console.log('nalog = ', nalogSize);

    let result = document.getElementById('result');
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
}

function addGreenSize() {
    let category = document.getElementById('category').value;
    let greenSizeItem = document.getElementById("greenSizeItem");
    if(category != 0) {
        greenSizeItem.style.display = 'flex';
    }else{
        greenSizeItem.style.display = 'none';
    }
    
}