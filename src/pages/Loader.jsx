import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
    <TailSpin
      height="80"
      width="80"
      color="#000"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
      </div>
  );
}

export default Loader;
