
import { useState } from "react"
import { crew } from "../starter-code/data.json"
import { BsCircle } from "react-icons/bs"

export default function Crew() {
  const [people] = useState(crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = people[value]

  return (
    <>
      <section className="home crew px-5">
        <div className="px-5 pt-32 grid grid-cols-1 gap-5 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article className="text-center md:text-left">
            <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-10">
              02
              <span className="ml-5 font-bold">Meet Your Crew</span>
            </h2>

            <img
              src={images.png}
              alt={name}
              title={name}
              className="block mx-auto lg:h-2/4 "
            />
          </article>

          <article className="pt-5 text-center md:text-left">

            <h4 className="text-white font-bold text-2xl lg:text-3xl uppercase tracking-widest mb-5">{role}</h4>
            <h2 className="text-white font-bold text-5xl lg:text-6xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white border-b border-gray-400 pb-5">
              {bio}
            </p>

            <ul className="flex items-center justify-center md:justify-start mb-10">
              {people.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-semibold tracking-wider text-gray-200 center mt-5 border-b border-transparent ${index === value && "bg-white rounded-full"
                      }`}
                  >
                    <BsCircle></BsCircle>
                  </button>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}

