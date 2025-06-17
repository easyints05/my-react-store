import {Link} from 'react-router-dom';
export default function Header() {
return(
     <div className="App-Header-Row">
        <h1 style ={{color:'white',backgroundColor:'pink'}}>My header application</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
        </ul>
        </div>
        
   
);
}