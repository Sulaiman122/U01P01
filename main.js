
let galleryList = [
    {title:'Library', img:"https://picsum.photos/350/250?image=444", desc:'Architect Design'},
    {title:'Library', img:"https://picsum.photos/350/250?image=444", desc:'Architect Design'},
    {title:'Library', img:"https://picsum.photos/350/250?image=444", desc:'Architect Design'},
    {title:'Library', img:"https://picsum.photos/350/250?image=444", desc:'Architect Design'},
    {title:'Library', img:"https://picsum.photos/350/250?image=444", desc:'Architect Design'},
    {title:'Library', img:"https://picsum.photos/350/250?image=444", desc:'Architect Design'}   
]

const render = () => {
    $(".gallery-image").html("");
    galleryList.forEach((item) => {
      $(".gallery-image").append(`<div class="img-box">
      <img src="${item.img}" alt="gallery image" />
        <div class="text">
          <p><b>${item.title}</b></p>
        </div>
    </div>`); 

    });
    $('.img-box').click(()=>{
        $('.page1').hide();
        $('.container').removeClass('container');
        $('.page2').append(`<div class="container2">
        <div class="descTitle">${item.title} Mobile</div>
        <div class="desc">${item.desc}</div>
        <img class="descImg" src="${item.img}" alt="">
        </div>`)
    })
  };


  render();