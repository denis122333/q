'use strict'

console.log('something'.toUpperCase());

// forEach

const arr0 = [
    {name: 'Afanasi', age: 42,},
    {name: 'Fedya', age: 28,},
    {name: 'Vasya', age: 51,},
];

arr0.forEach((element, index, array) => console.log('forEach - ', element)); 

// indexOf or lastIndexOf
// for arrays of numbers or strings , not for arrays of objects.  

const arr1 = [123, 223, 412, 4214, 112, 921, 376];

console.log('indexOf - ', arr1.indexOf(412)); // 2

// findIndex - for arrays of objects. or findLastIndex

const arr2 = [
    {name: 'Afanasi', age: 42,},
    {name: 'Fedya', age: 28,},
    {name: 'Vasya', age: 51,},
];

console.log('findIndex - ', arr2.findIndex((element, index, array) => {
    if (element.name === 'Fedya') return true;
}));

// better version of that

console.log('findIndex - ', arr2.findIndex((element, index, array) => element.name === 'Fedya'));

// includes , not for arrays of objects

const arr3 = [123, 223, 412, 4214, 112, 921, 376];

console.log('includes - ', arr3.includes(412));

// some, for arrays of objects 

const arr4 = [
    {name: 'Afanasi', age: 42,},
    {name: 'Fedya', age: 28,},
    {name: 'Vasya', age: 51,},
];

console.log('some - ', arr4.some((element) => element.name === 'Fedya'));

// at (to get last element of array)

const arr5 = [
    {name: 'Afanasi', age: 42,},
    {name: 'Fedya', age: 28,},
    {name: 'Vasya', age: 51,},
];

console.log('at - ', arr5.at(-1));

// 

console.log('arr5[arr5.length - 1] - ', arr5[arr5.length - 1]);

// push (at end), unshift (at start, not optimal), 
// pop (delete last element of array), shift (delete first element of array, not optimal)

arr5.push({name: 'Kate', age: 30});

console.log('push - ', arr5);

//  toString , not for not primitiv elements (not for objects, etc)

// join , like toString but better

const arr6 = [123, 'hello', true];

console.log('join - ', arr6.join('-'));

// split

const message = 'one, two, three, four';

console.log('split - ', message.split());

console.log('split & join - ', message.split(',').join('.'))

// Object.assign test

console.log('Object.assign with arrays test'.toUpperCase());

const arr7 = [123, 124, 125];
const arr8 = Object.assign([], arr7);

arr8[0] = 321;

console.log(arr7, arr8);

const arr7and8 = Object.assign([], arr7, arr8);

console.log(arr7and8);

//

const combnationArrays = (array1, array2) => {
    let arr = [];

    for (let i of array1) {
        arr.push(i);
    }
    for (let i of array2) {
        arr.push(i);
    }
    
    return arr;
}

console.log(combnationArrays(arr7, arr8));

// 

const arr9 = [{name: 'qwe', age: 50,}, {name: 'ewq', age: 30,}];

const arr10 = Object.assign([], arr9);

arr10[0] = {name: 'asd', age: 11,};

console.log('arr9 - ', arr9);
console.log('arr10 - ', arr10);

const arr9and10 = Object.assign([], arr10, arr9);

console.log(arr9and10);

//

const arr11 = [11, 12, 13];
const arr12 = [11, 12, 13];

const areArraysEqual = (array1, array2) => {

    if (array1.length !== array2.length) return false;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }

    return true;
}

console.log('Are arrays equal? - ', areArraysEqual(arr11, arr12));

//

const user0 = {
    name: 'Afanasi',
    age: 40,
};

const user1 = {
    name: 'Kefko',
    age: 12,
};

const areObjectsEqual = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
};

console.log('Are objects equal?', areObjectsEqual(user0, user1));

//

const calculator = {
	read() {
		this.a = Number(prompt('Give me a first number plz:'))
		this.b = Number(prompt('Give me a second number plz:'))
	},
	sum() {
		alert(this.a + this.b)
	},
	mul() {
		alert(this.a * this.b)
	},
};

// calculator.read()
// calculator.sum()
// calculator.mul()


// slice (copy array but we can copy not only full, we can copy a part of array), splice - delete

const arr13 = [1, 2, 3];
const arr14 = arr13.slice();
const arr15 = [{name: 'kek', age: 12,}];
const arr16 = arr15.slice();

arr16[0].name = 'lal';

console.log('slice - ', arr14);  
console.log(arr15);   
console.log('slice - ', arr16);     

// concat (group arrays) 

const arr17 = [1, 2, 3, 4];
const arr18 = [5, 6 ,7 ,8];

const totalArr = arr17.concat(arr18);

console.log('concat - ',totalArr);

const arr19 = Object.assign([], arr17, arr18);

console.log('object.assign - ', arr19)

// 

const user2 = {
    name: 'lal',
    age: 10,
    city: '123',
};

const user3 = {
    name: 'kek',
    age: 15,
    street: '321',
};

const user4 = Object.assign({}, user2, user3);

console.log('object.assign for objects - ', user4);

// optional chaining ?.

const guest0 = {
    name: 'Vasya',
    age: 40,
    orderInfo: {
        roomType: 2,
        stayDates: {
            from: '21.11.2022',
            to: '22.01.2023',
        },
    },
};

const guest1 = {
    name: 'Petya',
    age: 30,
}

const logGuestInfo = (guest) => console.log(`(optional chaining ?.) - Name: ${guest.name} Age: ${guest.age} Order info: ${guest.orderInfo?.stayDates?.from ?? '-'}, ${guest.orderInfo?.stayDates?.to ?? '-'}`);

logGuestInfo(guest0);
logGuestInfo(guest1);

// object in argument

const logAddress = (address) => console.log(`Address: ${address.city}, ${address.street}, ${address.houseNumber}, ${address.apartmentNumber}`);

logAddress({
    city: 'Kyiv',
    street: 'q-street',
    houseNumber: 213,
    apartmentNumber: 7,
});

// other info (destructuring)

const logUser = (user) => {
    const {name, age, city, ...otherInfo} = user;

    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    console.log('Other info:', otherInfo);
}

logUser({
    name: 'Afanasi',
    age: 123,
    city: 'Lviv',
    something1: 'blabla1',
    something2: 'blabla2',
    something3: 'blabla3',
});

// parseInt , parseFloat, toFixed, toPrecision, Math... ...

const numberAsString = '213.5px';

console.log('parseFloat - ', parseFloat(numberAsString));

// find 

const arr20 = [{name: 'Afanasi', age: 40,}, {name: 'Inokenti', age: 40,}, {name: 'Lal', age: 100,},];

console.log('find');

console.log(arr20.find((element) => element.name === 'Lal'));

console.log(arr20.find((element) => {
    if (element.name === 'Lal') {
        return true;
    }
}));

// map

// recude

// sort



// for in

const user5 = {
    name: 'Tolik',
    age: 60,
    city: 'Lviv',
    beer: true,
}

for (const key in user5) {
    console.log(key, user5[key]);
}

// obj keys, values, ... etc

console.log(Object.keys(user5));

console.log(Object.values(user5));

Object.keys(user5).forEach((key) => console.log(key));

// for (let key of Object.keys(user5)) {
//     console.log(key);
// }

Object.values(user5).forEach((value) => console.log(value));


// obj entries , each key+value of object will be array , [name: 'sda'], [age: 213] ....... (fromEntries...)

console.log(Object.entries(user5));

Object.entries(user5).forEach((element) => console.log(`key - ${element[0].toUpperCase()}, value - ${element[1]}`));

// json , JSON.stringify(user) , JSON.parse(user)

// setTimeout, clearTimeout, setInterval, clearInterval,
/*
const logMessage = (name, age) => alert(`hello , my name is ${name}, im ${age}!!!`);

setTimeout(logMessage, 3000, 'Afanasi', 55);
*/
// promise

const promise = new Promise((fulfill, reject) => {
    console.log('Start, (pending)...');

    setTimeout(() => {
        if (Math.random() > 0.5) {
            fulfill('Good! fulfill!');
        } else {
            reject('Bad..., reject...');
        }
    }, 3000);
})

promise.then((successData) => {
    console.log('Succsess!', successData)
}).catch((errorData) => {
    console.log('Error :(', errorData)
}).finally(() => {
    console.log('25671276')
})

//

// --__--

const checkNumber = (n) => [n > 0, n % 2 === 0, n % 10 === 0];

checkNumber(3);
checkNumber(10);

// --__--

const createArray = (N) => {
    let arr = [];

    for (let i = 0; i <= N; i++) {
        arr.push(i);
    }

    return arr;
};

// --__--

const getArraysSum = (arr1, arr2) => {
    let sum = 0;

    if (arr1.length !== arr2.length) return 'arrs length not equal';

    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i] + arr2[i];
    }

    return sum;
};

// --__--

const combineArrays = (first, second) => {
    let arr = [];

    for (let i = 0; i < first.length; i++) arr.push((first[i] + second[i]));

    return arr;
};

console.log(combineArrays([1, 2, 5], [3, 6, 1]));

// --__--

const doublePower = (currentPowers) => {
    let newPowers = [];

    for (let i of currentPowers) newPowers.push(i * 2);

    return newPowers;
};

// --__--

const makeStickers = (detailsCount, robotPart) => {
    let arr = [];

    for (let i = 1; i <= detailsCount; i++) {
        arr.push(`${robotPart} detail #${i}`);
    }

    return arr;
};

// --__--

const decryptMessage = (message) => {
    let egassem = '';

    // for (let i = message.length - 1; i >= 0; i--) {
    //     egassem += message[i];
    // }
 
    // for (let i = 0; i < message.length; i++) {
    //     egassem = message[i] + egassem;
    // }

    for (let letter of message) egassem = letter + egassem;

    return egassem;
};

console.log(decryptMessage('hello'));

// --__--

const getDrinks = (numberOfGuest) => {
    let sum = 0;

    for (let i = 1; i <= numberOfGuest; i++) {
        sum += i;
    }

    return sum;
};

console.log(getDrinks(6));

// --__--

const getDrinksWithStep = (numberOfGuest, step) => {
    let sum = 0;

    for (let i = 1; i <= numberOfGuest; i += step) {
        sum += i;
    }

    return sum;
};

// --__--

const isSorted = (boxNumbers) => {
    for (let i = 1; i < boxNumbers.length; i++) {
        if (boxNumbers[i] < boxNumbers[i - 1]) return false;
    }

    return true;
};

console.log(isSorted([1, 2, 3, 4, 5]));

// --__--

const removeVowels = (doc) => {
    let docNew = '';

    for (let i = 0; i < doc.length; i++) {
        if (!'aeiouy'.includes(doc[i].toLowerCase())) docNew += doc[i];
    }

    return docNew;
};

console.log(removeVowels('dOcumEEntooO'));

// --__--

const compareRobots = (firstRobotResults, secondRobotResults) => {
    let firstCheck = 0;
    let secondCheck = 0;

    for (let i of firstRobotResults) firstCheck += i;
    for (let i of secondRobotResults) secondCheck += i;

    if (firstCheck > secondCheck) return 'First robot for sale!';
    if (secondCheck > firstCheck) return 'Second robot for sale!';

    return 'Both robots for sale!';
};

console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]));
console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12]));
console.log(compareRobots([1, 3, 4], [1, 1, 4, 5]));

// --__--

const getLocation = (coordinates, commands) => {
    
    for (let command of commands) {
        if (command === 'forward') coordinates[1]++;
        if (command === 'back') coordinates[1]--;
        if (command === 'right') coordinates[0]++;
        if (command === 'left') coordinates[0]--;
    }

    return coordinates;
};

console.log(getLocation([2, 3], ['back', 'back', 'back', 'right']));

// --__--

const isSubstring = (phrase, part) => phrase.includes(part);

// --__--

const getPosition = (text, word) => text.indexOf(word);

// --__--

const countLetters = (input) => {
    let count = 0;

    for (let i of input) {
        if (i.toUpperCase() !== i.toLowerCase()) count++;
    }

    return count;
};

// --__--

const checkWord = (words, word) => words.includes(word);

// --__--

const getLargestNumber = (numbers) => {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) max = numbers[i];
    }

    return max;
}

// --__--

const joinWords = (words, glue) => words.join(glue);

// --__--

function checkBrackets (str) {
    let count1 = 0;
    let count2 = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') count1++;
        if (str[i] === ')') count2++;
    }

    if(count1 === count2) return true;

    return false;
}

console.log(checkBrackets('()()()()'));

//

function UserInfo(name) {
    this.name = name;
}

console.log(new UserInfo('Afanasi'));

//

const logMessage = (actionBefore, actionAfter) => {
    actionBefore();

    console.log('hello');

    actionAfter();
};

const fn1 = () => console.log('before');
const fn2 = () => console.log('after');

logMessage(fn1, fn2);

//

// --__--

let arr21 = [1, 2, 3, 4, 5];

arr21.forEach((element) => console.log(element));

let arr22 = [10, 20, 30, 40];

let sum = 0;

arr22.forEach((element) => sum += element);

console.log(sum);

// --__--

let arr23 = [1, 2, 3, 4, 5];

const arr23New = arr23.map((element) => element * 2);

let arr24 = ['apple', 'banana', 'cherry'];

const arr24New = arr24.map((element) => element.length);

// --__--

const arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr25New = arr25.filter((element) => element % 2 === 0);

console.log(arr25New);

const arr26 = ['cat', 'dog', 'elephant', 'cow'];

const arr26New = arr26.filter((element) => element.length > 3);

console.log(arr26New);

// --__--

const arr27 = [2, 5, 7, 8, 10, 3];

let sum1 = 0;

arr27.forEach((element) => {
    if (element % 2 === 0) sum1++;
});

// --__--

const arr28 = ['apple', 'banana', 'cherry'];

arr28.forEach((element, index) => console.log(element, index));

// --__--

const arr29 = [2, 4, 6, 8];

const arr29New = arr29.map((element) => Math.pow(element, 2));

// --__--

const arr30 = ['John', 'Jane', 'Alex'];

const arr30New = arr30.map((element) => 'Mr. ' + element);

const addMr = (array) => {
    const arrayNew = [];

    for (let name of array) {
        arrayNew.push(`Mr. ${name}`);
    }

    return arrayNew;
};

console.log(arr30New);
console.log(addMr(arr30));

// --__--

const arr31 = [30, 60, 20, 80, 40, 100];

const arr31New = arr31.filter((element) => element > 50);

// --__--

const user6 = {
    name: 'Afanasi',
    age: 40,
    city: 'Kyiv',
};

const user6Entries = Object.entries(user6);

// const user6EntriesFormatted = user6Entries.map((userEntry) => `${userEntry[0].toUpperCase()}, ==${userEntry[1]}==`);

// console.log(user6EntriesFormatted);

const user6EntriesFormatted = user6Entries.map(([key, value]) => {
    return [key.toUpperCase(), `==${value}==`]
});

console.log(user6EntriesFormatted);

const userFormatted = Object.fromEntries(user6EntriesFormatted);

console.log(userFormatted);

// --__--

const data = new Map([
    [1, '(number)'],
    ['1', '(string)']
]);

data.set(2, '(nubmer)');
data.set('2', '(string)');

console.log(data.get(2));
console.log(data.get('2'));

console.log(data.has(1));

// data.delete(1);
// data.clear();

console.log(data.size);

// data.keys() ,.values() ,.entries() , ... for of ... ,

// --__--

const arr32 = [3, 7, 5, 8, 11];

console.log(arr32.find((element) => element % 2 === 0));

const findNumFind = (array) => {
    
    for (let i of array) {
        if (i % 2 === 0) return i;
    }

};

console.log(findNumFind(arr32));

// --__--

const arr33 = [2, 4, 6, 8, 10];

const countArr33 = arr33.reduce((sum, element) => {
    return sum += element;
}, 0);

console.log(countArr33);

// --__--

const arr34 = [30, 10, 50, 20, 40];

const arr35 = Object.assign([], arr34);

// arr35[0] = 100;

console.log(arr34);
console.log(arr35);

const arr36 = Object.assign([], arr34).sort((a, b) => a - b);

console.log(arr36);

// --__--

const arr37 = [1, 2, 3];
const arr38 = [4, 5, 6];

const arr37AndArr38 = arr37.concat(arr38);

console.log(arr37AndArr38);

// --__--

const arr39 = [1, 2, 2, 3, 4, 4, 5];

const removeDublicates = (array) => {
    let arrSorted = Object.assign([], array).sort((a, b) => a - b);
    let arrNew = [];

    for (let i = 0; i < arrSorted.length; i++) {
        if (arrSorted[i] !== arrSorted[i - 1]) arrNew.push(arrSorted[i]);
    }

    return arrNew;
};

console.log(removeDublicates(arr39));

// --__--

const arr40 = ['lalala', 'la', 'lalalala'];

const arr40New = arr40.map((element) => element.length);

console.log(arr40New);

// or , for comfort - 

const checkArrayElementsLength = (array) => array.map((element) => element.length);

console.log(checkArrayElementsLength(arr40));

// --__--

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
];

const usersWhichOlderThan18 = (allUsers) => {
    const arr = [];

    allUsers.forEach((element) => {
        if (element.age >= 18) arr.push(element.name);
    });

    return arr;
};

console.log(usersWhichOlderThan18(users));

// or 

const users2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
];

// function users2WhichOlderThan18(allUsers) {
//     return allUsers.filter(function(element) {
//         return element.age >= 18;
//     }).map(function(element) {
//         return element.name;
//     });
// }

const users2WhichOlderThan18 = (allUsers) => allUsers.filter((element) => element.age >= 18).map((element) => element.name);

console.log(users2WhichOlderThan18(users2));

// or

const users3 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
];

const users3WhichOlderThan18 = (allUsers) => {
    let arr = [];

    for (let i of allUsers) {
        if (i.age >= 18) arr.push(i.name);
    }

    return arr;
}

console.log(users3WhichOlderThan18(users3));

// --__--

const arr41 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const checkSumm = (array) => {
//     let summ = 0;

//     for (let i of array) {
//         for (let j of i) {
//             summ += j;
//         }
//     }

//     return summ;
// };

const checkSum = (array) => {
    let sum = 0;

    array.forEach((element) => element.forEach((elem) => sum += elem));

    return sum;
};

console.log(checkSum(arr41));

// or 

const checkSum2 = (array) => array.reduce((sum, element) => {
    return sum += element.reduce((sum, elem) => {
        return sum += elem;
    }, 0)
}, 0);

console.log(checkSum2(arr41));

// 

const checkSum3 = (array) => array.reduce((sum, element) => sum += element.reduce((sum, elem) => sum += elem, 0), 0);


console.log(checkSum3(arr41));

// --__--

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj1AndObj2 = Object.assign({}, obj1, obj2);

console.log(obj1AndObj2);

// --__--

const arr42 = ['apple', 'banana', 'apple', 'cherry', 'banana', 'cherry'];

const deleteDublicates = (array) => {
    const arraySorted = Object.assign([], array).sort();
    const arrayNew = [];

    for (let i = 0; i < array.length; i++) {
        arrayNew.push(arraySorted[i]);
        if (arraySorted[i] === arraySorted[i - 1]) arrayNew.pop();
    }

    return arrayNew;
};

console.log(deleteDublicates(arr42));

// --__--

const str0 = 'level';

const isPolindrom = (str) => {
    let strReverse = '';

    for (let letter of str) {
        strReverse = letter + strReverse;
    }

    return str === strReverse;
};

console.log(isPolindrom(str0));

// or

const isPolindrom2 = (str) => {
    let strReverse = str.split('').reverse().join('');
    
    return str === strReverse;
};

console.log(isPolindrom2(str0));

// or 

const isPolindrom3 = (str) => str === str.split('').reverse().join('');

console.log(isPolindrom3(str0));

// --__--

const arr43 = [10, 20, 30, 5, 15, 999, 0.9];

const findMaxAndMin = (array) => {
    let max = array[0];
    let min = array[0];

    for (let num of array) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return `Max - ${max}, min - ${min}`;
};

console.log(findMaxAndMin(arr43));

// --__--

const arr44 = [1, 2, 2, 3, 4, 4, 4, 5];

const countInObj = (array) => {
    let arrSort = Object.assign([], array).sort((a, b) => a - b);
    
    const obj = {};
    let count = 0;

    for (let i = 0; i < arrSort.length; i++) {
        
        if (arrSort[i] === arrSort[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        obj[`${arrSort[i]}`] = count;
    }
    
    return obj;
};

console.log(countInObj(arr44));

// --__--

const products = [
    { id: 1, name: 'Apple iPhone' },
    { id: 2, name: 'Samsung Galaxy' },
    { id: 3, name: 'Apple Watch' },
];

const onlyApple = (array) => array.filter((element) => element.name.includes('Apple'));

console.log(onlyApple(products));

// or 

const onlyApple2 = (array) => {
    let arr = [];

    for (let i of array) {
        if (i.name.includes('Apple')) arr.push(i);
    }

    return arr;
};

console.log(onlyApple2(products));

// --__--

const arr45 = [10, 20, 20, 30, 40, 40];

const secondLargest = (array) => {
    const arraySorted = Object.assign([], array).sort((a, b) => a - b);

    const arrayWithoutDublicates = [];

    for (let i = 0; i < arraySorted.length; i++) {
        if (arraySorted[i] !== arraySorted[i - 1]) arrayWithoutDublicates.push(arraySorted[i]);
    }

    return arrayWithoutDublicates[arrayWithoutDublicates.length - 2];
};

console.log(secondLargest(arr45));

// --__--

const arr46 = [1, 2, 3];
const arr47 = [2, 3, 4];

const onlyUnic = (arr1, arr2) => {
    let arr = arr1.concat(arr2).sort((a, b) => a - b);

    let arrUnic = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) arrUnic.push(arr[i]);
    }

    return arrUnic;
};

console.log(onlyUnic(arr46, arr47));

// or 

const onlyUnic2 = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b).filter((element, index, array) => element !== array[index - 1] && element !== array[index + 1]);

console.log(onlyUnic2(arr46, arr47));

// --__--

const arr48 = [{a: 1,}, {b: 2,},];
const arr49 = [];