import { useState } from "react";

const Review = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);

  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 sm:px-10 mt-12">
          <div className="mb-6">
            <div className="h-full w-full cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
              <i className="text-5xl fa-brands fa-aws"></i>
              <h1 className="text-4xl">Tiny URL Generator</h1>
              <p>
              Developed scalable Spring Boot backend on AWS, 
              designed RESTful APIs, managed MySQL CRUD with Hibernate,
               implemented robust Spring Security, optimized data access with in-memory databases,
                and demonstrated AWS, Docker expertise.
              </p>
              <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                Check
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="h-full w-full cursor-pointer hover-bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="text-5xl fa-solid fa-mobile"></i>
              <h1 className="text-4xl">MIS Report Generation Portal</h1>
              <p>
              Developed a solo project to create a web-based Report Generation Portal.
               Users can download customized reports in Excel format based on queries assigned by the admin.
                Key features include role-based query assignment, query creation by the admin, 
               . 
              </p>
              <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                Check
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="h-full w-full cursor-pointer hover-bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="text-5xl fa-solid fa-server"></i>
              <h1 className="text-4xl">Smart Contact Manager</h1>
              <p>
              Designed and implemented a contact and donation database schema.
               Created a secure Java Spring Boot API with Spring Security, integrated Razorpay for donations,
                and developed a JSP, HTML, CSS, and Angular UI. Enabled contact management, donations,
               and PDF/Excel data export in Smart Contact Manager app.
              </p>
              <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                Check
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="h-full w-full cursor-pointer hover-bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-3">
              <i className="text-5xl fa-solid fa-server"></i>
              <h1 className="text-4xl">Video Banking </h1>
              <p>
              Proactively resolved technical issues, resulting in minimal system downtime and optimal performance. 
              Led the initiative to improve customer account opening processes,
               aligning with business requirements.
               Regularly implemented updates and patches to enhance system security and functionality.  
              </p>
              <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
