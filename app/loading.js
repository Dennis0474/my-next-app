export default function Loading() {
  return (
<div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin text-6xl mb-4">
          ⚙️
        </div>
        <p className="text-blue-400 text-xl">
          Loading...
        </p>
      </div>
    </div>
  );
}