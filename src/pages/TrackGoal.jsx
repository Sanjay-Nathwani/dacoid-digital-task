const TrackGoal = () => {
  return (
    <div className="flex flex-col items-center p-3 max-w-[400px] h-screen mx-auto relative">
      <div className="w-full flex justify-end px-8 mb-12 underline">
        <span>Skip</span>
      </div>
      <div className="w-[75%] mb-10">
        <img
          src="./images/img1.png"
          className="bg-white object-cover object-center"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold mb-3">Track Your Goal</h3>
        <p>
          Don&apos;t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>
      <img src="/images/progress.png" className="absolute bottom-5 right-5 w-16 h-16" />
    </div>
  );
};

export default TrackGoal;
