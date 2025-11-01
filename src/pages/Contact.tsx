const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-blue-100 text-blue-900 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">Kontak Kami</h1>
      <p className="max-w-3xl text-lg animate-fade-in delay-200 mb-6">
        Hubungi kami melalui email atau telepon untuk memulai perjalanan digital Anda bersama Sanggabiz.
      </p>

      <div className="flex flex-col gap-4 animate-fade-in delay-400">
        <p>Email: <span className="font-bold">hello@sanggabiz.com</span></p>
        <p>Telepon: <span className="font-bold">+62 812 3456 7890</span></p>
      </div>
    </section>
  );
};

export default Contact;
