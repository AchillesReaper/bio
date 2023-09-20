import { ReactComponent as WorkIcon } from "../assets/timlineIcon/work.svg"
import { ReactComponent as SchoolIcon } from '../assets/timlineIcon/school.svg'
import { ReactComponent as ProjectIcon } from '../assets/timlineIcon/project.svg'
import timelineElements from "./timlineElements"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import './Timeline.css'
import "react-vertical-timeline-component/style.min.css"

export default function Timeline() {
    let workIconStyles = { background: "#06D6A0" }
    let schoolIconStyles = { background: "#f9c74f" }
    let projectIconStyles = {background: "#904e95"}
    return (
        <div id="timeline-container">
            <h1 className="title">If you would like to know more about me, please keep scrolling</h1>
            <ProjectIcon/>
            <VerticalTimeline>
                {timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work"
                    

                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== ""

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>

                            {showButton && (
                                <a
                                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                    href="/"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}