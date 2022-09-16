import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function Navbar(prop){
return(
  <div>
    <nav className="navbar bg-success">
  <div className="container-fluid">
  <div style={{"display":"flex"}}>
      <img src="./logo192.png" alt="A" width="30" height="24" className="d-inline-block align-text-top" />
     <h1> Secret Project </h1>
  </div>
      <img src='./cart.svg' width="30" height="24" onClick={()=>{prop.click()}}/>
  </div>
</nav>
<div className='heading'>Order</div>
</div>
)
}