const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        city: 'jelenia_gora',
        age: 30,
        hobbies: ['trekking', 'cars', 'martial arts'],
    },
    {
        name: 'marcin',
        city: 'lublin',
        age: 43,
        hobbies: ['css', 'speedway', 'history']
    },
    {
        name: 'dawid',
        city: 'bielskobiala',
        age: 30,
        hobbies: ['football', 'snowboard', 'boxing']
    },
    {
        name: 'sebastian',
        city: 'golkowice',
        age: 20,
        hobbies: ['drugs', 'hookers', 'Js']
    },
    {
        name: "karolina",
        city: "dubaj",
        age: 32,
        hobbies: ["książki", "gotowanie", "filmy"]
    },
    {
        name: 'patryk',
        city: 'tarnow',
        age: 26,
        hobbies: ['anime', 'rts', 'lol']
    },
    {
        name: 'aleksander',
        city: 'warsaw',
        age: 23,
        hobbies: ['philosophy', 'art', 'music']
    },
    {
        name: 'Kamil',
        city: 'walcz',
        age: 34,
        hobbies: ['js', 'html', 'Mac']
    },
    {
        name: 'Alex',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'franek',
        city: 'warszawa',
        age: 18,
        hobbies: ['js', 'bastkeball', 'cars']
    },
    {
        name: 'marcin',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'bike', 'jogging']
    }
]

// function calculateAvgAge(elements){
//     let sum = 0
//
//     for (let i = 0; i < elements.length; i++){
//         sum += elements[i].age;
//     }
//     return sum / elements.length;
// }


// function calculateAvgAge(elements) {
//     const ages = elements.map((element) => element.age);
//     return ages;
// }


// const result = calculateAvgAge(data);
// console.log(result);


// policz średnią wieku ludzie spoza warszawy.

// function calculateAvgAge(items) {
//     let sum = 0;
//     let counter = 0;
//
//     for (const item of items) {
//         if (item.city !== 'warszawa') {
//             sum += item.age;
//             counter++;
//             console.log(item.city);
//         }
//     }
//
//     // zmienną, gdzie będziemy zliczać wiek
//     // zmienną, licznik, będziemy zliczać ile jest osób
//     // zrobić iteracje po wszystkich elementach
//     // musimy wybrać osoby spoza warszawy if
//     // dodajemy ich wiek
//     // zwiększamy licznik ilości osób
//     // dzielimy przez sumę przez ilość ludzi
//
//     return sum / counter;
//
//
// }

// function calculateAvgAge(items) {
//     const result = items.filter((item) => item.city !== 'warszawa');
//     return result.reduce((acc, ce) => acc +ce.age, 0) / result.length;
// }
//
//
// const result = calculateAvgAge(data);
// console.log(result);


// sprawdź, czy wszyscy są młodsi niż 30 lat

// function isAllYoungerThan30(data) {
//     for (const item of data){
//         if (item.age > 30){
//             return false;
//         }
//     }
//
//     return true;
// }
//
// const result = isAllYoungerThan30(data);
// console.log(result);


// // Czy ktokolwiek pochodzi z krakowa
//
// function isAnyFromCracovia(data) {
//     for (const item of data) {
//         if (item.city === 'krakow'){
//             return true;
//         }
//     }
//     return false;
// }
//
// const result = isAnyFromCracovia(data);
// console.log(result);


// zwróć tablice imion osób, które kochają js


// function getPeopleWhoLoveJS(data) {
//     const filteredData = data.filter(item => item.hobbies.some(hobby => hobby.toLowerCase() === 'js'));
//     const names = filteredData.map(item => item.name);
//     return names;
// }
//
// const result = getPeopleWhoLoveJS(data);
// console.log(result);
//
// // stwórz pustą tablicę, aby przechowywać imiona osób, które lubią js
//
// // prze iteruj po wszystkich elementach
// // wybierz osoby, które lubią js za pomocą if i includes
// // dodaj te osoby do wcześniejszej tablicy
// // zwróć tablicę z imionami

// policz ile jest unikalnych hobby




    // zrób tablice do dodawania pojedynczych hobby
    // przeiteruj po wszystkich items
    // wewnątrz iteracji po items przeiteruj po hobbies poszczególnych elementów
    // sprawdź czy dane hobby jeszcze nie jest w tablicy do dodawania hobby i go dodaj
    // zwróć długość tablicy z hobby

// function countUniqueHobbies(items) {
//     const hobbies = []
//     for (const item of items){
//         for (const hobby of item.hobbies){
//             if (!hobbies.includes(hobby)){
//                 hobbies.push(hobby);
//             }
//         }
//     }
//
//     return hobbies.length;
// }
//
//
// const result = countUniqueHobbies(data);
// console.log(result);
