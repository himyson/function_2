



/** ЗАДАЧА 1 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
*/

let gif = () => alert('Привет, мир!')
// gif()



/** ЗАДАЧА 2 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 
*/

// let gif = () => alert('Привет, мир!')
setTimeout(gif, 5000);





/** ЗАДАЧА 3 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
*/

setTimeout(function myFn() {
  console.log('Привет из функции myFn')
}, 2000)



/** ЗАДАЧА 4 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 * 5 новый объект должен вноситься через функцию
*/

let cars = [
  {
    carBrand: 'Oniks',
    price: 19000,
    isAvailableForSale: true 
  },
  {
    carBrand: 'Gentra',
    price: 13500,
    isAvailableForSale: false
  },
  {
    carBrand: 'Tracker',
    price: 25000,
    isAvailableForSale: true
  }
]

let car = 
  {
    carBrand: 'Malibu',
    price: 40000,
    isAvailableForSale: true
  }

function pushCar(a) {
  cars.push(a)
}
pushCar(car)
console.log(cars);






/** ЗАДАЧА 5 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
*/

const MIN = 1000
const MAX = 9999
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
const random = (Math.floor(Math.random() * (MAX - MIN +1)) + MIN);

let number = function () {
    if(random !== myNumbers) {
    myNumbers.push(random)
  }
};
console.log(myNumbers);





/** ЗАДАЧА 6 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 * for each
*/

const myCities = ['London', 'New York', 'Singapore']

myCities.forEach((item, i) => {
  console.log(`${item} is at the index ${i} in the myCities array`);
})




/** ЗАДАЧА 7 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
*/

const posts = [
    { postId: 1355, commentsQuantity: 5 },
    { postId: 5131, commentsQuantity: 13 },
    { postId: 6134, commentsQuantity: 2 },
  ]
  
  // console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }
  
  // console.log(findPostById(4511, posts)) // undefined

function findPostById(ID, arr) {
  // for(let item of arr){
    if(ID === posts.postId){
      console.log(posts);
    }else if(ID !== posts.postId){
      console.log(undefined);
    }
}
findPostById(1355, posts)








/** ЗАДАЧА 8 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
*/

// console.log(greeting1.greet('Bob'))
// // Hey, this is Bob

// greeting1.changeGreeting('Good Morning from')

// console.log(greeting1.greet('Emily'))
// // Good Morning from Emily

// const greeting2 = createGreeting()

// console.log(greeting2.greet('Emily'))
// // Hey, this is Emily




function createGreeting () {
  let greetingString = "Hey, this is"
  function greet (name) {
    console.log(greetingString.greet('Bob'));
  }
}

