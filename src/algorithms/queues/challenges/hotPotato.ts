import { Queue } from "../queue-use";

function hotPotato(elementsList: string[], iterate: number) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < iterate; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminatedList,
    winner: queue.dequeue(),
  };
}

// const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
// const result = hotPotato(names, 7);
// result.eliminatedList.forEach((name) =>
//   console.log(`${name} was eliminated from the Hot Potato game.`)
// );
//
// console.log(`The winner is ${result.winner}`);
