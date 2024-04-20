class User {
	constructor() {
		this.users = this.getUsers() || [];
	}

	saveUser(userData) {
		const newUser = {
			id: Date.now(),
			...userData,
		};

		this.users.push(newUser);
		localStorage.setItem('users', JSON.stringify(this.users));

		return window.location = '../signin.html'

      console.log(userData)
	}

	getUsers() {
		return JSON.parse(localStorage.getItem('users')) || [];
	}
}