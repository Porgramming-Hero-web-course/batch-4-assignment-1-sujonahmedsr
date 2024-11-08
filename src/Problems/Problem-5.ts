function getProperty <T, X extends keyof T> (value: T, property: X): T[X]{
    return value[property]
}

// const person = { name: "Alice", age: 30, email: 'shofiqul islam sujon' };

// console.log(getProperty(person, 'age'));
