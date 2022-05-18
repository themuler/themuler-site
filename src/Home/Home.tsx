import React from "react";
import TypeWriter from "typewriter-effect";

const Home: React.FC<any> = () => {
    return <div className="mt-3 h-content-screen w-screen">
        <section className="w-auto">
            <h1 className="text-2xl">Welcome to TheMuler's Community</h1>
            <span className="text-blue-500 text-xl">
                <TypeWriter
                    options={{
                        strings: [
                            "share my experience",
                            "share my knowledge",
                            "share my ideas",
                            "share my blogs",
                            "have my open-source projects",
                            "have projects related to blogs"
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </section>
    </div>
}

export default Home;
