
 var listElement = document.querySelector("#app ul[id=list]");
 var text = InputText.value;
 var InputText = document.querySelector("#app .input");
 var btnElement = document.querySelector("#app #btnTodo");
 var notification = document.querySelector("#app .p1");
 var todos=[
     "Learn Js",
     "Learn Spring",
     "1",
     "2"
    ];
  renderTodos();


 btnElement.onclick = //addTodo
  function(text)
      {
       
        if(text!="") { 
        todos.push(text);
       renderTodos();
       
       /* Instead of this solution we can use the Function
          renderTodos() to  create new 'li' Elements and show at the 'ul'

        TodoElement = document.createElement("li");
        TodoText= document.createTextNode(text);
        
        TodoElement.appendChild(TodoText);
        listElement.appendChild(TodoElement);
        notification.innerHTML ="";
        */
        }

       else notification.innerHTML ="Please Enter With a To Do";

      }


      function renderTodos()
      {

        for( todo of todos)
        {
          

          var TodoElement = document.createElement("li"); 
          var TodoText = document.createTextNode(todo);
          TodoElement.appendChild(TodoText);
          listElement.appendChild(TodoElement);
          

        }
      }