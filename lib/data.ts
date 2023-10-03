import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaDev, FaJava, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Java Developer",
    location: "Forty Niner, Long Beach, CA",
    description:
      "Led the Development and ongoing maintenance of the Forty-Niner web portal and successfully executed a migration process, upgrading the app to the latest versions of Angular utilizing functional components.Built and deployed a lightweight Web Application using Angular and Spring which made organizational tasks easy and significantly improved productivity by 25%. Building Single Page Applications (SPA) with optimized SLA loading times for interfaces, leveraging Angular, HTML, CSS, TypeScript, and Bootstrap. Additionally, I have created reusable components, custom modules, directives, pipes, and services within the Angular framework. Designed and deployed new microservices, executed enhancements, and effectively addressed defects and bugs, leading to a resulting 20% decrease in application errors and the enhancement of system stability. Worked with dynamic routing of microservice applications using Spring Boot and Spring cloud gateway applications, while handling all the requests. Experience with service registry predominantly Eureka to maintain consistency and load balancing among the cluster of servers using replication protocols. Ensured robust security measures by implementing Spring Boot and Spring Security(JWT), achieving a 95% reduction in security vulnerabilities and ensuring data protection. Automated the entire process of payment transfer using Spring achieving a remarkable 90% reduction in overall processing time and increased the productivity of program coordinators. Experienced in implementing and maintaining continuous integration (CI) and delivery pipelines using Jenkins. Conducted a comprehensive re-design of MYSQL database schema such that the database is efficient, understandable, and normalized and to facilitate easy comprehension for new developers joining the project. Developed server-side application to interact with database using Spring Boot and Spring Data JPA. Conducted a thorough refactoring of the codebase, adhering to SOLID design principles to enhance maintainability. Successfully decomposed the monolithic app into multiple microservices promoting modularity and scalability. ",
    icon: React.createElement(FaAngular),
    date: "FEB 2022 - APRIL 2023",
  },
  {
    title: "Software Engineer",
    location: "Accenture, Hyderabad, India",
    description:
      "Delivered RESTful Web APIs using Spring Boot and Spring framework. Utilized Microservices architecture, employing an API Gateway to manage and coordinate the overall architecture. Using Angular 8 for creating dynamic web pages for the applications and in using Angular services, templates, directives, and dependency injections to create Single Page Applications. Capable of developing reusable life cycle hooks to the application to add more flexibility and functionality. Developed multiple reusable components in Angular and React JS reducing code duplication and ensuring consistency. Implemented Spring MVC using Spring Controller, resulting in a 25% improvement in request handling and response time. Conducted code reviews adhering to clean coding standards and applied SOLID design principles and appropriate Design patterns to enhance code quality, maintainability, and extensibility. Used Spring JPA for communicating with MySQL database through Docker. Designed and established an Azure DevOps CI/CD workflow for the application to ensure efficient deployment.  Designed and implemented a robust data ingestion pipeline that interfaces and ingests data from external sources outside the organization and ensured seamless and efficient integration. Used CLI to drive all microservices builds out to the Docker Image and then deployed to Kubernetes Pods and managed using Kubernetes for Auto-Scaling and Load Balancing by configuring YAML file.  Implementing Test-Driven Development (TDD) best practices into code to ensuring comprehensive test coverage and actively participated in Project Requirement discussions, Architecture decisions and Design reviews. Involved in writing JUnit and Mockito test cases and day-to-day builds and deployments.",
    icon: React.createElement(FaAngular),
    date: "JULY 2020 – DEC 2021",
  },
  {
    title: "Associate Software Engineer",
    location: "Accenture, Hyderabad, India",
    description:
      "Employed automation techniques to optimize and streamline financial processing operations, resulting in a remarkable 80% decrease in the time required to complete the Insurance processing. Reshaped Angular components into a reusable NPM package by developing loosely coupled components. Improved modularity and reusability across projects. Worked extensively on creating controllers, Interfaces and execution classes utilizing Spring MVC structure. Implemented Microservices architecture for the creation of independent components utilizing Spring Boot for consuming RESTful services. Implemented Spring Security using Spring JWT to securely communicate JSON objects. Migrated from Spring JDBC to Spring Data JPA as the ORM framework to connect with Oracle Database. Extensively worked on Jenkins to implement continuous integration (CI) and Continuous deployment (CD) processes. Kubernetes is being used to orchestrate the deployment, scaling, and management of Docker. Implement a production ready, load-balanced, available, and fault-tolerant Kubernetes infrastructure. Incorporated Test-Driven Development (TDD) best practices into code along with unit testing and Integration testing (Selenium) to ensure functional correctness.",
    icon: React.createElement(FaAngular),
    date: "JUNE 2019 – JULY 2020",
  },
  {
    title: "Java Developer Intern",
    location: "Lexcion Infotech, Hyderabad, TX",
    description:
      "Developed front-end UI design implementations by writing HTML5, CSS3, and TypeScript to make better Single Page Application SPA working on Angular. Used JDBC for communicating with SQL database. Created and implemented SQL queries for retrieving the data from the database. Involved in configuration management setup using the repository and build management using Maven. Participated in coding Spring components for the Logging, Exception handling, and Transactional Model to handle many requests.",
    icon: React.createElement(FaAngular),
    date: "JUNE 2018 – MAY 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "Python",
  "Angular",
  "TypeScript",
  "React.js",
  "JSP",
  "Spring Framework",
  "Spring Boot",
  "Spring AOP",
  "Spring JPA",
  "Hibernate",
  "Spring Cloud API Gateway",
  "REST",
  "Postman",
  "Swagger API",
  "MySQL",
  "Oracle",
  "Mongo DB",
  "Jenkins",
  "Github",
  "Git",
  "Terraform",
  "S3",
  "IAM",
  "EC2",
  "ECS",
  "Docker",
  "Azure Devops",
  "Kubernetes",
  "MicroServices",
  "JUnit",
  "Mockito",
  "Postman",
  "Maven",
  "Gradle",
  "Selenium",
  "XML",
] as const;
export const educationData = [
  {
    title: "Masters In Computer Science",
    location: "California State University, Long Beach, CA",
    description:
      "Relevant Coursework: Data Structures, Advanced Design and Anlysis of Algorithms, Database Management Systems,Object-Oriented analysis and design, Distributed Systems, Computer Networks, Operating Systems, Computer Organization and Architecture, Machine Learning, Artificial Intelligence, Pattern Recognition.",
      icon: React.createElement(LuGraduationCap),
    date: "JAN 2022 - MAY 2023",
  },
  {
    title: "Bachelors In Information Technology",
    location: "Sreenidhi Institute of Science & Technology, Hyderabad, INDIA",
    description:
      "Relevant Coursework:  Cloud Technologies, Design and Anlysis of Algorithms, Database Management Systems, Advanced Java and design, Python, Computer Networks, Operating System, Computer Organization and Architecture.",
      icon: React.createElement(LuGraduationCap),
    date: "JUNE 2016 - MAY 2019",
  }] as const;