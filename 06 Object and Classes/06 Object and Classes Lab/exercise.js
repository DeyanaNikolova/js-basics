function solve(arr) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = arr.shift();
    let listType = arr.pop();

    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = arr[i].split('_');

        let song = new Songs(typeList, name, time);
        songs.push(song);
    }
    if (listType === 'all') {
        songs.forEach((s) => console.log(s.name));
    } else {
        let filterd = songs.filter((s) => s.typeList === listType);
        filterd.forEach((s) => console.log(s.name));
    }

}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

console.log('---');

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

console.log('----');

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);


// for (let key in data) {
//     console.log(`${key}: ${data[key]}`);
// }