
const demoArr = [
    {
        limit: 2000,
        recievedCalories: 2100,
        date: '22',
    },
    {
        limit: 2000,
        recievedCalories: 1950,
        date: '',    },
    {
        limit: 2000,
        recievedCalories: 1700,
        date: '',    },
    {
        limit: 2000,
        recievedCalories: 1800,
        date: '',    },
    {
        limit: 2000,
        recievedCalories: 1650,
        date: '',    },
    {
        limit: 2000,
        recievedCalories: 1650,
        date: '',    },
    {
        limit: 2000,
        recievedCalories: 1650,
        date: '',
    },
]

let today = new Date();
let newDate = new Date();

demoArr.forEach((item,index) => {
    newDate.setDate(today.getDate() + (index-6));
    item.date = newDate.getDate();
})
console.log(demoArr);

const demoArr2 = [
    {
        currentLimit: 2000,
        eatenCalories: 2100,
        date: '3/9/2026',
    },
    {
        currentLimit: 2000,
        eatenCalories: 1950,
        date: '3/10/2026',    },
    {
        currentLimit: 2000,
        eatenCalories: 1700,
        date: '3/11/2026',    },
    {
        currentLimit: 2000,
        eatenCalories: 1800,
        date: '3/12/2026',    },
    {
        currentLimit: 2000,
        eatenCalories: 1650,
        date: '3/13/2026',    },
    {
        currentLimit: 2000,
        eatenCalories: 1650,
        date: '3/14/2026',    },
    {
        currentLimit: 2000,
        eatenCalories: 1650,
        date: '3/15/2026',
    },
]

const date = new Date().toLocaleDateString();
// demoArr2.forEach((item,index) => {
//     item.date = date;
// })
console.log(demoArr2);


export {demoArr, demoArr2};