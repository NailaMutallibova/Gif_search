
$('.add').on('click', function(){
    var text=document.querySelector('input');
    var img =document.createElement('img');
    var div=document.querySelector('.gif_part')
    text=text.value

    $.ajax({
        method:"GET",
        url:`https://api.giphy.com/v1/gifs/random?api_key=bQC4x7G5ORdXQlnN9wNP5QN114oR4T6p&tag=${text}&rating=g`
    }).then(function(response){
        img.setAttribute('src', response.data.images.fixed_height.url)
        img.style.width="120px"
        img.style.height="120px"
        div.append(img)
        $('.remove').on('click',function(){
            img.remove()

        })

        

    }).catch(function(err){
        console.log("There is a error", err)
    })
       
})


