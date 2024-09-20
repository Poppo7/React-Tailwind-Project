import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="About Binary" className="w-full h-auto" />
                </div>
                <p className="text-lg lg:text-2xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                Binary Brews is a one-of-a-kind coffee shop where creativity and productivity come together. Whether you're a software engineer, a creative thinker, or someone who just loves a great cup of coffee, our cozy space offers a welcoming environment for all. With subtle tech-inspired decor, like binary patterns and circuit board designs, it's the perfect spot to work, collaborate, or simply relax. Whether you're tackling a project, meeting friends, or brainstorming your next idea, Binary Brews is here to fuel your passion.</p>
            </div>
    </section>
  )
}

export default About
