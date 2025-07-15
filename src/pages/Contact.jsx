const Contact = () => {
  return (
    <section className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">İletişim</h1>
      <p className="text-gray-700 mb-4">
        Bana ulaşmak için aşağıdaki bağlantıları kullanabilirsin:
      </p>
      <div className="space-y-2">
        <a href="mailto:enes@example.com" className="block text-blue-500">📧 enes@example.com</a>
        <a href="https://github.com/metalate" target="_blank" className="block text-blue-500">🐙 GitHub</a>
        <a href="https://linkedin.com/in/enesugur" target="_blank" className="block text-blue-500">💼 LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact
