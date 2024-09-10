import Card from '../Card/Card';
import './Product.css';

const products = [
  { id: 1, name: 'Escopeta del scout', imgSrc: '/public/weapons/shotguns/weapontest1.png', description: 'Descripción de la escopeta del scout' },
  { id: 2, name: 'Refrescopeta', imgSrc: '/public/weapons/shotguns/weapontest2.png', description: 'Descripción de la refrescopeta' },
  { id: 3, name: 'Retroescopeta', imgSrc: '/public/weapons/shotguns/weapontest3.png', description: 'Descripción de la retroescopeta' },
];

const ProductSection = () => {
  return (
    <section className="product">
      <h2 className="section-title">Productos</h2>
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Card
                imgSrc={product.imgSrc}
                title={product.name}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;