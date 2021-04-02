

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

let splide_initializer = ()=>{
    new Splide( '.splide' ).mount();
}


window.onload = ()=>{
    heroReveal();
    minimalistSectionReveal();
    skillPanelReveal();
    splide_initializer();
    ScrollReveal().reveal('.diamond', slideRight);
    for(let i =0; i<40; i++){
        document.querySelector('.projects-panel')
        .insertAdjacentHTML('beforeEnd',getProject('Project 1','Lorem Ipsum is simply dummy text of the \
        printing and typesetting \
        industry.'));
    }
    
    
    console.log(document.querySelector('.main-header'))
}
function getProject(header, content){
    return `<div class="project-panel splide__slide">
    <div class="project-icon">

    </div>
    <div class="written">
        <div class="project-header">
            ${header}
        </div>
        <div class="project-description">
            <div class="content">
                ${content}
            </div>
             

        </div>
    </div>
    
    </div>`
}
