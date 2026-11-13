
function showMessage() {
    alert("Welcome to My Blog Application!");
}


function loginUser(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email && password) {
        alert("Login form submitted successfully!");
    }
}


function registerUser(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful! Welcome " + name);
}


function createBlog(event) {
    event.preventDefault();

    var title = document.getElementById("blogTitle").value;
    var category = document.getElementById("category").value;
    var description = document.getElementById("blogDescription").value;

    var blog = {
        title: title,
        category: category,
        description: description
    };

    var blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.push(blog);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Published Successfully!");

    window.location.href = "dashboard.html";
}
