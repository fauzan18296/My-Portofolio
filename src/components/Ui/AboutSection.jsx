import myImg from "../../assets/images/Img-About-Section/WhatsApp_Image_2025-01-06_at_14.43.49-removebg-preview.png"

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  w-full flex-col">
      <h1 className="text-3xl  mt-24 text-indigo-400 font-extrabold">About</h1>
      <div className="container flex justify-evenly items-center max-mobile:flex-col-reverse">
        <img src={myImg} alt="My Image" />
        <p className="block mt-7 mx-14 text-xl">My name is Ahmad Fauzan I am a fresh high school graduate who wants to become a web developer. Which I have learned web coding from grade 10 to grade 12 autodidactically, then for the technology that I have learned are reactjs, tailwindcss, bootstrap, redux, and etc. </p>
      </div>
      </div>
  )
}

export default AboutSection
