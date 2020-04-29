
 var listElement = document.querySelector("#app ul[id=list]");
 console.log(listElement);
 var InputText = document.querySelector("#app .input");
 var btnElement = document.querySelector("#app #btnTodo");
 var notification = document.querySelector("#app .p1");
 btnElement.onclick = addTodo;


 var todos= JSON.parse(localStorage.getItem("list_todos")) ||[];

 renderTodos();
 
      function addTodo()
      {
        var text = InputText.value;
        if(text!="") 
        { 
          todos.push(text);
          InputText.value="";
          renderTodos();
          saveToStorage();

        }

       else notification.innerHTML ="Please Enter With a To Do";

      }

      function deleteTodo(pos)
      {
        todos.splice(pos,1)
        renderTodos();
        saveToStorage();
      }

      function renderTodos()
      {

        listElement.innerHTML="";
        

        for( todo of todos)
        {
          //creating a new 'li' with an array item
          var TodoElement = document.createElement("li"); 
          var TodoText = document.createTextNode(todo);

          //creating the new 'a' with text "delete"
          var linkElement = document.createElement("a");
          var linkText = document.createTextNode("Delete");
          
          //enabling a function to remove a selected item of todo array
          var pos = todos.indexOf(todo);
          linkElement.setAttribute('onclick','deleteTodo('+pos+')')

          //settling a new link changing attibute
          linkElement.setAttribute("href","#");
          linkElement.appendChild(linkText);
          //putting into linkElement the text "Delete"
         
          
          //appending the child created into ul
          TodoElement.appendChild(TodoText);//inserting text into TodoElement
          
          TodoElement.style.margin="10px";
         
         
          //putting into Todo the "delete" link
          TodoElement.appendChild(linkElement);
          
          listElement.appendChild(TodoElement); //ul//
          

          InputText.value="";
          notification.innerHTML ="";
      
        }
      }

      function saveToStorage()
      {
                            //name that will de store up and obj
        localStorage.setItem('list_todos',JSON.stringify(todos));
                                            //parsing Js to JSON
      }

      