import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_vmeibnd',
        'template_rlmdl7l',
        form.current,
        '-BjPNVYlQ7DDc9Ylq'
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Pesan berhasil dikirim!");
          form.current.reset(); // reset form setelah sukses
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Gagal mengirim pesan.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-3xl h-max lg:min-h-[50vh] py-4 lg:max-w-none bg-white p-8 rounded-lg shadow-lg lg:order-1"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm lg:text-lg font-bold mb-2"
          htmlFor="user_name"
        >
          Name
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          type="text"
          id="name"
          name="user_name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm lg:text-lg  font-bold mb-2"
          htmlFor="user_email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          type="email"
          id="email"
          name="user_email"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm lg:text-lg font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        className="px-4 mb-6 py-2 bg-primary text-white lg:text-lg  rounded-md hover:bg-secondary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Mengirim..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;