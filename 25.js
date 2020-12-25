import { readFile } from './tools.ts';
console.time()
const [card, door] = readFile('./inputs/25.txt').split('\r\n').map(Number);

let cardSize = 0;
let n = 1;
let i = 0;
while(!cardSize){
  i++;
  n = (n * 7) % 20201227;
  if(card === n) cardSize = i;
}

let f = 1;
for(let i = 0; i < cardSize; i++) f = (f * door) % 20201227;
console.log(f);
console.timeEnd()