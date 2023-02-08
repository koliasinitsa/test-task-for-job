// 1 zadanie
// минут 5
const nameCity = ['Минск', 'Санкт-петербург', 'Воронеж', 'Минск']

const zadanie1 = (arr) => arr.join(',') + '.';
console.log(zadanie1(nameCity));

// 2 задание  минут 15-20

const numb1 = 27,
      numb2 = 27.8,
      numb3 = 41.7,
      numb4 = 22.6,
      numb5 = 33.2

function zadanie2(numb) {
    let remaindnumb = numb % 5;

    if(remaindnumb === 0) {
        return numb;
    } else if (remaindnumb >= 2.5) {
        return numb - remaindnumb+5;
    } else {
        return numb - remaindnumb;
    }
}

console.log(zadanie2(numb1));
console.log(zadanie2(numb2));
console.log(zadanie2(numb3));
console.log(zadanie2(numb4));
console.log(zadanie2(numb5));

//  zadanie 3 минут 10

function zadanie3(amount) {
    let last = amount % 10;
    if (last == 1) {
        return `${amount} компьютер`;
    } else {
        return `${amount} компьютеров`;
    }
}
console.log(zadanie3(5));
console.log(zadanie3(51));
console.log(zadanie3(23));


// 4 задание где-то  20 мин 

const number = 2,
      number1 = 3,
      number2 = 4
function zadanie3(num) {
    for (let i =2, max = Math.sqrt(num); i<=max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(zadanie3(number));
console.log(zadanie3(number1));
console.log(zadanie3(number2));


// задание 5 -минут 30

let arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23,1,];
let arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];


function find(arr1, arr2){
  let res = [];
  let cloneArr = arr1.slice(0); // клонируем массив
  for(let i = 0; i < cloneArr.length; i++){
    if(res.includes(cloneArr[i])) continue; // если текущий уже записан в результат, переходим к следующему
    delete cloneArr[i] // удаляем текущий элемент
    if (cloneArr.includes(arr1[i]) && arr2.includes(arr1[i])) { // проверяем наличие удалённого элемента, если есть и присутствует во втором массиве
        let cloneArr2 = arr2.slice(0); // клонируем второй массив
        delete cloneArr2[cloneArr2.indexOf(arr1[i])] // ищем индекс и удаляем элемент
        if(cloneArr2.includes(arr1[i])) res.push(arr1[i]) // если элемент после удаления встречается в массиве, добавляем 
    }
  }
  return res
}

console.log(find(arr1, arr2))

// 6 zadanie минут 5
// а чтобы данные выводились в виде таблицы еще мин 15

const a = 5;
function zadanie6 (a) {
    for (i = 1; i <= a;  i++) {
         let arr = []; // создаем массив для данных
        for (j = 1; j <= a; j++) {
             arr.push(j*i);// закидываем данные
        }
         console.log(`${i}: ${arr.join(' ')}`);
    }
}
zadanie6(a);










