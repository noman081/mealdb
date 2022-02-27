const student = {
    name: 'Noman',
    id: 81,
    subject: ['math', 'english', 'science'],
    friends: {
        bestFriend: 'Sharif',
        closeFriend: 'Habib',
        bff: 'Osman'
    },
    isMarried: false,

    greetMessage: function () {
        console.log('Good morning!!', this.name);
    }
}
student.greetMessage();
const details = `Hello. I am ${student.name}. Today I will talk about my friends. I have so many friends. 
${student.friends.bestFriend} is my bestfriend who always there for me. My favourite subject is ${student.subject[2]}.`;
console.log(details);

// 6
const { name, id, friends } = student;
console.log(name, id, friends);