import React from "react";
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
function Refer(){
    return(
        <div>
          <div className="d-flex rfr">
                 <b><Link to="/" className="rfr1">UI/UX</Link>{'>'}</b>
                 <b><Link to="/" className="rfr1">Refer & Earn</Link>{'>'}</b>
            </div> 
        </div>
    )
}
export default Refer;