export default function randomArray(num) {
  const arr = [];

  // Fill the array with numbers from 1 to num
  for (let i = 1; i <= num; i += 1) {
    arr.push(i);
  }

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
