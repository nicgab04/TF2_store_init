import TitleSection from '../TittleSection/TittleSection';// Renombrado
import './ProductMain.css';

const ProductMain = () => {
  return (
    <section className="product-main">
      <TitleSection 
        title="Bienvenido a la TF2Store" 
        subtitle="Encuentra los mejores artículos Extravantes a precios insuperables" 
      />
      <p className="section-content">
        Estas son nuestras mejores oferta del dia de hoy.
      </p>
    </section>
  );
};

export default ProductMain;