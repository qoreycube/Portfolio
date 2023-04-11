import React from 'react'
import { PrismicRichText, PrismicText, PrismicLink } from '@prismicio/react'
import styled from 'styled-components'
import { PrismicNextImage} from '@prismicio/next';
import { Bounded } from "../../components/Bounded";
import clsx from "clsx";

let ProjectCard = styled.div`
  @media screen and (min-width: 768px) {
    flex:50%;
    
  }
  padding:24px;
`;
let Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
`
let ProjectTitle = styled.div`
  margin:12px 0;
  font-weight: bold;
  font-size: 18px;
`;

let ProjectDescription = styled.div`
`;

let ProjectImage = styled.div`
position: relative;
`;

let ProjectLeftCTA = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

let ProjectRightCTA = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

/**
 * @typedef {import("@prismicio/client").Content.ProjectSlice} ProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectSlice>} ProjectProps
 * @param { ProjectProps }
 */
const ProjectList = ({ slice }) => {
  return (
    <section>
      <Bounded as="section" className="bg-white leading-relaxed">
        <Projects>
          <PrismicText field={slice.primary.text} />
          {slice.items.map(project => (
            <ProjectCard>
              <ProjectImage>
              
                <PrismicNextImage field={project.image} />
                { project.external_link != null && 
                <ProjectLeftCTA>
                   <PrismicLink
                      field={project.external_link}
                      className="PrimaryCTA"
                    >
                       <span className="visually-hidden">
                        {slice.primary.external_link_cta || "Website"}
                      </span>
                    </PrismicLink>
                </ProjectLeftCTA>
                }
                { project.internal_link != null && 
                <ProjectRightCTA>
                   <PrismicLink field={project.internal_link} className="PrimaryCTA">
                      <span className="visually-hidden">
                        {slice.primary.internal_link_cta || "Learn more"} 
                      </span>
                    </PrismicLink>
                </ProjectRightCTA>
                }
              </ProjectImage>
              <ProjectTitle>
                {project.title}
              </ProjectTitle>
              { project.description != null && project.description != "" && 
                <ProjectDescription>
                  <PrismicRichText field={project.description} />
                </ProjectDescription>
              }
            </ProjectCard>
          ))}
        </Projects>
      </Bounded>
    </section>
  );
}
export default ProjectList