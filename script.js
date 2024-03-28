const submitBtn = document.getElementById("add");
const task = document.getElementById("task");
const showError = document.getElementsByClassName("error-input");
const showlist = document.querySelector(".show-list");
const taskItem = document.querySelectorAll("li");

submitBtn.addEventListener("click", function () {
  let taskValue = task.value;
  task.style.border = "1px solid #ccc";
  showError[0].classList.add("hidden");
  if (taskValue.trim() === "") {
    task.style.border = "1px solid red";
    showError[0].classList.remove("hidden");
  } else {
    task.value = "";
    showlist.innerHTML += `<li> 
        <span>${taskValue}</span> 
        <div class="close" onclick="deleteTask(this)">x</div>
        </li>`;
  }
});

const ul = document.querySelector("ul");
ul.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

function deleteTask(element) {
  element.parentElement.remove();
}

function deleteAll() {
  const list = document.querySelectorAll("li");
  list.forEach((item) => {
    item.remove();
  });
}
