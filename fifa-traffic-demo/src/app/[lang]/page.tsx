export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">
          FIFA Traffic Navigator
        </h1>
        <p className="text-lg mb-2">
          Language: {params.lang.toUpperCase()}
        </p>
        <p className="text-gray-600">
          Welcome to the FIFA Atlanta Navigator - your guide to FIFA events with real-time traffic and transit information.
        </p>
      </div>
    </main>
  )
}
