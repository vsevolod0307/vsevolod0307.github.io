const modalOpen = document.querySelector('.btn_code'),
    form = document.querySelector('.inner'),
    modal = document.querySelector('.modal_wrap'),
    bilet = document.querySelector('.bilet'),
    modalClose = document.querySelector('.modal_close'),
    btnOk = document.querySelector('.btn_ok'),
    modalBilet = document.querySelector('.modal_bilet'),
    overflow = document.querySelector('.overflow'),
    min = document.querySelector('#min'),
    sec = document.querySelector('#sec');

let time = document.querySelector('.red.time');

modalOpen.addEventListener('click', () => {
    onModalOpen();
    setTimeout(scrollContent, 2000);
    overflow.style.maxHeight = '680px';
    beginTime();
});

btnOk.addEventListener('click', () => {
    onModalClose();
});

modalClose.addEventListener('click', () => {
    onModalClose();
});

function onModalOpen() {
    modal.style.visibility = 'visible';
    modalBilet.style.transform = 'translate(0, 60%)';
}

function onModalClose() {
    modal.style.display = 'none';
}

function scrollContent() {
    form.style.transform = 'translate(0, -500px)';
}

let timeMinut = 600;

function beginTime() {
    let timer = setInterval(function () {
        seconds = timeMinut%60 // Получаем секунды
        minutes = timeMinut/60%60 // Получаем минуты
        hour = timeMinut/60/60%60 // Получаем часы
        // Условие если время закончилось то...
        if (timeMinut <= 0) {
            // Таймер удаляется
            clearInterval(timer);
        } else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            if(Math.trunc(minutes) <= 9) {
                strTimer = `0${Math.trunc(minutes)}:${seconds}`;
            }
    
            if(seconds <= 9) {
                strTimer = `0${Math.trunc(minutes)}:0${seconds}`;
            }
            time.textContent = strTimer;
        }
        --timeMinut;// Уменьшаем таймер
    }, 1000);
}

const date = new Date();

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate();

    let textMonth;

    switch(month) {
        case 0:
            textMonth = 'Января'
            break;
        case 1:
            textMonth = 'Февраля'
            break;
        case 2:
            textMonth = 'Марта'
            break;
        case 3:
            textMonth = 'Апреля'
            break;
        case 4:
            textMonth = 'Мая'
            break;
        case 5:
            textMonth = 'Июня'
            break;
        case 7:
            textMonth = 'Августа'
            break;
        case 8:
            textMonth = 'Сентября'
            break;
        case 9:
            textMonth = 'Октября'
            break;
        case 10:
            textMonth = 'Ноября'
            break;
        case 6:
            textMonth = 'Июля'
            break;
        case 11:
            textMonth = 'Декабря'
            break;
        default:
            textMonth = '';
    }

const D = document.querySelectorAll('.day'),
    M = document.querySelectorAll('.month'),
    Y = document.querySelectorAll('.year');

    function inputDate(i, enter) {
        i.forEach(item => {
            item.textContent = enter;
        });
    }

    inputDate(D, day);
    inputDate(M, textMonth);
    inputDate(Y, year);