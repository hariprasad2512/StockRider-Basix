function Navbar()
{
  return(
    <div className="Head">
      <img src="./images/risk.png"/>
      <h1 className="heading">StockRider</h1>  
      <Options/>
    </div>
  )
}

function Options()
{
  return(
  <div className="options">
    <button className="Register">
       <a href="Signup.html">
       Signup  
       </a></button>
     <button className="Login">
     <a href="Login.html">
        Login
       </a>  
      </button>
  </div>
  )

}

function HomePage()
{
  return(
    <div className="Home">

      <h2>Invest in Stocks</h2>
      
      <h1>Earn Money</h1>
      
      {/* <button>
        <a href="./pages">hi</a>
      </button> */}
 
    </div>
  )
}


function Quote()
{
 return(
  <div className="quote">
    <button className="getstart">
      <a href="./pages">GET STARTED</a>
    </button>
  </div>
 )
}



function Main()
{
  return(
    <div>
     <Navbar/>
     <HomePage/>
     <Quote/>
    </div>
  )
}
ReactDOM.render(<Main/>,document.getElementById("root"))
