const hamburgMenu = document.querySelector('section.menu-bar');
const menuList = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close');
const workSection = document.querySelector('#work-section');
const cardSection = document.createElement('section');
const backdrop = document.querySelector('#backdrop');
const modals = document.querySelector('.modal');
cardSection.id = 'card-section';

const modalPopUp = [{
  modalTitle: ['Multi Post Stories', 'keep track of hundred of components website'],
  listOfTechnologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  imageModal: 'images/feature_image.png',
  modalDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
   printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
   centuries, but also the leap into electronic typesetting, remaining essent`,
  SeeLive: 'See live',
  seeSource: 'See source',

}];

const recentWorkContent = [{
  recentWorkTitle: 'My Recent Works',
  imageSource: 'images/Img-Placeholder.png',
  ProjectDescriptionTitle: 'Multi-Post Stories',
  projectDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a standard dummy text.`,
  recentWorkButton: ['CSS', 'HTML', 'Bootstrap', 'Ruby', 'See project'],
}];

const cardSectionContent = [{
  cardTitles: 'Profesional Art Printing Data',
  cardTitles1: ['Data Dashboard Healthcare', 'Website Portfolio', 'Proffesional Art Printing Data More'],
  cardDescription: `A daily selection of privately personalized reads;
  no accounts or sign-ups required. Has been the industry's standard.`,
  cardButton: ['HTML', 'Bootstrap', 'Ruby', 'See project'],
}];

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
</section>`);
});

const recentWork = document.querySelector('.recent-work');

recentWork.insertAdjacentElement('afterend', cardSection);

const cardSectionOutput = () => {
  let result;
  for (let i = 1; i <= 6; i += 1) {
    result = cardSectionContent.forEach((e) => {
      cardSection.insertAdjacentHTML('afterbegin', `<section class="post">
    <section class="card-contents">
        <h3 class="card-main-title">${e.cardTitles}</h3>
        <p class="card-description">${e.cardDescription}</p>
        <section class="card-buttons">
          <ul class="buttons">  
           <li><button type="button" class="btn-card">${e.cardButton[0]}</button></li>
           <li><button type="button" class="btn-card">${e.cardButton[1]}</button></li>
           <li><button type="button" class="btn-card">${e.cardButton[2]}</button></li>
        </ul>
    </section>    
    </section> 
    <button type="button" class="card-big-btn" >${e.cardButton[3]}</button>    
</section>`);
      const h3Title = document.querySelector('.card-main-title');
      if (i === 1 || i === 4) {
        h3Title.insertAdjacentHTML('afterend', `<h3 class="card-main-title1">${e.cardTitles1[1]}</h3>`);
      }
      if (i === 2 || i === 5) {
        h3Title.insertAdjacentHTML('afterend', `<h3 class="card-main-title1">${e.cardTitles1[0]}</h3>`);
      }
      if (i === 3) {
        h3Title.insertAdjacentHTML('afterend', `<h3 class="card-main-title1">${e.cardTitles1[2]}</h3>`);
      }
    });
  }
  return result;
};

const modalContent = () => {
  const result = modalPopUp.forEach((e) => {
    modals.insertAdjacentHTML('afterbegin', `
    <img src="images/Icon.png" class="close-icon">
    <h3 class="modalTitle">${e.modalTitle[0]}</h3>
    <h3 class="modaltitle">${e.modalTitle[1]} </h3> 
    <div class="modal-content">
    <ul class="buttons grid-button recent-work-buttons">
    <li><button type="button"  class="btn-work">CSS</button></li>
    <li><button type="button" class="btn-work">HTML</button></li>
    <li><button type="button" class="btn-work">Bootstrap</button></li>
    </ul>
        <img src="${e.imageModal}" alt = "Modal image" class="feature_img">
        <div class="grid-modal">
        <p class="paragraph">${e.modalDescription}</p>
        <p class="modal-descriptions">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it 1960s.

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
        <ul class="modal-button-pop">
            <li><button type="button" class="view-buttons button-live"><span>${e.SeeLive}</span><img src="images/live.png" class="live" alt="live"></button></li>
            <li><button type="button" class="view-buttons button-source"><span>${e.seeSource}</span><img src="images/Group.png" class="source" alt="source"></button></li>
        </ul> 
        </div> 
       </div> 
       
`);
  });
  return result;
};

modalContent();
cardSectionOutput();

const buttonRecentWork = document.querySelector('.modal-button');
const buttonCard = document.querySelectorAll('.card-big-btn');

buttonRecentWork.addEventListener('click', () => {
  backdrop.classList.add('active');
  modals.classList.add('active');
  // modals.style.overflow="scroll";
});
buttonCard.forEach((e) => e.addEventListener('click', () => {
  backdrop.classList.add('active');
  modals.classList.add('active');
}));
const closebutton = document.querySelector('img.close-icon');
closebutton.addEventListener('click', () => {
  backdrop.classList.remove('active');
  modals.classList.remove('active');
  console.log('closed');
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