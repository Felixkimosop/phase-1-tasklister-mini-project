document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector('form')
  form.addEventListener("submit",function (e){
    e.preventDefault();
   
    addList(e.target.new.value)
    form.reset()
  })
})
 
function addList(list){
let li = document.createElement('li')

let btnn = document.createElement('button')
btnn.addEventListener('click',letDelete)
btnn.textContent = '  delete'

li.textContent = `${list}  `
li.appendChild(btnn)
document.querySelector('#tasks').appendChild(li)

}

function letDelete(e){

  e.target.parentNode.remove()
}