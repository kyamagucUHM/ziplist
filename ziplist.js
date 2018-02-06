const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList(alist, blist) {
  const listJoined = [];
  for (let i = 0; i < alist.length; i++) {
    listJoined.push(alist[i], blist[i]);
  }
  return listJoined;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(alist, blist) {
  return _.flatten(_.zip(alist, blist));
}

console.log(zipListTheSimpleWay(list1, list2));