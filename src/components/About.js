import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import cssImage from "../assets/css.png";
import htmlImage from "../assets/html.png";
import javascriptImage from "../assets/javascript.png";
import reactImage from "../assets/react.png";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;
  return (
    <main className="bg-gradient-to-r from-black to-gray-600 min-h-screen">
      <img
        src="https://source.unsplash.com/1600x900/?nature/"
        alt="Random Nature image"
        className="absolute object-cover w-full h-full opacity-10"
      />

      <section className="container mx-auto">
        <h1 className="text-8xl font-bold text-gray-300 mb-12 flex justify-center hahmlet opacity-80">
          About Me
        </h1>

        <section className="bg-gradient-to-r from-black to-green-800 rounded-lg shadow-2xl lg:flex p-20 opacity-70">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-100 mb-4">
              Hello, I'm{" "}
              <span className="text-green-100">
                {author.name}
                <div>
                  , I am from Tucson, Arizona. I am an upcoming
                  programmer/software developer I would like to master multiple
                  langauges such as javascript,python, and C++ in the future. My
                  dream coding job would be something working with AI technology
                  to help progress mankind. Hobbies of mine include working out,
                  playing video games, and practicing coding of course!
                </div>
              </span>
            </h1>
          </div>
        </section>
        <div className="container mx-auto flex justify-around">
          <div className="infline-flex py-3 px-3 my-6">
            <h1 className="text-6xl font-bold text-gray-300 mb-12 flex justify-center hahmlet opacity-80">
              Technologies I'm experienced in
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex justify-evenly">
          <nav className="flex">
            <div class="w-6/12 sm:w-4/12 px-4">
              <img
                src={cssImage}
                className="inline-flex items-center py-3 px-3 my-6 mx-10 rounded"
              />
            </div>
            <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src={htmlImage}
              className="inline-flex items-center py-3 px-3 my-6 mx-10 rounded"
            />
            </div>
            <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src={javascriptImage}
              className="inline-flex items-center py-3 px-3 my-6 mx-10 rounded"
            />
            </div>
            <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src={reactImage}
              className="inline-flex items-center py-3 px-3 my-6 mx-10 rounded"
            />
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
