const isUnique = (arr) => !([...new Set(arr)].length === 1);
const areNotEmpty = (arr) => !arr.some(v => !!!v);

export { isUnique, areNotEmpty };