import movie from "../assets/images/projects/movie.svg"
import audio from "../assets/images/projects/audio.svg"
import game from "../assets/images/projects/game.svg"
import todo from "../assets/images/projects/todo.svg"
import quote from "../assets/images/projects/quote.svg"

export default [
  {
    id: 1,
    title: "SocialU - Social Platform",
    icon: movie,
    description:
      "Social Platform built using Reactjs and Redux at the Frontend layer and Mongodb Node.js Express.js at the Backend Layer of the application. Features like JWT Based Authentication, Authorization, Server-side validation etc. are provided in the application. Other libraries and tools used - axios, mongoose orm, express validator for validation, moment.js for date and time, passportjs etc.",
    githubPath: "https://github.com/prateek951/SocialU",
    demoPath: null,
    year: "2018",
    techUsed: "MERN Stack, Gravatar, Redux.js, Semantic-UI, Bootstrap",
  },
  {
    id: 2,
    title: "Weather Application using React.js",
    icon: audio,
    description:
      "This is a small weather application that was made while learning React.js which gives us weather conditions for important places across the globe",
    githubPath: "https://github.com/prateek951/weather-app-react",
    demoPath: null,
    year: "2018",
    techUsed: "React.js",
  },
  {
    id: 3,
    title: "Where-is-my-Staff",
    icon: game,
    description:
      "Where is my Staff is a simple application where you can see the geolocation of your staff member who gets registered and gives you a dashboard where you can chat with the member to convey any important information.It uses the Google Maps API and is made using Vue.js and Firebase Technology",
    githubPath: "https://github.com/prateek951/where-is-my-employee-",
    demoPath: "https://where-is-my-staff-62ab7.firebaseapp.com/login",
    year: "2018",
    techUsed: "Vue.js Framework, Firebase and Firestore, Materialize.css",
  },
  {
    id: 4,
    title:
      "Christmas Scene using Pure HTML, CSS and SVG (No Javascript) Challenge",
    icon: todo,
    description:
      "A Christmas Scene made using Pure HTML and CSS in an online challenge for refreshing my design skills",
    githubPath:
      "https://github.com/prateek951/DecemberCodeChallenge-TheNetNinja",
    demoPath: "https://codepen.io/prateek951/pen/pqdGzO",
    year: "2019",
    techUsed: "HTML5, CSS3, Scalable Vector Graphics",
  },
  {
    id: 5,
    title: "Open Chat Application using Vuejs",
    icon: quote,
    description:
      "A simple open chat application where the user can join and chat with the world.This application was made while learning Vuejs",
    githubPath: "https://github.com/prateek951/v2",
    demoPath: "https://chat-app-b8c1f.firebaseapp.com/",
    year: "2018",
    techUsed: "Vuejs, Firebase and Materialize CSS",
  },
  {
    id: 6,
    title: "Robohash - Robots Fetch App",
    icon: quote,
    description:
      "An application made using Reactjs for fetching robots from a backend api and implements search functionality to filter robots by their name",
    githubPath: "https://github.com/prateek951/Robo-hash-app",
    demoPath: null,
    year: "2018",
    techUsed: "React.js, Tachyons.css",
  },
  {
    id: 7,
    title: "Idea Jotting Application",
    icon: quote,
    description: `An application made for managing ideas and day planning stuff and to keep it private from others. The user can register from the application,
        and perform normal CRUD functions to manage his or her private ideas. This application made using Node.js and Mongodb
        with full authentication and authorization based system, it does server side rendering using Handlebars Template Engine`,
    githubPath: "https://github.com/prateek951/IdeaJotNodeApp",
    demoPath: "https://infinite-reaches-45567.herokuapp.com/",
    year: "2017",
    techUsed: "Node.js, Express.js, MongoDB, Handlebars",
  },
  {
    id: 8,
    title: "E-commerce Shopping Application using React.js and GraphQL",
    icon: quote,
    description: `An e-commerce application where the user can register himself and buy items that are on display, place orders and
        even sell his or her own stuff, the application is made using React.js at the Frontend and Node.js with GraphQL at the backend
        layer.`,
    githubPath: null,
    demoPath: "https://shop-ecommerce-next-yoga.herokuapp.com/",
    year: "2018",
    techUsed: "Node.js, GraphQL, React Apollo, Prisma",
  },
  {
    id: 9,
    title: "Location Visualizer Application",
    icon: quote,
    description: `This was a software that I developed for a company as a prototype of displaying location data and rendering appropriate
        charts based on the dataset that was provided which had around 40k trips to render their coordindate density on the map for which 
        I made use of the React MapGL library for rendering this high coordinate density. I also made some basic charts for them for analysis 
        and providing relevant insights of the data. The user can upload a CSV file with that had lat, long columns and then can view the results
        As of now it is specific but can easily be extended`,
    githubPath: "https://github.com/prateek951/locale.ai-react-version",
    demoPath: "https://calm-peak-88596.herokuapp.com",
    year: "2019",
    techUsed: "Node.js, Express.js, CSV-Parser, React.js, React MapGL",
  },
]
