import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import MembershipModal from "../modals/MembershipModal";
import MembershipOptionCart from "../components/MembershipOptionCart";
import HomeAboutUs from "../sections/HomeAboutUs";
import AskedQuestion from "../components/AskedQuestion";
import { askedQuestionDatas } from "../constants/askedQuestionDatas";
import FreeClass from "../sections/FreeClass";
import ClientSay from "../sections/ClientSay";
import { productsDatas2 } from "../constants/productsDatas";
import ProductCart from "../components/ProductCart";
import { Link } from "react-router-dom";

function Home() {
  const [isMembershipModalOpen,setIsMembershipModalOpen] = useState(false);

  const handleMembershipModal = () =>{
    setIsMembershipModalOpen(!isMembershipModalOpen)
  }
  
  return (
    <div className="">
      {/*-------------------- home intro section ------------------------- */}
      <section className="relative">
          <div className="w-full relative bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://i.gifer.com/Eih3.gif')" }}>
              <div className="bg-gray-900/80 w-full h-full min-h-[300px] md:min-h-[500px] lgl:min-h-[600px]  xl:min-h-[800px] z-10 flex flex-col items-center justify-center gap-2 md:gap-4 xl:gap-8">
                  <h2 className="text-font03 font-light text-2xl md:text-4xl xl:text-6xl leading-loose">Functional Movement.</h2>
                  <h2 className="text-font03 font-light text-2xl md:text-4xl xl:text-6xl leading-loosee">Anytime Anywhere.</h2>
                  <button className="text-font03 font-light text-sm md:text-lg flex gap-2 items-center bg-primary py-4 px-4 md:px-6 xl:px-12 mt-12" onClick={handleMembershipModal}>
                    <span>Join Our Class</span>
                    <MdOutlineArrowOutward />
                  </button>
              </div>
          </div>
          {isMembershipModalOpen && <div className="fixed inset-0 z-10 flex justify-center items-center">
            <MembershipModal onCloseMembershipModal={handleMembershipModal}/>
          </div>}
      </section>

      
      {/*-------------------- membership options section ------------------------- */}
      <div className="relative">
        <section className="w-full max-w-[1280px] mx-auto px-4 my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-5 py-10">
            <MembershipOptionCart title="Basic Membership" cdn="180 CDN"/>
            <MembershipOptionCart title="Standard Membership" cdn="250 CDN"/>
            <MembershipOptionCart title="Premium Membership" cdn="320 CDN"/>
          </div>
        </section>
      </div>

          
      {/*-------------------- Shop section ------------------------- */}
      <div className='w-full max-w-[1280px] px-4 mx-auto my-20'>
          <div className='flex justify-between items-center my-10'>
            <h2 className='text-5xl'>Shop</h2>
            <Link to="/shop" className='text-font02 underline text-2xl'>View All</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-4'>
            {productsDatas2?.map((singleProduct)=>(
              <div key={singleProduct?.id}>
                <ProductCart singleProduct={singleProduct}/>
              </div>
            ))}
          </div>
        </div>

      
      {/*-------------------- about us section ------------------------- */}
      <div className="">
        <section className="w-full max-w-[1280px] mx-auto">
          <HomeAboutUs />
        </section>
      </div>
      

      {/*-------------------- Frequently Asked Questions ------------------------- */}
      <div className="">
        <section className="w-full max-w-[1280px] px-4 mx-auto my-20">
          <h2 className="text-center text-4xl mdl:text-5xl font-semibold mb-20">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-5">
            {askedQuestionDatas?.map((singleQuestion,i)=>(
              <AskedQuestion key={i} singleQuestion={singleQuestion}/>
            ))}
          </div>
        </section>
      </div>
      

      {/*-------------------- free class section ------------------------- */}
      <div className="">
        <section className="w-full max-w-[1280px] px-4 mx-auto my-20">
          <FreeClass />
        </section>
      </div>
      

      {/*-------------------- what clients say ------------------------- */}
      <div className="">
        <section className="w-full max-w-[1280px] px-4 mx-auto my-20">
          <ClientSay />
        </section>
      </div>

    </div>
  );
}

export default Home;
