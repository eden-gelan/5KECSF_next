
import React from "react";
import  BackToResult from "../../components/single/backToResult"
import Overview from "../../components/single/overview"
import PublishDate from "../../components/single/publishDate"
import Preview from "../../components/single/preview"
import BookDetail from "../../components/single/bookDetail";
import About from "../../components/single/about";

import Footer from "../../components/common/footer";
import Commmunity from "@/components/single/community";
import HomeFooter from "@/components/home/homeFooter";
import Header from "@/components/common/header";
const SingleBook = () => {
  return (
    <div className="     ">
     <Header/>
      <section className =" bg-whitesmoke-200 rounded-3xs m-5 ">
    
          
          <p className="py-5 px-3">
            Back to results
          </p>
    
          <BackToResult/>
          
          
         <Overview/>
          <PublishDate/>
         <Preview/>
          <div className="grid grid-cols-1 mt-8 mx-auto md:grid-cols-2">
              <BookDetail/>
            <div>
              <About/>
              <Commmunity/>
            </div>
          </div>

        
      </section>
      <HomeFooter/>
    </div>
  );
};

export default SingleBook;
