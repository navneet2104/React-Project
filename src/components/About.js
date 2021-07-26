import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h1>Computer Vision</h1>
            <p>
              Incorporate all your requirements into a tailored CV solution
               on time and within budget
            </p>
            
            <div className="about__btn">
              <a href="https://en.wikipedia.org/wiki/Computer_vision" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6 p-25">
            <h1>OCR</h1>
            <p>
            Work before your custom solution with our data science company that will 
              address your challenges and save your time.
            </p>
            <br></br>
            <div className="about__btn">
              <a href="https://paperlessproductivity.com/solutions/ocr-data-capture/" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6 p-25">
            <h1>NLP</h1>
            <p>
            Unlock rich audience insights that will help you to react to any business changes as fast as possible.
            </p>
            <br></br>
            <div className="about__btn">
              <a href="https://en.wikipedia.org/wiki/Natural_language_processing#:~:text=Natural%20language%20processing%20(NLP)%20is,amounts%20of%20natural%20language%20data." className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
