console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie= async ()=>{
    const wifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });
const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
const addButter = new Promise((resolve,reject)=>resolve('butter'));
const getColdDrinks = new Promise((resolve,reject)=>resolve('cold drinks'));

let ticket  =await wifeBringingTickets;

console.log(`wife: I have the ${ticket}`);
console.log('husband: We should go in');
console.log('wife: No, I am hungry');

let popcorn = await getPopcorn;

console.log(`husband: I got some ${popcorn}`);
console.log('husband: We should go in');
console.log('wife: I need butter on my popcorn');

let butter = await addButter;

console.log(`husband: I got some ${butter}`);
console.log('husband: anything else darling ?');
console.log('wife: I want cold drink');

let coldDrinks = await getColdDrinks; 

console.log(`husband: I got ${coldDrinks}`);
console.log('husband: Anythig else?,can we go inside now?');
console.log('wife: Sure!')



return ticket;
}

preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');