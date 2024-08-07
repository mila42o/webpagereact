import './App.css';
import two from './img/2.webp';

function Register(){
    return(
        <div>        
            <h1>Register Page</h1>
            <hr />
            <div class="container">
            <img class="class1" src={two} alt="cat icon" />
            <form class="inp" id="inp2" method="POST">
                <input class="class2" type="text" placeholder=" Enter email" id="login" name="login" required/>
                <input class="class2" type="text" placeholder=" Enter username" id="usern" name="usern" required/>
                <input class="class2" type="password" placeholder=" Enter your password" id="pas" name="pas" required/>
                <select class="class2" id="rolq" name="rolq" required>
                    <option value=""> Choose a role</option>
                    <option value="0">Admin</option>
                    <option value="1">User</option>
                </select>
                <select class="class2" id="country" name="country" required>
                    <option value="">Select a country</option>
                </select>
                <input class="class3" type="submit" value="Submit"/>
            </form>
            </div>
            <hr />
            <p class="linkowe2">Go to login page!</p>
        </div>
    );
}

export default Register;