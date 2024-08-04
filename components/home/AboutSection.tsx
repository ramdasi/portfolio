import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center snap-start h-screen py-20  text-white"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="text-lg max-w-3xl mb-8">
        I'm a Full Stack Developer with a strong foundation in JavaScript,
        TypeScript, Node.js, React.js, and Next.js. I have a passion for
        building responsive and user-friendly web applications. With experience
        in cloud technologies like AWS, I've also designed and implemented
        scalable microservices architectures.
      </p>
      <Tabs defaultValue="languages" className="w-full max-w-3xl">
        <TabsList className="flex justify-center">
          <TabsTrigger
            value="languages"
            className="px-4 py-2 text-lg font-medium"
          >
            <Button>Languages & Frameworks</Button>
          </TabsTrigger>
          <TabsTrigger
            value="databases"
            className="px-4 py-2 text-lg font-medium"
          >
            <Button>Databases</Button>
          </TabsTrigger>
          <TabsTrigger value="cloud" className="px-4 py-2 text-lg font-medium">
            <Button>Cloud & DevOps</Button>
          </TabsTrigger>
          <TabsTrigger
            value="messaging"
            className="px-4 py-2 text-lg font-medium"
          >
            <Button>Messaging & Payment</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="languages">
          <ul className="list-disc list-inside mt-4 text-left">
            <li>JavaScript, TypeScript</li>
            <li>Node.js, React.js, Express.js, Next.js</li>
            <li>Bootstrap, Tailwind CSS</li>
          </ul>
        </TabsContent>
        <TabsContent value="databases">
          <ul className="list-disc list-inside mt-4 text-left">
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </TabsContent>
        <TabsContent value="cloud">
          <ul className="list-disc list-inside mt-4 text-left">
            <li>AWS (Lambda, Elastic Beanstalk, S3, Serverless)</li>
            <li>Docker</li>
            <li>CI/CD pipelines</li>
          </ul>
        </TabsContent>
        <TabsContent value="messaging">
          <ul className="list-disc list-inside mt-4 text-left">
            <li>RabbitMQ</li>
            <li>Twilio (Video, Voice, SMS)</li>
            <li>Stripe, PhonePe</li>
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AboutSection;
