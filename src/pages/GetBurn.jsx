
const GetBurn = () => {
  return (
    <div className="flex flex-col items-center p-3 max-w-[400px] h-screen mx-auto">
      <div className="w-full flex justify-end px-8 mb-16 underline">
        <span>Skip</span>
      </div>
      <div className="w-[75%] mb-10">
        <img
          src="./images/img2.png"
          className="bg-white object-cover object-center w-full"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold mb-3">Get Burn</h3>
        <p>
          Let&apos;s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>
      </div>
      <img src="/images/progress1.png" className="absolute bottom-5 right-5 w-16 h-16" />
    </div>
  );
}

export default GetBurn