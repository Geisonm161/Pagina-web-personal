import ClockLoader from "react-spinners/ClockLoader";

function Landing() {
  return (
    <div className="flex justify-center items-center bg-black h-screen opacity-80">
      <ClockLoader
        color={"rgb(43, 255, 0)"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Landing;
