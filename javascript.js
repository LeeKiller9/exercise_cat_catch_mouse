let statusRat = true; //true = alive   ;   false = dead;


let Rat = function (name, weight, speed) {
    this.nameRat = name;
    this.weightRat = weight;
    this.speedRat = speed;
    this.statusRat = statusRat;

    this.setNameRat = function (name) {
        this.nameRat = name;
    }
    this.setWeightRat = function (weight) {
        this.weightRat = weight;
    }
    this.setSpeedRat = function (speed) {
        this.speedRat = speed;
    }
    this.getNameRat = function () {
        return this.nameRat;
    }
    this.getWeightRat = function () {
        return this.weightRat;
    }
    this.getSpeedRat = function () {
        return this.speedRat;
    }
    this.getStatusRat = function () {
        return this.statusRat;
    }
    this.changeStatusRat = function () {
        this.statusRat = !this.statusRat;
    }
    this.toRoarRat = function () {
        console.log("chit chit!!");
    }
}

let Cat = function (name, weight, speed) {
    this.nameCat = name;
    this.weightCat = weight;
    this.maxSpeedCat = speed;

    this.setNameCat = function (name) {
        this.nameCat = name;
    }
    this.setWeightCat = function (weight) {
        this.weightCat = weight;
    }
    this.setMaxSpeed = function (speed) {
        this.maxSpeedCat = speed;
    }
    this.getNameCat = function () {
        return this.nameCat;
    }
    this.getWeightCat = function () {
        return this.weightCat;
    }
    this.getMaxSpeedCat = function () {
        return this.maxSpeedCat;
    }
    this.toRoarCat = function () {
        console.log("meo meo!!");
    }
    this.toCatchRat = function (obj) {
        while (this.getMaxSpeedCat() <= obj.getSpeedRat()) {
            this.maxSpeedCat++;
            console.log("The running speed of cat: " + this.getMaxSpeedCat());
        }
    }
    this.toEatRat = function (obj) {
        while (obj.getStatusRat()) {
            this.weightCat++;
            obj.weightRat--;
            console.log("The weight of cat: " + this.getWeightCat());
            console.log("The weight of rat: " + obj.getWeightRat());
            if (obj.getWeightRat() <= 0) {
                obj.changeStatusRat();
            }
        }
    }
}

let myRat = new Rat("Mice", 10, 7);
let myCat = new Cat("Tom", 30, 3);

console.log(myRat.getNameRat());
myRat.toRoarRat();
console.log(myCat.getNameCat());
myCat.toRoarCat();
console.log("Cat is chasing rat!!");
console.log("The running speed of rat: " + myRat.getSpeedRat());
myCat.toCatchRat(myRat);
console.log("Cat caught rat!!");
console.log("The weight of cat: " + myCat.getWeightCat());
console.log("The weight of rat: " + myRat.getWeightRat());
console.log("Cat is eating rat!!");
myCat.toEatRat(myRat);
if (!myRat.getStatusRat()) {
    console.log("Rat is death");
}


