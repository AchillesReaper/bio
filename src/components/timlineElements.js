const listOfEvents = [
    {
        title: "Bio Page Built",
        location: "Sydney, Australia",
        description:
            "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
        buttonText: "View Frontend Projects",
        date: "August 2016 - present",
        icon: "work",
    },
    {
        title: "Backend Developer",
        location: "Skystead, Craonia",
        description:
            "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
        buttonText: "View Backend Projects",
        date: "June 2013 - August 2016",
        icon: "school",
    }
]

const timelineElements = listOfEvents.map((e, i)=>{
    return {
        id: i + 1,
        ...e,
    }
})

export default timelineElements;