import Image from "next/image";

export default function Services() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Our Services</h2>
          </div>
          <div className="flex md:flex-col md:justify-start min-h-screen overflow-hidden justify-center">
            <div className="flex md:flex-row  md:flex-wrap min-h-screen overflow-hidden justify-center flex-col ">
              <div className="flex flex-col md:items-start md:justify-start md:w-1/2 justify-start items-center w-auto">
                <div className="text-2xl font-extrabold text-teal-600 md:items-left md:text-left items-center text-center">
                  <h3>IT Staffing</h3>
                </div>
                <div className="text-base text-gray-600 p-4 pl-0 ">
                  <p>
                    We have been in the business for quite some time now making
                    us competent to outperform in the current IT environment.
                    Our consultants are the pool of competent technical experts
                    fitting in the requirements of the clients. Our recruiters
                    know how to ask helpful questions to find the right
                    person-job fit for the clientele requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-start md:justify-start md:w-1/2 justify-start items-center w-auto">
                <div className="text-2xl font-extrabold text-teal-600 md:items-left md:text-left items-center text-center">
                  <h3>Product Development</h3>
                </div>
                <div className="text-base text-gray-600 p-4 pl-0 ">
                  <p>
                    We enable businesses to dive in the digital transformation
                    journey by simplifying the complex problems into data driven
                    solutions. The delivered IT solutions will serve the entire
                    enterprise in the growth continually with cost
                    effectiveness. We have been serving in the fields ranging
                    from product development, project management and consulting
                    building an edge over the client’s competitors to challenge
                    the status-quo in their industry.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-start md:justify-start md:w-1/2 justify-start items-center w-auto">
                <div className="text-2xl font-extrabold text-teal-600 md:items-left md:text-left items-center text-center">
                  <h3>Staff Augmentation</h3>
                </div>
                <div className="text-base text-gray-600 p-4 pl-0 ">
                  <p>
                    We provide you the hassle free solution to your recruitment
                    needs. You can focus on your project deliverables, artifacts
                    whereas we find the perfect fit for your personnel
                    requirements responding to your business objectives. The
                    recruitment solutions are personalized to each individual
                    position to mitigate the pain points associated with
                    feasibility and cost in the onboarding process.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-start md:justify-start md:w-1/2 justify-start items-center w-auto">
                <div className="text-2xl font-extrabold text-teal-600 md:items-left md:text-left items-center text-center">
                  <h3>Managed Resources</h3>
                </div>
                <div className="text-base text-gray-600 p-4 pl-0 ">
                  <p>
                    We provide our valuable clients the ability to outsource
                    their development team who are skilled to compete in the
                    ever changing, highly competitive business environment. They
                    have proven competency to come up with data driven solutions
                    for complex IT problems. We chose the best IT consultants to
                    represent us so that we can tailor the IT needs of our
                    clients efficiently, letting our clients focus on their line
                    of work.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-start md:justify-start md:w-1/2 justify-start items-center w-auto">
                <div className="text-2xl font-extrabold text-teal-600 md:items-left md:text-left items-center text-center">
                  <h3>Project implementation</h3>
                </div>
                <div className="text-base text-gray-600 p-4 pl-0 ">
                  <p>
                    We enable our clients to transition from their existing
                    business processes into effective business processes by
                    building in newer ways of doing things as per the client's
                    approval. The project is implemented in the standard
                    procedure as required by the clients in terms of planning,
                    scheduling, execution, monitoring and reporting. We keep in
                    mind the project's scope, risks, scope creep so that the
                    roll-out of the project is delivered in a robust manner. We
                    believe in customer satisfaction, so we set their
                    expectations higher and then move up a notch.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-start md:justify-start md:w-1/2 justify-start items-center w-auto">
                <div className="text-2xl font-extrabold text-teal-600 md:items-left md:text-left items-center text-center">
                  <h3>Job Aspirants</h3>
                </div>
                <div className="text-base text-gray-600 p-4 pl-0 ">
                  <p>
                    Instead of being a choice, you will be the chooser for the
                    amazing companies of your choice. We have vast networks with
                    the companies of your choices which assists you to open
                    doors of opportunities in all areas of IT . We offer you the
                    service of IT staffing experts to help you land the job of
                    your choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Items */}
        </div>
      </div>
    </section>
  );
}
