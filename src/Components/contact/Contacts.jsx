import "./contact.scss"

const Contacts = () => {
  return (
    <div className="contact"> 
      <div className="textContainer">
      
       <h1 > Connect with Me</h1>
        <div className="item" >
           <h2>Email</h2>
           <span>faith.adewuyi18@gmail.com</span>
      </div>
    <div className="item" >
      <h2>Phone Number</h2>
       <span>+2348100322494</span>
       </div>
        </div>
        <div className="formContainer">
        <form >
         < input type ="text" required placeholder="Name"/>
         <input type = "email" required placeholder = "Email"/>
        <textarea rows={8} placeholder= "Message"/>
        <button>Submit</button>
       </form>
   </div>
        </div>
      
    
  )
}

export default Contacts
