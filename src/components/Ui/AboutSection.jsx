import { myBiodata } from "../../databases/dummyDataMyBiodata.js"
const AboutSection = () => {
  return (
    <div id="about" className="flex justify-center items-center text-white min-h-dvh  flex-col">
      <h1 className="text-2xl mt-24 font-Poppins -tracking-tighter font-bold max-mobile:text-xl">About Me</h1>
      <div className="container md:mt-2 flex justify-center items-center  flex-col">
        <div className="flex justify-center items-center mx-6">
          <p className="block text-center max-w-full max-mobile:mt-7 text-xl max-mobile:text-base">I'm a front-end developer focused on developing efficient, responsive websites with attractive, modern designs. I enjoy solving problems with clean, readable code.
          </p>
        </div>
        {
            myBiodata.length > 0 && myBiodata.map((biodata, i) => {
            return (
              <div key={i} className="flex flex-row items-center justify-evenly mt-10 gap-20 max-mobile:flex-col">
                <img className="size-2/6 object-cover rounded-2xl max-mobile:size-2/5" src={biodata.imageProfile} />
                <div className="text-xl space-y-10 max-mobile:space-y-6 max-mobile:w-5/6 max-mobile:text-base w-full">
                  <p className="border-b-2 border-gray-300 pb-3 rounded-sm"><span className="font-semibold">Name:</span> {biodata.nama}</p>
                  <p className="border-b-2 border-gray-300 pb-3 rounded-sm"><span className="font-semibold">Date of birth:</span> {biodata.dateOfBirth}</p>
                  <p className="border-b-2 border-gray-300 pb-3 rounded-sm"><span className="font-semibold">Address:</span> {biodata.address}</p>
                  <p className="border-b-2 border-gray-300 pb-3 rounded-sm"><span className="font-semibold">Email:</span> {biodata.email}</p>
                  <p className="border-b-2 border-gray-300 pb-3 rounded-sm"><span className="font-semibold">Hobby:</span> {biodata.hobby}</p>
                  </div>
              </div>
              )
            })
          }
      </div>
      </div>
  )
}

export default AboutSection
