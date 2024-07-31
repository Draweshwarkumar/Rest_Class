 const {faker} = require('@faker-js/faker');

const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   database: "delta_app",
})

 let createRandomuser = () => {
    return{
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()
    };  
 }
 console.log(createRandomuser());