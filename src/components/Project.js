import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            palce,
            description,
            projectType,
            appLink,
            githubLink,
            mainImage{
              asset->{
                   _id,
                   url
              },
              alt
          } 
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gradient-to-r from-black to-gray-600 min-h-screen">
      <img
        src="https://source.unsplash.com/1600x900/?nature/"
        alt="Random Nature image"
        className=" overflow-visible absolute object-cover w-full h-full opacity-20"

      />
      <section className="container mx-auto">
        <h1 className="text-8xl font-bold text-gray-300 mb-12 flex justify-center hahmlet opacity-80">
          My Projects
        </h1>

        <section className="grid lg:grid-cols-2 gap-8 sm:grid-cols-1 opacity-80">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-10 ">
                  {project.title}
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-white-400"
                    key={index}
                  >
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.appLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer"></span>
                  </a>
                  <a
                    href={project.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View The Github{" "}
                    <span role="img" aria-label="right pointer"></span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
