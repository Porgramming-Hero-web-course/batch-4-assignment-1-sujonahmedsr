interface Profile {
    name: string,
    age: number,
    email: string
}

function updateProfile (profile: Profile, update: Partial<Profile>){
    return {...profile, ...update}
}

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

// console.log(updateProfile(myProfile, {email: 'sujon@example.com'}));
