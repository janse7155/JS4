// Exercise 1
console.groupCollapsed("Exercise 1")
function outerFunction() {
    let outerVar = "I'm outside!";
    
    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); //Can we access outerVar?
        console.log(innerVar); //Can we access innerVar?
    }

    innerFunction();
}

outerFunction();
console.log('Both innerVar and outerVar are local variables, with innerVar being nested in another function');
console.groupEnd();

// Exercise 2
console.groupCollapsed("Exercise 2")
function mainFunction() {
    hoistedFunction();

    function hoistedFunction() {
        let hoist = 'Hoist the flags';
        console.log(hoist);
    }
}
mainFunction();
console.groupEnd();

// Exercise 3
console.groupCollapsed("Exercise 3")
function functionOne() {
    let one = 'outerVar';

    function functionTwo(){
        console.log(one + ' is outside this function displaying this log.');
    }
    return functionTwo();
}

functionOne();

console.groupEnd();

// Exercise 4
console.groupCollapsed("Exercise 4")
let globalVar = "Earth";
console.log(globalVar);


function modifyGlobal(mod1) {
    let globalVar = mod1;
    console.log(globalVar);
}

function localTest() {
    let local = "Mars";
    //let local = "Mars2";
    console.log(local);
}

modifyGlobal('Moon');

localTest();

console.groupEnd();

// Exercise 5
console.groupCollapsed("Exercise 5")
function param(a) {
    retn(a + 2, 4);
}
param(4);

function retn(a, b) {
    console.log(a+b);
}

console.groupEnd();

// Exercise 6
console.groupCollapsed("Exercise 6")
function hoistTime() {
    console.log(flag);

    var flag = 'Flap';
}

hoistTime();
console.groupEnd();

// Exercise 7
console.groupCollapsed("Exercise 7")

function setupCounter() {
    let countU = 1;

   function countUp() {
        for (let i = 0; i < 10; i++) { 
        countU++;
        console.log(countU);
        }
    
    }
    countUp();
}

setupCounter();

console.groupEnd();

// Exercise 8
console.groupCollapsed("Exercise 8")

setupCounter2();

function setupCounter2() {
    let countU2 = 1;

   function countUp2() {
        for (let i = 1; i < 10; i++) { 
        countU2++;
        console.log(countU2);

        }
    if (i = 10) {
        i = 0;
        console.log(i);
        }
    }
    countUp2();
}


console.groupEnd();

// Exercise 9
console.groupCollapsed("Exercise 9")
let glob = "Sun";

function modGlobe(mode) {
    glob = mode;
    return function innerMod() {
        console.log(glob);
    }
}
function modLock(mock) {
    lock = mock;

    //let lock = "cite";

}
modGlobe('Venus');
modLock('toon');

console.log(glob);
console.log(lock);
const star = modGlobe('Mars');
star();
console.groupEnd();