{
	/* <script> */
}
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

showPasswordCheckbox.addEventListener("change", function () {
	const isChecked = this.checked;
	if (isChecked) {
		passwordInput.type = "text"; // Show password
	} else {
		passwordInput.type = "password"; // Hide password
	}
});
{
	/* </script> */
}
