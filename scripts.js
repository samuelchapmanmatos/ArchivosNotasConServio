$("#genInfo").click(function(event) {
  event.preventDefault();
alert("hola mungo");
  /*$.ajax({
  url: "http://localhost:8081/savearchivos",
  type: 'POST',
  dataType: 'json',
  data: {
     "datetime": 'Fecha07024202232',
    "ruta": 'C:\\Users\\Dell\\Downloads\\',
    "information": 'Este es el texto de prueba para ver que debo enviar'
},
contentType: 'application/json'
, success: function(response){
    console.log(response);
  }

});
  const options = {
    method: 'POST',
    data: {
     "datetime": 'Fecha07024202232',
    "ruta": 'C:\\Users\\Dell\\Downloads\\',
    "information": 'Este es el texto de prueba para ver que debo enviar'
  }
  };*/

  


/*fetch('http://localhost:8081/savearchivos', {
            method: 'POST',
            data: { 
    "datetime": 'Fecha07024202232',
    "ruta": 'C:\\Users\\Dell\\Downloads\\',
    "information": 'Este es el texto de prueba para ver que debo enviar'
}),
            headers: {
                "Content-type": "application/json"
            }})
      .then(response => response.json())
      .then(json => console.log(json));*/



});


function saveTask(e) {
  
	let tasks = JSON.parse(localStorage.getItem('tasks'));
    // crea un nuevo objeto `Date`
  var today = new Date();
   
  // obtener la fecha y la hora
  var now = today.toLocaleString();
  let title=now;
  let description = document.getElementById('description').value;
  
  console.log(description);

  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') == null) {    
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  
  $("#description").val("");
  document.getElementById('description').innerHTML="";

  

getTasks();
 //document.getElementById('formTask').reset();
  e.preventDefault();
}



function deleteTask(e) {
  let title = document.getElementById('title').value;
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
      document.getElementById('description').innerHTML="";
      $("#description").val("");
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  $("#description").val("");
  document.getElementById('description').innerHTML="";
  getTasks();
  //document.getElementById('formTask').reset();
  e.preventDefault();
}

function limpiarFormulario(e) { 
  $("#description").val("");
  document.getElementById('description').innerHTML="";
  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks'); 
  tasksView.innerHTML = `<li class="nav-item" style="margin-right: 0rem;">
      <a class="nav-link text-secondary" style="padding: 3px;font-size: 11px;" aria-current="page" href="#">Nueva</a>
    </li>`;
  if (tasks.length<=10) {
  	
  	for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML +=`<li class="nav-item" style="margin-right: 0rem;">
      <a class="nav-link text-secondary" style="padding: 3px;font-size: 11px;"  onclick="mostrarNota('${title}')" id="archivo"${i}" aria-current="page" href="#">${title}</a>
    </li>`;
  }
  }
  
}

function mostrarNota(title){
   let tasks = JSON.parse(localStorage.getItem('tasks'));
      for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].title == title) {
          $("#description").val(tasks[i].description);
          document.getElementById('description').innerHTML=tasks[i].description;
        }
      }
  console.log(description);
}

function clearData(e){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');  
  if (tasks.length<=11) {
    tasksView.innerHTML = `<li class="nav-item" style="margin-right: 0rem;">
      <a class="nav-link text-secondary" style="padding: 3px;font-size: 11px;" aria-current="page" href="#">Nueva</a>
    </li>`;
    for(let i = 11; i > tasks.length; i--) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    deleteTask(title);
   

  }
  }else {
    localStorage.clear();


  }
  
}

clearData();
      