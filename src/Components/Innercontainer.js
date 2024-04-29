export function Innercontainer(props) {
    console.log(props)
    return (
        // <div style={{width:'100%',height:'100%'}}>
        <div style={props.style}>
            
            {props.component}
            {/* {props.component1} */}
        </div>
    )
}