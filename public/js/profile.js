const profileFileInput = document.querySelector(".input-profile-photo-file");
const profileLinkInput = document.querySelector(".input-profile-photo-url");
const previewProfilePhoto = document.querySelector(".preview-profile-photo");
profileFileInput.onchange = () => {
  const [file] = profileFileInput.files;
  if (file) {
    previewProfilePhoto.src = URL.createObjectURL(file);
  }
};

profileLinkInput.oninput = () => {
  previewProfilePhoto.src = profileLinkInput?.value || "/assets/images/profile-img.jpeg";
};

const coverFileInput = document.querySelector(".input-cover-photo-file");
const coverLinkInput = document.querySelector(".input-cover-photo-url");
const previewCoverPhoto = document.querySelector(".preview-cover-photo");

coverFileInput.onchange = () => {
  const [file] = coverFileInput.files;
  if (file) {
    previewCoverPhoto.src = URL.createObjectURL(file);
  }
};

coverLinkInput.oninput = () => {
  previewCoverPhoto.src = coverLinkInput?.value || "/assets/images/profile-img.jpeg";
};

const addEventListener = () => {
  document.querySelector(".input-skill").addEventListener("keydown", (evnt) => {
    const inputSkillDom = document.querySelector(".input-skill");
    const htmlInputSkill = `
      <input type="text" name="skills" value = "${inputSkillDom.value}" class="form-control input-skill d-inline"/>
    `;
    if (evnt.key === "Enter") {
      document.querySelector(".input-skill-container").insertAdjacentHTML("beforeend", htmlInputSkill);
      inputSkillDom.value = "";
      evnt.preventDefault();
    }
  });
};

const init = () => {
  addEventListener();
};
init();
