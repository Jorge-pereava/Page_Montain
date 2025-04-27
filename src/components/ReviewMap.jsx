const ReviewMap = () => {
    return (
    <section id="productos" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Más de 40 años brindando descanso en el Chocó</h2>
          <p className="text-gray-700 mb-10 text-lg">
            Almancén y colchonería la montaña es una empresa Quibdoseña con más de 4 décadas de trayectoria, reconocida 
            como la principal opción para la compra de colchones en la región.
          </p>
  
          <div className="w-full h-96 shadow-lg rounded-xl overflow-hidden">
            <iframe
              title="Ubicación Tienda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8058806969134!2d-76.66232704816463!3d5.687794742320771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e488f6d98a5b38b%3A0xef04cfe5b0def97f!2zQWxtYWPDqW4gTGEgTW9udGHDsWE!5e0!3m2!1ses!2sco!4v1745635905233!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default ReviewMap;
  