

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/header.jpg";



export const Banner = () => {
    // for animations 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "-Software Engineering","-Creativity","-People", ];
    const [text, setText] = useState('');
    const period = 1000;
    // a state to help us in useeffect
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    // running this function 
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);

        return () => { clearInterval(ticker) };
  }, [text])

//   defining tick function here
const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '-') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}


    return (
        <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome!</span>
                <h1>{ "Hi! I'm Brandon" }</h1> <h1> <span className="wrap"> {text} </span> </h1>
                  <p>  Brandon is a Junior at UC Berkeley major in Electrical Engineering and Computer Science with a passion for the intersection between space and technology as well as building equitable spaces in engineering. With experience in data structures and algorithms, computer architecture, circuit design and analysis, as well as cryptography and computer security.</p>
                  <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/brandonpenilla/">
                  <button onClick={() => console.log('connect')}>Connect with me! <ArrowRightCircle size={25} /></button>
                  </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
    )
}