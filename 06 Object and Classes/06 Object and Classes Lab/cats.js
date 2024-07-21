function cats(catsAsString) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        } 
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let catData of catsAsString) {
        let [name, age] = catData.split(' ');

        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5']);


// Solution 2:

// class Cat{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     meow(){
//         return 'says Meow';
//     }
// }
// let cats = [];

// for (let i = 0; i < arr.length; i++) {
// let catData = arr[i].split(' ');
// let name = catData[0];
// let age = catData[1];
// cats.push(new Cat(name, age));
// }
// for(let cat of cats){
// console.log(`${cat.name}, age ${cat.age} ${cat.meow()}`);
// }