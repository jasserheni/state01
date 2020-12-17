import React ,{Component} from "react";
import NavBar from "./profile/profilcomponents/NavBar";
import Introduction from "./profile/profilcomponents/Introduction";
import ProjectsList from "./profile/profilcomponents/ProjectList";
import Contact from "./profile/profilcomponents/Contact";
import Footer from "./profile/profilcomponents/Footer";
import Actionlink from "./profile/profilcomponents/Actionlink";  
import imgSrc from "./images/img.jpg";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.png";

import "./App.css";

const navLinks = [
  {
    link: "About",
    href: "#about-me"
  },
  {
    link: "Project",
    href: "#projects"
  },
  {
    link: "Contact",
    href: "#about"
  }
];

const projects = [
  {
    projectName: "Mobile Chat App",
    imgSrc: project1
  },

  {
    projectName: "Connect Web Application",
    imgSrc: project2
  },
  {
    projectName: "E-commerce App",
    imgSrc: project3
  },
  {
    projectName: "Portfolio",
    imgSrc: project4
  }
];
const footerCopyRights = {
  name: "Jasser Heni ",
  year: 2020
};

class  App extends Component {
  state ={
    show:false,
    time:0
  }
 hide =() =>this.setState({
   show : ! this.state.show
 })
 componentDidMount =()=>{
   setInterval(()=>{this.setState ({time:this.state.time+1
  }) } ,1000)
 }
 render (){
  return (
    
    <div >
      <button className ='btns'  onClick ={this.hide}>{this.state.show?"Hide":"show"}</button>
      {this.state.show?(
      <>
      <NavBar navLinks={navLinks} name="Profile user" />
      
      <Introduction imgSrc={imgSrc} name="Profile user" />
      
      <ProjectsList listOfProjects={projects} />

      <Contact />
     
      <Actionlink alert="Profile of user" />
      
      <Footer copyrights={footerCopyRights} />
      <p className=""> {this.state.time}</p>
      </>
      ):(<> </>)
 }
    </div>
  );
}}

export default App;
