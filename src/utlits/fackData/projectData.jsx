import dictionary from "../../assets/images/projects/dictionary.png"
import toDoList from "../../assets/images/projects/toDoList.png"
import contact from "../../assets/images/projects/contact.png"
import api from "../../assets/images/projects/api.png"

export const projectsData = [
    {
        id: 1,
        src: dictionary,
        category: "Front-end",
        title: "Dictionary",
        description: ["As part of my training, I was asked to create a dictionary web application using the Dictionary API and to make it as close to the design as possible."], 
        technologies : ["HTML", "CSS","Javascript", "Figma"]
    },
    {
        id: 2,
        src: toDoList,
        category: "Front-end",
        title: "To do list",
        description: ["This project involves creating a task manager application."], 
        technologies : ["HTML", "CSS","Javascript", "Figma"]
    },
    {
        id: 3,
        src: contact,
        category: "Back-end",
        title: "Contact",
        description: ["This project involves integrating a web application and developing the back-end of a small application that allows adding contacts."], 
        technologies : ["HTML", "CSS","PHP", "Docker", "MySQL", "MailHog"]
    },
    {
        id: 4,
        src: api,
        category: "Back-end",
        title: "API Rest",
        description: ["The objective of this project is to create a REST API in PHP that allows creating, reading, updating, and deleting a technology in web development using Postman.", "The API will also be able to create, list, modify, and add categories and resources related to technologies."], 
        technologies : ["HTML", "CSS","PHP", "Docker", "MySQL", "Postman"]
    },
]