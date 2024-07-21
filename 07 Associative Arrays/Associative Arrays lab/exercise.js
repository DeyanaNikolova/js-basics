function solve(arr) {
    let meetings = {};

    for(let el of arr){

      let [day, name] = el.split(' ');
      if(meetings.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
      }else{
          meetings[day] = name; 
          console.log(`Scheduled for ${day}`);
      }
    }
    for(let day in meetings){
        console.log(`${day} -> ${meetings[day]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);