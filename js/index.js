/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

$(document).ready(function() {
$('select').material_select();  //carga un elemento slider
});

/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();

$("#mostrarTodos").on("click",function(){

$.ajax({
  url: './php/getdata.php',
  success: function(data){
    var obj = JSON.parse(data);  //data trae el json desde el servidor y puede ser cualquier palabra
    mostrarTodos(obj)
  },
  error: function(){
    alert("error al buscar los datos");
    } //fin de function error
  });//fin de ajax
})//fin de funcionalidad boton

function mostrarTodos(arr){
$(".div-card").remove()
for (var i = 0; i<arr.length; i++){
$(".colContenido").append("<div class='card row div-card'>"+
"<div class='col m5 l5'>"+
"<img src='img/home.jpg' class='imagen col m12 l12'>"+
"</div>"+
"<div class='descripcion col m7 l7'>"+
"<p><b>Descripcion:</b> "+arr[i].Direccion+"</p>"+
"<p><b>Ciudad:</b> "+arr[i].Ciudad+"</p>"+
"<p><b>Telefono:</b> "+arr[i].Telefono+"</p>"+
"<p><b>Codigo Postal:</b> "+arr[i].Codigo_Postal+"</p>"+
"<p><b>Tipo:</b> "+arr[i].Tipo+"</p>"+
"<p class='precio'><b>Precio:</b> "+arr[i].Precio+"</p>"+
"</div>"+
"</div>")
}
$(".descripcion > p").css("white-space", "nowrap");
$(".imagen").css("height", $(".descripcion").height());
$(".div-card").css("width", "100%")
$(".precio").css("color", "#c9ae20")
}
