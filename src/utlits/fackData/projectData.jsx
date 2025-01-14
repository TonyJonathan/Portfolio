import dictionary from "../../assets/images/projects/dictionary.png"
import toDoList from "../../assets/images/projects/toDoList.png"
import contact from "../../assets/images/projects/contact.png"
import api from "../../assets/images/projects/api.png"
import mealify from "../../assets/images/projects/mealify.png"

export const projectsData = [
    {
        id: 1,
        src: mealify,
        category: "Front-end",
        title: "Mealify",
        description: ["Mealify is a web app built with React that lets you explore dishes, recipes, and nutritional info. Easy to use, it allows you to select dishes and organize them into a personalized menu. In a few clicks, you can generate a complete list of ingredients, perfect for planning your shopping and preparing meals at home!"], 
        technologies : [ "React", "CSS", "Figma"], 
        link : "https://mealifyy.netlify.app/"
    },

    {
        id: 2,
        src: toDoList,
        category: "Front-end",
        title: "To do list",
        description: ["This project involves creating a task manager application."], 
        technologies : ["HTML", "CSS","Javascript", "Figma"], 
        link : "https://tonyjonathan.github.io/06-lab-js-todo/"
    },
    {
        id: 3,
        src: dictionary,
        category: "Front-end",
        title: "Dictionary",
        description: ["As part of my training, I was asked to create a dictionary web application using the Dictionary API and to make it as close to the design as possible."], 
        technologies : ["HTML", "CSS","Javascript", "Figma"], 
        link : "https://tonyjonathan.github.io/05-lab-js-dictionary/"
    },

    {
        id: 4,
        src: contact,
        category: "Back-end",
        title: "Contact",
        description: ["This project involves integrating a web application and developing the back-end of a small application that allows adding contacts."], 
        technologies : ["HTML", "CSS","PHP", "Docker", "MySQL", "MailHog"], 
        link : "https://github.com/TonyJonathan/01-lab-php-contact"
    },
    {
        id: 5,
        src: api,
        category: "Back-end",
        title: "API Rest",
        description: ["The objective of this project is to create a REST API in PHP that allows creating, reading, updating, and deleting a technology in web development using Postman.", "The API will also be able to create, list, modify, and add categories and resources related to technologies."], 
        technologies : ["HTML", "CSS","PHP", "Docker", "MySQL", "Postman"], 
        link : "https://github.com/TonyJonathan/02-lab-php-api"
    },
]