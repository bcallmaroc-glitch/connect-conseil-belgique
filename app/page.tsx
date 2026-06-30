export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl font-bold text-blue-900">
          Connect Conseil Belgique
        </h1>

        <h2 className="text-3xl font-semibold text-gray-700 mt-6">
          Votre conseiller Télécom & Énergie
        </h2>

        <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto">
          Comparez gratuitement les offres Télécom et Énergie disponibles en Belgique.
          Nous vous accompagnons pour trouver une offre adaptée à vos besoins
          et à votre budget.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <span className="bg-white shadow rounded-full px-5 py-3">
            📶 Internet
          </span>

          <span className="bg-white shadow rounded-full px-5 py-3">
            📱 GSM
          </span>

          <span className="bg-white shadow rounded-full px-5 py-3">
            📺 Télévision
          </span>

          <span className="bg-white shadow rounded-full px-5 py-3">
            ⚡ Électricité
          </span>

          <span className="bg-white shadow rounded-full px-5 py-3">
            🔥 Gaz
          </span>

        </div>

        <button className="mt-12 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
          Demander mon rappel gratuit
        </button>

      </section>
    </main>
  );
}