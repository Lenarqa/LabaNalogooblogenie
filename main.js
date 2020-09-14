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

    let nalogRate = 1;//налоговая ставка

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
}