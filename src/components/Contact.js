import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function Contact() {
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
        Contat Information
        
      </h1>
        <h2 className="text-3xl font-bold text-white  flex justify-center hahmlet opacity-90">
        <ul  className="my-12">
          <li className="my-12 text-green-100">Email  :  MiguelLozano3757@gmail.com</li>
          <li className="my-12 text-green-100">Phone Number :    (520)809-5355</li>
        </ul>
        </h2>

            
          </section>
      </main>
  )
}
