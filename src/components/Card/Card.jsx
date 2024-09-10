import './Card.css';

function Card({ imgSrc, title, description }) {
  return (
    <div className='col-4'>
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body textcol">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary ">Comprar</a>
        </div>
      </div>
    </div>
  );
}

export default Card;