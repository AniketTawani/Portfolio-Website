import facial from "../../img/facial.gif";
import connect from "../../img/connect.png"
import todo from "../../img/todo.png"

export const ProjectData = [
  {
    id: 1,
    title: "'CONNECT' is just not a website, it's more than that!",
    about:
      "During my engineering journey, I often struggled with the lack of timely guidance from the right mentors. This challenge inspired me to create 'CONNECT,' a platform designed to bridge the gap for my peers and juniors. 'CONNECT' enables users to directly reach out to industry professionals they aspire to work with, leveraging the LinkedIn platform. The platform facilitates these connections by providing direct links, empowering users to resolve a wide range of queries, whether they pertain to academics, placement preparation, or finding the best resources for DSA preparation. With 'CONNECT,' finding the right guidance at the right time becomes seamless and efficient.",
    tags: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap","Firebase", "LinkedIn"],
    github: "https://github.com/AniketTawani/Connect.github.io",
    demo: "https://anikettawani.github.io/Connect.github.io/html/index.html",
    image: connect,
  },
  {
    id: 2,
    title: "Facial Emotion Recognition System",
    about:
      "Problem Statement [Group Project] : Detecting facial expression and checking whether the customer is happy or sad with the services. The objective is to use a deep neural network to identify faces which makes it easier for the system to detect the emotion. For detecting the face, Cvlib Library is used. After detecting the faces, the Deep learning model is used to recognize the emotions. Finally, Analysing the data obtained by the facial emotion recognition system to help the cafe owners to improve their services. The model is trained on the FER-2013 dataset which was published at International Conference on Machine Learning (ICML).",
    tags: [
      "Flask",
      "HTML",
      "CSS",
      "EJS",
      "OpenCV",
      "Cvlib",
      "Python",
      "Matplot",
      "Numpy",
    ],
    github: "https://github.com/AniketTawani/Facial-Emotion-Detection",
    image: facial,
  },
  {
    id: 3,
    title: "Todo's Tracker",
    about:
      "During my engineeriI developed a personal to-do tracker, a straightforward yet powerful tool for managing daily tasks. This project allows users to easily add and delete to-dos, ensuring they stay organized and focused. Each to-do item can also include a detailed description, providing clarity and context for the task at hand. This minimalist approach to task management helps users prioritize their responsibilities and maintain productivity with ease.",
    tags: ["ReactJs", "Javascript", "HTML", "CSS", "Jquery"],
    github: "https://github.com/AniketTawani/Todos-List",
    demo: "https://anikettawani.github.io/Todos-List/",
    image: todo,
  },
];