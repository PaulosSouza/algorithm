function intersection(firstSet: Set<number>, secondSet: Set<number>) {
  const intersectionSet = new Set<number>();

  firstSet.forEach((value) => {
    if (secondSet.has(value)) {
      intersectionSet.add(value);
    }
  });

  return intersectionSet;
}

/* Set */
// const set = new Set<number>();
// set.add(1);
//
// log(set.values());
// log(set.has(1));
// log(set.size);

/* Union Set*/
// function union(firstSet: Set<number>, secondSet: Set<number>) {
//   const unionAB = new Set<number>();
//
//   firstSet.forEach((value) => unionAB.add(value));
//   secondSet.forEach((value) => unionAB.add(value));
//
//   return unionAB;
// }
// const setA = new Set<number>();
// const setB = new Set<number>();
//
// [1, 2, 3].forEach((value) => setA.add(value));
// [2, 3, 4].forEach((value) => setB.add(value));
//
// log(union(setA, setB));
