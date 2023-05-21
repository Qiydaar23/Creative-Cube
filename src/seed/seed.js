export function seedDatabase(firebase) {
    const users = [
    {
        userId: 'Zd9GTNJYAqWsRpiVlZPaH6Ai4sJ2',
        username: 'qasir',
        fullName: 'Qasir Williams',
        emailAddress: 'qasir@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
    },
    {
    userId: '2',
    username: 'raphael',
    fullName: 'Raffaello Sanzio da Urbino',
    emailAddress: '',
    following: [],
    followers: ['Zd9GTNJYAqWsRpiVlZPaH6Ai4sJ2'],
    dateCreated: Date.now()
}
    ]};
