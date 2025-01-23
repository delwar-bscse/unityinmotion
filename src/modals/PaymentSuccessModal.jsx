import { useNavigate } from "react-router-dom";


const PaymentSuccessModal = ({setIsOpenSuccessModal}) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsOpenSuccessModal(false);
    navigate("/")
  };

  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800/70">
      <div className="bg-white w-[800px] px-40 py-28 rounded-lg shadow-lg flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-font01 text-center">Your Payment Successful</h2>
          <p className="text-font01 text-opacity-80 text-center text-sm leading-6 tracking-wider">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem
          </p>
          <div className="flex justify-center items-center py-4">
            <img src="verified.gif" alt="Payment verified" className='w-20 h-20'/>
          </div>
          <button
            className="mt-4 bg-font01 hover:bg-opacity-80 text-font03 font-bold py-3 px-6 rounded"
            onClick={handleCloseModal}
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentSuccessModal;