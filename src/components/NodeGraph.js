import './Node.css'
import sun from '../assets/img/sun.png'
import python from "../assets/img/logo-Python.png"

function CenterNode({x,y}) {
    const style = {
        position: "absolute",
        left: x,
        top: y,
        width: '15vw',
        transform: 'translate(-50%, -50%)',
    }
  return (
        <div className="center-node" style={style}>
            <img id='core' src={sun} style={{width: '10vw'}}/>
            <br></br>
            <u>core skills</u>
        </div>
        )
}

export default function NodeGraph({ngWidth, ngHeight}) {
    console.log("NG - ngW: ", ngWidth, " /ngH: ", ngHeight)
    let ngStyle = {
        position: "relative",
        // backgroundColor: 'green',
        width: ngWidth,
        height: ngHeight
    }
    // calculating the center coordinates of the parent container
    let centerX = ngWidth/2;
    let centerY = ngHeight/2;



    return (
        <div className="Node-Graph" style={ngStyle}>
            <CenterNode 
                x = {centerX}
                y = {centerY}
            />
        </div>
    );
}


