
const HomeHowCanWeHelpYou = () => {
  return (
    <div className='flex items-center justify-between overflow-hidden'>
        <div className="w-1/2">
            <h4 className="font-bold font-poppins text-lg py-20 text-[#25caac]">HOW CAN WE HELP YOU</h4>
            <h1 className="font-bold font-raleway text-5xl">Your journey can be our next sucess story</h1>
            <p className="font-poppins text-md py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="font-poppins text-md py-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className="py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full">GET STARTED</button>
        </div>
        <div className="w-1/2">
            <img src="/Home2.jpg" alt="Building" className="border-2 size-[100%] masked-image ml-[15rem]" />
        </div>
    </div>
  )
}

export default HomeHowCanWeHelpYou