import "../navbar.scss"

const Navbar = () => {
  return (
    <div className= "navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <img className="logo" src="/gg.png" alt="logo"></img>
        <div className="socials">
          <a href="https://github.com/faithadewuyi"><img src = "/github.png"></img></a>
          <a href="https://www.linkedin.com/in/faith-adewuyi-64923542/"><img src = "/linkedin.jpg"></img></a>
        
          <a href="https://twitter.com/adewuyi_faith"><img src = "/twitter.png"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
