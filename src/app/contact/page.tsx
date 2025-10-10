import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-gray-300 container flex justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Side — Info or Image */}
        <div className="bg-indigo-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-lg text-gray-200">
            Have a project in mind or just want to say hi? I’d love to hear from
            you. Fill out the form and let’s build something amazing together!
          </p>

          <div className="space-y-3 text-gray-100">
            <p>
              📍 <span className="font-medium">Location:</span> Dhaka,
              Bangladesh
            </p>
            <p>
              📧 <span className="font-medium">Email:</span> yourmail@gmail.com
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span> +880 1234 567890
            </p>
          </div>

          {/* Optional: Add an image below */}
          {/* <img src="/contact-image.png" alt="Contact" className="mt-8 rounded-lg" /> */}
        </div>

        {/* Right Side — Contact Form */}
        <div className="p-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
