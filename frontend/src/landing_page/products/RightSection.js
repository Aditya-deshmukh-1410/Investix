import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        
        <div className="col-6 px-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <a
            href={learnMore}
            className="text-decoration-none d-inline-block mt-2"
          >
            Learn more
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

        
        <div className="col-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
