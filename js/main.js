function mySubmitFunction(e){e.preventDefault();return!1}
jQuery(document).ready(function(){jQuery('#button_search').click(function(){var value_key=jQuery('#text_search').val();jQuery('#button_next').css({'display':'block',});const container=document.querySelector(".container");container.innerHTML='';function getPhotos(images){images.map(image=>{var cardTag=`<div class="card_img">
                            <a class="elem" href="${image.src.landscape}" data-lcl-author="${image.photographer}" data-lcl-thumb="${image.src.landscape}">
                                    <span style="background-image: url(${image.src.tiny});"></span>
                            </a>
                        </div>`;container.innerHTML+=cardTag})}
fetch("https://api.pexels.com/v1/search/?page=1&per_page=80&query="+value_key,{headers:{Authorization:"563492ad6f917000010000011da97604116d4926aa3bd66d8e472c57"}}).then(resp=>{return resp.json()}).then(data=>{getPhotos(data.photos);var link_next=data.next_page;document.getElementById('button_next').setAttribute('link-next',link_next)})});$('#button_next').click(function(){var link_next=document.getElementById('button_next').getAttribute('link-next');if(link_next=='undefined'){jQuery('#button_next').css({'display':'none',})}
fetch(link_next,{headers:{Authorization:"563492ad6f917000010000011da97604116d4926aa3bd66d8e472c57"}}).then(resp=>{return resp.json()}).then(data=>{getPhotos(data.photos);var link_next=data.next_page;document.getElementById('button_next').setAttribute('link-next',link_next)})})
const container=document.querySelector(".container");container.innerHTML='';function getPhotos(images){images.map(image=>{var cardTag=`<div class="card_img">
                            <a class="elem" href="${image.src.landscape}" data-lcl-author="${image.photographer}" data-lcl-thumb="${image.src.landscape}">
                                    <span style="background-image: url(${image.src.tiny});"></span>
                            </a>
                        </div>`;container.innerHTML+=cardTag})}
fetch("https://api.pexels.com/v1/search/?page=1&per_page=80&query=vietnam",{headers:{Authorization:"563492ad6f917000010000011da97604116d4926aa3bd66d8e472c57"}}).then(resp=>{return resp.json()}).then(data=>{getPhotos(data.photos);var link_next=data.next_page;document.getElementById('button_next').setAttribute('link-next',link_next)})})
function randomimg(){var min=1
var max=5
var number=Math.floor(Math.random()*(max-min+1))+min;switch(number){case 1:document.getElementById('image').setAttribute('src','imgs/hinh1.jpg')
break;case 2:document.getElementById('image').setAttribute('src','imgs/hinh2.jpg')
break;case 3:document.getElementById('image').setAttribute('src','imgs/hinh3.jpg')
break;case 4:document.getElementById('image').setAttribute('src','imgs/hinh4.jpg')
break;case 5:document.getElementById('image').setAttribute('src','imgs/hinh5.jpg')
break}}
setInterval(randomimg,3000);$(window).bind("load",function(){jQuery("#status").fadeOut();jQuery("#loader").fadeOut()});$(document).ready(function(e){lc_lightbox('.elem',{wrap_class:'lcl_fade_oc',gallery:!0,thumb_attr:'data-lcl-thumb',skin:'minimal',radius:0,padding:0,border_w:0,})});var mybutton=document.getElementById("myBtn");window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>20||document.documentElement.scrollTop>20){mybutton.style.display="block"}else{mybutton.style.display="none"}}
function topFunction(){document.body.scrollTop=0;document.documentElement.scrollTop=0}