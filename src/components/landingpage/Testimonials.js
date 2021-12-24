import React from "react";

const Testimonials = ({ src, title, des }) => {
  return (
    <div>
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-body">
            <div className="testimonials-item">
              <img src={src} />
            </div>
            <div className="testimonials-info">
              <p>{des}</p>
              <h6>{title}</h6>
              <div className="testimonoals-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
