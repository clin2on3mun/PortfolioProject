const hamburgMenu = document.querySelector('section.menu-bar');
const menuList = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close');
const workSection = document.querySelector('#work-section');
const cardSection = document.createElement('section');
cardSection.id = 'card-section';

const recentWorkContent = [{
  recentWorkTitle: 'My Recent Works',
  imageSource: 'images/Img-Placeholder.png',
  ProjectDescriptionTitle: 'Multi-Post Stories',
  projectDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a standard dummy text.`,
  recentWorkButton: ['CSS', 'HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',

}];

const cardSectionContent = [{
  id: '1',
  cardTitles: 'Website Portfolio',
  cardDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown okay sir
  `,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/feature_image.png',
},
{
  id: '2',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been `,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/feature_image.png',
},

{
  id: '3',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown okay sir`,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/feature_image.png',
},
{
  id: '4',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
      no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type`,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/feature_image.png',
},
{
  id: '5',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
        no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting when an unknown
       printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essent`,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/feature_image.png',
},
{
  id: '6',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
          no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    `,
  cardButton: ['HTML', 'Bootstrap', 'CSS', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/feature_image.png',
},

];

recentWorkContent.forEach((e) => {
  workSection.insertAdjacentHTML('afterbegin', `<section class="recent-work">
  <div class="title-recent-word"><h2 id="recent-work-title">${e.recentWorkTitle}</h2>
  <hr></div>
  <div class="multipost">
  <img id="img-project" src=${e.imageSource} alt="images-work">
  <div class="big-image"></div>
  <div>
  <h3 id="project-description-title">${e.ProjectDescriptionTitle}</h3>
  <p id="project-description">${e.projectDescription}
  </p>
  <section class="button-section">
     <ul class="buttons recent-work-buttons">
         <li><button type="button"  class="btn-work">${e.recentWorkButton[0]}</button></li>
         <li><button type="button" class="btn-work">${e.recentWorkButton[1]}</button></li>
         <li><button type="button" class="btn-work">${e.recentWorkButton[2]}</button></li>
         <li><button type="button" class="btn-work">${e.recentWorkButton[3]}</button></li>
        <li><button type="button" class="view-button modal-button">${e.recentWorkButton[4]}</button></li>
      </ul> 
      
  </section>
  </div>
  </div>
  <div id="backdrop"></div>
            <div class="modal card">
            <img src="images/Icon.png" class="close-icon">
            <h3 class="modalTitle">${e.recentWorkTitle}</h3>
            <div class="modal-content">
            <ul class="buttons grid-button recent-work-buttons">
            <li><button type="button"  class="btn-work">${e.recentWorkButton[0]}</button></li>
            <li><button type="button" class="btn-work">${e.recentWorkButton[1]}</button></li>
            <li><button type="button" class="btn-work">${e.recentWorkButton[3]}</button></li></ul>
            <img src="${e.imageSource}" alt = "project image" class="feature_img">
            <div class="grid-modal">
            <p class="paragraph">${e.projectDescription}</p>
            <ul class="modal-button-pop">
                <li><button type="button" class="view-buttons button-live"><a href="${e.SeeLive}" class="popUp-links"><span>see Live</span><img src="images/live.png" class="live" alt="live"></a></button></li>
                <li><button type="button" class="view-buttons button-source"><a href="${e.seeSource}" class="popUp-links"><span> see Source </span><img src="images/Group.png" class="source" alt="source"></a></button></li>
            </ul> 
            </div> 
           </div> 
            </div>  
  </section>`);
});

const recentWork = document.querySelector('.recent-work');

recentWork.insertAdjacentElement('afterend', cardSection);

const cardSectionOutput = () => {
  cardSection.innerHTML = cardSectionContent.map((x) => {
    const {
      id, cardTitles, cardDescription, cardButton, imageModal, modalDescription, SeeLive, seeSource,
    } = x;

    return `<section class="post">
    <section class="card-contents">
        <h3 class="card-main-title">${cardTitles}</h3>
        <p class="card-description">${cardDescription}</p>
        <section class="card-buttons">
          <ul class="buttons">  
           <li><button type="button" class="btn-card">${cardButton[0]}</button></li>
           <li><button type="button" class="btn-card">${cardButton[1]}</button></li>
           <li><button type="button" class="btn-card">${cardButton[2]}</button></li>
        </ul>
    </section>    
    </section> 
    <button type="button" class="card-big-btn" data-modal-target="#modal${id}">${cardButton[3]}</button>  
    <div id="backdrop"></div>
            <div class=" card modal-card-section" id="modal${id}">
            <button type="button" data-modal-close-button> <img src="images/Icon.png" class="close-icon"></button>
            <h3 class="modalTitle">${cardTitles}</h3>
            <div class="modal-content">
            <ul class="buttons grid-button recent-work-buttons">
            <li><button type="button"  class="btn-work">${cardButton[0]}</button></li>
            <li><button type="button" class="btn-work">${cardButton[1]}</button></li>
            <li><button type="button" class="btn-work">${cardButton[2]}</button></li></ul>
            <img src="${imageModal}" alt = "project image" class="feature_img">
            <div class="grid-modal">
            <p class="paragraph">${modalDescription}</p>
            <ul class="modal-button-pop">
                <li><button type="button" class="view-buttons button-live"><a href="${SeeLive}" class="popUp-links"><span>see Live</span><img src="images/live.png" class="live" alt="live"></a></button></li>
                <li><button type="button" class="view-buttons button-source"><a href="${seeSource}" class="popUp-links"><span> see Source </span><img src="images/Group.png" class="source" alt="source"></a></button></li>
            </ul> 
            </div> 
           </div> 
            </div>  
</section>`;
  }).join('');
};

cardSectionOutput();

const buttonRecentWork = document.querySelector('.modal-button');
const buttonCard = document.querySelectorAll('[data-modal-target]');
const backdrop = document.querySelector('#backdrop');
const modals = document.querySelector('.modal');
const closebutton = document.querySelector('img.close-icon');
const closebuttonCard = document.querySelectorAll('[data-modal-close-button]');
buttonRecentWork.addEventListener('click', () => {
  backdrop.classList.add('active');
  modals.classList.add('active');
});
closebutton.addEventListener('click', () => {
  backdrop.classList.remove('active');
  modals.classList.remove('active');
});
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  backdrop.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  backdrop.classList.remove('active');
}

buttonCard.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
closebuttonCard.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-card-section');
    closeModal(modal);
  });
});

hamburgMenu.addEventListener('click', () => {
  menuList.classList.toggle('visible');
});

document.querySelectorAll('.color').forEach((n) => n.addEventListener('click', () => {
  menuList.classList.remove('visible');
}));
closeIcon.addEventListener('click', () => {
  menuList.classList.remove('visible');
});
