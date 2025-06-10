fetch("https://api.example.com/courses")
    .then(response => response.json())
    .then(data => {
        let courses = document.getElementById("courses");
        data.forEach(course => {
            let item = document.createElement("div");
            item.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
            courses.appendChild(item);
        });
    });
