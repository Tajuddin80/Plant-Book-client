import React from "react";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router";
import PlantCard from "./PlantCard";
import Faq from "../../components/Faq/Faq";
import { Helmet } from "react-helmet";
const Home = () => {
  const datas = useLoaderData();
  

  //  https://i.ibb.co/YBKk4N3B/Screenshot-From-2025-06-02-12-40-53.png
  // https://i.ibb.co/VcYSRD6x/Screenshot-From-2025-06-02-12-41-01.png
  // https://i.ibb.co/wFLBdC00/Screenshot-From-2025-06-02-12-49-54.png
  // https://i.ibb.co/TB6wZGDW/Screenshot-From-2025-06-02-12-41-55.png
  // https://i.ibb.co/v4nn1XCb/Screenshot-From-2025-06-02-12-41-11.png
  // https://i.ibb.co/WvrQhQFX/Screenshot-From-2025-06-02-12-41-20.png
  // https://i.ibb.co/8D3HFHSZ/Screenshot-From-2025-06-02-12-41-35.png
  // https://i.ibb.co/1GpBFbvq/Screenshot-From-2025-06-02-12-41-44.png
  // https://i.ibb.co/0V6Y4gmT/Screenshot-From-2025-06-02-12-49-22.png
  // https://i.ibb.co/4Rf56S91/Screenshot-From-2025-06-02-12-49-38.png
  return (
    <>
          <Helmet>
                <title>Plant Book 🌱 Home Page</title>
            </Helmet>
      <div>

      <Slider></Slider>
      </div>
      {/* <div className="text-center text-5xl font-semibold ">Recent Tips</div> */}
         <h2 className="text-center mt-50 md:mt-20 text-primary text-2xl md:text-3xl font-semibold uppercase border-b pb-2 my-10">

     Top Trending Tips
      </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:mt-10 w-[90vw] mx-auto gap-10">

      {datas.map((data) => (
        <PlantCard key={data._id} data={data}>
          {" "}
        </PlantCard>
      ))}

</div>
<Faq></Faq>
    </>
  );
};

export default Home;
