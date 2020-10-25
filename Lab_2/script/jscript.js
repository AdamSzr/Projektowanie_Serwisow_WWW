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
anim_button.style.marginBottom="5px";
anim_button.onclick = ()=>
{
    "use strict"; // dziala, poniewaz wczesniej zadeklarowalem wszystkie zmienne.
    if(anim_bool)
    {
        anim_button.style.backgroundColor="#28a745";
        anim_button.innerText = "ON";
        anim_bar.classList.remove("progress-bar-animated");
    }else
    {
        anim_button.style.backgroundColor="#dc3545";
        anim_button.innerText = "OFF";
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

// Image Slider
var gal_prev_btn = document.getElementsByClassName("carousel-control-prev")[0];
var gal_next_btn = document.getElementsByClassName("carousel-control-next")[0];
var img_area_handler = document.getElementById("display_img");
img_area_handler.style.maxHeight="600px";
img_area_handler.style.objectFit="contain";


var indicator_handler = document.getElementsByTagName("ol")[0];
var img_description_handler=document.getElementsByClassName("carousel-caption")[0];


var available_images= ["image/zalew_koronowski.jpg","image/cisowska_struga.jpg","image/rzeka_stozka.jpg","image/krzywa_rzeka.jpg"];
var available_images_descriptions=["Zalew koronowski.","Cisowska Struga", "Rzeka Stążka","Rzeka Krzywa"];
var current_img_index=0;

gal_prev_btn.onclick = ()=>
{
    indicator_handler.children[current_img_index].classList.remove("active");// acctual index and remove class activ

    if(current_img_index == 0){ // calc new index
        current_img_index = available_images.length - 1;}
    else{
        current_img_index--;}

    indicator_handler.children[current_img_index].classList.add("active"); // change bottom indicator to prev elemnet.
    img_area_handler.src = available_images[ current_img_index ]; // change img
    img_description_handler.children[0].innerText = available_images_descriptions[current_img_index]; // change img desc
}

gal_next_btn.onclick = ()=>
{
    indicator_handler.children[current_img_index].classList.remove("active");
     if(current_img_index == available_images.length - 1){
            current_img_index = 0}
        else{
            current_img_index++;}

    indicator_handler.children[current_img_index].classList.add("active");
    img_area_handler.src = available_images[ current_img_index ];
    img_description_handler.children[0].innerText = available_images_descriptions[current_img_index];
}


