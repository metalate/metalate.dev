const Projects = () => {
  const projectList = [
    {
      title: "QR Invoice Tracker",
      desc: "QR ile fiş/fatura okuma ve Excel aktarımı",
      link: "https://github.com/metalate/qr-invoice-tracker"
    },
    {
      title: "Bahçevim Web Sitesi",
      desc: "Basit HTML + CSS ile responsive bahçıvan tanıtım sayfası",
      link: "https://github.com/metalate/bahceevim"
    }
  ]

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Projelerim</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((p, index) => (
          <div key={index} className="border rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              GitHub’da Gör
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
