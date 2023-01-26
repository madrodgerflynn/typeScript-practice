var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE[ROLE["AUTHOR"] = 2] = "AUTHOR";
})(ROLE || (ROLE = {}));
;
// enum assigns labels to numbers
var person = {
    name: 'Tyler',
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.ADMIN
    // tupal - fixed length arrag: must have a numerica identifiey with a string identifier human readable
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === ROLE.ADMIN) {
    console.log('is ADMIN');
}
