 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
 
const adduserbutton = document.getElementById('adduserbutton')
adduserbutton.addEventListener('click' , ()=>{document.querySelector('.add-user-modal').classList.add
  ('show')
  document.querySelector('.add-user-modal-back').classList.remove
  ('dis-none')
})


document.querySelector('.add-user-modal-back').addEventListener('click', (e)=>{document.querySelector
  ('.add-user-modal').classList.remove('show')
  e.target.classList.add('dis-none')
})




 });