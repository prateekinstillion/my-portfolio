import antik from "../assets/images/projects/antik.svg"

export default [
  {
    id: 1,
    title: "Drowsiness Detection System",
    icon: antik,
    description: `Minor Project on Drowsiness Detection System uses Viola Jones Classification Algorithm. The Techstack is Python and its libraries, Computer Vision library OpenCV, Python REST API using Flask, UI/UX to integrate with the model of the application
        It does drowsiness detection on the user's face by analyzing the facial features and produces an alarm when the user feels drowsy.It was integrated with an Android application
        to test it in realtime. 
        `,
    githubPath: "https://github.com/prateek951/minor-project",
    demoPath: null,
    year: "2018",
    techUsed: "Python, Flask, OpenCV",
  },
  {
    id: 2,
    title: "Invester Suggestion Portal : Multichain Based Solution Approach",
    icon: antik,
    description: `Major Project on Invester Suggestion Portal using Multichain Blockchain. We made a project to allows investers to register
        and make their invester/professional profile, then he can pick up the coins that are trending in their markets and can view the market
        trends of those coins based on day, week and monthly pattern and visualizations being traced for the same to allow them take better decision 
        related to the cryptocurrency in which they shoud invest in and then accordingly the visualizer will suggest the coin in which the invester 
        should invest in. The entire profile, education and experience data of the invester is stored on the private blockchain configured using 
        Multichain before storing those into the database.
        `,
    githubPath: "https://github.com/prateek951/crypto-investers",
    demoPath: null,
    year: "2019",
    techUsed: "MERN Stack, Multichain Blockchain, React HighCharts",
  },
]
