import React from "react"

export default function Home() {
    return (
        <main class="bg-gradient-to-r from-black to-gray-600">
            
            <img src="https://source.unsplash.com/1600x900/?nature/" alt="Random Nature image" className="absolute object-cover w-full h-full opacity-20"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-green-100 font-bold hahmlet leading-none lg:leading-snug home-name"></h1>
            </section>
            
        </main>
    )
}