//rafc
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-20">
            <h1 className="text-5xl lg:text-[7rem] p-2 uppercase font-bold">
                {HERO_CONTENT.title}
            </h1>
            <p className="lg:mt text-2xl mb-6 font-medium tracking-tighter">
                {HERO_CONTENT.subtitle}
            </p>
            <img src={HERO_CONTENT.image} className="w-full h-[75vh] object-cover rounded-2xl p-2" alt="" />
        </div>
    </section>
  )
}

export default Hero
