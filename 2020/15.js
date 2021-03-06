import { readFile } from '../tools.ts';

const input = readFile('inputs/15.txt').split(',').map(Number);

const get = n => {
  const history = new Array(n);
  input.slice(0, -1).forEach((n, i) => history[n] = i);
  let prev = input[input.length - 1];
  for(let i = input.length; i < n; i++){
    const idx = history[prev];
    history[prev] = i - 1;
    if(idx === undefined) prev = 0;
    else prev = i - idx - 1;
  }
  return prev;
}

console.log(get(2020));
console.log(get(30000000));
