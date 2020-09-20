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

function hello() {
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

function getResult() {
   if(waterPointValue == '0') {
        let 
   }
}
