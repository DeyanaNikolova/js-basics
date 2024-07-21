function carWash(array) {
let command;
    for(let el of array){
        command = array.shift().split(', ');
        console.log(command);
    }
   
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])