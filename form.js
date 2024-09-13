document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var toggleButton = document.getElementById("toggleSkills");
    var downloadButton = document.getElementById("downloadResume");
    var profilePicInput = document.getElementById("profilePic");
    var imagePreview = document.getElementById("imagePreview");
    // Handle profile picture preview
    profilePicInput.addEventListener("change", function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0]; // Safely access the file
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    imagePreview.src = e.target.result; 
                    imagePreview.style.display = "block"; 
                }
            };
            reader.readAsDataURL(file);
        }
        else {
            imagePreview.style.display = "none"; 
        }
    });
    // Form submission event
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills")
            .value;
        var downloadUrl = document.getElementById("downloadUrl").value;
        // Generate the resume output
        resumeOutput.innerHTML = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(name, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Education:</strong> ").concat(education, "</p>\n      <p><strong>Experience:</strong> ").concat(experience, "</p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n      <p><strong>Download URL:</strong> <a href=\"").concat(downloadUrl, "\" target=\"_blank\">").concat(downloadUrl, "</a></p>\n      <h3>Profile Picture:</h3>\n      <img src=\"").concat(imagePreview.src, "\" alt=\"Profile Picture\" style=\"max-width: 200px; border: 2px solid black; border-radius: 8px;\">\n    ");
        // Show the download button
        downloadButton.href = downloadUrl;
        downloadButton.style.display = "block";
    });
    // Toggle skills section visibility
    var isSkillsVisible = true;
    toggleButton.addEventListener("click", function () {
        isSkillsVisible = !isSkillsVisible;
        var skillsSection = document.getElementById("skillsSection");
        if (isSkillsVisible) {
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills Section";
        }
        else {
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show Skills Section";
        }
    });
});
