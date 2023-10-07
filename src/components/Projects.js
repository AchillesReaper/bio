// import './Projects.css'
const projects = [

    {
        name: "Bio Page",
        description: "A bio page to showcase the certificates and projects",
        tech: "HTML, CSS, JavaScript, React.js, p5.js, GitHub",
        demo: "web",
        source: "https://dh3.space/"
    },

    {
        name: "Mangata & Gallo",
        description: "A simple home template built for jewellery business.",
        tech: "HTML, CSS",
        demo: "web",
        source: "https://achillesreaper.github.io/w3-Mangata_Gallo/"
    },

    {
        name: "UTS Environment",
        description: "This is a UTS project. Visualizing environment data collect by FEIT UTS with discretionary creativity",
        tech: "Processing, Processing Sounds and ControlP5, API, JSON, Python, GitHub",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/wl4TmeNfV6s?si=ECxkEPt57GR8JuLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },

    {
        name: "Better Health",
        description: "A a simple bookkeeping system built for a local business.",
        tech: "Java, MySQL, JBDC, javax, batch scripting",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/S9te6TwZNVo?si=hOHIBoY_dOY0JXDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },

    {
        name: "Bubble Pop",
        description: "This is a UTS project. A  iOS game with a lite local database to store ranking.",
        tech: "Swift, UIKIT",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/PZ8vjW1kqTk?si=wT1jmISnx490LTNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },

    {
        name: "Herts-UTS",
        description: "This is a UTS project. Mainly implement the shooping cart function for an online car rental platform.",
        tech: "HTML, CSS, JavaScript, JSON, AJAX, GItHub",
        demo: "web",
        source: "https://achillesreaper.github.io/Car-Rental/"
    },

    {
        name: "Online Grocery Store",
        description: "This is a UTS project. An e-commerce web application with both server and client side",
        tech: "HTML, CSS, PHP, MySQL, JavaScript, AWS Beanstalk, GitHub",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/gNohrjJ1RSA?si=deyo8U2CdSQAXJcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },

    {
        name: "Datamining in Action",
        description: "This is a UTS project. This is an individual project for students acting as data scientists at a consulting company",
        tech: "Python, Jupyter Notebook, pandas, numpy, matplotlib, imblearn, sklearn",
        demo: "web",
        source: 'https://www.kaggle.com/competitions/2021a-uts-data-analytics-assignment-3/leaderboard?tab=public'
    },

]



export default function Projects() {
    const projectPage = projects.map((project, index) => (

        <div className="card text-center project-display" key={index}>
            <h3 className='card-title'>{project.name}</h3>
            <div class="card-body">
                {project.demo === 'web'
                    ? <div className="project-demo"> <a type='button' className='btn btn-primary' href={project.source}> View Project</a></div>
                    : project.source}

                
                <p><b>Tech applied:</b> <em>{project.tech}</em></p>
                <p>{project.description}</p>
            </div>
        </div>

    )
    )

    return (
        <div id='project-page' className="page-container">
            {projectPage}
        </div >


    )
}