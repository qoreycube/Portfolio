import * as prismicH from "@prismicio/helpers";
import { useEffect, useRef } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import styled from 'styled-components';

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const HeroContainer = styled.div`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 768px) {
    height: 400px;

  }
`;

const TypewriterContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  @media screen and (min-width: 768px) {
    height: 400px;

  }
`;

const Typewriter = styled.h1`
  font-size: 24px;
  line-height: 16px;
 

  &::after {
    content: "";
    width: 4px;
    height: 40px;
    background: #eee;
    display: inline-block;
    animation: cursor-blink 1s steps(2) infinite;
  }
  @keyframes cursor-blink {
    0% {
        opacity: 0;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 90px;
  }
`;

const Hero = ({ slice }) => {

  const typewriterRef = useRef();

  useEffect(() => {
    let initialText = "I am ";
    let placeHolderArray = [
        "an architect of technology",
        "a lead engineer",
        "a manager",
        "a full stack developer",
        "a back end developer",
        "a problem solver",
        "a woodworker",
        "a director",
        "a back of the front end developer",
        "a front end developer",
        "a husband",
        "a critical thinker",
        "a technologist",
        "a debugger",
        "a visionary",
        "a team leader",
        "a front of the frontend developer",
        "a father",
        "a multitasker",
        "a craftsman",
        "a code troubleshooter",
        "a leader",
        "a detail-oriented professional",
        "a software innovator",
        "a forward thinker",
        "a creative thinker",
    ];

    let i = 0;
    let speed = 75;
    let placedInitialText=false;
    let arrayIndex = 0;
    let arrayText = placeHolderArray[arrayIndex] + '...';
    let finishedText=false;
    let el = typewriterRef.current;
    let isRunning=false;
    function typeWriter() {
        if (!placedInitialText) {
            if (i < initialText.length) {
                el.innerHTML += initialText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);

            } else {
                placedInitialText=true;
                i=0;
                setTimeout(typeWriter, speed*10);

            }
            return;
        }
        if (placedInitialText) {
            if (!finishedText  && i< arrayText.length) {
                el.innerHTML += arrayText.charAt(i);
                i++;
                if (i == arrayText.length) {
                    finishedText=true;
                    setTimeout(typeWriter, speed*10);
                } else {
                    setTimeout(typeWriter, speed);
                }
            } else if (finishedText) {
                el.innerHTML = el.innerHTML
                    .slice(0,-1);
                i--;
                if (i==0) {
                    arrayIndex++;
                    if (arrayIndex == placeHolderArray.length) {
                        arrayIndex=0;
                    }
                    arrayText = placeHolderArray[arrayIndex] + '...';
                    finishedText=false;
                    setTimeout(typeWriter, speed*10);
                } else {
                    setTimeout(typeWriter, speed/2);
                }
            } else {
                setTimeout(typeWriter, speed);
            }
        }
    }
    if (!window.typewriterIsRunning) { // this a quick workaround to get around strict mode
      typeWriter();
      window.typewriterIsRunning=true;
    }
  }, []);

  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-slate-900 text-white">
      {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <HeroContainer>
        <TypewriterContainer>
          <Typewriter ref={typewriterRef} />
        </TypewriterContainer>
        
        {prismicH.isFilled.link(slice.primary.buttonLink) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicLink>
          )}
      </HeroContainer>
      
    </section>
  );
};

export default Hero;
