import './App.css';
import one from './img/1.png';

function Login() {
  return (
    <div>
        <h1>Login Page</h1>
        <hr />
        <div class="container">
        <img class="class1" src={one} alt="Cat icon" />
        <form class="inp" id="inp" method="post">
            <input class="class2" type="text" placeholder=" Enter email or username" id="login" name="login" required />
            <input class="class2" type="password" placeholder=" Enter password" id="pas" name="pas" required />
            <input class="class3" type="submit" value="Submit"/> 
        </form>
        </div>
        <hr />
        <p class="linkowe">don't have a registration yet?</p>
    </div>
  );
}

export default Login;

