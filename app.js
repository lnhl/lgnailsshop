( async ()=> {
    const container = document.querySelector('.comment')
    const data = await fetch('comment/comment.json')
    const response = await data.json()
    const parent = document.querySelector('.testimonial-bg')


    response.forEach(element => {
        const div = document.createElement('div')
        div.className = 'comment'
        console.log(element);
        const left_cmt = document.createElement('div')
        left_cmt.className = 'comment-left'
        const right_cmt = document.createElement('div')
        right_cmt.className = 'comment-right'
        const img = document.createElement('img')
        img.setAttribute('src',element.img)
        const p_name = document.createElement('p')
        p_name.textContent = `${element.Name}`
        const p_cmt = document.createElement('p')
        p_cmt.textContent =  `${element.comment}`
        const span = document.createElement('span')
        const start = '<i class="bi bi-star-fill"></i>'
        span.innerHTML = start.repeat(element.star)
        left_cmt.appendChild(img)
        left_cmt.appendChild(p_name)
        left_cmt.appendChild(span)
        right_cmt.appendChild(p_cmt)
        div.appendChild(left_cmt)
        div.appendChild(right_cmt)
        parent.appendChild(div)

        
        
    });




})()