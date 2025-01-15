import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ResumeSlice} ResumeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResumeSlice>} ResumeProps
 * @param { ResumeProps }
 */
const Resume = ({ slice }) => (
  <section className="font-consolas max-w-5xl mx-auto">
    <div>
         <div className="xl:grid xl:grid-cols-2 xl:gap-4 py-4 px-4 xl:px-8">
          	<div>
                <h4>Cory Kratz</h4>
                <h4>qoreycube .at. gmail.com</h4>
            </div>
            <div className="xl:text-right">
                <h5>Babbitt, MN</h5>
            </div>
        </div>
        <div className="py-4 px-4">
  					<div>
  							<div className="tblHeader">
  					        OVERVIEW
  							</div>
  							<div className="tblBody font-consolas px-4 py-1">
                    I am a passionate, hard working technologist who loves solving problems, whether it's for consultation, or software development. I am very self and team reliant while holding myself accountable to ensure deadlines. I enjoy helping others while always accepting constructive criticism to further myself and my team's knowledge.
  							</div>
            </div>
        </div>
        <div className="xl:grid xl:grid-cols-2 py-4 px-4 xl:px-8">
  					<div className="px-4">
  							<div className="tblHeader">
  								EDUCATION - 1999-2002
  							</div>
  							<div className="tblBody px-4 py-1">
                    <span className="font-bold">Degree: </span>Bachelor of Science<br />
                    <span className="font-bold">Major: </span>Computer Science<br />
                    <span className="font-bold">Minor: </span>Mathematics<br />
  							    <span className="font-bold">College: </span>Bemidji State University<br />
  							</div>
                <div>
                  <br />
                </div>
                <div className="tblHeader">
  								OPERATING SYSTEM EXPERIENCE
  							</div>
  							<div className="tblBody px-4 py-1">
                    Windows 11 and below / WSL <br />
                    Windows Phone 7-10 <br />
                    Apple iOS <br />
                    Android <br />
                    UNIX/Linux flavors<br />
  							</div>
  					</div>
  					<div className="px-4">
              <div className="tblHeader">
                TECHNOLOGY EXPERIENCE
              </div>
              <div className="tblBody px-4 py-1">
                ASP.NET WebForms &amp; MVC, JavaScript, PHP
                SSRS, VBScript, Three.js, 
                ESRI Javascript API, Python (arcpy)
                C, C++, C#, VB, VBA, Access, Java, 
                HTML5, XML, JSON, SQL/Relational DBs
                Microsoft Office/Visual Studio, Node.js, Tailwind,
                Styled Components, Next.js, Gatsby
              </div>
              <div>
                  <br />
              </div>
              <div className="tblHeader">
                  BUSINESS SKILLS
              </div>
              <div className="tblBody px-4 py-1">
                Excellent communication skills<br />
                Team player, Fluent in MS Office<br />
                Accountability<br />
              </div>
  					</div>
  			</div>
        <div className="px-4">
            <div>
                <div className="tblHeader">
                  WORK EXPERIENCE
                </div>
                <div className="tblBody px-4">
                  <div>
                    2016-Present - Designory - Chicago IL (Telecommuter)
                  </div>
                  <div className="px-4 py-4">
                    <span className="font-bold">Current Title: Associate Director, Technology </span><br />
                    <span className="font-bold">Prev Title(s): Architect, Technology &amp; Lead Engineer, Technology &amp; Senior Engineer, Technology &amp; Engineer, Technology </span><br /><br />
                    <span className="font-bold">OVERVIEW: </span> I'm currently an associate director (technology) for Omnicom Production, previously known as Designory/EG+ and manage a team of software engineers. Our primary focus is Web Application Development, CMS based development, and general technology consultation work for fortune 500 companies.<br /><br />
                    <div className="font-bold">CERTIFICATIONS: Sitecore 9.x Certified</div>
                    <div className="font-bold pt-4 ">Client List: </div>
                    <div className="pb-2 px-4">
                      HP
                      <ul className="list-disc px-8" >
                          <li>Managed a team of developers that supported building a multitude of landing pages, interactive decisionators, and other 3D interactive pages</li>
                          <li> https://www.hp.com/us-en/services/workforce-solutions/workforce-computing/managed-device-services-calculator.html </li>
                          <li> (ask for a demo of other resources)</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Komatsu
                      <ul className="list-disc px-8" >
                          <li>Supported a complete site redesign and restructure, building a brand new branded site on a new instance of Sitecore 9.3</li>
                          <li>Full stack development of C# ASP.net MVC and Vue.js frontend</li>
                          <li>https://www.komatsu.com/ </li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Nissan
                      <ul className="list-disc px-8" >
                          <li>Created a 3D image on demand car configurator, utilized pre-existing assets and integrated with Unity (Forma) to generate new assets on demand</li>
                          <li>Integrated car configurator with Jira to report and track issues with assets for a full end to end image asset review tool</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Subaru
                      <ul className="list-disc px-8" >
                          <li>Modified Nissan Web Configurator to align with staticly generated assets based on a specific folder structure for reviewing 3D generated images of vehicles</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Case IH 
                      <ul className="list-disc px-8" >
                          <li>General consultation of Sitecore/Sharepoint integrations, microsite website builds, and campaign landing page development</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Regal Cinemas
                      <ul className="list-disc px-8" >
                          <li>Supported and maintained a Sitecore based CMS system, with webform backend custom controls, and worked through ADA compliance issues</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Russel Reynolds and Associates
                      <ul className="list-disc px-8">
                          <li> Developed and maintained their marketing website built on an on premesis version of Sharepoint Web Development, utilized like a CMS</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Cisco Systems
                      <ul className="list-disc px-8">
                          <li> Node.js based front end, utilizing a build system to generate static html using a MVC type framework.</li>
                      </ul>
                    </div>
                    <div className="pb-2 px-4">
                      Merck   
                      <ul className="list-disc px-8">
                          <li> Sitecore based CMS, built from the ground up using MVC renderings and ASP.NET backend technologies.</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    2012-2016 - Pro-West &amp; Associates - Walker MN (Telecommuter)
                  </div>
                  <div className="px-4 py-4">
                    <span className="font-bold">Title: Senior Programmer / Programmer </span><br /><br />
                    <span className="font-bold">OVERVIEW: </span>Engaged in a small-knit group of programmers, focused on developing customized responsive web applications leveraging ESRI Web Mapping/Javascript API technologies.<br /><br />
                    <span className="font-bold">ACHIEVEMENTS: </span>
                    <ul className="list-disc px-8">
                      <li>Developed and maintained the following types of web applications:</li>
                      <ul className="list-disc px-4">
                        <li>C# Web-Form based Permitting applications for Counties</li>
                        <li>Dojo MVC based Infrastructure maintenance and inspection applications</li>
                        <li>C# MVC bassed Chemistry data collection and reporting application</li>
                        <li>Python Scripting for automated data download, processing, and insertion into SQL databases</li>
                        <li>Dojo MVC with a Node.js build system - Sign maintenance, inspection applications for various counties.</li>
                      </ul>
                      <li> Created a multi-threaded Windows C# Service to watch, process, maintain, and log a printing queue. </li>
                      <li> Developed a C# Service to send email notifications based on certain criteria. </li>
                    </ul>
                  </div>
                  <div>
                    2003-2012 - Carlson Wagonlit Travel / CWTSatoTravel - Ely MN
                  </div>
                  <div className="px-4 py-4">
                    <span className="font-bold">Title: TTS Manager / TTS Supervisor / TTS Trainer / TTS Lead </span><br /><br />
                    <span className="font-bold">OVERVIEW: </span> I've held many positions within this company, finally achieving maanger of four call center locations. While using my programming knowledge for hobbies and where I could to help our team, I yearned for a position where my true passion lies, in programming.<br /><br />
                    <span className="font-bold">ACHIEVEMENTS: </span>
                    <ul className="list-disc px-8">
                      <li>Managed 4 call centers and an overall team of 104 employees.</li>
                      <li>Developed initiatives and goals for my individual teams to help decrease costs and increase revenue</li>
                      <li>Reorganized our civilian government department to ensure we are operating proactively and efficiently.</li>
                      <li>Initiated a Sharepoint site to house all commonly used documents between all call centers</li>
                      <li>Developed excel spreadsheets to include macro’s using VBA to produce reports more efficiently with little manual intervention</li>
                      <li>Created new processes as required for any new client implementations or requirements</li>
                      <li>Developed algorithms for our scripting department based on initiatives created for our team</li>
                      <li>Assisted with designing and developing a primitive Microsoft Access database for housing airline debit memo follow up.</li>
                      <li>Became a main point of contact for multiple multimillion dollar clients as well as subcontractors.</li>
                      <li>Increased productivity by over 30% while increasing revenue by 15% and decreasing costs by 9.3%</li>
                      <li>Worked and lead multiple global projects and earned the award of the number one site in all of NORAM, while this year fighting for the number one site globally throughout CWT.</li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <style>
      {`
        .font-bold {
          font-weight: bold;
        }
        .font-consolas {
          font-family: consolas;
        }
        .tblHeader {
          background-color: #ededed;
          border-radius: 3px 3px 0px 0px;
          border-top: 1px solid #bbbbbb;
          border-left: 1px solid #bbbbbb;
          border-right: 1px solid #bbbbbb;
          text-align: center;
          padding: 3px;
          color: #aaaaaa;
          font-weight: bold;
        }
        .tblBody {
          border-radius: 0px 0px 3px 3px;
          border-top: 1px solid #bbbbbb;
          border-bottom: 1px solid #bbbbbb;
          border-left: 1px solid #bbbbbb;
          border-right: 1px solid #bbbbbb;
        }

`}
    </style>
  </section>
)

export default Resume