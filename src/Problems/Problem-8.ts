function validateKeys <T extends object>(obj: T, keys: (keyof T)[]) : boolean{
    let keyInObj = keys.every(key => key in obj)
    return keyInObj
}

// const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person1, ["name", "age", 'email']));
