'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Something went wrong</h2>
        <button
          onClick={reset}
          className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
