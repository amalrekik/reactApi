
export default function ProfilList(props) {
  
    return(
        <div>
        <h1 style={{fontSize:'25px', color:'rgb(41, 41, 41)'}}> {props.username}</h1>
        <p><b style={{fontSize:'20px', color:'rgb(41, 41, 41)'}}>Full Name:</b> {props.name}</p>
        <b style={{fontSize:'20px', color:'rgb(41, 41, 41)'}}>address:</b>
        <p>street:{props.street}<br/>
        suite:{props.suite}<br/>
        city:{props.city}<br/></p>
        <b style={{fontSize:'20px', color:'rgb(41, 41, 41)'}}>Contact us</b>
        <p> <b style={{color:'rgb(209, 103, 121)'}}>by mail:</b><br/>{props.mail}</p>
        <p><b style={{color:'rgb(209, 103, 121)'}}>Or by phone:</b><br/>{props.phone}</p>
      </div>
    )
}
