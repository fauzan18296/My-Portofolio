import myImg from "../../assets/images/Img-About-Section/MyImg.avif"

const AboutSection = () => {
  return (
    <div id="about" className="flex justify-center items-center min-h-screen  md:max-w-screen-xl max-w-screen-sm flex-col">
      <h1 className="text-3xl  mt-24 text-indigo-400 font-extrabold">About</h1>
      <div className="container flex justify-evenly items-center max-mobile:flex-col-reverse overflow-hidden">
        <div className="relative mt-auto top-0">
          <img className="max-w-full mx-auto" src={myImg} alt="My Image" />
          <span className="absolute -bottom-32 left-1/2 -translate-x-1/2 -z-10">
            <svg className="w-[380px] scale-[1.1]  md:w-[400px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#818CF8" d="M45.8,-66.4C56.5,-55.2,60.5,-38.1,63.5,-22.2C66.5,-6.4,68.4,8.2,64.8,21.6C61.2,34.9,52,46.9,40.2,54.7C28.5,62.5,14.3,66,-2.6,69.6C-19.4,73.1,-38.8,76.6,-49.7,68.5C-60.6,60.5,-63,40.9,-64.3,24C-65.5,7.1,-65.6,-7.1,-63.6,-23C-61.7,-39,-57.9,-56.6,-46.9,-67.7C-36,-78.9,-18,-83.4,-0.2,-83.1C17.5,-82.8,35,-77.6,45.8,-66.4Z" transform="translate(100 100)" />
</svg>
            </span>
        </div>
        <div className="self-center max-w-xl flex-wrap">
          <p className="block max-w-full max-mobile:mt-7 mx-6 text-xl">My name is Ahmad Fauzan. I am a high school graduate, my profession is a front-end developer. I learned web coding from grade 10 to grade 12 autodidactically. Now I am studying technology namely reactjs, tailwindcss, bootstrap, and redux to create a website for my experience. I am quite good at creating user-friendly designs.</p>
          </div>
      </div>
      </div>
  )
}

export default AboutSection
