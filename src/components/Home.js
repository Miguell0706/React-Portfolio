import React from "react"

export default function Home() {
    return (
        <main>
            <img src="https://source.unsplash.com/1600x900/?nature/" alt="Random Nature image" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold hahmlet leading-none lg:leading-snug home-name"> My name is Miguel</h1>
            </section>
        </main>
    )
}