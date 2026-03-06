import about_image_1 from "../assets/about_image_1.png";
import about_image_2 from "../assets/about_image_2.png";
import about_image_3 from "../assets/about_image_3.png";

const About = () => {
  return (
    <div>
    <h1>From Bihar to the World — and Back</h1>
    
    <p>Jinfra was founded by Ashutosh Aman, an infrastructure investor and engineer originally from Patna, Bihar, after more than 25 years of global experience across engineering, project finance, private equity, and infrastructure investing. After financing and investing in infrastructure projects across the United States, Europe, Africa, Middle East, and emerging markets, the journey has come full circle — to bring global best practices back to Bihar and help build longterm local capacity. Janarh Infrastructure is named after the founder’s ancestral village, reflecting a commitment that starts at the grassroots and scales outward.</p>
    
    <img src={about_image_1} alt="about_image_1" />
    <img src={about_image_2} alt="about_image_2" />
    <img src={about_image_3} alt="about_image_3" />
    </div>
    

  
  );
};

export default About;