const foods =['taco','pizza','cheeseburger'];
const favFood  = foods[1]; 
foods .splice(2,0,'tofu');
console.log('Exercise 2,3,4 result:', favFood);
console.log('Exercise 5 result:', foods);

foods.splice(1,1,'sushi','cubcake');
console.log('Exercise 6 result:',foods);

const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);

const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

const allFoods =foods.join(' -> ')
console.log('Exercise 9 result:', allFoods);

const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:',hasSoup);

const nums =[100,5,23,15,21,72,9,45,66,7,81,90];
let odds =[];

for (let i = 0; i <nums.length; i++) {
    if (nums[i]% 2 !== 0) {odds.push(nums[i]);

    }
}
console.log('Exercise 11 result:', odds);

let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
      fizzbuzz.push(nums[i]); 
    } else if (nums[i] % 3 === 0) {
      fizz.push(nums[i]); 
    } else if (nums[i] % 5 === 0) {
      buzz.push(nums[i]); 
    }
  }
  
  console.log('Exercise 12 Results:');
  console.log('  fizz:', fizz);
  console.log('  buzz:', buzz);
  console.log('  fizzbuzz:', fizzbuzz);

  