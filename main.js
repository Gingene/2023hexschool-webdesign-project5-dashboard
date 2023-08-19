import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// panelActive();

if (getCurrentFileName() === "index.html") {
  editModeF();
}

function panelActive() {
  const panelList = document.querySelector("#panelList");
  if (getCurrentFileName() === "index.html") {
    panelList.children[2].firstElementChild.classList.add("link-success");
    panelList.children[2].firstElementChild.classList.remove("link-dark");
    panelList.children[2].classList.add("border-start");
    panelList.children[2].classList.add("border-4");
    panelList.children[2].classList.add("border-success");
    panelList.children[4].firstElementChild.classList.add("link-dark");
  }
  if (getCurrentFileName() === "Admin.html") {
    panelList.children[4].firstElementChild.classList.add("link-success");
    panelList.children[4].firstElementChild.classList.remove("link-dark");
    panelList.children[4].classList.add("border-start");
    panelList.children[4].classList.add("border-4");
    panelList.children[4].classList.add("border-success");
    panelList.children[2].firstElementChild.classList.add("link-dark");
  }
}

function getCurrentFileName() {
  let path = window.location.pathname;
  let fileName = path.split("/").pop();
  return fileName;
}

function editModeF() {
  const editMode = document.querySelector("#editMode");
  const watchMode = document.querySelector("#watchMode");
  const watchFooter = document.querySelector("#watchFooter");
  const editBtn = document.querySelector("#editBtn");
  const cancelEdit = document.querySelector("#cancelEdit");

  editBtn.addEventListener("click", () => {
    editMode.classList.remove("d-none");
    watchMode.classList.add("d-none");
    watchFooter.classList.add("d-none");
  });

  cancelEdit.addEventListener("click", () => {
    editMode.classList.add("d-none");
    watchMode.classList.remove("d-none");
    watchFooter.classList.remove("d-none");
  });
}
