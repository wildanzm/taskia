document.addEventListener("DOMContentLoaded", () => {
	const userForm = document.getElementById("userForm");
	const userManager = new User();

	userForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const userData = {
			username: document.getElementById("username").value,
		};

		const result = userManager.saveUser(userData);

		if (result.success) {
			Swal.fire({
				icon: "success",
				title: "Account has been Created",
				timer: 2000,
			});
			return (window.location.href = "../index.html");
		}
	});
});
