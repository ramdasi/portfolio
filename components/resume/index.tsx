import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SkillList from "@/components/SkillList";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AdditionalInfo from "@/components/AdditionalInfo";
import Interests from "@/components/Interests";
import SideNav from "@/components/SideNav";
import Education from "@/components/Education";
const skills = [
  {
    title: "Languages & Frameworks",
    details:
      "JavaScript, TypeScript, Python, Java, Node.js, React.js, Express.js, Next.js, Flask",
  },
  { title: "Styling", details: "Bootstrap, TailwindCSS, Antd, MaterialUI" },
  { title: "Databases", details: "MongoDB, Redis" },
  // Add more skills here
];

const experience = [
  {
    position: "Software Developer",
    company: "Asindia Innovations",
    duration: "Feb 2023 - Present",
    details: [
      ` Co-designed and developed the entire technical architecture for the company's primary product from inception, ensuring scalability, reliability, and performance.`,
      ` Built the core backend using Express.js, MongoDB, Node.js, and TypeScript. Developed RESTful APIs to facilitate seamless communication between services.`,
      ` Designed and implemented responsive, user-friendly interfaces using React.js and Bootstrap, enhancing user engagement and satisfaction.`,
      ` Established robust CI/CD pipelines and automated deployment processes using AWS services including Lambda, Elastic Beanstalk, Docker, S3, and Serverless, significantly reducing deployment time and errors.`,
      ` Developed and maintained a scalable microservices architecture using RabbitMQ and Redis, improving system modularity and performance.`,
      ` Integrated third-party services such as Twilio, Stripe, and Facebook services, adding valuable features and enhancing user experience.`,
    ],
  },
  // Add more experience entries here
];
const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "NBN Sinhgad School of Engineering, Pune",
    year: "2019 - 2023",
    cgpa: "8.82",
  },
  {
    degree: "HSC - Maharashtra State Board",
    institution: "Vaidyanath College, Parli",
    year: "2019",
    percentage: "70.00%",
  },
  {
    degree: "SSC - Maharashtra State Board",
    institution: "Vidyavardhini Vidyalaya, Parli",
    year: "2017",
    percentage: "92.00%",
  },
];
const Resume = ({ sections }: any) => {
  return (
    <div>
      <div className=" p-5">
        <Header />
        <Section {...sections[1]}>
          <p>
            Innovative and detail-oriented Full Stack Developer with
            comprehensive expertise in the MERN stack, AWS, CI/CD pipelines, and
            microservices architecture. Proven track record in designing and
            implementing complex technical solutions from the ground up. Seeking
            to leverage my skills and experience in a challenging role at a
            leading tech company.
          </p>
        </Section>
        <Section {...sections[2]}>
          <SkillList skills={skills} />
        </Section>
        <Section {...sections[3]}>
          <Experience experience={experience} />
        </Section>
        <Section {...sections[4]}>
          <Education education={education} />
        </Section>
        <Section {...sections[5]}>
          <Projects
            projects={[
              {
                name: "ConnectAi",
                description:
                  "Revolutionizing Healthcare with an Innovative Application",
                details: [
                  ` Designed and developed a cutting-edge application linking patients, clinics, and doctors to enhance healthcare delivery.`,
                  ` Integrated Twilio's Video Call service for virtual consultations, significantly reducing patient wait times and improving access to care.`,
                ],
              },
              {
                name: "Scrap Partner",
                description: "A Web-Based Platform for Scrap Recycling",
                details: [
                  ` Developed a platform to connect scrap collectors with recyclers using Next.js and Express.js.`,
                  ` Focused on creating APIs for seamless front-end and back-end integration, promoting environmental sustainability.`,
                ],
              },
              {
                name: "Your Scrap Buddy",
                description: "Landing Page Development",
                details: [
                  "Designed and developed a clean and user-friendly landing page for a scrap collection company, improving user satisfaction and operational efficiency.",
                ],
              },
            ]}
          />
        </Section>
        <Section {...sections[6]}>
          <AdditionalInfo
            additional={[
              {
                title: "Personal Projects",
                content:
                  "Active on LeetCode, solving complex problems to enhance algorithmic thinking and coding proficiency.",
              },
              {
                title: "Professional Links",
                content: "ConnectAi, Your Scrap Buddy",
              },
            ]}
          />
        </Section>
        <Section {...sections[7]}>
          <Interests
            interests={[
              "Solving algorithmic challenges on LeetCode",
              "Participating in tech meetups and hackathons",
              "Exploring new technologies and frameworks",
            ]}
          />
        </Section>
      </div>
    </div>
  );
};

export default Resume;
