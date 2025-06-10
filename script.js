document.addEventListener("DOMContentLoaded", () => {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            let courseList = document.getElementById("course-list");
            data.forEach(course => {
                let courseItem = document.createElement("div");
                courseItem.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
                courseItem.classList.add("course-box");
                courseList.appendChild(courseItem);
            });
        })
        .catch(error => console.error("Ошибка загрузки курсов:", error));
});
