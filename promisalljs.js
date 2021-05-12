///// async promises with using  # prmise.all#    /////
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

let [popcorn,butter,coldDrinks] = await Promise.all([getPopcorn,addButter,getColdDrinks])
console.log(`${popcorn},${butter},${coldDrinks}`);

return ticket;
}

preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');