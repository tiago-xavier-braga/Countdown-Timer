var dateNow = new Date();
var compromise = new Date(2022, 23, 18);

var d = new Date((compromise.setFullYear() - dateNow.setFullYear()), (compromise.setMonth() - dateNow.setMonth()), (compromise.setDate() - dateNow.setDate()));

console.log(d)
