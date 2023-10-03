"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Full Stack Java Developer</span>{" "} with <span className="font-medium">5 years</span> of professional experience, specializing in the development of scalable and maintainable software solutions.
        My track record demonstrates a consistent ability to deliver top-notch solutions that align with business requirements and enhance user experiences. 
        My expertise spans various aspects of technology, including a strong command of Java, ranging from the standardized <span className="font-medium">Java 8</span> to the latest <span className="font-medium">Java 17</span>. 
        In terms of backend technologies, I am well-versed in a broad array of the <span className="font-medium">Spring framework</span>, encompassing<span className="font-medium"> Spring Boot, Spring Security, Spring MVC, Spring IOC, Spring AOP,</span> and <span className="font-medium">Spring Data JPA</span>. 
        My background includes working with front-end technologies such as  <span className="font-medium">HTML, CSS, JavaScript, TypeScript, RXJS, React JS,</span> and <span className="font-medium">Angular</span>. 
        I also possess proficiency in working with diverse databases, including <span className="font-medium">Oracle, MySQL</span>, and <span className="font-medium">MongoDB</span>. 
        For seamless Rest API testing, I utilize Postman and have adeptly implemented Swagger UI. CI/CD pipeline involves leveraging <span className="font-medium">Azure Devops</span> and <span className="font-medium">Jenkins</span> for efficient deployment processes. 
        Additionally, I possess an intermediate level of knowledge in <span className="font-medium">Python</span>. 
        My professional journey has enabled me to effectively utilize AWS services such as ECS, EC2, and Kubernetes and I also make use of JUnit and JMockito for robust testing practices.
        I am genuinely enthusiastic about continuous learning and eagerly embrace new technologies. I am focused on exploring platforms like <span className="font-medium">AWS, Azure</span>, and <span className="font-medium">GCP</span>, leveraging their capabilities to creatively solve intricate challenges.
        {" "}
        I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Full-time position</span> as a Full Stack Java
        developer.
      </p>

     
    </motion.section>
  );
}
