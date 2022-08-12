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
