let projectsData = {
	'project-1': {
		image: "images/project_ing_placeholder_1.jpg",
		name: "Project 1",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
		technologies: ["HTML/CSS", "Ruby on Rails", "Javascript" ],
		linkToLive: "https://c3c1l1a.github.io",
		linkToSource: "https://github.com/c3c1l1a/c3c1l1a.github.io"
	},
	'project-6': {
		image: "images/project_ing_placeholder_6.jpg",
		name: "Project 6",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
		technologies: ["HTML/CSS", "Ruby on Rails", "Javascript" ],
		linkToLive: "https://c3c1l1a.github.io",
		linkToSource: "https://github.com/c3c1l1a/c3c1l1a.github.io"
	},
	'project-2': {
		image: "images/project_ing_placeholder_2.jpg",
		name: "Project 2",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
		technologies: ["HTML/CSS", "Ruby on Rails", "Javascript" ],
		linkToLive: "https://c3c1l1a.github.io",
		linkToSource: "https://github.com/c3c1l1a/c3c1l1a.github.io"
	},
	'project-5': {
		image: "images/project_ing_placeholder_5.jpg",
		name: "Project 5",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
		technologies: ["HTML/CSS", "Ruby on Rails", "Javascript" ],
		linkToLive: "https://c3c1l1a.github.io",
		linkToSource: "https://github.com/c3c1l1a/c3c1l1a.github.io"
	},
	'project-3': {
		image: "images/project_ing_placeholder_3.jpg",
		name: "Project 3",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
		technologies: ["HTML/CSS", "Ruby on Rails", "Javascript" ],
		linkToLive: "https://c3c1l1a.github.io",
		linkToSource: "https://github.com/c3c1l1a/c3c1l1a.github.io"
	},
	'project-4': {
		image: "images/project_ing_placeholder_4.jpg",
		name: "Project 4",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150",
		technologies: ["HTML/CSS", "Ruby on Rails", "Javascript" ],
		linkToLive: "https://c3c1l1a.github.io",
		linkToSource: "https://github.com/c3c1l1a/c3c1l1a.github.io"
	},
}


// Dynamically create the projects card
function createProjectsCard(){
	if ('content' in document.createElement('template')){
		let template = document.querySelector("#js-project-card");
		for (const [id, projectItem] of Object.entries(projectsData)){
			let projectCard = template.content.firstElementChild.cloneNode(true);
			
			let h3 = projectCard.querySelector(".js-project-card__name");
			h3.textContent = projectItem.name;

			let img = projectCard.querySelector(".js-project-card__image"); 
			img.src = projectItem.image;


			let li = projectCard.querySelectorAll(".js-project-card__technology");
			for (let i = 0; i < li.length; i++) {
				li[i].textContent = projectItem.technologies[i];
			}

			let button = projectCard.querySelector(".js-project-card__button");
			button.addEventListener('click', (event)=> {
				populateProjectsPopupModal(projectItem);
			});

			const projects = document.querySelector(".js-projects");
			projects.appendChild(projectCard);
		}

	}
}
createProjectsCard();


// Dynamically populate the Projects Popup modal template
function populateProjectsPopupModal(projectData){
	if ('content' in document.createElement('template')){
		let template = document.querySelector("#js-projects-popupModal");
		let projectsPopModal = template.content.firstElementChild.cloneNode(true);
		let h3 = projectsPopModal.querySelector(".js-projects-popupModal__name");
		h3.textContent = projectData.name;
		
		let li = projectsPopModal.querySelectorAll(".js-projects-popupModal__technology");
		for (let i = 0; i < li.length; i++) {
			li[i].textContent = projectData.technologies[i];
		}

		let img = projectsPopModal.querySelectorAll(".js-projects-popupModal__image");
		for (let i = 0; i < img.length; i++){
			img[i].src = projectData.image;
		}

		let p = projectsPopModal.querySelector(".js-projects-popupModal__description");
		p.textContent = projectData.description;

		let close = projectsPopModal.querySelector(".js-projects-popupModal__close");
		close.addEventListener('click', (event) => {
			projectsPopModal.parentNode.removeChild(projectsPopModal);
		});

		let live = projectsPopModal.querySelector(".js-projects-popupModal__live");
		live.href = projectData.linkToLive;

		let source = projectsPopModal.querySelector(".js-projects-popupModal__source");
		source.href = projectData.linkToSource;

		let body = document.querySelector("body");
		body.appendChild(projectsPopModal);
	}
}


