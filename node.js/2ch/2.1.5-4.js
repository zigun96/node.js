const array = ['nodejs', {}, 10, true];
const [node, obj, bool] = array;
console.log({node, obj, bool}); // {node: 'nodejs', obj: {...}, bool: true}
                                // 순서대로 그리고 마지막은 항상 마지막
