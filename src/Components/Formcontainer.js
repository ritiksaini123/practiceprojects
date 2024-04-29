import { Input } from "./Input"
import { Button } from "./Login/Button"
export function Formcontainer() {

    return (
        <div style={{ width: '50%' }}>

            <h2>Login</h2>

            <div>
                <form>
                    <div>
                        
                            <Input inputs={{ type: 'email', id: 'email', label: 'Email Address', placeholder: 'name@mail.com' }} />
                    
                        
                            <Input inputs={{ type: 'password', id: 'password', label: 'Password', placeholder: 'Enter Password' }} />
                        
                       <div>
                       <input type='checkbox' label id='rememberPassword'></input>
                        <label for='rememberPassword'>Remember Password</label>
                       </div>
                    </div>
                    <div>
                        <Button buttonText='Login' />
                    </div>
                </form>
            </div>
            <p>Don`t Have an account<a href='#'>Signup</a></p>
            <p>Or</p>
            <div style={{ width: '100%' }}>
                <Button buttonText='Authorize with Google' />
            </div>
        </div>
    )
}