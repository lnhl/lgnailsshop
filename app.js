( async ()=> {
    const container = document.querySelector('.comment')
    const data = await fetch('comment/comment.json')
    const response = await data.json()
    const parent = document.querySelector('.testimonial-bg')


    response.forEach(element => {
        const div = document.createElement('div')
        div.className = 'comment'
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



$(function() {
    // this initializes the dialog (and uses some common options that I do)
    $("#dialog").dialog({
      modal : true, 
      autoOpen: false,
    
      width:'600' ,
      height:'300',
      resizeable:false,
      buttons: {
        "Yes": function() {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
              };
              
              function success(pos) {
                var crd = pos.coords;

                fetch(`https://api.myptv.com/geocoding/v1/locations/by-position/${crd.latitude}/${crd.longitude}?language=en`, {
                method: "GET",
                headers: { apiKey: "ZWI4MmVjYzJjYWM1NDM4Mjk0ZmZjZTUzYmZjNjhhOTA6YTk0MGY0NDktZWEyYy00YmEzLTgzY2YtZDIzMzBlN2Y3OTE5", "Content-Type": "application/json" },})
                .then(response => response.json())
                .then(result => {
                    var form = document.forms[0];
                    var selectElement = form.querySelector('input[name="saddr"]')
                    selectElement.value = result.locations[0].formattedAddress
                    form.submit()
                    console.log(result.locations[0].formattedAddress);


                } );


              }
              
              function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
              }
              
              navigator.geolocation.getCurrentPosition(success, error, options);
              

          $( this ).dialog( "close" );
        },
        'No': function() {
            var form = document.forms[0];
            form.submit()
          $( this ).dialog( "close" );
        }
      }
    });
  
    // next add the onclick handler
    $("#get_dir").click(function() {
      $("#dialog").dialog("open");
      return false;
    });
  });

window.addEventListener('load',()=>{
  document.body.scrollTop = 0
  const nav = document.querySelector('.navbar')
  const pos = nav.getBoundingClientRect()
  document.body.addEventListener('scroll',()=>{
    if(document.body.scrollTop > pos.top){
      nav.style.position = 'fixed'
      nav.style.top = 0
      nav.style.width = '100%'
      nav.style.zIndex = '101'
    }
    else{
      nav.style.position = 'static'
      nav.style.top = pos
      nav.style.width = '100%'
      nav.style.zIndex = '101'
    }
  
  
  })
})

$(document).ready(function(){
  window.location.hash = ''

// Add smooth scrolling 
$("#navbar a").on('click', function(event) {
if (this.hash !== "") {

event.preventDefault();
const hash = this.hash;


$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800,function(){
window.location.hash = hash;}
);
} 
});
});
