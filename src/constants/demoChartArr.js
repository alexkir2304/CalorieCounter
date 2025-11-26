
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

export {demoArr};