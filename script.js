let pls = document.getElementById('plus')
let mns = document.getElementById('minus')
let p = document.getElementById('p')




let sumn = 0

pls.addEventListener('click', function() {
    sumn++;
    p.innerHTML = sumn;
    
})

mns.addEventListener('click', function() {
    sumn--;
    p.innerHTML = sumn;
    
})




