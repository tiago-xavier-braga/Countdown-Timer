let dateValueMin = document.getElementById('dateEvent');
dateValueMin.min = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

function Start(){
    const dateNow = new Date();
    const compromise = new Date(document.getElementById('dateEvent').value);
    const nameEvent = document.getElementById('nameEvent');
    let box = document.getElementById('input-box');

    let gap = {
        Year: Math.abs(compromise.getFullYear() - dateNow.getFullYear()),
        Month: Math.abs(compromise.getMonth() - dateNow.getMonth()),
        Day: Math.abs(compromise.getDate() - dateNow.getDate()),
        Hour: Math.abs(compromise.getHours() - dateNow.getHours()),
        Minute: Math.abs(compromise.getMinutes() - dateNow.getMinutes()),
        Second: Math.abs(compromise.getSeconds() - dateNow.getSeconds()),
    };

    if(nameEvent.value == ''){
        alert('Name Event Invalid !');

        return 0;
    }
    box.innerHTML = '';
    setInterval(() => {
        gap.Second -= 1;
        if(gap.Second < 0){
            gap.Minute -= 1;
            gap.Second = 59;
            
            if(gap.Minute < 0){
                gap.Hour -= 1;
                gap.Minute = 59;

                if(gap.Hour < 0){
                    gap.Day -= 1;
                    gap.Hour = 24;

                    if(gap.Day < 0){
                        gap.Month -= 1;
                        gap.Day = 31;
                    }
                    if(gap.Month < 0){
                        gap.Year -= 1;
                        gap.Month = 12;
                    }
                }
            }
        }
        box.innerHTML = '';
        box.innerHTML += `
            <h1>${nameEvent.value}</h1> 
            <h2>${gap.Day}/${gap.Month}/${gap.Year} and ${gap.Hour}:${gap.Minute}:${gap.Second}</h2>
        `;

        nameEvent.disabled = true;
        document.getElementById('btnStart').disabled = true;
    }, 1000);
}
