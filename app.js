var after=''
function fetchmyimage(){
    colorchange()
    let parentdiv = document.createElement('div')
    parentdiv.id='post'
   fetch('https://www.reddit.com/r/pics.json')
    .then(response => response.json())
    .then(body => {
        for(let i=0; i<body.data.children.length; i++){
            if(body.data.children[i].data.post_hint==="image"){
                let div = document.createElement('div')
                let h4 = document.createElement('h4')
                let h2 = document.createElement('h2')
                let image = document.createElement('img')
                image.src = body.data.children[i].data.url_overridden_by_dest
                h4.textContent = body.data.children[i].data.title
                h2.textContent = body.data.children[i].data.author
                div.appendChild(h2)
                div.appendChild(h4)
                div.appendChild(image)
                parentdiv.appendChild(div)


            }
        }
        document.body.appendChild(parentdiv)
        
    });

}