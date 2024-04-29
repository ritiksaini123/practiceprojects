import { Innercontainer } from "../Innercontainer";
import { Formcontainer } from "../Formcontainer";
import { Banner } from "./Banner";
import '../../style.css';
export function Login(){
    return(
        <div className='login-container'>
            <Innercontainer component={<Banner/>}/>
            {/* <div className="inner-container"> */}
            <Innercontainer component={<Formcontainer/>} style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}/>
            {/* </div> */}
            
        </div>
    )
}