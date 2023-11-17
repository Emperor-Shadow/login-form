import Form from "./Form";

export default function Wrapper() {
  return (
    <div className="w-full md:py-12 md:px-20 flex justify-center items-center h-screen">
            <div className="md:w-2/5 shadow-2xl p-10 w-full h-full bg-white flex justify-center overflow-hidden items-center rounded">
                <Form/>
            </div>
    </div>
  )
}