function hello() {
    let regionValue = document.getElementById('region');
    let pool = document.getElementById('pool');

    if(pool.innerHTML != '') {
        pool.innerHTML = '';
    }

    console.log(typeof regionValue.value);
    switch (regionValue.value) {
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

