import { ReactComponent as StartIcon } from "../assets/timlineIcon/start.svg"
import { ReactComponent as CptIcon } from "../assets/timlineIcon/cpt.svg"

import { ReactComponent as WorkIcon } from "../assets/timlineIcon/work.svg"
import { ReactComponent as SchoolIcon } from '../assets/timlineIcon/school.svg'
import { ReactComponent as ProjectIcon } from '../assets/timlineIcon/project.svg'
import timelineElements from "./timlineElements"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
// import './Timeline.css'
import "react-vertical-timeline-component/style.min.css"

export default function Timeline() {
    let icon;
    let iconStyle;
    let iconBtnClassName;

    return (
        <div id="timeline-container">
            <h2 className="title">If you would like to know more about me, please keep scrolling</h2>
            <StartIcon
                style={{
                    maxWidth: "30vh", // Set the maximum width to 30vh
                    maxHeight: "30vh", // Set the maximum height to 30vh
                }} />
            <VerticalTimeline>
                {timelineElements.map(element => {
                    switch (element.icon) {
                        case "work":
                            icon = <WorkIcon />
                            iconStyle = { background: "#06D6A0" }
                            iconBtnClassName = 'workButton'
                            break;

                        case "school":
                            icon = <SchoolIcon />
                            iconStyle = { background: "#f9c74f" }
                            iconBtnClassName = 'schoolButton'
                            break;

                        case "project":
                            icon = <ProjectIcon />
                            iconStyle = { background: "#D2a557" }
                            iconBtnClassName = 'projectButton'
                            break;

                        case "cpt":
                            icon = <CptIcon />
                            iconStyle = { background: "#e1dff5" }
                            iconBtnClassName = 'cptButton'
                            break;

                        default:
                            break;
                    }

                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== ""

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={iconStyle}
                            icon={icon}
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
                                    className={`button ${iconBtnClassName} text-nowrap`}
                                    href={element.refLink}
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