// =========================== Ustawienia globalne =======================================

var headers = document.getElementsByClassName("content_header");
for(var i =0; i<headers.length;i++)
{
    headers[i].style.textAlign = "center";
}

var buttons=document.getElementsByTagName('button');
for(var i =0; i<buttons.length;i++)
{
    buttons[i].style.backgroundColor = "#007bff";
}
// ===================== Ustawienia kart =====================================

// SLIDER
var obj_slider = document.getElementById("slider");
obj_slider.style.width = "-webkit-fill-available";
obj_slider.style.marginBottom ="15px";

var slider_display = document.getElementById("slider_display");

obj_slider.onchange = () => { 
    slider_display.style.width = obj_slider.value + '%';
    slider_display.innerText=obj_slider.value + '%';
 };

 // LOSOWANIE
 var rand_button = document.getElementById("random_button");

 rand_button.onclick = ()=>
 {
     var col_value=Math.random();

     rand_button.style.color = '#'+ (1-col_value).toString(16).substr(2,6);
     rand_button.style.backgroundColor = '#'+col_value.toString(16).substr(2,6);
}

// ANIMATION
var anim_button = document.getElementById("animation_button");
var anim_bar=document.getElementsByClassName("progress-bar-striped")[0];
var anim_bool=true;
anim_button.onclick = ()=>
{
    "use strict"; // dziala, poniewaz wczesniej zadeklarowalem wszystkie zmienne.
    if(anim_bool)
    {
        anim_button.style.backgroundColor="#dc3545";
        anim_button.innerText = "OFF";
        anim_bar.classList.remove("progress-bar-animated");
    }else
    {
        anim_button.style.backgroundColor="#28a745";
        anim_button.innerText = "ON";
        anim_bar.classList.add("progress-bar-animated");
    }     
     anim_bool =  !anim_bool;
}
// Html Insert

var btn_innertxt= document.getElementById("btn_inner_text");
var btn_innerhtml= document.getElementById("btn_inner_html");
var displayArea=document.getElementById("display_area");
displayArea.style.height="50px";
displayArea.style.textAlign ="center";

btn_innertxt.onclick=()=>{
    this.displayArea.innerText="Przycisk InnerText zadziałał."; 
};

btn_innerhtml.onclick=()=>{
    this.displayArea.innerHTML="<h1> Przycisk InnerHTML zadziałał.</h1>"; 
};

