const newbtn = document.getElementById('new')
const bg = ["#ff3381","#93f","#f56","#eeff00","#003cff"]
const fg=["#111","#fff","#111","#fff","#111","#fff"]
function colorchange(){
    let limit=bg.length
    let index=Math.floor(Math.random()*limit)
    newbtn.style.background = bg[index]
    newbtn.style.color=fg[index]
}