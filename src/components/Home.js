import './Home.css'
import { useEffect, useRef, useState } from 'react';
import Introduction from './Introduction';
import NodeGraph from './NodeGraph'
import TimeLine from './TimeLine';


export default function Home() {
    // calculating the center coordinates of the Node Graph container
    const ngPanel = useRef(null);
    const [ngWidth, setNgWidth] = useState(0);
    const [ngHeight, setNgHeight] = useState(0);

    useEffect(()=>{
        const panelElement = ngPanel.current;
        // Initialize a ResizeObserver
        const resizeObserver = new ResizeObserver((entries)=>{
            for (const entry of entries) {
                const {width, height } = entry.contentRect;
                setNgWidth(width)
                setNgHeight(height)
            }
        });

        resizeObserver.observe(panelElement);

        return ()=>{
            resizeObserver.disconnect();
        };
    }, []);

    // console.log("Home - ngW: ", ngWidth, " /ngH: ", ngHeight)

    return (
        <div id='home-component'>
            <h1>Donald Ho</h1>
            <section id='profile'>
                <div id='introduction'>
                    <Introduction/>
                </div>

                <div id='core-skills' ref={ngPanel}>
                    <NodeGraph ngWidth={ngWidth} ngHeight={ngHeight}/>
                </div>

            </section>
            
            <section id='time-line'>
                <TimeLine/>
            </section>
            
        </div>

      )
}