let waterPointValue = document.getElementById("waterPoint").value;
let regionValue = document.getElementById('region').value;
let pool = document.getElementById('pool');
let nalogStavka = [
    [//Северный
        [300, 384],//Волга.
        [264, 348],//Нева.
        [246, 300],//Печора.
        [258, 312],//Северная Двина.
        [306, 378],//Прочие реки и озера.
    ],
    [//Северно-Западный 
        [294, 390],//Волга.
        [288, 366],//Западная Двина.
        [258, 342],//Нева.
        [282, 372],//Прочие реки и озера.
    ],
    [//Центральный
        [288, 360],//Волга.
        [276, 342],//Днепр.
        [294, 384],//Дон.
        [306, 354],//Западная Двина.
        [252, 306],//Нева.
        [264, 336],//Прочие реки и озера.
    ],
    [//Волго-Вятский
        [282, 336],//Волга.
        [252, 312],//Северная Двина.
        [270, 330],//Прочие реки и озера.
    ],
    [//Центально-Черноземный
        [258, 318],//Днепр.
        [336, 402],//Дон.
        [282, 354],//Волга.
        [258, 318],//Прочие реки и озера.
    ],
    [//Поволжский
        [294, 348],//Волга.
        [360, 420],//Дон.
        [264, 342],//Прочие реки и озера.
    ],
    [//Северо-Кавказский
        [390, 486],//Дон.
        [480, 570],//Кубань.
        [480, 576],//Самур.
        [456, 540],//Сулак.
        [468, 558],//Терек.
        [540, 654],//Прочие реки и озера.
    ],
    [//Уральский
        [294, 444],//Волга.
        [282, 456],//Обь.
        [354, 534],//Урал.
        [306, 390],//Прочие реки и озера.
    ],
    [//Западно-Сибирский
        [270, 330],//Обь.
        [276, 342],//Прочие реки и озера.
    ],
    [//Восточно-Сибирский
        [276, 330],//Амур.
        [246, 306],//Енисей.
        [252, 306],//Лена.
        [264, 348],//Обь.
        [576, 678],//Озеро Байкал.
        [282, 342],//Прочие реки и озера.
    ],
    [//Дальневосточный
        [264, 336],//Амур.
        [288, 342],//Лена.
        [252, 306],//Прочие реки и озера.
    ],
    [//Калининградская область 
        [276, 324],//Неман.
        [288, 336],//Прочие реки и озера.
    ],
]

let nalogStavkaSea = [8.28, 8.4, 6.36, 14.88, 14.88, 11.52, 4.8, 4.68, 4.44, 4.32, 5.28, 5.64, 7.68, 8.04];

let yearKoef = [1.75, 2.01, 2.31, 2.66];

function CloseAllItemList() {
    let itemList = document.getElementById("item-list");
    itemList.children[1].style.display = 'none';
    itemList.children[2].style.display = 'none';
    itemList.children[3].style.display = 'none';
    itemList.children[4].style.display = 'none';
    itemList.children[5].style.display = 'none';
    itemList.children[6].style.display = 'none';
    itemList.children[7].style.display = 'none';
    itemList.children[8].style.display = 'none';
    itemList.children[9].style.display = 'none';
    itemList.children[10].style.display = 'none';

    itemList.children[11].style.display = 'none';
    itemList.children[12].style.display = 'none';
    itemList.children[13].style.display = 'none';
    itemList.children[14].style.display = 'none';
    itemList.children[15].style.display = 'none';
    itemList.children[16].style.display = 'none';
    itemList.children[17].style.display = 'none';
    itemList.children[18].style.display = 'none';
    itemList.children[19].style.display = 'none';
    itemList.children[20].style.display = 'none';
    itemList.children[21].style.display = 'none';
    itemList.children[22].style.display = 'none';
    itemList.children[23].style.display = 'none';
    itemList.children[24].style.display = 'none';
    let result = document.getElementById('result');
    if(result.innerText != ''){
        result.innerText = '';
    }
}

window.onload = () => {
    CloseAllItemList();
};

function ChangeWaterPoint() {
    waterPointValue = document.getElementById("waterPoint").value;
    let itemList = document.getElementById("item-list");
    switch (waterPointValue) {
        case '0':
            itemList.children[7].style.display = 'none';
            itemList.children[4].style.display = 'flex';
            itemList.children[5].style.display = 'flex';
            itemList.children[6].style.display = 'flex';
            break;
    
        default:
            itemList.children[7].style.display = 'flex';
            itemList.children[4].style.display = 'none';
            itemList.children[5].style.display = 'none';
            itemList.children[6].style.display = 'none';
            break;
    }
}

function ChangeNalog() {
    let nalogValue = document.getElementById('nalog-value').value;
    let itemList = document.getElementById("item-list");
    switch (nalogValue) {
        case '0':
            CloseAllItemList();
            itemList.children[1].style.display = 'flex';
            itemList.children[2].style.display = 'flex';
            itemList.children[3].style.display = 'flex';
            itemList.children[4].style.display = 'flex';
            itemList.children[5].style.display = 'flex';
            itemList.children[6].style.display = 'flex';
            itemList.children[7].style.display = 'flex';
            itemList.children[8].style.display = 'flex';
            itemList.children[9].style.display = 'flex';
            // itemList.children[22].style.display = 'flex';
            break;
        case '1':
            CloseAllItemList();
            itemList.children[10].style.display = 'flex';
            itemList.children[11].style.display = 'flex';
            itemList.children[12].style.display = 'flex';
            itemList.children[13].style.display = 'flex';
            itemList.children[14].style.display = 'flex';
            itemList.children[15].style.display = 'flex';
            break;
        case '2':
            CloseAllItemList();
            itemList.children[16].style.display = 'flex';
            itemList.children[17].style.display = 'flex';
            itemList.children[18].style.display = 'flex';
            itemList.children[19].style.display = 'flex';
            break;
        case '3':
            CloseAllItemList();
            itemList.children[20].style.display = 'flex';
            itemList.children[21].style.display = 'flex';
            itemList.children[22].style.display = 'flex';
            itemList.children[23].style.display = 'flex';
            itemList.children[24].style.display = 'flex';
            break;
    }
}

function ChangeRegion() {
    if(pool.innerHTML != '') {
        pool.innerHTML = '';
    }

    regionValue = document.getElementById('region').value;

    switch (regionValue) {
        case '0':
            pool.innerHTML =`
            <option value="0">Волга</option>
            <option value="1">Нева</option>
            <option value="2">Печора</option>
            <option value="3">Северная Двина</option>
            <option value="4">Прочие реки и озера</option>
            `;
            break;
        case '1':
            pool.innerHTML =`
            <option value="0">Волга</option>
            <option value="1">Западная Двина</option>
            <option value="2">Нева</option>
            <option value="3">Прочие реки и озера</option>
            `;
            break;
        case '2':
            pool.innerHTML =`
            <option value="0">Волга</option>
            <option value="1">Днепр</option>
            <option value="2">Дон</option>
            <option value="3">Западная Двина</option>
            <option value="4">Нева</option>
            <option value="5">Прочие реки и озера</option>
            `;
            break;
        case '3':
            pool.innerHTML =`
            <option value="0">Волга</option>
            <option value="1">Северная Двина</option>
            <option value="2">Прочие реки и озера</option>
            `;
            break;
        case '4':
            pool.innerHTML =`
            <option value="0">Днепр</option>
            <option value="1">Дон</option>
            <option value="2">Волга</option>
            <option value="3">Прочие реки и озера</option>
            `;
            break;
        case '5':
            pool.innerHTML =`
            <option value="0">Волга</option>
            <option value="1">Дон</option>
            <option value="2">Прочие реки и озера</option>
            `;
            break;
        case '6':
            pool.innerHTML =`
            <option value="0">Дон</option>
            <option value="1">Кубань</option>
            <option value="2">Самур</option>
            <option value="3">Сулак</option>
            <option value="4">Терек</option>
            <option value="5">Прочие реки и озера</option>
            `;
            break;
        case '7':
            pool.innerHTML =`
            <option value="0">Волга</option>
            <option value="1">Обь</option>
            <option value="2">Урал</option>
            <option value="3">Прочие реки и озера</option>
            `;
            break;
        case '8':
            pool.innerHTML =`
            <option value="0">Обь</option>
            <option value="1">Прочие реки и озера</option>
            `;
            break;
        case '9':
            pool.innerHTML =`
            <option value="0">Амур</option>
            <option value="1">Енисей</option>
            <option value="2">Лена</option>
            <option value="3">Обь</option>
            <option value="4">Озеро Байкал и его бассейн</option>
            <option value="5">Прочие реки и озера</option>
            `;
            break;
        case '10':
            pool.innerHTML =`
            <option value="0">Амур</option>
            <option value="1">Лена</option>
            <option value="2">Прочие реки и озера</option>
            `;
            break;
        case '11':
            pool.innerHTML =`
            <option value="0">Неман</option>
            <option value="1">Прочие реки и озера</option>
            `;
            break;
        default:
            console.log('don`t work');
            break;
    }
}

// забор воды из водных объектов
function getResult() {
    let bazaValue = document.getElementById('baza').value;
    let yearNorma = document.getElementById('yearNorma').value;
    let yearValue = document.getElementById('year').value;
    // забор воды из водных объектов
    if(baza > yearNorma) {
        if(waterPointValue == '0') {
            regionValue = document.getElementById('region').value;
            pool = document.getElementById('pool').value;
            let waterFrom = document.getElementById('waterFrom').value;
    
            let nalogStavkaValue = nalogStavka[parseInt(regionValue)][parseInt(pool)][parseInt(waterFrom)];
            let nalog = bazaValue  * yearKoef[yearValue] * nalogStavkaValue / 1000;
    
            let result = document.getElementById('result');
            if(result.innerText != ''){
                result.innerText = '';
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }else{
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }
       } else if(waterPointValue == '1') {
           let seaValue = document.getElementById('sea').value;
           console.log(seaValue);
           let nalog = bazaValue * nalogStavkaSea[seaValue] * yearKoef[yearValue] / 1000;

           let result = document.getElementById('result');
            if(result.innerText != ''){
                result.innerText = '';
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }else{
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }
       }
    }else {
        if(waterPointValue == '0') {
            regionValue = document.getElementById('region').value;
            pool = document.getElementById('pool').value;
            let waterFrom = document.getElementById('waterFrom').value;
    
            let nalogStavkaValue = nalogStavka[parseInt(regionValue)][parseInt(pool)][parseInt(waterFrom)];
            let delta = bazaValue - yearNorma;
            let nalog = (bazaValue - delta)   * yearKoef[yearValue] * nalogStavkaValue / 1000;
            let sverhNorm = delta * yearKoef[yearValue] * 5 * nalogStavkaValue / 1000;
            nalog += sverhNorm;
    
            let result = document.getElementById('result');
            if(result.innerText != ''){
                result.innerText = '';
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }else{
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }
       } else if(waterPointValue == '1') {
            let seaValue = document.getElementById('sea').value;
            console.log(seaValue);
            let nalog = bazaValue * nalogStavkaSea[seaValue] * yearKoef[yearValue] * 5 / 1000;

            let result = document.getElementById('result');
            if(result.innerText != ''){
                result.innerText = '';
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }else{
                result.innerHTML = `
                    <div class="left">
                        <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
                    </div>
                    `;
            }
        }
    }
}

// акватория
let acvatoriiRegion = [32.16, 33.96, 30.84, 29.04, 30.12, 30.48, 34.44, 32.04, 30.24, 28.2, 31.32, 30.84];
let acvatoriiSea = [33.84, 27.72, 30.71, 44.88, 49.80, 42.24, 15.72, 15.12, 15, 14.04, 26.16, 29.28, 35.28, 38.52];

function ChangeWaterPointAcvatorii() {
    let acvatoriiWaterPoint = document.getElementById('waterPointAcvatorii').value;
    let itemList = document.getElementById("item-list");
    switch (acvatoriiWaterPoint) {
        case '0':
            itemList.children[11].style.display = 'flex';
            itemList.children[12].style.display = 'none';
            break;
        case '1':
            itemList.children[11].style.display = 'none';
            itemList.children[12].style.display = 'flex';
            break;
    }
}

function getResultAcvatorii() {
    let acvatoriiWaterPoint = document.getElementById('waterPointAcvatorii').value;
    let year = document.getElementById('acvatorii-year').value;
    let baza = document.getElementById('acvatorii-baza').value;
    let nalog = 0;
    switch (acvatoriiWaterPoint) {
        case '0':
            let acvatoriiRegionValue = document.getElementById('acvatorii-region').value;
            nalog = acvatoriiRegion[acvatoriiRegionValue] * yearKoef[year] * baza / 4;
            break;
        case '1':
            let seaId = document.getElementById('acvatorii-sea').value;
            nalog = acvatoriiSea[seaId] * yearKoef[year] * baza / 4;
            break;
    }

    let result = document.getElementById('result');
    if(result.innerText != ''){
        result.innerText = '';
        result.innerHTML = `
            <div class="left">
                <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
            </div>
            `;
    }else{
        result.innerHTML = `
            <div class="left">
                <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
            </div>
            `;
    }
}

// Гидроэнергетика
let gidroEnergyKoef = [8.76, 8.76, 9, 8.88, 8.76, 9, 8.76, 9.24, 9.84, 9.72, 13.7, 8.88, 
    13.5, 12.3, 7.2, 8.4, 8.52, 13.2, 8.52, 10.44, 4.8];
function getResultGidroEnergy() {
    let regionId = document.getElementById('gidroEnergy-sea').value;
    let year = document.getElementById('gidroEnergy-year').value;
    let baza = document.getElementById('gidroEnergy-baza').value;
    let nalog = gidroEnergyKoef[regionId] * yearKoef[year] * baza;
    let result = document.getElementById('result');
    if(result.innerText != ''){
        result.innerText = '';
        result.innerHTML = `
            <div class="left">
                <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
            </div>
            `;
    }else{
        result.innerHTML = `
            <div class="left">
                <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
            </div>
            `;
    }
}

// лесосплав
let waterForestKoef = [1656, 1705.2, 1552.8, 1650, 1454.4, 1554, 1476, 1636.8, 1585.8, 1576.8, 1183.2];
function getResultWaterForest() {
    let gidroEnergyId = document.getElementById('gidroEnergy-sea').value;
    let year = document.getElementById('gidroEnergy-year1').value;
    let baza = document.getElementById('gidroEnergy-baza1').value;
    let long = document.getElementById('gidroEnergy-long').value;
    console.log('-------------------------------------------');
    console.log(waterForestKoef[gidroEnergyId]);
    console.log(yearKoef[year]);
    console.log(baza);

    let nalog = waterForestKoef[gidroEnergyId] * yearKoef[year] * baza * long;

    
    let result = document.getElementById('result');
    if(result.innerText != ''){
        result.innerText = '';
        result.innerHTML = `
            <div class="left">
                <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
            </div>
            `;
    }else{
        result.innerHTML = `
            <div class="left">
                <h2>Сумма налога: ${nalog.toFixed(2)}</h2>
            </div>
            `;
    } 
}
