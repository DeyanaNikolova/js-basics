function onTimeForTheExam(input) {
    let examHour = Number(input.shift());
    let examMinute = Number(input.shift());
    let arriveHour = Number(input.shift());
    let arriveMinute = Number(input.shift());

    let examTotalMinutes = examHour * 60 + examMinute;
    let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

    if (arriveTotalMinutes > examTotalMinutes) {
        console.log("Late");
    }
    else if (examTotalMinutes - arriveTotalMinutes <= 30) {
        console.log("On time");
    }
    else {
        console.log("Early");
    }

    let result = Math.abs(examTotalMinutes - arriveTotalMinutes);
    
    if (examTotalMinutes - arriveTotalMinutes > 0) {
        if (result < 60) {
            console.log(`${result} minutes before the start`);
        } else {
            if (result % 60 < 10) {
                console.log(`${parseInt(result / 60)}:0${result % 60} hours before the start`);
            } else {
                console.log(`${parseInt(result / 60)}:${result % 60} hours before the start`);
            }
        }
    }
    else if (arriveTotalMinutes - examTotalMinutes > 0) {
        if (result < 60) {
            console.log(`${result} minutes after the start`);
        } else {
            if (result % 60 < 10) {
                console.log(`${parseInt(result / 60)}:0${result % 60} hours after the start`);
            } else {
                console.log(`${parseInt(result / 60)}:${result % 60} hours after the start`);
            }
        }

    }
}
onTimeForTheExam(["9",
"30",
"9",
"50"])
