const ContactUs = () => {
  return (
    <div className="bg-gray-100 p-4 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to us for any inquiries.
          </p>
          <form>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 mb-2"
              required
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 mb-2"
              required
            />
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded-md p-2 mb-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default ContactUs;
