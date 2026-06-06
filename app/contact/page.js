export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Contact Me</h1>
      <div className="bg-gray-800 p-6 rounded-lg max-w-md">
      <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
      <div className="flex flex-col gap-4">
      <a href="mailto:dennisegheosaomoyibo@gmail.com" className="bg-blue-500 px-6 py-3 rounded-lg text-center hover:bg-blue-600">Send Email</a>
      <a href="https://github.com/Dennis0474" className="bg-gray-700 px-6 py-3 rounded-lg text-center hover:bg-gray-600" target="_blank">GitHub Profile</a>
      </div>
      </div>
    </div>
  );
}