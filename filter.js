const players = [75, 45, 88, 78, 90, 57, 66];
const selected1 = players.filter(play => play > 80);
console.log(selected1)


const selected = players.filter(play=> play % 2 ===0);
console.log(selected)

const friends = ['tom', 'jony', 'mirakel', 'livas'];
const oddfriends = friends.filter(fri => fri.length > 4);
console.log(oddfriends)