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

console.log('split - ',message.split());

console.log('split & join - ',message.split(',').join('.'))

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

const arr9and10 = Object.assign([], arr9, arr10);

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

console.log('Are objects equal?',areObjectsEqual(user0, user1));

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


// slice (copy array but we can copy not only full, we can copy a part of array)

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

Object.values(user5).forEach((value) => console.log(value));

// obj entries , each key+value of object will be array , [name: 'sda'], [age: 213] .......

console.log(Object.entries(user5));

Object.entries(user5).forEach((element) => console.log(element[0], element[1]))
