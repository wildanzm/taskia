document.addEventListener("DOMContentLoaded", () => {
	const userForm = document.getElementById("userForm");
	const userManager = new User();

	userForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const usernameByInput = document.getElementById("username").value;

		const result = userManager.signInUser(usernameByInput);

		if (result.success) {
			localStorage.setItem("usernameLoggedIn", usernameByInput);
			Swal.fire({
				icon: 'success',
				title: 'Login Successfully',
				timer: 1500,
			})
			return (window.location.href = "../tasks.html");
		} else {
			Swal.fire({
				icon: "error",
				title: "Oopps....",
				text: "Please check your username",
				timer: 2000,
			});
		}
	});
});
