const hamburgMenu = document.querySelector('section.menu-bar');
const menuList = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close');
const workSection = document.querySelector('#work-section');
const cardSection = document.createElement('section');
cardSection.id = 'card-section';
const form = document.querySelector('form');
const email = document.querySelector('input[type=email]');

const validatedOutput = document.querySelector('.validation-msg');

const cardSectionContent = [{
  id: '1',
  recentWorkTitle: 'My Recent Works',
  imageSource: 'images/Img-Placeholder.png',
  ProjectDescriptionTitle: 'Multi-Post Stories',
  projectDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a standard dummy text.`,
  cardButton: ['CSS', 'HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',

}, {
  id: '2',
  cardTitles: 'Youth Empowering Summit Africa',
  cardDescription: `This is an Youth Empowering Africa summit event
   website that describes the event were it will take place and show all details needed for the user to understand what the event is all about 
  and shows recent events in about page, it is an exciting project.`,
  modalDescription: `This is an Youth Empowering Africa summit event website 
  that describes the event were it will take place and show all details needed for the user to understand what the event is
   all about and shows recent events in about page, it is an exciting project.
  `,
  cardButton: ['HTML', 'Bootstrap', 'Javascript', 'See project'],
  SeeLive: 'https://clin2on3mun.github.io/YouthEmpowering/',
  seeSource: 'https://github.com/clin2on3mun/YouthEmpowering',
  imageModal: 'images/desktop-version.JPG',
},
{
  id: '3',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been `,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/card2.png',
},

{
  id: '4',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown okay sir`,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/card1.png',
},
{
  id: '5',
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
  id: '6',
  cardTitles: 'Profesional Art Printing Data',
  cardDescription: `A daily selection of privately personalized reads;
        no accounts or sign-ups required. Has been the industry's standard.`,
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting when an unknown
       printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
       centuries, but also the leap into electronic typesetting, remaining essent`,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
  SeeLive: '',
  seeSource: '',
  imageModal: 'images/image2.png',
},
{
  id: '7',
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

const cardSectionOutput = () => {
  workSection.innerHTML = cardSectionContent.map((x, index) => {
    const {
      recentWorkTitle, imageSource, ProjectDescriptionTitle, projectDescription,
      id, cardTitles, cardDescription, cardButton, imageModal, modalDescription, SeeLive, seeSource,
    } = x;
    if (index !== 0) {
      return cardSection.insertAdjacentHTML('afterbegin', `<section class="post">
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
            <ul class="buttons grid-button recent-work-buttons">
            <li><button type="button"  class="btn-work">${cardButton[0]}</button></li>
            <li><button type="button" class="btn-work">${cardButton[1]}</button></li>
            <li><button type="button" class="btn-work">${cardButton[2]}</button></li></ul>
            <div class="modal-content">
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
</section>`);
    }
    return `<section class="recent-work">
  <div class="title-recent-word"><h2 id="recent-work-title">${recentWorkTitle}</h2>
  <hr></div>
  <div class="multipost">
  <img id="img-project" src=${imageSource} alt="images-work">
  <div class="big-image"></div>
  <div>
  <h3 id="project-description-title">${ProjectDescriptionTitle}</h3>
  <p id="project-description">${projectDescription}
  </p>
  <section class="button-section">
     <ul class="buttons recent-work-buttons">
         <li><button type="button"  class="btn-work">${cardButton[0]}</button></li>
         <li><button type="button" class="btn-work">${cardButton[1]}</button></li>
         <li><button type="button" class="btn-work">${cardButton[2]}</button></li>
         <li><button type="button" class="btn-work">${cardButton[3]}</button></li>
        <li><button type="button" class="view-button modal-button">${cardButton[4]}</button></li>
      </ul> 
      
  </section>
  </div>
  </div>
  <div id="backdrop"></div>
            <div class="modal card">
            <img src="images/Icon.png" class="close-icon">
            <h3 class="modalTitle">${recentWorkTitle}</h3>
            <ul class="buttons grid-button recent-work-buttons">
            <li><button type="button"  class="btn-work">${cardButton[0]}</button></li>
            <li><button type="button" class="btn-work">${cardButton[1]}</button></li>
            <li><button type="button" class="btn-work">${cardButton[3]}</button></li></ul>
            <div class="modal-content">
            <img src="${imageSource}" alt = "project image" class="feature_img">
            <div class="grid-modal">
            <p class="paragraph">${projectDescription}</p>
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
const recentWork = document.querySelector('.recent-work');
recentWork.insertAdjacentElement('afterend', cardSection);
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

form.addEventListener('submit', (e) => {
  const emailValidation = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailValidation.test(email.value)) {
    form.submit();
  } else {
    e.preventDefault();
    validatedOutput.textContent = 'email should be lower case letter';
  }
});

form.addEventListener('input', () => {
  const data = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('data', JSON.stringify(data));
});
const parsedFormData = JSON.parse(localStorage.getItem('data'));
if (parsedFormData) {
  const fullName = document.querySelector('#name');
  fullName.value = parsedFormData.name;
  const email = document.querySelector('#email');
  email.value = parsedFormData.email;
  const message = document.querySelector('#message');
  message.value = parsedFormData.message;
}
