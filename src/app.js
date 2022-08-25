const dateNow = new Date();
const compromise = new Date(2022, 8, 25, 17, 57);

const gap = {
    Year: Math.abs(compromise.getFullYear() - dateNow.getFullYear()),
    Month: Math.abs(compromise.getMonth() - dateNow.getMonth()),
    Day: Math.abs(compromise.getDate() - dateNow.getDate()),
    Hours: Math.abs(compromise.getHours() - dateNow.getHours()),
    Minutes: Math.abs(compromise.getMinutes() - dateNow.getMinutes()),
    Secods: Math.abs(compromise.getSeconds() - dateNow.getSeconds()),
};

console.log(gap)