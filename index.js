var inputBox = document.getElementById("input-box");
var addButton = document.getElementById("add-button");
var list = document.getElementById("list");

addButton.addEventListener("click", function() {
      if (inputBox.value === "") {
        alert("Please enter a to-do item.");
      } else {
        var listItem = document.createElement("li");
        var itemText = document.createTextNode(inputBox.value);
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("click", function() {
          if (this.checked) {
            listItem.classList.add("completed");
          } else {
            listItem.classList.remove("completed");
          }
        });
        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener("click", function() {
          list.removeChild(listItem);
        });
				listItem.appendChild(checkBox);
        listItem.appendChild(itemText);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        inputBox.value = "";
      }
      });

			 inputBox.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        addButton.click();
      }
    });
