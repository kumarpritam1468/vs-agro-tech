import { ImSpinner3 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
        <ImSpinner3 className="animate-spin text-5xl text-black" />
    </div>
  )
}

export default Loading