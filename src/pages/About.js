import React from "react";
import Layout from "./../components/layout/Layout";
import { BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Layout title={"About us - ACVenture"}>
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/about.jpeg"
            alt="contacus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 content ">
          <p className="text-justify mt-2 ">
            <h2>About ACVenture </h2>
          
            Welcome to ACVenture, where your
            online shopping experience meets quality, style, and convenience. We
            are more than just an e-commerce platform; we are a team of
            passionate individuals committed to providing you with a seamless
            and enjoyable shopping journey. 
           
          </p>
          <br/>
          <p className="text-justify mt-2 ">
            <h2>Our Story </h2>
            
            ACVenture was founded in 2023 by <b>AC</b>
            . The idea was simple: create an online marketplace that brings
            together quality products from around the world, providing customers
            with a one-stop-shop for their diverse needs. Since then, we've
            grown into a trusted online destination for thousands of shoppers.
            <br /> <br />
            <h2>Join Our Community </h2>
            We invite you to be a part of the ACVenture community. Follow us on{" "}
            <BiLogoInstagram /> Instagram for the latest updates, promotions,
            and behind-the-scenes glimpses of our journey.
            <br /> <br />
            Thank you for choosing ACVenture. We appreciate your trust in us and
            look forward to being your preferred online shopping destination.
            <br /> 
            <div>
              <h3>Happy Shopping!</h3>{" "}
            </div>
            <br /> 
            <Link to="/" className="navbar-brand">
              ACVenture
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
