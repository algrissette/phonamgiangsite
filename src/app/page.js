import Hero from "@/components/Home/hero";
import InfoOne from "@/components/Home/info-one";
import Navbar from "@/components/Home/navbar";
import SocialMedia from "@/components/Home/socialMedia";
import MenuCard from "@/components/Home/menu-card";
import InfoTwo from "@/components/Home/info-two";
import InfoThree from "@/components/Home/info-three";
import InfoFour from "@/components/Home/info-four";
import Footer from "@/components/Home/footer";

const Home = () => {
    return ( <div >
      
        <Navbar />
        <Hero />
        <InfoOne/>
        <SocialMedia/>
        <InfoTwo/>
        <InfoThree/>
        <InfoFour/>
        <Footer/>
       

       
        </div>
    );
};

export default Home;