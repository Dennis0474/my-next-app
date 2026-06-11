"use client"

export default function Error({ error, reset}) {
  return (
<div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-400 mb-6">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 text-white">
          Try Again
        </button>
      </div>
    </div>
  )
}