## The significance of union and intersection types in Typescript.

In typescript, union type and intersection types are powerfull tools.

## Union type ( | )
A union type allows a variable to be any one of multiple types. It is define using the ( | ) this operator between the types.

### Union Type Examples:

type students = {
    name: string,
    id: string | number
}
type teachers = {
    name: string,
    id: string | number,
    sub: string
}

type studentOrTeacher = students | teachers



In this example there are two types called student and teacher and key is name and id.The name will be a string and the id will be either a string or a number. In this type studentOrTeacher it any one of the student and teacher will be selected




## Intersection type ( | )
An Intersection type allows a variable to be combination of multiple types.s. It is define using the ( & ) this operator between the types.

### Intersection Type Examples:

type Person {
  name: string;
  age: number;
}

type Contact {
  email: string;
  phone: string;
}

type PersonWithContact = Person & Contact;

Intersection type will convert two types into one type by combining them PersonWithContact convert it into one type based on person and contact.


