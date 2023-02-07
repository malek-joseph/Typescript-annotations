let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);

// Type alias
type Tuple = [string, boolean, string];

const NewTuple: Tuple = ['brown', true, 'red'];
const another: Tuple = ['green', false, 'white'];

// Why use Tuples
