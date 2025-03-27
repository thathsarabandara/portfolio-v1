import React, { useState ,useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hologram from '../../component/Hologram/Hologram';
import frontCertificate from '../../assets/images/certificates/meta-frontend/certificate.png'
import frontCourse1 from '../../assets/images/certificates/meta-frontend/course1.png';
import frontCourse2 from '../../assets/images/certificates/meta-frontend/course2.png';
import frontCourse3 from '../../assets/images/certificates/meta-frontend/course3.png';
import frontCourse4 from '../../assets/images/certificates/meta-frontend/course4.png';
import frontCourse5 from '../../assets/images/certificates/meta-frontend/course5.png';
import frontCourse6 from '../../assets/images/certificates/meta-frontend/course6.png';
import frontCourse7 from '../../assets/images/certificates/meta-frontend/course7.png';
import frontCourse8 from '../../assets/images/certificates/meta-frontend/course8.png';
import backCertificate from '../../assets/images/certificates/meta-backend/certificate.png';
import backCourse1 from '../../assets/images/certificates/meta-backend/course1.png';
import backCourse2 from '../../assets/images/certificates/meta-backend/course2.png';
import backCourse3 from '../../assets/images/certificates/meta-backend/course3.png';
import backCourse4 from '../../assets/images/certificates/meta-backend/course4.png';
import backCourse5 from '../../assets/images/certificates/meta-backend/course5.png';
import backCourse6 from '../../assets/images/certificates/meta-backend/course6.png';
import backCourse7 from '../../assets/images/certificates/meta-backend/course7.png';
import backCourse8 from '../../assets/images/certificates/meta-backend/course8.png';
import dbCertificate from '../../assets/images/certificates/meta-database/certificate.png';
import dbCourse1 from '../../assets/images/certificates/meta-database/course1.png';
import dbCourse2 from '../../assets/images/certificates/meta-database/course2.png';
import dbCourse3 from '../../assets/images/certificates/meta-database/course3.png';
import dbCourse4 from '../../assets/images/certificates/meta-database/course4.png';
import dbCourse5 from '../../assets/images/certificates/meta-database/course5.png';
import dbCourse6 from '../../assets/images/certificates/meta-database/course6.png';
import dbCourse7 from '../../assets/images/certificates/meta-database/course7.png';
import dbCourse8 from '../../assets/images/certificates/meta-database/course8.png';
import dbCourse9 from '../../assets/images/certificates/meta-database/course9.png';
import cyberCertificate from '../../assets/images/certificates/google-cyber/certificate.png';
import cyberCourse1 from '../../assets/images/certificates/google-cyber/course1.png';
import cyberCourse2 from '../../assets/images/certificates/google-cyber/course2.png';
import cyberCourse3 from '../../assets/images/certificates/google-cyber/course3.png';
import cyberCourse4 from '../../assets/images/certificates/google-cyber/course4.png';
import cyberCourse5 from '../../assets/images/certificates/google-cyber/course5.png';
import cyberCourse6 from '../../assets/images/certificates/google-cyber/course6.png';
import cyberCourse7 from '../../assets/images/certificates/google-cyber/course7.png';
import cyberCourse8 from '../../assets/images/certificates/google-cyber/course8.png';
import projectCertificate from '../../assets/images/certificates/google-project/certificate.png';
import projectCourse1 from '../../assets/images/certificates/google-project/course1.png';
import projectCourse2 from '../../assets/images/certificates/google-project/course2.png';
import projectCourse3 from '../../assets/images/certificates/google-project/course3.png';
import projectCourse4 from '../../assets/images/certificates/google-project/course4.png';
import projectCourse5 from '../../assets/images/certificates/google-project/course5.png';
import projectCourse6 from '../../assets/images/certificates/google-project/course6.png';
import genAICertificate from '../../assets/images/certificates/ibm-genai-software/certificate.png';
import genAICourse1 from '../../assets/images/certificates/ibm-genai-software/course1.png';
import genAICourse2 from '../../assets/images/certificates/ibm-genai-software/course2.png';
import genAICourse3 from '../../assets/images/certificates/ibm-genai-software/course3.png';
import aiforSoftCertificate from '../../assets/images/certificates/ibm-aiFound-every/certificate.png';
import aiforSoftCourse1 from '../../assets/images/certificates/ibm-aiFound-every/course1.png';
import aiforSoftCourse2 from '../../assets/images/certificates/ibm-aiFound-every/course2.png';
import aiforSoftCourse3 from '../../assets/images/certificates/ibm-aiFound-every/course3.png';
import aiforSoftCourse4 from '../../assets/images/certificates/ibm-aiFound-every/course4.png';
import aiDevolopCertificate from '../../assets/images/certificates/ibm-aiDeveloper/certificate.png';
import aiDevolopCourse1 from '../../assets/images/certificates/ibm-aiDeveloper/course1.png';
import aiDevolopCourse2 from '../../assets/images/certificates/ibm-aiDeveloper/course2.png';
import aiDevolopCourse3 from '../../assets/images/certificates/ibm-aiDeveloper/course3.png';
import aiDevolopCourse4 from '../../assets/images/certificates/ibm-aiDeveloper/course4.png';
import aiDevolopCourse5 from '../../assets/images/certificates/ibm-aiDeveloper/course5.png';
import aiDevolopCourse6 from '../../assets/images/certificates/ibm-aiDeveloper/course6.png';
import aiDevolopCourse7 from '../../assets/images/certificates/ibm-aiDeveloper/course7.png';
import aiDevolopCourse8 from '../../assets/images/certificates/ibm-aiDeveloper/course8.png';
import aiDevolopCourse9 from '../../assets/images/certificates/ibm-aiDeveloper/course9.png';
import aiDevolopCourse10 from '../../assets/images/certificates/ibm-aiDeveloper/course10.png';
import fullStackCertificate from '../../assets/images/certificates/ibm-fullstack/certificate.png';
import fullStackCourse1 from '../../assets/images/certificates/ibm-fullstack/course1.png';
import fullStackCourse2 from '../../assets/images/certificates/ibm-fullstack/course2.png';
import fullStackCourse3 from '../../assets/images/certificates/ibm-fullstack/course3.png';
import fullStackCourse4 from '../../assets/images/certificates/ibm-fullstack/course4.png';
import fullStackCourse5 from '../../assets/images/certificates/ibm-fullstack/course5.png';
import fullStackCourse6 from '../../assets/images/certificates/ibm-fullstack/course6.png';
import fullStackCourse7 from '../../assets/images/certificates/ibm-fullstack/course7.png';
import fullStackCourse8 from '../../assets/images/certificates/ibm-fullstack/course8.png';
import fullStackCourse9 from '../../assets/images/certificates/ibm-fullstack/course9.png';
import fullStackCourse10 from '../../assets/images/certificates/ibm-fullstack/course10.png';
import fullStackCourse11 from '../../assets/images/certificates/ibm-fullstack/course11.png';
import fullStackCourse12 from '../../assets/images/certificates/ibm-fullstack/course12.png';
import fullStackCourse13 from '../../assets/images/certificates/ibm-fullstack/course13.png';
import fullStackCourse14 from '../../assets/images/certificates/ibm-fullstack/course14.png';
import fullStackCourse15 from '../../assets/images/certificates/ibm-fullstack/course15.png';
import dcaCertificate from '../../assets/images/certificates/ibm-dca-foundation/certificate.png';
import dcaCourse1 from '../../assets/images/certificates/ibm-dca-foundation/course1.png';
import dcaCourse2 from '../../assets/images/certificates/ibm-dca-foundation/course2.png';
import dcaCourse3 from '../../assets/images/certificates/ibm-dca-foundation/course3.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const professionalCertificates = [
  {
    id: 1,
    institute: "Meta",
    name: "FrontEnd Developer",
    descrip: "The Meta Frontend Developer Professional Certificate program is a comprehensive, hands-on learning path designed to equip learners with the essential skills and tools needed to build interactive and modern web applications. This program covers everything from foundational HTML and CSS to advanced JavaScript and React development. Students will gain practical experience through coding exercises, projects, and real-world applications while also learning best practices in version control, UI/UX principles, and performance optimization. Upon completion, learners will be prepared for entry-level frontend development roles and will have a portfolio of projects to showcase their skills.",
    image: frontCertificate,
    verify: "https://coursera.org/verify/professional-cert/LPNIZ6X525B0",
    courses: [
      {
        "id": 201,
        "name": "Introduction to Frontend Development",
        "image": frontCourse1,
        "details": "This course introduces students to the basics of frontend development, including HTML, CSS, and JavaScript. They will learn how web browsers render pages, how to structure HTML documents properly, and how to style them using CSS. The course also covers essential development tools and provides insights into frontend career opportunities.",
        "skills": ["HTML", "CSS", "JavaScript", "Web Development Basics"],
        "verify": "https://coursera.org/verify/UHD7G293WRJG",
      },
      {
        "id": 202,
        "name": "Programming with JavaScript",
        "image": frontCourse2,
        "details": "This course is designed to give a strong foundation in JavaScript programming. Students will learn about variables, data types, functions, loops, and objects. The course also introduces ES6+ features like arrow functions, destructuring, and promises. Hands-on exercises will include DOM manipulation, event handling, and form validation.",
        "skills": ["JavaScript", "ES6", "DOM Manipulation", "Event Handling"],
        "verify": "https://coursera.org/verify/UHD7G293WRJG",
      },
      {
        "id": 203,
        "name": "Version Control",
        "image": frontCourse3,
        "details": "Students will gain hands-on experience with Git and GitHub, learning essential version control concepts like commits, branching, merging, and resolving conflicts. The course also covers remote repositories, pull requests, and collaborative workflows, preparing students to work effectively in team environments.",
        "skills": ["Git", "GitHub", "Version Control", "Collaboration"],
        "verify": "https://coursera.org/verify/BLNGAGKUY3MR",
      },
      {
        "id": 204,
        "name": "HTML and CSS in Depth",
        "image": frontCourse4,
        "details": "This advanced course dives deeper into modern HTML and CSS techniques. Students will explore topics such as semantic HTML, responsive design, Flexbox, CSS Grid, animations, and transitions. They will build complex, visually appealing web layouts while following accessibility and performance best practices.",
        "skills": ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
        "verify": "https://coursera.org/verify/KJFW5CVDCFL5",
      },
      {
        "id": 205,
        "name": "React Basics",
        "image": frontCourse5,
        "details": "An introduction to React.js, this course covers the fundamentals of building dynamic user interfaces. Students will learn about JSX, components, props, and state management. They will build small applications to understand how React simplifies UI development and improves performance.",
        "skills": ["React", "JSX", "Components", "State Management"],
        "verify": "https://coursera.org/verify/BJ45KXRWYEV3",
      },
      {
        "id": 206,
        "name": "Advanced React",
        "image": frontCourse6,
        "details": "This course builds on React basics by introducing advanced concepts like hooks, the Context API, and state management strategies. Students will also learn about performance optimization, lazy loading, and server-side rendering techniques to build high-performance React applications.",
        "skills": ["React Hooks", "Context API", "Performance Optimization", "Server-side Rendering"],
        "verify": "https://coursera.org/verify/3C6HUWE3ERTM",
      },
      {
        "id": 207,
        "name": "Principles of UX/UI Design",
        "image": frontCourse7,
        "details": "A comprehensive introduction to UX/UI design, this course covers the fundamentals of creating user-friendly and aesthetically pleasing interfaces. Topics include wireframing, usability testing, accessibility, typography, color theory, and the use of design tools like Figma or Adobe XD.",
        "skills": ["UI/UX Design", "Wireframing", "Usability Testing", "Accessibility"],
        "verify": "https://coursera.org/verify/XVTGLV85UDCE",
      },
      {
        "id": 208,
        "name": "Frontend Developer Capstone Project",
        "image": frontCourse8,
        "details": "This final course allows students to apply all the skills they have learned throughout the program by building a complete frontend application. The project will include API integration, responsive design, state management, and performance optimizations. Students will create a portfolio-worthy application demonstrating their frontend development expertise.",
        "skills": ["Full-Stack Development", "React", "REST APIs", "Project Management"],
        "verify": "https://coursera.org/verify/DF3TS2KUST4G",
      },
      {
        "id": 209,
        "name": "Coding Interview Preparation",
        "image": backCourse8,
        "details": "This course prepares students for technical interviews by covering common data structures, algorithms, and problem-solving techniques. Topics include arrays, linked lists, trees, recursion, dynamic programming, and system design. Students will practice coding challenges and mock interviews.",
        "skills": ["Data Structures", "Algorithms", "Problem-Solving", "System Design"],
        "verify": "https://coursera.org/verify/3CSVV6DCXHXX",
      }
    ],
  },
  {
    id: 2,
    institute: "Meta",
    name: "Backend Developer",
    descrip: "The Meta Backend Developer Professional Certificate is designed for learners who want to master backend development using modern tools and frameworks. This program covers essential backend technologies such as Python, Node.js, and Express.js, while also focusing on database management, authentication, and API development. Learners will gain hands-on experience building secure and scalable backend systems and integrating them with frontend applications. By the end of the course, students will have built real-world projects to showcase their expertise in backend development.",
    image: backCertificate,
    verify: "https://coursera.org/verify/professional-cert/PYJ9C4DHD6FS",
    courses: [
      {
        "id": 301,
        "name": "Introduction to Backend Development",
        "image": backCourse1,
        "details": "This course introduces students to the fundamentals of backend development. Topics include how web servers process requests, HTTP protocols, database interactions, and how backend applications integrate with frontend systems. Students will also explore different backend technologies and frameworks used in the industry.",
        "skills": ["Backend Fundamentals", "HTTP Requests", "Web Servers"],
        "verify": "https://coursera.org/verify/K8FTLD42LM7V",
      },
      {
        "id": 302,
        "name": "Programming with Python",
        "image": backCourse2,
        "details": "A comprehensive introduction to Python programming. Students will learn about variables, data structures, functions, object-oriented programming (OOP), and working with Python libraries. The course also introduces Flask and Django for backend web development, covering routing, templating, and database integration.",
        "skills": ["Python", "Flask", "Django", "OOP"],
        "verify": "https://coursera.org/verify/SHQQQNKC67W5",
      },
      {
        "id": 303,
        "name": "Version Control",
        "image": backCourse3,
        "details": "This course covers the fundamentals of Git and version control. Students will learn about repository management, branching, merging, resolving conflicts, and working with remote repositories on GitHub. The course also covers best practices for collaborative development and open-source contributions.",
        "skills": ["Git", "GitHub", "Version Control", "Collaboration"],
        "verify": "https://coursera.org/verify/BLNGAGKUY3MR",
      },
      {
        "id": 304,
        "name": "Introduction to Databases for Back-End Development",
        "image": backCourse4,
        "details": "Students will learn about relational databases and SQL, including how to design schemas, write queries, and optimize database performance. Topics covered include indexing, transactions, and database normalization. The course will also introduce NoSQL databases and their use cases.",
        "skills": ["SQL", "PostgreSQL", "MySQL", "Database Management"],
        "verify": "https://coursera.org/verify/TNQD2GJ9E29K",
      },
      {
        "id": 305,
        "name": "Django Web Framework",
        "image": backCourse5,
        "details": "A deep dive into Django, one of the most popular Python web frameworks. Students will learn how to build full-stack web applications using Django’s built-in ORM, authentication system, and admin panel. Topics include REST API development, authentication, middleware, and deploying Django applications.",
        "skills": ["Django", "ORM", "Authentication", "Web Development"],
        "verify": "https://coursera.org/verify/CW9CWS3AVH9V",
      },
      {
        "id": 306,
        "name": "APIs",
        "image": backCourse6,
        "details": "This course focuses on designing and building APIs using REST and GraphQL. Students will learn about request handling, authentication mechanisms such as OAuth and JWT, API rate limiting, and best practices for API documentation and security.",
        "skills": ["REST APIs", "GraphQL", "Authentication", "Security"],
        "verify": "https://coursera.org/verify/XJUW9VWF10QJ",
      },
      {
        "id": 307,
        "name": "The Full Stack",
        "image": backCourse7,
        "details": "A comprehensive course that integrates frontend and backend development. Students will build a full-stack application using technologies like React, Node.js, Express, and MongoDB. The course covers API development, database integration, authentication, and deployment.",
        "skills": ["Full-Stack Development", "React", "Node.js", "Database Integration"],
        "verify": "https://coursera.org/verify/C78YYDNDIT5B",
      },
      {
        "id": 308,
        "name": "Back-End Developer Capstone",
        "image": backCourse8,
        "details": "A final project-based course where students apply their backend development skills to build a scalable and secure application. They will work with databases, authentication, and API development while following best practices for performance optimization and security.",
        "skills": ["Backend Development", "API Development", "Database Management", "Security"],
        "verify": "https://coursera.org/verify/YCZM2FLA106H",
      },
      {
        "id": 309,
        "name": "Coding Interview Preparation",
        "image": backCourse8,
        "details": "This course prepares students for technical interviews by covering common data structures, algorithms, and problem-solving techniques. Topics include arrays, linked lists, trees, recursion, dynamic programming, and system design. Students will practice coding challenges and mock interviews.",
        "skills": ["Data Structures", "Algorithms", "Problem-Solving", "System Design"],
        "verify": "https://coursera.org/verify/3CSVV6DCXHXX",
      }
    ],
  },
  {
    id: 3,
    institute: "Meta",
    name: "Database Engineer",
    descrip: "The Meta Database Engineer Professional Certificate is a specialized program designed for learners interested in database administration, optimization, and engineering. This course covers SQL, NoSQL databases, indexing, transactions, and data security. Students will learn how to design efficient data models, optimize queries, and manage large-scale data systems used in real-world applications. The program also introduces cloud database solutions and data migration techniques, preparing learners for roles such as database administrator, data engineer, or backend developer.",
    image: dbCertificate,
    verify: "https://coursera.org/verify/professional-cert/QTYTDBHAU8BA",
    courses: [
      {
        "id": 401,
        "name": "Introduction to Databases",
        "image": dbCourse1,
        "details": "An introductory course covering database fundamentals, relational vs. NoSQL databases, data modeling, and the importance of database management in modern applications.",
        "skills": ["Database Fundamentals", "Relational Databases", "NoSQL"],
        "verify": "https://coursera.org/verify/ZKNFCNMBUVKF",
      },
      {
        "id": 402,
        "name": "Version Control",
        "image": dbCourse2,
        "details": "This course provides an in-depth understanding of Git, GitHub, branching strategies, version history, merging conflicts, and collaborative development workflows.",
        "skills": ["Git", "GitHub", "Branching", "Collaboration"],
        "verify": "https://coursera.org/verify/BLNGAGKUY3MR",
      },
      {
        "id": 403,
        "name": "Database Structures and Management with MySQL",
        "image": dbCourse3,
        "details": "A hands-on course on MySQL, covering database design, schema creation, indexing, normalization, and performance tuning for efficient database management.",
        "skills": ["MySQL", "Schema Design", "Indexing", "Database Management"],
        "verify": "https://coursera.org/verify/Y9UGSB3KFAPS",
      },
      {
        "id": 404,
        "name": "Advanced MySQL Topics",
        "image": dbCourse4,
        "details": "This course explores advanced MySQL features such as stored procedures, triggers, partitioning, replication, and high-performance optimization techniques.",
        "skills": ["Stored Procedures", "Triggers", "Replication", "Performance Optimization"],
        "verify": "https://coursera.org/verify/458DDU9TXSER",
      },
      {
        "id": 405,
        "name": "Programming in Python",
        "image": dbCourse5,
        "details": "A comprehensive introduction to Python programming, covering syntax, data structures, OOP, file handling, and database interaction using MySQL and SQLite.",
        "skills": ["Python", "OOP", "Data Structures", "Database Interaction"],
        "verify": "https://coursera.org/verify/SHQQQNKC67W5",
      },
      {
        "id": 406,
        "name": "Database Clients",
        "image": dbCourse6,
        "details": "This course introduces popular database client tools such as MySQL Workbench, pgAdmin, MongoDB Compass, and DBeaver for efficient database management.",
        "skills": ["Database Clients", "MySQL Workbench", "pgAdmin", "DBeaver"],
        "verify": "https://coursera.org/verify/406AJ54GWTD3",
      },
      {
        "id": 407,
        "name": "Advanced Data Modeling",
        "image": dbCourse7,
        "details": "Students will learn advanced data modeling techniques, including entity-relationship modeling, normalization, denormalization, and designing scalable database schemas.",
        "skills": ["Data Modeling", "Normalization", "Denormalization", "Schema Design"],
        "verify": "https://coursera.org/verify/406AJ54GWTD3",
      },
      {
        "id": 408,
        "name": "Database Engineer Capstone Project",
        "image": dbCourse8,
        "details": "A final hands-on project where students design, develop, and deploy a scalable database solution for a real-world application, integrating SQL and NoSQL databases.",
        "skills": ["Database Architecture", "Data Modeling", "SQL & NoSQL Integration"],
        "verify": "https://coursera.org/verify/OM6Z9MSTBTF1",
      },
      {
        "id": 409,
        "name": "Coding Interview Preparation",
        "image": dbCourse9,
        "details": "Prepares students for technical interviews with database-related coding challenges, including SQL queries, data structures, system design, and problem-solving strategies.",
        "skills": ["SQL Queries", "Data Structures", "System Design", "Problem-Solving"],
        "verify": "https://coursera.org/verify/3CSVV6DCXHXX",
      }
    ],
  },
  {
    "id": 4,
    "institute": "Google",
    "name": "Google Cybersecurity",
    "descrip": "The Google Cybersecurity Professional Certificate is an in-depth program designed to equip learners with fundamental and advanced cybersecurity skills. This program covers key cybersecurity principles, risk management, network security, and hands-on experience with Python, Linux, and SQL. Students will learn to identify threats, vulnerabilities, and security best practices to protect data, devices, and networks. Upon completion, learners will be prepared for entry-level cybersecurity roles with a portfolio showcasing their practical experience.",
    "image": cyberCertificate,
    "verify": "https://coursera.org/verify/professional-cert/O20AHYAOJA7N",
    "courses": [
      {
        "id": 501,
        "name": "Foundations of Cybersecurity",
        "image": cyberCourse1,
        "details": "This course introduces students to the fundamentals of cybersecurity, including risk management, security frameworks, and basic cyber hygiene principles. It provides an overview of key cybersecurity concepts and industry best practices.",
        "skills": ["Cybersecurity Basics", "Risk Management", "Security Frameworks"],
        "verify": "https://coursera.org/verify/1NH4JT1PEUY1",
      },
      {
        "id": 502,
        "name": "Play It Safe: Manage Security Risks",
        "image": cyberCourse2,
        "details": "This course focuses on understanding, assessing, and mitigating security risks. Students will learn about different types of security threats, vulnerability management, and security policies.",
        "skills": ["Risk Assessment", "Threat Mitigation", "Security Policies"],
        "verify": "https://coursera.org/verify/7OS6LB1W7TLL",
      },
      {
        "id": 503,
        "name": "Connect and Protect: Networks and Network Security",
        "image": cyberCourse3,
        "details": "Students will gain an understanding of network security principles, firewalls, intrusion detection, and prevention systems. This course covers networking fundamentals with a focus on security.",
        "skills": ["Network Security", "Firewalls", "Intrusion Detection Systems (IDS)"],
        "verify": "https://coursera.org/verify/0VB0JSKTIVRQ",
      },
      {
        "id": 504,
        "name": "Tools of the Trade: Linux and SQL",
        "image": cyberCourse4,
        "details": "This course introduces students to essential cybersecurity tools like Linux and SQL. They will learn command-line fundamentals, system administration, and how to use SQL for data security and analysis.",
        "skills": ["Linux", "SQL", "System Administration"],
        "verify": "https://coursera.org/verify/X6HXCLCC03YE",
      },
      {
        "id": 505,
        "name": "Assets, Threats, and Vulnerabilities",
        "image": cyberCourse5,
        "details": "Students will explore different types of security threats and vulnerabilities, including malware, phishing, and social engineering attacks. The course teaches mitigation strategies and security best practices.",
        "skills": ["Threat Analysis", "Vulnerability Assessment", "Security Mitigation"],
        "verify": "https://coursera.org/verify/ATS59D8PZWRN",
        "grade": "83.75%"
      },
      {
        "id": 506,
        "name": "Sound the Alarm: Detection and Response",
        "image": cyberCourse6,
        "details": "This course provides hands-on experience with intrusion detection systems (IDS) and Security Information and Event Management (SIEM) tools. Students will learn how to detect, investigate, and respond to security incidents.",
        "skills": ["Intrusion Detection", "SIEM Tools", "Incident Response"],
        "verify": "https://coursera.org/verify/CBPIIY8GD2MQ",
      },
      {
        "id": 507,
        "name": "Automate Cybersecurity Tasks with Python",
        "image": cyberCourse7,
        "details": "This course teaches students how to use Python for cybersecurity automation, including scripting for threat analysis, security monitoring, and automating defensive measures.",
        "skills": ["Python", "Security Automation", "Threat Analysis"],
        "verify": "https://coursera.org/verify/4CM2DEFVEWAK",
      },
      {
        "id": 508,
        "name": "Put It to Work: Prepare for Cybersecurity Jobs",
        "image": cyberCourse8,
        "details": "This capstone course helps students prepare for cybersecurity job roles by providing career guidance, resume-building techniques, and mock security assessments.",
        "skills": ["Cybersecurity Career Preparation", "Security Assessments", "Interview Readiness"],
        "verify": "https://coursera.org/verify/2AA9OWTCSQJV",
      }
    ]
  },
  {
    "id": 5,
    "institute": "Google",
    "name": "Google Project Management",
    "descrip": "The Google Project Management Professional Certificate program is a comprehensive, hands-on learning path designed to equip learners with the essential skills needed to succeed in entry-level project management roles. This program covers project documentation, Agile methodologies, Scrum implementation, stakeholder management, and strategic communication. Students will gain practical experience through real-world scenarios and hands-on assessments. Upon completion, learners will be proficient in initiating, planning, and managing both traditional and Agile projects.",
    "image": projectCertificate,
    "verify": "https://coursera.org/verify/professional-cert/SF8LV6RWWAY1",
    "courses": [
      {
        "id": 601,
        "name": "Foundations of Project Management",
        "image": projectCourse1,
        "details": "This course introduces students to the fundamentals of project management, including key concepts, methodologies, and industry-standard tools. Students will explore the project life cycle, the roles of a project manager, and how to effectively manage projects in various industries.",
        "skills": ["Project Management", "Project Life Cycle", "Stakeholder Management", "Risk Assessment"],
        "verify": "https://coursera.org/verify/U0V9CVQRCF2B"
      },
      {
        "id": 602,
        "name": "Project Initiation: Starting a Successful Project",
        "image": projectCourse2,
        "details": "This course covers the early phases of project management, including defining project goals, engaging stakeholders, and creating a project charter. Students will learn how to set project expectations and align resources effectively.",
        "skills": ["Project Initiation", "Project Charters", "Stakeholder Engagement", "Goal Setting"],
        "verify": "https://coursera.org/verify/SK6PEYA9QQCK"
      },
      {
        "id": 603,
        "name": "Project Planning: Putting It All Together",
        "image": projectCourse3,
        "details": "This course focuses on planning techniques such as work breakdown structures (WBS), setting milestones, estimating project costs, and creating project schedules using Gantt charts.",
        "skills": ["Project Planning", "Work Breakdown Structure", "Gantt Charts", "Cost Estimation"],
        "verify": "https://coursera.org/verify/H7FSI8VPAOA5"
      },
      {
        "id": 604,
        "name": "Project Execution: Running the Project",
        "image": projectCourse4,
        "details": "Students will learn how to execute projects effectively by tracking progress, managing teams, and ensuring deliverables meet expectations. The course covers performance monitoring, issue resolution, and adaptive leadership.",
        "skills": ["Project Execution", "Performance Monitoring", "Team Management", "Issue Resolution"],
        "verify": "https://coursera.org/verify/VD5HKARP7Q0H"
      },
      {
        "id": 605,
        "name": "Agile Project Management",
        "image": projectCourse5,
        "details": "This course explores Agile methodologies, focusing on Scrum frameworks, sprint planning, Agile artifacts, and iterative development. Students will learn how to implement Agile principles in project management.",
        "skills": ["Agile Methodology", "Scrum", "Sprint Planning", "Iterative Development"],
        "verify": "https://coursera.org/verify/B6BY7Q5N4JQW"
      },
      {
        "id": 606,
        "name": "Capstone: Applying Project Management in the Real World",
        "image": projectCourse6,
        "details": "The final capstone project requires students to apply all learned project management skills to a real-world scenario. They will initiate, plan, execute, and manage a project, demonstrating their competency in project management practices.",
        "skills": ["Full Project Management", "Problem-Solving", "Risk Mitigation", "Stakeholder Communication"],
        "verify": "https://coursera.org/verify/IBF51WUAQNLN"
      }
    ]
  },
  {
    "id": 6,
    "institute": "IBM",
    "name": "Generative AI for Software Developers",
    "descrip": "The IBM Generative AI for Software Developers program is designed to equip learners with knowledge and hands-on experience in using generative AI for software engineering tasks. The program covers foundational concepts, prompt engineering, AI-assisted coding, and innovative problem-solving techniques using AI-powered tools and LLMs. Upon completion, learners will be prepared to integrate generative AI solutions into software development workflows.",
    "image": genAICertificate,
    "verify": "https://coursera.org/verify/specialization/2D78NYVJYLJW",
    "courses": [
      {
        "id": 701,
        "name": "Generative AI: Introduction and Applications",
        "image": genAICourse1,
        "details": "This course introduces the fundamentals of generative AI, its real-world applications, and popular generative AI models for text, code, image, audio, and video generation. Learners will differentiate generative AI from discriminative AI and explore practical uses in various industries.",
        "skills": ["Generative AI", "AI Models", "Text and Image Generation", "Software Engineering"],
        "verify": "https://coursera.org/verify/F2U56RPPNNB2",
      },
      {
        "id": 702,
        "name": "Generative AI: Prompt Engineering Basics",
        "image": genAICourse2,
        "details": "This course covers essential prompt engineering concepts, techniques, and best practices. Learners will understand prompt patterns and learn to craft effective AI prompts to generate useful outputs. The course also explores tools used in AI-powered content generation.",
        "skills": ["Prompt Engineering", "Prompt Patterns", "AI Tools", "Generative AI"],
        "verify": "https://coursera.org/verify/9VGYQMIXPD5R",
      },
      {
        "id": 703,
        "name": "Generative AI: Elevate Your Software Development Career",
        "image": genAICourse3,
        "details": "This course focuses on applying generative AI in software engineering. Learners will explore AI-assisted coding, debugging, code refactoring, and program optimization using AI tools. Topics include LLMs, AI-driven architecture design, and software development automation.",
        "skills": ["AI-assisted Coding", "Software Engineering", "Code Optimization", "LLMs"],
        "verify": "https://coursera.org/verify/ML3PD2OG5L3D",
      }
    ]
  },
  {
    "id": 7,
    "institute": "IBM",
    "name": "AI Foundations for Everyone",
    "descrip": "The IBM AI Foundations for Everyone Professional Certificate program provides learners with foundational knowledge of Artificial Intelligence (AI). This program covers key AI concepts, including machine learning, deep learning, and generative AI. Students will explore AI applications, IBM Watson AI services, and how AI-powered chatbots can be built and deployed. Through hands-on exercises, quizzes, and projects, learners will develop practical skills in AI and its real-world applications.",
    "image": aiforSoftCertificate,
    "verify": "https://coursera.org/verify/specialization/ZBAC1Q9OBW2U",
    "courses": [
      {
        "id": 801,
        "name": "Introduction to Artificial Intelligence (AI)",
        "image": aiforSoftCourse1,
        "details": "This course introduces the fundamentals of AI, including its history, applications, and impact on various industries. Students will learn about machine learning, deep learning, and AI ethics. Practical exercises will help them understand how AI models are built and deployed.",
        "skills": ["Artificial Intelligence", "Machine Learning", "Deep Learning", "AI Ethics"],
        "verify": "https://coursera.org/verify/B52LLNT2PSQL"
      },
      {
        "id": 802,
        "name": "Generative AI: Introduction and Applications",
        "image": aiforSoftCourse2,
        "details": "This course explores generative AI, its real-world applications, and ethical considerations. Students will learn how generative AI models create new content, including text and images. The course also introduces AI-powered tools used in various industries.",
        "skills": ["Generative AI", "AI Applications", "Machine Learning", "Ethical AI"],
        "verify": "https://coursera.org/verify/F2U56RPPNNB2"
      },
      {
        "id": 803,
        "name": "Generative AI: Prompt Engineering Basics",
        "image": aiforSoftCourse3,
        "details": "This course provides an introduction to prompt engineering techniques for generative AI models. Students will learn how to craft effective prompts for AI-powered tools like ChatGPT and DALL·E. The course includes practical exercises to optimize prompt effectiveness.",
        "skills": ["Prompt Engineering", "Generative AI", "Natural Language Processing"],
        "verify": "https://coursera.org/verify/9VGYQMIXPD5R"
      },
      {
        "id": 804,
        "name": "Building AI Powered Chatbots Without Programming",
        "image": aiforSoftCourse4,
        "details": "In this course, students will learn how to create AI-powered chatbots without requiring programming skills. Using IBM Watson, they will design, train, and deploy a chatbot for web-based applications. The course includes hands-on exercises to build intelligent virtual assistants.",
        "skills": ["Chatbot Development", "AI Services", "IBM Watson", "Natural Language Processing"],
        "verify": "https://coursera.org/verify/PW8155OC57C6"
      }
    ]
  },
  {
    "id": 8,
    "institute": "IBM",
    "name": "IBM AI Developer",
    "descrip": "The IBM AI Developer Professional Certificate program provides job-ready AI skills in just 6 months. Learners gain practical experience building AI-powered applications, chatbots, and web solutions using Python, Flask, and generative AI technologies. The program covers fundamental AI concepts, generative AI, software development lifecycle (SDLC), and web development. Upon completion, learners will have industry-recognized certification and a portfolio showcasing AI-driven solutions.",
    "image": aiDevolopCertificate,
    "verify": "https://coursera.org/verify/professional-cert/MB7WE2TCZ8K9",
    "courses": [
      {
        "id": 901,
        "name": "Introduction to Software Engineering",
        "image": aiDevolopCourse1,
        "details": "This course introduces fundamental software engineering concepts, including the Software Development Lifecycle (SDLC), agile methodologies, and best practices for software design and development.",
        "skills": ["Software Engineering", "SDLC", "Agile Methodologies"],
        "verify": "https://coursera.org/verify/AUSU48XGV2XM"
      },
      {
        "id": 902,
        "name": "Introduction to Artificial Intelligence (AI)",
        "image": aiDevolopCourse2,
        "details": "An introduction to the key concepts, applications, and ethical considerations of Artificial Intelligence, including machine learning, neural networks, and real-world AI use cases.",
        "skills": ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
        "verify": "https://coursera.org/verify/B52LLNT2PSQL"
      },
      {
        "id": 903,
        "name": "Generative AI: Introduction and Applications",
        "image": aiDevolopCourse3,
        "details": "This course covers the fundamentals of generative AI, including models like GPT and their applications in text generation, image synthesis, and AI-powered solutions.",
        "skills": ["Generative AI", "NLP", "Machine Learning"],
        "verify": "https://coursera.org/verify/F2U56RPPNNB2"
      },
      {
        "id": 904,
        "name": "Generative AI: Prompt Engineering Basics",
        "image": aiDevolopCourse4,
        "details": "A deep dive into prompt engineering techniques, helping students optimize AI-generated responses for various applications, including chatbots and content creation.",
        "skills": ["Prompt Engineering", "AI Optimization", "Natural Language Processing"],
        "verify": "https://coursera.org/verify/9VGYQMIXPD5R"
      },
      {
        "id": 905,
        "name": "Introduction to HTML, CSS, & JavaScript",
        "image": aiDevolopCourse5,
        "details": "This course provides a hands-on introduction to frontend web development, covering HTML, CSS, JavaScript, and best practices for responsive and interactive UI design.",
        "skills": ["HTML", "CSS", "JavaScript", "Responsive Design"],
        "verify": "https://coursera.org/verify/UST0RWOWMNM2"
      },
      {
        "id": 906,
        "name": "Python for Data Science, AI & Development",
        "image": aiDevolopCourse6,
        "details": "An in-depth course on Python programming with a focus on data science and AI development, covering libraries like NumPy, Pandas, and Scikit-learn.",
        "skills": ["Python", "Data Science", "AI Development"],
        "verify": "https://coursera.org/verify/IZZZW01AJHYP"
      },
      {
        "id": 907,
        "name": "Developing AI Applications with Python and Flask",
        "image": aiDevolopCourse7,
        "details": "Students will learn to build and deploy AI-powered web applications using Python and Flask, including API development and AI model integration.",
        "skills": ["Python", "Flask", "Web Development", "API Development"],
        "verify": "https://coursera.org/verify/DAS26180VHPN"
      },
      {
        "id": 908,
        "name": "Building Generative AI-Powered Applications with Python",
        "image": aiDevolopCourse8,
        "details": "This course covers the development of AI-powered applications using Python, integrating generative AI models, and optimizing performance.",
        "skills": ["Generative AI", "Python", "AI Application Development"],
        "verify": "https://coursera.org/verify/A7Q5995J1ISP"
      },
      {
        "id": 909,
        "name": "Generative AI: Elevate Your Software Development Career",
        "image": aiDevolopCourse9,
        "details": "A strategic course on how generative AI is revolutionizing software development and how professionals can leverage AI-driven tools for productivity.",
        "skills": ["Generative AI", "Software Engineering", "AI in Development"],
        "verify": "https://coursera.org/verify/ML3PD2OG5L3D"
      },
      {
        "id": 910,
        "name": "Software Developer Career Guide and Interview Preparation",
        "image": aiDevolopCourse10,
        "details": "This course prepares students for software development job interviews by covering coding challenges, data structures, algorithms, and system design.",
        "skills": ["Coding Interviews", "Data Structures", "Algorithms", "System Design"],
        "verify": "https://coursera.org/verify/8FSFF0XKLSQU"
      }
    ]
  },
  {
    "id": 9,
    "institute": "IBM",
    "name": "IBM Full Stack Software Developer",
    "descrip": "The IBM Full Stack Software Developer program equips learners with essential skills for developing Cloud Native Applications. The program covers front-end technologies like HTML, CSS, JavaScript, React, and Bootstrap, as well as back-end technologies like Node.js, Express, Python, and Django. Learners will also work with cloud technologies such as Containers, Kubernetes, Microservices, and Serverless Functions. The program culminates with hands-on projects, including a capstone, to showcase skills in real-world applications.",
    "image": fullStackCertificate,
    "verify": "https://coursera.org/verify/professional-cert/KN4ZW9PPCIAW",
    "courses": [
      {
        "id": 1001,
        "name": "Introduction to Software Engineering",
        "image": fullStackCourse1,
        "details": "This course covers the fundamentals of software engineering, including software development methodologies, design patterns, and application architecture.",
        "skills": ["Software Engineering", "Development Methodologies", "Design Patterns"],
        "verify": "https://coursera.org/verify/AUSU48XGV2XM"
      },
      {
        "id": 1002,
        "name": "Introduction to Cloud Computing",
        "image": fullStackCourse2,
        "details": "This course introduces the basics of cloud computing, covering cloud infrastructure, services, and deployment models.",
        "skills": ["Cloud Computing", "Cloud Infrastructure", "Cloud Services"],
        "verify": "https://coursera.org/verify/GJSCYE4989LF"
      },
      {
        "id": 1003,
        "name": "Introduction to HTML, CSS, & JavaScript",
        "image": fullStackCourse3,
        "details": "Learn the basics of front-end web development with HTML, CSS, and JavaScript, and how to structure and style web pages.",
        "skills": ["HTML", "CSS", "JavaScript"],
        "verify": "https://coursera.org/verify/UST0RWOWMNM2"
      },
      {
        "id": 1004,
        "name": "Getting Started with Git and GitHub",
        "image": fullStackCourse4,
        "details": "Learn how to use Git for version control and GitHub for collaboration, including commits, branches, and pull requests.",
        "skills": ["Git", "GitHub", "Version Control", "Collaboration"],
        "verify": "https://coursera.org/verify/BSPQPJFSGJLL"
      },
      {
        "id": 1005,
        "name": "Developing Front-End Apps with React",
        "image": fullStackCourse5,
        "details": "Learn to build dynamic user interfaces with React, including components, JSX, state management, and event handling.",
        "skills": ["React", "JSX", "State Management", "Event Handling"],
        "verify": "https://coursera.org/verify/2LLFVQDAD12Y"
      },
      {
        "id": 1006,
        "name": "Developing Back-End Apps with Node.js and Express",
        "image": fullStackCourse6,
        "details": "This course covers back-end development using Node.js and Express, including building APIs, working with databases, and handling HTTP requests.",
        "skills": ["Node.js", "Express", "APIs", "Backend Development"],
        "verify": "https://coursera.org/verify/Y60R2P1IPJVM"
      },
      {
        "id": 1007,
        "name": "Python for Data Science, AI & Development",
        "image": fullStackCourse7,
        "details": "Learn Python programming for data science and AI development, including working with libraries like Pandas, NumPy, and Matplotlib.",
        "skills": ["Python", "Data Science", "AI", "Libraries (Pandas, NumPy)"],
        "verify": "https://coursera.org/verify/IZZZW01AJHYP"
      },
      {
        "id": 1008,
        "name": "Developing AI Applications with Python and Flask",
        "image": fullStackCourse8,
        "details": "Learn how to build AI applications using Python and Flask, including using machine learning models and deploying web applications.",
        "skills": ["AI", "Python", "Flask", "Machine Learning"],
        "verify": "https://coursera.org/verify/DAS26180VHPN"
      },
      {
        "id": 1009,
        "name": "Django Application Development with SQL and Databases",
        "image": fullStackCourse9,
        "details": "This course focuses on developing Django applications, working with SQL databases, and using Django's ORM for data management.",
        "skills": ["Django", "SQL", "Databases", "ORM"],
        "verify": "https://coursera.org/verify/D4UPARJ2FFK0"
      },
      {
        "id": 1010,
        "name": "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        "image": fullStackCourse10,
        "details": "Learn how to use Docker, Kubernetes, and OpenShift for containerization and orchestration, as well as cloud deployment strategies.",
        "skills": ["Docker", "Kubernetes", "OpenShift", "Containers"],
        "verify": "https://coursera.org/verify/QI4NA260Y6XM"
      },
      {
        "id": 1011,
        "name": "Application Development using Microservices and Serverless",
        "image": fullStackCourse11,
        "details": "Learn to build scalable applications with microservices and serverless architecture, including deployment and management strategies.",
        "skills": ["Microservices", "Serverless", "Cloud Native", "Scalable Applications"],
        "verify": "https://coursera.org/verify/311ENLE4FRMG"
      },
      {
        "id": 1012,
        "name": "Full Stack Application Development Capstone Project",
        "image": fullStackCourse12,
        "details": "The capstone project gives learners the opportunity to apply everything they’ve learned by building a full-stack cloud-native application.",
        "skills": ["Full Stack Development", "Cloud Native", "Capstone Project", "Application Development"],
        "verify": "https://coursera.org/verify/8OT8EQ366DS5"
      },
      {
        "id": 1013,
        "name": "Full Stack Software Developer Assessment",
        "image": fullStackCourse13,
        "details": "An assessment that evaluates your full-stack development knowledge and skills, preparing you for real-world application development.",
        "skills": ["Full Stack Development", "Assessment", "Real-World Applications"],
        "verify": "https://coursera.org/verify/NAR0OB3AKEGN"
      },
      {
        "id": 1014,
        "name": "Generative AI: Elevate your Software Development Career",
        "image": fullStackCourse14,
        "details": "This course focuses on the impact of generative AI on software development and how to integrate AI techniques into your applications.",
        "skills": ["Generative AI", "Software Development", "AI Integration"],
        "verify": "https://coursera.org/verify/ML3PD2OG5L3D"
      },
      {
        "id": 1015,
        "name": "Software Developer Career Guide and Interview Preparation",
        "image": fullStackCourse15,
        "details": "This course helps learners prepare for software developer interviews, covering coding challenges, system design, and interview strategies.",
        "skills": ["Interview Preparation", "Coding Challenges", "System Design", "Career Guidance"],
        "verify": "https://coursera.org/verify/8FSFF0XKLSQU"
      }
    ]
  },
  {
    "id": 10,
    "institute": "IBM",
    "name": "DevOps, Cloud, and Agile Foundations",
    "descrip": "The IBM DevOps, Cloud, and Agile Foundations Professional Certificate program provides a comprehensive introduction to the essential concepts of DevOps, Cloud Computing, and Agile methodologies. Learners gain hands-on experience with key technologies, tools, and best practices used in modern software development and deployment. This program covers cloud models, DevOps culture, Agile principles, and Scrum methodologies to help students build the skills needed for a successful career in cloud and DevOps engineering.",
    "image": dcaCertificate,
    "verify": "https://coursera.org/verify/specialization/8HA25429F3SS",
    "courses": [
      {
        "id": 1101,
        "name": "Introduction to DevOps",
        "image": dcaCourse1,
        "details": "This course introduces students to DevOps principles, including the culture, practices, and tools that enable continuous integration and delivery. Topics covered include automation, collaboration, infrastructure as code, and monitoring strategies. Students will learn how DevOps improves efficiency and software quality.",
        "skills": ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
        "verify": "https://coursera.org/verify/XPFLBUR4M745"
      },
      {
        "id": 1102,
        "name": "Introduction to Cloud Computing",
        "image": dcaCourse2,
        "details": "This course provides an in-depth introduction to cloud computing, covering key concepts such as cloud service models, deployment models, infrastructure, and emerging trends. Students will explore platforms like AWS, Azure, and IBM Cloud, and understand how cloud technologies drive business innovation.",
        "skills": ["Cloud Computing", "Cloud Infrastructure", "Cloud Service Models"],
        "verify": "https://coursera.org/verify/GJSCYE4989LF"
      },
      {
        "id": 1103,
        "name": "Introduction to Agile Development and Scrum",
        "image": dcaCourse3,
        "details": "This course covers Agile methodologies and Scrum frameworks. Students will learn how to apply Agile principles, create user stories, conduct sprint planning, and implement Scrum best practices. The course also explores Agile workflows, team collaboration, and iterative development techniques.",
        "skills": ["Agile", "Scrum", "Sprint Planning", "User Stories"],
        "verify": "https://coursera.org/verify/A8KIUUY2KT7G"
      }
    ]
  }
];


function Licenses() {
  const [selectedCertificate, setSelectedCertificate] = useState(professionalCertificates[0]);
  const [selectedCourse, setSelectedCourse] = useState(selectedCertificate.courses[0]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };


  return (
    <div className="relative w-full min-h-screen text-white font-chakra p-8 flex flex-col items-center ">
      <motion.div 
        className="absolute top-20 left-8 md:left-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 flex justify-center items-center w-10 h-10 border border-myYellow animate-pulse">
            <div className="w-8 h-5 bg-myYellow"></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-myYellow tracking-widest neon-text">
            CERTIFICATE ZONE
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full h-full max-w-8xl mt-3 flex flex-col justify-center items-start">
        <div className="p-6 flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
          <div className="relative w-11/12">
            <button 
              onClick={() => scroll("left")} 
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
            >
              <FaChevronLeft className='text-4xl text-white hover:text-myYellow' />
            </button>

            <motion.div 
              ref={scrollRef}
              className="overflow-x-auto whitespace-nowrap flex space-x-4 pb-4 border-b-2 scrollbar-hide scroll-smooth"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {professionalCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.6 }}
                  onClick={() => {
                    setSelectedCertificate(cert);
                    setSelectedCourse(cert.courses[0]);
                  }}
                  className="cursor-pointer w-72 h-84"
                  whileHover={{ scale: 1.05 }}
                >
                  <Hologram imageUrl={cert.image} />
                  <p className="text-sm text-center w-56">{cert.name}</p>
                  <p className="text-sm text-center font-bold">{cert.institute}</p>
                </motion.div>
              ))}
            </motion.div>

            <button 
              onClick={() => scroll("right")} 
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
            >
              <FaChevronRight className='text-4xl text-white hover:text-myYellow'/>
            </button>
          </div>
        <AnimatePresence mode='wait'>
          <motion.div
                key={selectedCertificate.id} 
                className="flex flex-col lg:flex-row justify-center items-center space-x-4 mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }} 
                transition={{ duration: 1, delay: 1 }}
              >
            <motion.div 
              key={selectedCertificate.id}
              className="flex flex-col justify-center items-start w-11/12 sm:w-7/12 md:w-5/12 lg:w-1/4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 , delay: 1 }}
            >
              <div className='flex justify-center items-center'>
                <p className='w-6 h-6 border-b-2 border-r-2'></p>
                <motion.div 
                  key={selectedCertificate.id}
                  className="flex flex-col justify-center items-start"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 , delay: 1.5}}
                >
                  <p className='font-bold text-lg ml-4'>{selectedCertificate.name}</p>
                </motion.div>
              </div>
              <div className='flex flex-col justify-center items-center border-t-2 border-l-2 -mt-1 ml-6'>
              <motion.div 
                  className="flex flex-col justify-center items-start ml-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 , delay: 2}}
                >
                  <img src={selectedCertificate.image} alt='certificatelogo' className='w-10/12 mt-4'/>
                </motion.div>
                <motion.div 
                  className="flex flex-col justify-center items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 , delay: 2.5}}
                >
                  <p className='text-sm mt-4 mb-4'>{selectedCertificate.descrip}</p>
                </motion.div>
                <motion.a 
                  href={selectedCertificate.verify}
                  target="blank"
                  className="bg-myYellow border border-myYellow px-10 py-3 text-black font-bold rounded-lg mb-16 hover:border-white hover:bg-transparent hover:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 , delay: 3}}
                >
                  Verify
                </motion.a>
              </div>
            </motion.div>
            <div className='flex flex-col md:flex-row justify-center items-center lg:w-3/4 mt-32'>
              <motion.div
                  className="md:w-1/3 overflow-y-auto max-h-72 border-l-2 border-b-2 p-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 , delay: 3}}
                >
                  {selectedCertificate.courses.map((course) => (
                  <div
                  key={selectedCertificate.id}
                    onClick={() => setSelectedCourse(course)}
                    className={`cursor-pointer p-2 border-b ${
                      selectedCourse.id === course.id ? "bg-myYellow font-bold text-black" : ""
                    }`}
                  >
                    {course.name}
                  </div>
                ))}
                </motion.div>
                <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedCourse.id} 
                  className="flex flex-col sm:flex-row md:w-2/3 p-4 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }} 
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="flex flex-col justify-center items-start sm:w-3/4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 , delay: 3.5}}
                  >
                    <div className='flex justify-center items-center'>
                      <p className='w-6 h-6 border-b-2 border-r-2'></p>
                      <motion.div
                        className="ml-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 , delay: 4}}
                      >
                        <p className='font-bold text-lg'>{selectedCourse.name}</p>
                      </motion.div>
                    </div>
                    <div className='flex flex-col justify-center items-center border-t-2 border-l-2 -mt-1 ml-6'>
                      <motion.div
                        className=""
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 , delay: 4.5}}
                      >
                        <Hologram imageUrl={selectedCourse.image}  />
                      </motion.div>
                      <motion.div
                        className="ml-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 , delay: 5}}
                      >
                        <p className='text-sm mt-4 mb-16 '>{selectedCourse.details}</p>
                      </motion.div>
                      <motion.a 
                        href={selectedCourse.verify}
                        target="blank"
                        className="bg-myYellow border border-myYellow px-10 py-3 text-black font-bold rounded-lg mb-16 hover:border-white hover:bg-transparent hover:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 , delay: 5.5}}
                      >
                        Verify
                      </motion.a>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex flex-col justify-center items-end sm:w-1/4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 , delay: 5.5}}
                  >
                    <div className='flex justify-center items-center'>
                      <motion.div
                        className="mr-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 , delay: 6}}
                      >
                        <p className='font-bold text-sm '>Skills Gained</p>
                      </motion.div>
                      <p className='w-6 h-6 border-b-2 border-l-2'></p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-t-2 border-r-2 -mt-1 mr-6 mb-20'>
                      {selectedCourse.skills && selectedCourse.skills.length > 0 ? (
                        selectedCourse.skills.map((skill, index) => (
                          <motion.div
                            className="pl-28"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 , delay: (index+12) * 0.5}}
                          >
                            <span key={index} className="">
                              {skill}
                            </span>
                          </motion.div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-400">No skills listed</p>
                      )}
                    </div>
                  </motion.div>
                </motion.div>  
              </AnimatePresence>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Licenses;
