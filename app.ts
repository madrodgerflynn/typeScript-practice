enum ROLE {ADMIN, READ_ONLY, AUTHOR}; 
const person  = {
    name: 'Tyler',
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.ADMIN
    // tupal - fixed length arrag: must have a numerica identifiey with a string identifier human readable
};

let favoriteActivities: string[];
console.log(person.name);
