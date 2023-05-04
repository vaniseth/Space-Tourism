import { useState } from "react"
import { technology } from "../starter-code/data.json"
import { BsCircle } from "react-icons/bs"

export default function Technology() {
    const [cards] = useState(technology)
    const [value, setValue] = useState(0)

    const { name, images, description } = cards[value]

    return (
        <>
            <section className="home technology px-5">
                <div className="px-5 pt-32 grid grid-cols-1 gap-5 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
                    <article className="text-center md:text-left">
                        <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-10">
                            03
                            <span className="ml-5 font-bold">Space Launch 101</span>
                        </h2>

                        <picture>
                            <source media="(min-width: 768px)" srcSet={images.portrait} />
                            <img
                                src={images.landscape}
                                alt={name}
                                title={name}
                                className="block mx-auto lg:h-2/4 "
                            />
                        </picture>
                    </article>

                    <article className="pt-10 text-center md:text-left">
                        <ul className="flex items-center justify-center md:justify-start mb-10">
                            {cards.map((item, index) => (
                                <li key={index} className="mr-5">
                                    <button
                                        onClick={() => setValue(index)}
                                        className={`uppercase text-white text-2xl h-12 w-12 mt-5 p-2 border-2 border-white rounded-full pb-2 mx-2 ${index === value && "bg-white text-gray-800"
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-white font-bold text-5xl lg:text-6xl uppercase tracking-widest mb-5">
                            {name}
                        </h2>
                        <p className="text-white border-b border-gray-400 pb-5">
                            {description}
                        </p>

                    </article>
                </div>
            </section>
        </>
    )
}

