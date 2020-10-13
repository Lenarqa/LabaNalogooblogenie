function getResult1() {
    let greenCost = document.getElementById('greenCost').value; //кадастровая стоимость
    let dateReg = document.getElementById('date');//дата регистрации
    let dateEnd = document.getElementById('dateEnd');//дата потери
    let dayReg = dateReg.valueAsDate.getDate();//день регистрации
    let dayEnd = dateEnd.valueAsDate.getDate();//день потери
    let mounthReg = dateReg.valueAsDate.getMonth() + 1;//месяц регистрации
    let mounthEnd =  dateEnd.valueAsDate.getMonth() + 1;//месяц окончания регистрации
    let category = document.getElementById('category').value;
    let buildKoef = document.getElementById('buildKoef').value;
    let nalogKoef;
    let moungthTotal;
    let avancePay = [];
    let nalogSize;
    let moungthVladenia =[];
    let moungthVladenia2 = [];
    let lastMounght = 0;

    lastMounght = dayEnd > 15 ? mounthEnd : mounthEnd-1;
    

    //находим количество месяцев во владении
    if(dayEnd >= 15){
        if(dayReg <= 15){
            moungthTotal = mounthEnd - mounthReg + 1;//оба месяца учитываются и начальный и конечный
        }else {
            moungthTotal = mounthEnd - mounthReg;// начальный месяц не учитывается
        }
    }else {
        if(dayReg <= 15) {
            moungthTotal = mounthEnd - mounthReg;//начальный месяц учитывается, конечный не учитывается
        }else {
            moungthTotal = mounthEnd - mounthReg - 1;//начальный и конечный месяц не учитываются
        }
    }

    if(dayReg <= 15) {
        switch(mounthReg) {
            case 1: 
                moungthVladenia[0] = 3;
                break;
            case 2: 
                moungthVladenia[0] = 2;
                break;
            case 3: 
                moungthVladenia[0] = 1;
                break;       
        }
    }else {
        switch(mounthReg) {
            case 1: 
                moungthVladenia[0] = 2;
                break;
            case 2: 
                moungthVladenia[0] = 1;
                break;
            case 3: 
                moungthVladenia[0] = 0;
                break;       
        }
    }

    if(moungthVladenia[0] <= 3 && moungthVladenia[0] != 0) {
        moungthVladenia[1] = 3;
    }else {
        if(dayReg <= 15) {
            switch(mounthReg) {
                case 4: 
                    moungthVladenia[1] = 3;
                    break;
                case 5: 
                    moungthVladenia[1] = 2;
                    break;
                case 6: 
                    moungthVladenia[1] = 1;
                    break;       
            }
        }else {
            switch(mounthReg) {
                case 4: 
                    moungthVladenia[1] = 2;
                    break;
                case 5: 
                    moungthVladenia[1] = 1;
                    break;
                case 6: 
                    moungthVladenia[1] = 0;
                    break;       
            }
        }
    }

    if(moungthVladenia[1] <= 3 && moungthVladenia[1] != 0) {
        moungthVladenia[2] = 3;
    }else {
        if(dayReg <= 15) {
            switch(mounthReg) {
                case 7: 
                    moungthVladenia[2] = 3;
                    break;
                case 8: 
                    moungthVladenia[2] = 2;
                    break;
                case 9: 
                    moungthVladenia[2] = 1;
                    break;       
            }
        }else {
            switch(mounthReg) {
                case 7: 
                    moungthVladenia[2] = 2;
                    break;
                case 8: 
                    moungthVladenia[2] = 1;
                    break;
                case 9: 
                    moungthVladenia[2] = 0;
                    break;       
            }
        }
    }

    if(moungthVladenia[3] <= 3 && moungthVladenia[2] != 0) {
        moungthVladenia[3] = 3;
    }else {
        if(dayReg <= 15) {
            switch(mounthReg) {
                case 10: 
                    moungthVladenia[3] = 3;
                    break;
                case 11: 
                    moungthVladenia[3] = 2;
                    break;
                case 12: 
                    moungthVladenia[3] = 1;
                    break;       
            }
        }else {
            switch(mounthReg) {
                case 10: 
                    moungthVladenia[3] = 2;
                    break;
                case 11: 
                    moungthVladenia[3] = 1;
                    break;
                case 12: 
                    moungthVladenia[3] = 0;
                    break;       
            }
        }
    }

    console.log("moungVlad" = moungthVladenia);
    // 2 шаг
    if(moungthVladenia[0] < 3) {
        moungthVladenia2[0] = moungthVladenia[0];
    }else {
        if(dayEnd >= 15) {
            switch (lastMounght) {
                case 1:
                    moungthVladenia2[0] = 1;
                    break;
                case 2:
                    moungthVladenia2[0] = 2;
                    break;
                case 3:
                    moungthVladenia2[0] = 3;
                    break;
                default:
                    moungthVladenia2[0] = 3;
                    break;
            }
        }else {
            switch (lastMounght) {
                case 1:
                    moungthVladenia2[0] = 1;
                    break;
                case 2:
                    moungthVladenia2[0] = 2;
                    break;
                case 3:
                    moungthVladenia2[0] = 3;
                    break;
                default:
                    moungthVladenia2[0] = 3;
                    break;
            }
        }
    }

    if(moungthVladenia[1] < 3) {
        moungthVladenia2[1] = moungthVladenia[1];
    }else {
        if(dayEnd <= 15) {
            switch (lastMounght) {
                case 4:
                    moungthVladenia2[1] = 1;
                    break;
                case 5:
                    moungthVladenia2[1] = 2;
                    break;
                case 6:
                    moungthVladenia2[1] = 3;
                    break;
                default:
                    moungthVladenia2[1] = 3;
                    break;
            }
        }else {
            switch (lastMounght) {
                case 4:
                    moungthVladenia2[1] = 1;
                    break;
                case 5:
                    moungthVladenia2[1] = 2;
                    break;
                case 6:
                    moungthVladenia2[1] = 3;
                    break;
                default:
                    moungthVladenia2[1] = 3;
                    break;
            }
        }
    }

    if(moungthVladenia[2] < 3) {
        moungthVladenia2[2] = moungthVladenia[2];
    }else {
        if(dayEnd <= 15) {
            switch (lastMounght) {
                case 7:
                    moungthVladenia2[2] = 1;
                    break;
                case 8:
                    moungthVladenia2[2] = 2;
                    break;
                case 9:
                    moungthVladenia2[2] = 3;
                    break;
                default:
                    moungthVladenia2[1] = 3;
                    break;
            }
        }else {
            switch (lastMounght) {
                case 7:
                    moungthVladenia2[2] = 1;
                    break;
                case 8:
                    moungthVladenia2[2] = 2;
                    break;
                case 9:
                    moungthVladenia2[2] = 3;
                    break;
                default:
                    moungthVladenia2[2] = 3;
                    break;
            }
        }
    }

    if(moungthVladenia[3] < 3) {
        moungthVladenia2[3] = moungthVladenia[3];
    }else {
        if(dayEnd <= 15) {
            switch (lastMounght) {
                case 10:
                    moungthVladenia2[3] = 1;
                    break;
                case 11:
                    moungthVladenia2[3] = 2;
                    break;
                case 12:
                    moungthVladenia2[3] = 3;
                    break;
                default:
                    moungthVladenia2[3] = 3;
                    break;
            }
        }else {
            switch (lastMounght) {
                case 10:
                    moungthVladenia2[3] = 1;
                    break;
                case 11:
                    moungthVladenia2[3] = 2;
                    break;
                case 12:
                    moungthVladenia2[3] = 3;
                    break;
                default:
                    moungthVladenia2[3] = 3;
                    break;
            }
        }
    }

    console.log(moungthTotal + " =========================")
    console.log(moungthVladenia + "=========");
    console.log(moungthVladenia2 + '=======');
    nalogKoef = document.getElementById('nalogKoef').value;
    

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

    // avancePay = avancePay.map(el => el*= 1000000);
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