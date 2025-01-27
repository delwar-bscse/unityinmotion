import React, { useState } from 'react';

function ContactUsForm() {
  const [subject, setSubject] = useState('');
  const [opinions, setOpinions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Subject:', subject);
    console.log('Opinions:', opinions);
  };

  return (
    <div className="text-font01 my-6 mdl:my-32">
      <h2 className="text-3xl mdl:text-4xl lgl:text-5xl font-semibold mb-6 text-center">Get in Touch</h2>
      <p className="my-4 text-center">Contact with us</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full border border-font01  py-2 px-3 focus:outline-none focus:border-blue-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="opinions" className="block text-sm font-semibold mb-2">
            Opinions
          </label>
          <textarea
            id="opinions"
            rows={10}
            className="w-full border border-font01  py-2 px-3 focus:outline-none focus:border-blue-500"
            value={opinions}
            onChange={(e) => setOpinions(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-font01 hover:bg-gray-600 text-white font-bold py-3 px-4 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;