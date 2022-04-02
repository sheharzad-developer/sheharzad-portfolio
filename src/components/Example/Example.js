import React, {Component, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Text } from 'react-responsive-carousel';
import g1 from '../../assets/images/g1.png';
import g2 from '../../assets/images/g2.png';
import g3 from '../../assets/images/g3.png';
import './Example.css';

// const data = [
//   {name: "SHIRLEY FULTZ"}
// ];

// const Example = (props) => {
const Example = () => {
  //   constructor(){
  //   super()
    
  //   this.state = {
  //       name: "SHIRLEY FULTZ",
  //       blogger: "Designer",
  //       title: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site"
  //   }
  // }
  //render(){
    const [nameDesigner, setName] = useState("SHIRLEY FULTZ");
    const [nameDesignerOne, setNameOne] = useState("Daniel Keystone");
    const [nameDesignerTwo, setNameTwo] = useState("Theo Sorel");
   
    return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={g1} />
            <div className="myCarousel">
              <h3>{nameDesigner}</h3>
              <h4>Designer</h4>
              <p>
              It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site
              </p>
            </div>
          </div>
  
          <div>
            <img src={g2} />
            <div className="myCarousel">
              <h3>{nameDesignerOne}</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I highly
                recommend Fetch to my peers.
              </p>
            </div>
          </div>
  
          <div>
            <img src={g3} />
            <div className="myCarousel">
              <h3>{nameDesignerTwo}</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      );
    }
  // }

export default Example;
  
const element = <Text brand="I enjoy catching up"/>;