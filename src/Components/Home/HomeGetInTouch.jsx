
const HomeGetInTouch = () => {
  return (
    <div className=" w-full rounded-xl relative border-2 border-l-[#1a6b5d] border-t-[#0a3830] border-r-[#0a3830] border-b-[#0c3b33] bg-[url('/Home4.jpg')] bg-cover bg-right h-screen">
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="h-[99.99%] w-1/2 text-white bg-[#000000] p-16 relative z-10">
        <h3 className="text-[#20ae94] font-poppins font-bold text-lg pb-12">GET IN TOUCH</h3>
        <h1 className="font-raleway font-bold text-5xl">Ready to build a future with us?</h1>
        <p className="font-poppins text-lg font-light py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.</p>
        <div className="flex items-center space-x-6 mt-10">
          
            <button className="py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold">SUBMIT VACANCY</button>
            <button className="py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold">SUBMIT RESUME</button>
        </div>
    </div>
  </div>

  )
}

export default HomeGetInTouch;