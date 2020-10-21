// -------------------kolorowanie całego bloku o mnie---------------------------

var about_me_container = document.getElementById("about_me");
about_me_container.style.marginTop = "50px";
about_me_container.classList.add("card", "align-self-center");

// ----------------- blok o mnie -> kolorwanie 3 sekcji (top,middle,bottom)  ---------

var about_me_header = about_me_container.children[0];
about_me_header.classList.add("card-header", "text-center");

var about_me_content = about_me_container.children[1];
about_me_content.style.padding="10px";

var about_me_footer = about_me_container.children[2];
about_me_footer.classList.add("card-footer");

for (var i = 0; i < about_me_footer.children.length; i++) {
    about_me_footer.children[i].classList.add("card-link");
    about_me_footer.children[i].style.padding="8px";
}
// -----------------------Edycja middle section (galerii)-------------------------

var galery = document.getElementById("galery");
galery.classList.add("pt-2");
galery.style.overflow = "hidden";
galery.style.justifyContent = "center";
galery.style.display = "flex";
galery.style.width = "100%";

// -----------------------Edycja kart galerii-------------------------

for (var i = 0; i < galery.children.length; i++) {

    var hanle_card=galery.children[i]; // styl dla karty
    hanle_card.classList.add("card","float-left","ml-1");
    hanle_card.style.width="32%";

    var handle_card_description = galery.children[i].children[1]; // uchwyt dla bloku napisów pod img

    var subtitle_data_time = handle_card_description.children[1]; // dziecko od 1 bo nie potrzeba tytułu karty, lecz datę znajdujaca sie pod tyt.
    subtitle_data_time.classList.add("card-subtitle","text-muted", "text-left");  
    subtitle_data_time.style.fontSize="12px";
    subtitle_data_time.style.fontStyle="italic";
    
    var img_description = handle_card_description.children[2]; // uchwyt dla opisu img.
    img_description.style.padding="10px";
}


// ------------------------------------------------------------------------

