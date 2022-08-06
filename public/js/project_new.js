const onAddPhotoClick = (evnt) => {
  evnt.preventDefault();
  const addPhotoDom = document.querySelector(".add-photo");
  const htmlInputAddPhoto = `
    <input type="text" name="photos" id="photo" class="form-control mt-3" placeholder="Photo Url"/>
  `;
  document.querySelector(".add-photo-container").insertAdjacentHTML("beforeend", htmlInputAddPhoto);
  addPhotoDom.value = "";
};

const onSkillInputEnter = (evnt) => {
  const inputSkillDom = document.querySelector(".input-skill");
  const htmlInputSkill = `
    <input type="text" name="skills" value = "${inputSkillDom.value}" class="form-control input-skill d-inline"/>
  `;
  if (evnt.key === "Enter") {
    document.querySelector(".input-skill-container").insertAdjacentHTML("beforeend", htmlInputSkill);
    inputSkillDom.value = "";
    evnt.preventDefault();
  }
};

const addEventListener = () => {
  document.querySelector(".add-photo").addEventListener("click", onAddPhotoClick);
  document.querySelector(".input-skill").addEventListener("keydown", onSkillInputEnter);
};

const init = () => {
  addEventListener();
};
init();
