const yacine = {
    firstName: 'Yacine',
    lastName: 'Khouini',
    birthday: (2021 - 2001),
    job: 'Student',
    friends: ['Baha', 'Aziz', 'Baha2'],
    calAge: function() {
        this.age = 2021 - this.birthday;
        return this.age;
    },
    hasDriverLicense: false,
    getSummary: function() {
        return `${this.firstName} is a ${this.calAge()} old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver license`
    },
};
console.log(yacine.getSummary());