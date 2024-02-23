const players = [75, 45, 88, 78, 90, 57, 66];
const selected = players.filter(p=> p % 10 ===0)
console.log(selected)

const footbolers = [33, 50, 79, 78, 90, 101, 30];
const findfootbolers = footbolers.find(foot=> foot % 10 ===0)
console.log(findfootbolers)