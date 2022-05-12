const projectsData = {
  'card-1': {
    image: 'images/project_ing_placeholder_1.jpg',
    name: 'Project 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 150',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    linkToLive: 'https://c3c1l1a.github.io',
    linkToSource: 'https://github.com/c3c1l1a/c3c1l1a.github.io',
  },
  'card-6': {
    image: 'images/project_ing_placeholder_6.jpg',
    name: 'Project 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 150',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    linkToLive: 'https://c3c1l1a.github.io',
    linkToSource: 'https://github.com/c3c1l1a/c3c1l1a.github.io',
  },
  'card-2': {
    image: 'images/project_ing_placeholder_2.jpg',
    name: 'Project 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 150',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    linkToLive: 'https://c3c1l1a.github.io',
    linkToSource: 'https://github.com/c3c1l1a/c3c1l1a.github.io',
  },
  'card-5': {
    image: 'images/project_ing_placeholder_5.jpg',
    name: 'Project 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 150',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    linkToLive: 'https://c3c1l1a.github.io',
    linkToSource: 'https://github.com/c3c1l1a/c3c1l1a.github.io',
  },
  'card-3': {
    image: 'images/project_ing_placeholder_3.jpg',
    name: 'Project 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 150',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    linkToLive: 'https://c3c1l1a.github.io',
    linkToSource: 'https://github.com/c3c1l1a/c3c1l1a.github.io',
  },
  'card-4': {
    image: 'images/project_ing_placeholder_4.jpg',
    name: 'Project 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 150',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    linkToLive: 'https://c3c1l1a.github.io',
    linkToSource: 'https://github.com/c3c1l1a/c3c1l1a.github.io',
  },
};

// Dynamically populate the Projects Popup modal template
function populateProjectsPopupModal(projectData) {
  if ('content' in document.createElement('template')) {
    const template = document.querySelector('#js-projects-popupModal');
    const projectsPopModal = template.content.firstElementChild.cloneNode(true);

    const h3 = projectsPopModal.querySelector('.js-projects-popupModal__name');
    h3.textContent = projectData.name;

    const li = projectsPopModal.querySelectorAll('.js-projects-popupModal__technology');
    for (let i = 0; i < li.length; i += 1) {
      li[i].textContent = projectData.technologies[i];
    }

    const img = projectsPopModal.querySelectorAll('.js-projects-popupModal__image');
    for (let i = 0; i < img.length; i += 1) {
      img[i].src = projectData.image;
    }

    const p = projectsPopModal.querySelector('.js-projects-popupModal__description');
    p.textContent = projectData.description;

    const close = projectsPopModal.querySelector('.js-projects-popupModal__close');
    close.addEventListener('click', () => {
      projectsPopModal.parentNode.removeChild(projectsPopModal);
    });
    const live = projectsPopModal.querySelector('.js-projects-popupModal__live');
    live.href = projectData.linkToLive;

    const source = projectsPopModal.querySelector('.js-projects-popupModal__source');
    source.href = projectData.linkToSource;

    const body = document.querySelector('body');
    body.appendChild(projectsPopModal);
  }
}

// Dynamically create the projects card
function createProjectsCard() {
  if ('content' in document.createElement('template')) {
    const template = document.querySelector('#js-project-card');

    Object.entries(projectsData).forEach((item) => {
      const id = item[0];
      const projectItem = item[1];

      const projectCard = template.content.firstElementChild.cloneNode(true);
      projectCard.className = `${projectCard.className} ${id}`;

      const h3 = projectCard.querySelector('.js-project-card__name');
      h3.textContent = projectItem.name;

      const img = projectCard.querySelector('.js-project-card__image');
      img.src = projectItem.image;

      const li = projectCard.querySelectorAll('.js-project-card__technology');
      for (let i = 0; i < li.length; i += 1) {
        li[i].textContent = projectItem.technologies[i];
      }

      const button = projectCard.querySelector('.js-project-card__button');
      button.addEventListener('click', () => {
        populateProjectsPopupModal(projectItem);
      });

      const projects = document.querySelector('.js-projects');
      projects.appendChild(projectCard);
    });
  }
}
createProjectsCard();
