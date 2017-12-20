var form = document.querySelector("#todoForm");
var input = document.querySelector("#newTodo");
var list = document.querySelector("#todoList");

form.addEventListener("submit", addTodo);

function addTodo(event) {
  event.preventDefault();
  var inputArr = input.value.split(',');
  inputArr.forEach(function(item) {
    if (item.trim()) {
      if (document.querySelector("#emptyList")) {
        document.querySelector("#emptyList").remove();
      }
      //create the elements for each task
      var li = document.createElement("li");
      var label = document.createElement("label");
      var checkbox = document.createElement("input");
      var span = document.createElement("span");
      //setup the checkbox and span content
      checkbox.setAttribute("type", "checkbox");
      span.textContent = item.trim();
      // append the elements to the DOM
      label.appendChild(checkbox);
      label.appendChild(span);
      li.appendChild(label);
      list.appendChild(li);
      input.value = "";
      updateCounters();
    }
  });
}

list.addEventListener("change", updateCounters);

function updateCounters() {
  var total = list.children.length;
  document.querySelector("#total").textContent = total;
  var completed = document.querySelectorAll("input:checked").length;
  document.querySelector("#completed").textContent = completed;
  document.querySelector("#remaining").textContent = total - completed;
}
