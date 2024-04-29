export function Input(props){
    const styleitem={display:'flex',width:'100%',flexDirection:'column',rowGap:'5px',
padding:'5px 0'}
const inputstyle={outline:'none',width:'100%',border:'1px solid lightgray',padding:'5px 5px',borderRadius:'10px'}
return (
    <div style={styleitem}> 
    <label for={props.inputs.id}>{props.inputs.label} </label>
    <input style={inputstyle} type={props.inputs.email} id={props.inputs.id} placeholder={props.inputs.placeholder}></input>
    {/* <label for={props.inputs.id}>{props.inputs.label} </label>
    <input type={props.inputs.email} id={props.inputs.id} placeholder={props.inputs.placeholder}></input> */}
    </div>
)
}