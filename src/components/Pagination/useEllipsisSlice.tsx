export function useEllipsisSlice(
  number: number,
  percentage: number
): [number[], number[], number[]] {
  let firstSlice: number[] = [];
  let secondSlice: number[] = [];
  let thirdSlice: number[] = [];

  if (percentage === 0) {
    return [[], [], []];
  }
  const sliceSize = Math.floor(number * (percentage / 100)) || 1;
  const firstSliceStart = 2;
  const secondSliceEnd = number - 1;

  // Primeiro slice: de 2 até o tamanho do slice
  firstSlice = Array.from({ length: sliceSize }, (_, i) => i + firstSliceStart);

  // Segundo slice: do número menos o tamanho do slice até o número - 1
  secondSlice = Array.from(
    { length: sliceSize },
    (_, i) => secondSliceEnd - i
  ).reverse();

  // Terceiro slice: todos os números que não estão em a1 ou a2
  thirdSlice = Array.from({ length: number - 1 }, (_, i) => i + 1)
    .filter(num => !firstSlice.includes(num) && !secondSlice.includes(num))
    .concat(number);

  return [firstSlice, secondSlice, thirdSlice];
}
