enum ROLE {ADMIN, READ_ONLY, AUTHOR}; 
// enum assigns labels to numbers
const person  = {
    name: 'Tyler',
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.ADMIN
    // tupal - fixed length arrag: must have a numerica identifiey with a string identifier human readable
};

let favoriteActivities: string[];
favoriteActivities=['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === ROLE.ADMIN) {
    console.log('is ADMIN');
    
}