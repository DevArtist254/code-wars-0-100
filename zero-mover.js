console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const withOutZero = [];
  const zeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === 0) {
      zeroArr.push(el);
    }

    if (el !== 0) {
      withOutZero.push(el);
    }
  }

  return [...withOutZero, ...zeroArr];
}
