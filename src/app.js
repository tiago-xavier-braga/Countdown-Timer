var dateNow = new Date();
var compromise = new Date(2022, 7, 25);
var d = new Date();

d.setFullYear(compromise.getFullYear() - dateNow.getFullYear());
d.setMonth(compromise.getMonth() - dateNow.getMonth());
d.setDate(compromise.getDate() - dateNow.getDate())
d.setHours(compromise.getHours() - dateNow.getHours());
d.setMinutes(compromise.getMinutes() - dateNow.getMinutes());
d.setSeconds(compromise.getSeconds() - dateNow.getSeconds());

