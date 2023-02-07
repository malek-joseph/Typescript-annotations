// All what we're doing here is to avoid the array with type "any", because it can't be expected.

// Flexible types arrays >> This is how we explicitly annotate the types of mixed arrays.
const importantDates: (Date | string)[] = [new Date()]
// And that's how we can use a statement like below
importantDates.push('sdfsdf')