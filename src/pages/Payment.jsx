import React, { useState } from 'react';
import { paymentCard } from '../assets/assets';
import PaymentSuccessModal from '../modals/PaymentSuccessModal';

const Payment = () => {
  const [isOpenSuccessModal,setIsOpenSuccessModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ lastName, email, phoneNumber, country, city, cardNumber, expiryDate, cvc });
    setIsOpenSuccessModal(!isOpenSuccessModal);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCountry("");
    setCity("");
    setCardNumber("");
    setExpiryDate("");
    setCvc("");
  };

  return (
    <div className='w-full max-w-[1280px] px-2  mx-auto'>
      <h1 className='text-5xl mdl:text-6xl text-font01 mt-12'>Payment</h1>
      <div className='flex flex-col justify-center items-center mt-10 mb-32'>
        <div className='flex justify-center items-center'>
          <img src={paymentCard} alt="Payment Card" className='w-full max-w-[300px] h-auto'/>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-[700px] mx-auto space-y-10 text-font01 text-opacity-80">
          <h2 className="text-2xl md:text-4xl text-center mb-16 text-opacity-100 text-font01">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium">
                MM/YY
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className=" p-1 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center border-b border-gray-300 pb-3">
            <label htmlFor="totalAmount" className="block text-sm font-medium">
              Total Amount
            </label>
            <span className="ml-2">$155.00</span>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-5 hover:bg-gray-800"
          >
            Confirm Pay
          </button>
        </form>
      </div>
      {isOpenSuccessModal && <div>
        <PaymentSuccessModal setIsOpenSuccessModal={setIsOpenSuccessModal}/>
      </div>}
    </div>
  );
};

export default Payment;