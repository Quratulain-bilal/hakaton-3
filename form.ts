document.addEventListener("DOMContentLoaded", () => {
  const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeOutput = document.getElementById(
    "resumeOutput"
  ) as HTMLDivElement;
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement;
  const downloadButton = document.getElementById(
    "downloadResume"
  ) as HTMLAnchorElement;
  const profilePicInput = document.getElementById(
    "profilePic"
  ) as HTMLInputElement;
  const imagePreview = document.getElementById(
    "imagePreview"
  ) as HTMLImageElement;

  // Handle profile picture preview
  profilePicInput.addEventListener("change", (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0]; // Safely access the file
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target?.result) {
          imagePreview.src = e.target.result as string; // Type assertion as string
          imagePreview.style.display = "block"; // Show the image preview
        }
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = "none"; // Hide the image preview if no file selected
    }
  });

  // Form submission event
  resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)
      .value;
    const downloadUrl = (
      document.getElementById("downloadUrl") as HTMLInputElement
    ).value;

    // Generate the resume output
    resumeOutput.innerHTML = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Download URL:</strong> <a href="${downloadUrl}" target="_blank">${downloadUrl}</a></p>
      <h3>Profile Picture:</h3>
      <img src="${imagePreview.src}" alt="Profile Picture" style="max-width: 200px; border: 2px solid black; border-radius: 8px;">
    `;

    // Show the download button
    downloadButton.href = downloadUrl;
    downloadButton.style.display = "block";
  });

  // Toggle skills section visibility
  let isSkillsVisible = true;
  toggleButton.addEventListener("click", () => {
    isSkillsVisible = !isSkillsVisible;
    const skillsSection = document.getElementById(
      "skillsSection"
    ) as HTMLFieldSetElement;
    if (isSkillsVisible) {
      skillsSection.style.display = "block";
      toggleButton.textContent = "Hide Skills Section";
    } else {
      skillsSection.style.display = "none";
      toggleButton.textContent = "Show Skills Section";
    }
  });
});
