function getProperty <T, X extends keyof T> (value: T, property: X){
    return value[property]
}

const person = { name: "Alice", age: 30, email: 'shofiqul islam sujon' };

// console.log(getProperty(person, 'name'));
