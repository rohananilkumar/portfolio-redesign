

let slideRight = {
    distance: '50%',
    origin: 'right',
    opacity: 0,
    delay:0,
    duration:700,
}

let slideLeft = {
    distance: '50%',
    origin: 'left',
    opacity: 0,
    delay:0,
    duration:700,
}

let slideUp = {
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    delay:0,
    duration:700,
}

let heroReveal = ()=> {
    let slideUpMain = Object.assign({}, slideUp);
    

    let slideUpSub = Object.assign({}, slideUp);
    slideUpSub.delay = 500;

    ScrollReveal().reveal('.main-header', slideUpMain);
    ScrollReveal().reveal('.sub-header', slideUpSub);
}

let minimalistSectionReveal = () =>{
    let slideUpHeader=Object.assign({}, slideUp);

    let slideUpTag = Object.assign({}, slideUp);
    slideUpTag.delay = 500;

    let slideUpDescription = Object.assign({}, slideUp);
    slideUpDescription.delay = 200;


    ScrollReveal().reveal('.minimalist-section .illustration',slideRight);
    ScrollReveal().reveal('.section-tag',slideUpTag);
    ScrollReveal().reveal('.section-header',slideUpHeader);
    ScrollReveal().reveal('.section-data',slideUpDescription)
}

let skillPanelReveal= ()=>{
    let slideUpHeader=Object.assign({}, slideUp);

    let slideUpTag = Object.assign({}, slideUp);
    slideUpTag.delay = 500;

    let slideUpDescription = Object.assign({}, slideUp);
    slideUpDescription.delay = 200;

    ScrollReveal().reveal('.skill-tag',slideUpTag);
    ScrollReveal().reveal('.skill-header',slideUpHeader);
    ScrollReveal().reveal('.skill-description',slideUpDescription);


    ScrollReveal().reveal('.panel-right .illustration', slideRight);
    ScrollReveal().reveal('.panel-left .illustration', slideLeft);

}


window.onload = ()=>{
    heroReveal();
    minimalistSectionReveal();
    skillPanelReveal();
    ScrollReveal().reveal('.diamond', slideRight);
    console.log(document.querySelector('.main-header'))
}
