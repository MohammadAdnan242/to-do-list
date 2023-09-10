const item = document.querySelector("#item") ;
const todoBox = document.querySelector("#to-do-box");

item.addEventListener (
"keyup" ,
function(event) {
   if(event.key == "Enter") {
    console.log(event)
   addToDo(this.value) 
   this.value=""
    ;
  }
}    
)

function addToDo(item) {
  const listItem = document.createElement("li");
  listItem.innerHTML=`${item} <i class="fa-solid fa-xmark"></i>`;

  listItem.addEventListener(
    "click" ,
    function(){
      this.classList.toggle("done") ;
    } 
    )

todoBox.appendChild(listItem);
} 




