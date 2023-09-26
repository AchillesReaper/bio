// import './Projects.css'
const projects = [

    {
        name: "Mangata_Gallo",
        description: "",
        tech: "HTML, CSS",
        demo: "web",
        source: "https://achillesreaper.github.io/w3-Mangata_Gallo/"
    },

    {
        name: "UTS Environment",
        description: "",
        tech: "Processing",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/wl4TmeNfV6s?si=ECxkEPt57GR8JuLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },

    {
        name: "Better Health",
        description: "",
        tech: "Java, MySQL, JBDC, javax, batch scripting",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/S9te6TwZNVo?si=hOHIBoY_dOY0JXDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },

    {
        name: "Bubble Pop",
        description: "",
        tech: "Swift, UIKIT",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/PZ8vjW1kqTk?si=wT1jmISnx490LTNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },

    {
        name: "Herts-UTS",
        description: "",
        tech: "HTML, CSS, JavaScript",
        demo: "web",
        source: "https://achillesreaper.github.io/Car-Rental/"
    },

    {
        name: "Online Grocery Store",
        description: "",
        tech: "An online grocery empowered by HTML, CSS, JavaScript, PHP, MySQL, and AWS Beanstal",
        demo: "youtube",
        source: <iframe className='project-demo' src="https://www.youtube.com/embed/gNohrjJ1RSA?si=deyo8U2CdSQAXJcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },

]



export default function Projects() {
    const projectPage = projects.map((project, index) => (

        <div className="card text-center project-display" key={index}>
            <h3 className='card-title'>{project.name}</h3>
            <div class="card-body">
                <p>{project.description}</p>
                <p><b>Tech:</b> <em>{project.tech}</em></p>

                {project.demo === 'web'
                    ? <a type='button' className='btn btn-primary' href={project.source}> View Project</a>
                    : project.source}
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