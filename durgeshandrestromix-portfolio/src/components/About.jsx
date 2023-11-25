// import React from "react";
// import img from "../assets/img/about.png";
// import Button from "../layouts/Button";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
//       <img src={img} alt="img" />

//       <div className=" space-y-4 lg:pt-14">
//         <h1 className=" font-semibold text-4xl text-center md:text-start">
//           Why Choose Us?
//         </h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//           architecto quisquam delectus minima perferendis nulla quia nisi
//           laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
//           molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
//           laboriosam temporibus delectus, aut a? Quasi?
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
//           suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
//           veritatis facere. Magnam!
//         </p>
//         <div className=" flex justify-center lg:justify-start">
//           <Button title="Learn More" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;









// import React from "react";
// import img from "../assets/img/kosha2.png";
// import Kosha2 from "../assets/img/prince.jpg";
// import Button from "../layouts/Button";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row  lg:px-16 px-3">
//       <div className="lg:w-40%">
//         <img
//           src={Kosha2}
//           alt="img"
//           style={{ width: '100%', height: 'auto' }}
//         />
//       </div>
//       <div className="lg:w-60% lg:pl-6 pt-6">
//         <h1 className="font-semibold text-3xl text-center md:text-start">
//           About Me
//         </h1>
//         <p>
//         Experienced Full Stack Developer with expertise in building robust and scalable web applications. 
//         Proficient in a wide range of technologies, including java, Spring Boot, Spring Security, javaScript, React, MySQL, PostgreSQL,
//          Apache Tomcat, AWS, Git, Docker, and more. Committed to delivering high-quality solutions.
//         </p>
//         <p>
//         In my current role as a Senior Executive at AU Small Finance Bank, I am actively involved in various projects, 
//         where I plays a pivotal role in enhancing and maintaining the Video Banking system.I utilizes technologies such as Java, 
//         Spring Boot, MySQL, PostgreSQL, Hibernate, and AWS. My responsibilities include proactively resolving technical issues, 
//         improving customer account opening processes, implementing updates, and optimizing video streaming and customer data processing. 
//         I maintains meticulous project records, ensuring audit readiness, and has achieved successful enhancements that enhance system
//          reliability and customer satisfaction.
//          <br/>

//          I have also been instrumental in the development of the MIS Report Generation Portal, 
//          a web-based solution that allows users to download customized reports in Excel format based on queries assigned by administrators.
//          This project showcases his full-stack development skills and proficiency in database management using React.js, Spring Boot, and MSSQL.
//           The portal is deployed on Apache Tomcat for production use.

// <br/>


// Another noteworthy project led by me is the Tiny URL Generator, where I leveraged Java, Spring Boot, Spring Security, MySQL,
//  Hibernate, Log4j, AWS, EC2, and CloudWatch.I excelled in developing a scalable Spring Boot backend on AWS, designing RESTful APIs,
//   managing MySQL CRUD operations with Hibernate, implementing robust Spring Security, optimizing data access with in-memory databases,
//    and showcasing my expertise in AWS and Docker.

//    <br/>

//    Additionally, I have worked on the Smart Contact Manager project, which involved Java, JSP, MySQL, Hibernate, HTML, CSS,
//     Spring Boot, Spring Security, and Razorpay payment gateway. He designed and implemented a contact and donation database schema, 
//     created a secure Java Spring Boot API, integrated Razorpay for donations, and developed a user-friendly UI for contact management
//      and donations.
// <br/>

//      My technical skills include expertise in frontend technologies such as React, JavaScript, HTML, and CSS, as well as backend
//       technologies like Spring Boot and Java. He has experience with microservices architecture and various databases, including MySQL, 
//       PostgreSQL, Oracle DB, MSSQL, and Hibernate. His toolset extends to AWS, EC2, Git, Docker, Tomcat, and Redis, while also having a 
//       strong grasp of security with Spring Security and JWT. I am proficient in Log4j ,slf4j and CloudWatch for monitoring and logging.
//       <br/>
// I have earned several certifications, including Full Stack Java developer, Complete Interview Preparation Course, and Master
//  Microservices with Java, Spring, Docker, and Kubernetes. He is also an Oracle Cloud Data Management 2023 Certified Foundations 
//  Associate and a winner of a Hackathon organized by CGCTC Jhanjeri. My coding profiles on LeetCode and Geeks for Geeks showcase 
//  my problem-solving skills.

//  <br/>

// In terms of academics, I holds a B.Tech degree with an impressive 74% from Punjab Technical University. 
// I achieved 70.6% in my 12th-grade examination (UP Board) and 80.86% in my 10th-grade examination (UP Board).

// <br/>


// I was born on June 1, 1999, and my permanent address is in Village- Patkhauli, Post- Khalilabad, 
// District- Sant Kabir Nagar, Uttar Pradesh.I am proficient in both English and Hindi. You can reach me at 8787247736 
// or PrinceKumar161999@gmail.com.

// <br/>

// In summary, I am a dedicated Full Stack Developer with a track record of successful projects,
//  a strong technical skill set, and a commitment to delivering high-quality solutions. My academic achievements and certifications 
//  demonstrate my dedication to continuous learning and improvement in the field of technology.






//         </p>
     



//         <div className="flex justify-center lg:justify-start">
//           <Button title="Learn More" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;












import React, { useState } from "react";
import img from "../assets/img/kosha2.png";
import Kosha2 from "../assets/img/prince.jpg";
import Button from "../layouts/Button";

const About = () => {
  const [showMore, setShowMore] = useState(false);

 
//   // Your full content
//   const fullContent = `
//   <p>
//   Experienced Full Stack Developer with expertise in building robust and scalable web applications. 
//   Proficient in a wide range of technologies, including java, Spring Boot, Spring Security, javaScript, React, MySQL, PostgreSQL,
//    Apache Tomcat, AWS, Git, Docker, and more. Committed to delivering high-quality solutions.
//   </p>
//   <p>
//   In my current role as a Senior Executive at AU Small Finance Bank, I am actively involved in various projects, 
//   where I plays a pivotal role in enhancing and maintaining the Video Banking system.I utilizes technologies such as Java, 
//   Spring Boot, MySQL, PostgreSQL, Hibernate, and AWS. My responsibilities include proactively resolving technical issues, 
//   improving customer account opening processes, implementing updates, and optimizing video streaming and customer data processing. 
//   I maintains meticulous project records, ensuring audit readiness, and has achieved successful enhancements that enhance system
//    reliability and customer satisfaction.
//    <br/>

//    I have also been instrumental in the development of the MIS Report Generation Portal, 
//    a web-based solution that allows users to download customized reports in Excel format based on queries assigned by administrators.
//    This project showcases his full-stack development skills and proficiency in database management using React.js, Spring Boot, and MSSQL.
//     The portal is deployed on Apache Tomcat for production use.

// <br/>


// Another noteworthy project led by me is the Tiny URL Generator, where I leveraged Java, Spring Boot, Spring Security, MySQL,
// Hibernate, Log4j, AWS, EC2, and CloudWatch.I excelled in developing a scalable Spring Boot backend on AWS, designing RESTful APIs,
// managing MySQL CRUD operations with Hibernate, implementing robust Spring Security, optimizing data access with in-memory databases,
// and showcasing my expertise in AWS and Docker.

// <br/>

// Additionally, I have worked on the Smart Contact Manager project, which involved Java, JSP, MySQL, Hibernate, HTML, CSS,
// Spring Boot, Spring Security, and Razorpay payment gateway. He designed and implemented a contact and donation database schema, 
// created a secure Java Spring Boot API, integrated Razorpay for donations, and developed a user-friendly UI for contact management
// and donations.
// <br/>

// My technical skills include expertise in frontend technologies such as React, JavaScript, HTML, and CSS, as well as backend
// technologies like Spring Boot and Java. He has experience with microservices architecture and various databases, including MySQL, 
// PostgreSQL, Oracle DB, MSSQL, and Hibernate. His toolset extends to AWS, EC2, Git, Docker, Tomcat, and Redis, while also having a 
// strong grasp of security with Spring Security and JWT. I am proficient in Log4j ,slf4j and CloudWatch for monitoring and logging.
// <br/>
// I have earned several certifications, including Full Stack Java developer, Complete Interview Preparation Course, and Master
// Microservices with Java, Spring, Docker, and Kubernetes. He is also an Oracle Cloud Data Management 2023 Certified Foundations 
// Associate and a winner of a Hackathon organized by CGCTC Jhanjeri. My coding profiles on LeetCode and Geeks for Geeks showcase 
// my problem-solving skills.

// <br/>

// In terms of academics, I holds a B.Tech degree with an impressive 74% from Punjab Technical University. 
// I achieved 70.6% in my 12th-grade examination (UP Board) and 80.86% in my 10th-grade examination (UP Board).

// <br/>


// I was born on June 1, 1999, and my permanent address is in Village- Patkhauli, Post- Khalilabad, 
// District- Sant Kabir Nagar, Uttar Pradesh.I am proficient in both English and Hindi. You can reach me at 8787247736 
// or PrinceKumar161999@gmail.com.

// <br/>

// In summary, I am a dedicated Full Stack Developer with a track record of successful projects,
// a strong technical skill set, and a commitment to delivering high-quality solutions. My academic achievements and certifications 
// demonstrate my dedication to continuous learning and improvement in the field of technology.






//   </p>
//   `;





const fullContent = `




I'm Prince Kumar Maurya, an experienced Full Stack Developer skilled in a variety of technologies, including Java, Spring Boot, Spring Security, JavaScript, React, SQL databases, and cloud services. My passion lies in building robust and scalable web applications while delivering high-quality solutions.

As a Senior Executive at AU Small Finance Bank, I play a pivotal role in enhancing and maintaining the Video Banking system. I leverage technologies such as Java, Spring Boot, MySQL, PostgreSQL, Hibernate, and AWS to proactively resolve technical issues, optimize customer account opening processes, and maintain meticulous project records to ensure system reliability.

One of my significant achievements is the development of the MIS Report Generation Portal, a web-based solution that enables users to download customized Excel reports. This project showcases my full-stack skills, including React.js, Spring Boot, and MSSQL, and it's deployed on Apache Tomcat.

I also led the development of the Tiny URL Generator, where I excelled in building a scalable Spring Boot backend on AWS, designing RESTful APIs, and implementing robust Spring Security. I have a solid background in various databases, microservices architecture, and development tools, making me a versatile developer.

My certifications include Full Stack Java Developer, Complete Interview Preparation, Master Microservices with Java, Spring, Docker, Kubernetes, and Oracle Cloud Data Management 2023 Certified Foundations Associate. I'm also proud to be a winner of the CGCTC Jhanjeri Hackathon.

Education-wise, I hold a B.Tech degree with a remarkable 74% from Punjab Technical University. In addition to my academic achievements, I have earned accolades for my problem-solving skills on platforms like LeetCode and Geeks for Geeks.

I was born on June 1, 1999, and my permanent address is in Village- Patkhauli, Post- Khalilabad, District- Sant Kabir Nagar, Uttar Pradesh. I am proficient in both English and Hindi, and you can reach me at 8787247736 or PrinceKumar161999@gmail.com.

`;






  // Display content based on showMore state
  const contentToDisplay = showMore ? fullContent : fullContent.slice(0, 800); // Show only the first 200 characters

  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:px-16 px-3 mt-10">
      <div className="lg:w-40%" style={{ flex: "0 0 40%", paddingRight: "20px", marginTop:"30px" }}>
        <img
          src={Kosha2}
          alt="img"
          style={{
            width: "100%",
            // height: "auto",
            height: "600px",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="lg:w-60% lg:pl-6 pt-6" style={{ flex: "0 0 60%" }}>
        <h1 className="font-semibold text-3xl text-center md:text-start">
          About Me
        </h1>
        <div
          className="content-container"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        >
          <div
            style={{
              maxHeight: "100%",
              overflowY: "auto",
              padding: "20px",
            }}
          >
            <p>{contentToDisplay}</p>
          </div>
        </div>

        {fullContent.length > 200 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default About;