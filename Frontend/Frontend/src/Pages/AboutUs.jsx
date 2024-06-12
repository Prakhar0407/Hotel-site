import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/hotel.svg";
import apj from "../Assets/Images/hotel.svg";
import billGates from "../Assets/Images/hotel.svg";
import einstein from "../Assets/Images/hotel.svg";
import nelsonMandela from "../Assets/Images/hotel.svg";
import steveJobs from "../Assets/Images/hotel.svg";

function AboutUs() {
  return (
    <HomeLayout>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hotel Information</title>
  <style dangerouslySetInnerHTML={{__html: "\n/* Reset CSS */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Flexbox utilities */\n.flex {\n  display: flex;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.mx-10 {\n  margin-left: -1.25rem;\n  margin-right: -1.25rem;\n}\n\n.space-y-10 > * + * {\n  margin-top: 2.5rem;\n}\n\n/* Text styles */\n.text-white {\n  color: #fff;\n}\n\n.text-yellow-500 {\n  color: #ffcc00;\n}\n\n.text-gray-200 {\n  color: #ccc;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.font-semibold {\n  font-weight: bold;\n}\n\n/* Padding and margin utilities */\n.pl-20 {\n  padding-left: 1.25rem;\n}\n\n.pt-20 {\n  padding-top: 1.25rem;\n}\n\n/* Width utilities */\n.w-1/2 {\n  width: 50%;\n}\n\n/* Image styles */\n#test1 {\n  filter: drop-shadow(0px 10px 10px rgb(0,0,0));\n}\n" }} />
  <div className="pl-20 pt-20 flex flex-col text-white">
    <div className="flex items-center gap-5 mx-10">
      <section className="w-1/2 space-y-10">
        <h1 className="text-5xl text-yellow-500 font-semibold">
          Affordable and quality hotel
        </h1>
        <p className="text-xl text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis consequatur totam labore possimus nihil voluptatem, cumque ullam quam quos temporibus. Quasi dicta placeat iste magni accusamus est non odio adipisci, in architecto repellat neque reprehenderit quod ipsam aliquid dolorum, quia et necessitatibus! Esse, vitae sunt.
        </p>
      </section>


<div className="w-1/2">
            <img
              id="test1"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0));" }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>


    </div>
    <div className="carousel w-1/2 my-16 m-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
          <img src="{apj}" className="w-40 rounded-full border-2 border-gray-400" />
          <p className="text-xl text-gray-200">"Don't take rest after your first victory because if you fail in"</p>
          <h3 className="text-2xl font-semibold">Ankit Kumar</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
          <img src="{nelsonMandela}" className="w-40 rounded-full border-2 border-gray-400" />
          <p className="text-xl text-gray-200">"Don't take rest after your first victory because if you fail in"</p>
          <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
          <img src="{einstein}" className="w-40 rounded-full border-2 border-gray-400" />
          <p className="text-xl text-gray-200">"Don't take rest after your first victory because if you fail in"</p>
          <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>


      
      <div id="slide4" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
          <img src="{billGates}" className="w-40 rounded-full border-2 border-gray-400" />
          <p className="text-xl text-gray-200">"Don't take rest after your first victory because if you fail in"</p>
          <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
          <img src="{steveJobs}" className="w-40 rounded-full border-2 border-gray-400" />
          <p className="text-xl text-gray-200">"Don't take rest after your first victory because if you fail in"</p>
          <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </HomeLayout>
  );
}
export default AboutUs;
