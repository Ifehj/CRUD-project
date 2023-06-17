let Users = require("../user.json");
const { v4: uuidv4 } = require('uuid');

const UserOperations = {

	 CreateUser: (req, res) => {
		const user = req.body;
		const userId = uuidv4();
		const userWithId = {...user, id: userId}
		Users.push(userWithId)
		console.log(Users);
		res.send(`User with the name ${user.firstname} added to the database !`);
	},

	GetUsers: (req, res) => {
		res.send(Users);
	},

	GetUser: (req, res) => {
		const { id } = req.params;
		const FetchUser = Users.find((User) => User.id === id);
		res.send(FetchUser);
	},

	DeleteUser: (req, res) => {
		const { id } = req.params;
	
		Users = Users.filter((User) => User.id !== id );
	
		res.send(`User with the id ${id} deleted`);
	},

	UpdateUser: (req, res) => {
		const { id } = req.params;
		const {firstname, lastname, age} = req.body
		Users = Users.find((User) => User.id == id );
		if (firstname) Users.firstname = firstname;
		if (lastname) Users.lastname = lastname;
		if (age) Users.age = age;
		res.send(`User with the id ${id} has been updated`)
	}

}

module.exports = UserOperations

