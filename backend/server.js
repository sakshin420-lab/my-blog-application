
const express = require("express");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("My Blog Backend Server is Running!");
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        message: "My Blog API is Working Successfully!"
    });
});



const blogs = [
    {
        id: 1,
        title: "Introduction to Web Development",
        category: "Technology",
        description: "Learn HTML, CSS and JavaScript."
    },
    {
        id: 2,
        title: "Importance of Education",
        category: "Education",
        description: "Education helps us build a better future."
    }
];

// Get All Blogs API
app.get("/api/blogs", (req, res) => {
    res.json(blogs);
});

app.post("/api/blogs", (req, res) => {
    const { title, category, description } = req.body;

    const newBlog = {
        id: blogs.length + 1,
        title,
        category,
        description
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog created successfully!",
        blog: newBlog
    });
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
