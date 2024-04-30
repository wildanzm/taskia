document.addEventListener("DOMContentLoaded", () => {
	const taskForm = document.getElementById("taskForm");
	const taskManager = new Task();

	taskForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const taskData = {
			taskName: document.getElementById("taskName").value,
			taskPriority: document.getElementById("taskPriority").value,
			createdAt: new Date().toLocaleString("id-ID", {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}),
		};

		const result = taskManager.saveTask(taskData);

		if (result.success) {
			Swal.fire({
				icon: "success",
				title: "Task Added Successfully",
				timer: 2000,
			});
			return (window.location.href = "../tasks.html");
		}
	});
});
