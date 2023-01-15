const data= [
  {
    title: "Reliance",
    imageUrl: "../images/reliance.jpeg",
    path:"../Reliance",
    id:"1"
  },

  {
    title: "Ashok Leyland",
    imageUrl: "../images/leyland.jpeg",
    path:"../Ashok",
  },

  {
    title: "Cipla",
    imageUrl: "../images/Cipla.jpeg",
    path:"../Cipla",

  },
 
  {
      title: "Tata Steel",
      imageUrl: "../images/Tata.jpeg",
      path:"../Tata",
  },

  {
    title: "Eicher Motors",
    imageUrl: "../images/eicher.jpeg",
    path:"../Eicher",
},  
]

function Navbar()
{
  return(
    <div className="Head">
      <img src="../images/risk.png"/>
      <h1 className="heading">StockRider</h1>  
    </div>
  )
}

  
function Card(props)
{
  return(
    <a href={props.path}>
      <div className="Card">
        <img src={props.imageUrl}className="card-img"/>
          <div className="card-stats">
            <h1>{props.title}</h1>
          </div>     
      </div>
    </a>
  )
}


const a=data.map(b=>{
  return(
    <Card
    {...b}
    />
  )
})

function Main()
{
  return(
    <div className="pago">
      <Navbar/>
      <div className="card-list">
      {a}
      </div>
    </div>
  )
}
ReactDOM.render(<Main/>,document.getElementById("root"))