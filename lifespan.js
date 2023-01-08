'use strict';
const calc = document.getElementById('calc');
const resultarea = document.getElementById('result-area');
const element = document.getElementById('display');
let count = 0;
    
//計算ボタンが押されて計算する
calc.onclick = () => {
    count = 1;

    //誕生日の100年後の計算
    const input = document.getElementById('input');
    const birthday = input.birthday.valueAsDate;
    const year =birthday.getFullYear() + 100;
    let month = birthday.getMonth() + 1;
    if (month < 10) {
        month ='0' + String(month);
    };
    let day = birthday.getDate();
    if (day < 10) {
        day = '0' + String(day);
    };
    let deadDate = new Date(year,Number(month),Number(day),12);

    //今日の計算
    let todayDate = new Date();
    todayDate = todayDate.getTime();

    //寿命の計算
    const lifespan = Number(deadDate) - Number(todayDate); 
    
    //結果の表示
    let which = display.which;
    let a = which.value;
    let result;
    resultarea.innerText = '';
    if (a == 'second') {
        result = document.createElement('h3');
        result.innerText = 'あなたに残された時間は '　+ lifespan / 1000 + '  秒です。';
    }else if (a == 'minute') {
        result = document.createElement('h3');
        result.innerText = 'あなたに残された時間は　' + parseInt(lifespan / 60000) + ' 分です。';
    }else if (a == 'hour') {
        result = document.createElement('h3');
        result.innerText = 'あなたに残された時間は　' + parseInt(lifespan / 3600000) + ' 時間です。';
    }else if (a == 'day') {
        result = document.createElement('h3');
        result.innerText = 'あなたに残された時間は　' + parseInt(lifespan / 86400000) + ' 日です。';
    }else {
        result = document.createElement('p'); 
        result.innerText = '表示方法が選択されていません。';
        count = 0;
    };
    resultarea.appendChild(result);
};

//繰り返し処理
setInterval(cycle,1);

function cycle() {
    if (count != 1) {
        return;
    };
    setInterval(calc.onclick(),1);
};
