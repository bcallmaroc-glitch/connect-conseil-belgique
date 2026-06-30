export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6">
            Connect Conseil Belgique
          </h1>

          <p className="text-2xl mb-4">
            Votre expert en Télécom & Énergie
          </p>

          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Comparez gratuitement les meilleures offres Internet, GSM,
            Télévision, Électricité et Gaz en Belgique.
            Nos conseillers vous accompagnent gratuitement afin de trouver
            l'offre la plus avantageuse.
          </p>

          <button className="mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
            📞 Demander mon rappel gratuit
          </button>

        </div>
      </section>

      {/* SERVICES */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Nos Services
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "🌐 Internet",
              "📱 GSM",
              "📺 Télévision",
              "⚡ Électricité",
              "🔥 Gaz",
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >
                <p className="text-xl font-semibold">{service}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* AVANTAGES */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Pourquoi choisir Connect Conseil Belgique ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-100 p-8 rounded-xl">
              ✔️ Comparaison gratuite
            </div>

            <div className="bg-slate-100 p-8 rounded-xl">
              ✔️ Conseiller dédié
            </div>

            <div className="bg-slate-100 p-8 rounded-xl">
              ✔️ Sans engagement
            </div>

            <div className="bg-slate-100 p-8 rounded-xl">
              ✔️ Accompagnement personnalisé
            </div>

            <div className="bg-slate-100 p-8 rounded-xl">
              ✔️ Économisez du temps
            </div>

            <div className="bg-slate-100 p-8 rounded-xl">
              ✔️ Réduisez vos factures
            </div>

          </div>

        </div>

      </section>

      {/* FORMULAIRE */}

      <section className="py-20">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Demandez votre rappel gratuit
          </h2>

          <div className="bg-white rounded-xl shadow-xl p-8 space-y-5">

            <input
              className="w-full border p-4 rounded-lg"
              placeholder="Nom"
            />

            <input
              className="w-full border p-4 rounded-lg"
              placeholder="Téléphone"
            />

            <input
              className="w-full border p-4 rounded-lg"
              placeholder="Email"
            />

            <input
              className="w-full border p-4 rounded-lg"
              placeholder="Code postal"
            />

            <select className="w-full border p-4 rounded-lg">
              <option>Internet</option>
              <option>GSM</option>
              <option>Télévision</option>
              <option>Électricité</option>
              <option>Gaz</option>
            </select>

            <textarea
              className="w-full border p-4 rounded-lg"
              rows={5}
              placeholder="Votre message"
            />

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg text-lg font-semibold">
              Envoyer ma demande
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-white py-10">

        <div className="max-w-6xl mx-auto text-center space-y-3">

          <h3 className="text-2xl font-bold">
            Connect Conseil Belgique
          </h3>

          <p>📞 +32 XX XX XX XX XX</p>

          <p>✉️ contact@connectconseil.be</p>

          <p>📍 Belgique</p>

          <p className="text-sm text-gray-400 mt-6">
            © 2026 Connect Conseil Belgique - Tous droits réservés.
          </p>

        </div>

      </footer>

    </main>
  );
}