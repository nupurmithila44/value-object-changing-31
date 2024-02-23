const players = [75, 45, 88, 78, 90, 57, 66];
const selected1 = players.filter(play => play > 80);
console.log(selected1)


const selected = players.filter(play=> play % 2 ===0);
console.log(selected)

const friends = ['tom', 'jony', 'mirakel', 'livas'];
const oddfriends = friends.filter(fri => fri.length > 4);
console.log(oddfriends)

const players1 = [75, 45, 88, 78, 90, 57, 66];
const selected2 = players.filter(p=> p % 10 ===0)
console.log(selected)

const footbolers = [33, 50, 79, 78, 90, 101, 30];
const selected3 = footbolers.filter(foot => foot % 10 ===0);
console.log(selected3)