import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {

   return (
   <div className="main-container-footer">
      <div className="footer">
         <div className="container ">
            <div className="row">
               <div className="footer-col">
                  <h4>Contact us</h4>
                  <ul className="footer-list">

                     <li><a href="#">Call us<br></br>
                        <h4> 9356181098 </h4></a> </li>
                     <li><a href="#">Email-Us<br></br>
                    <h4> vivekpatil143@gmail.com</h4></a> </li>
                     <li><a href="#">Our Location
                     <h4>577 Gladstone Ave Ottawa, ON K1R5P2</h4></a> </li>
                  

                  </ul>
               </div>
               <div className="footer-col">
                  <h4>GetHelp</h4>
                  <ul  className="footer-list">
                     <li><a href="#">FAQ</a></li>
                     <li><a href="#">HELP</a></li>
                     <li><a href="#">LOGIN</a></li>
                     <li><a href="#">ORDER</a></li>
                  </ul>
               </div>
               <div className="footer-col">
                  <h4>QUICK LINK</h4>
                  <ul  className="footer-list">
                     <li><a href="#">HOME</a></li><br></br>
                     <li><a href="#">Menu</a></li><br></br>
                     <li><a href="#">Catering</a></li><br></br>
                     <li><a href="#">Contact</a></li><br></br>
                  </ul>
               </div>
               <div className="footer-col" >
                  <h4>FOLLOW</h4>
                  <ul  className="footer-list">
                     <li><a href="#"><h3><i class="fa-brands fa-facebook"> </i> Facebook</h3></a></li><br></br>
                     <li><a href="#"><h3><i class="fa-brands fa-instagram"> </i> Instagram</h3></a></li><br></br>
                     <li><a href="#"><h3><i class="fa-brands fa-linkedin"> </i> Linkedin</h3></a></li><br></br>
                     <li><a href="#"><h3><i class="fa-brands fa-twitter"> </i> Twitter</h3></a></li><br></br>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
}