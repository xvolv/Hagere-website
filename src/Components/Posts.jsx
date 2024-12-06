import utube from "../assets/images/utube.svg"
import { Sela } from "./sela";


function Posts() {
  return (
    <div id="posts" className="flex-col">
      <div className="flex   items-center justify-center ">
        <h1 className="font-ga  border-2 border-cyan-500 rounded px-4 py-2 bg-cyan-500 text-white transition flex  items-center justify-center">my Latest youtube
          <a href="https://www.youtube.com/@Hageretechs">
            <img className="hover:scale-150 transition-transform duration-200" src={utube} alt="" />
          </a>


          videos</h1>
      </div>


      <div className="flex justify-center flex-wrap gap-5 ">
        {Object.entries(Sela).map(([keys, values]) => {
          return (
            <div key={keys} className="mt-4">
              <iframe
                className="w-52 h-32"
                src={values.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>

      {/* Add a Link to scroll to the Contact section */}


      {/* Ensure the Contact component is rendered here */}

    </div>
  );
}

export default Posts;