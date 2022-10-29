import { Rating } from "@mui/material";
import React from "react";
import RelatedProducts from "../components/RelatedProducts";
import EndSection from "../components/EndSection";

function Reviews() {
  return (
    <div>
      <section className="reviews">
        <div className="reviews1">
          <a>There are no reviews yet.</a>
        </div>

        <div className="reviews2">
          <h5>Be the first to review “Boho Bangle Bracelet”</h5>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>

          <div className="reviewbox">
            <h4>Your Ratings Here</h4>
            <Rating />
            <a>Your review *</a>

            <textarea rows="8"></textarea>
          </div>
          <div className="for-box">
            <div className="reviewboxx">
              <a>Name *</a>
              <input type={"name"}></input>
            </div>

            <div className="reviewboxx">
              <a>Email *</a>
              <input type={"email"}></input>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts />
      <EndSection />
    </div>
  );
}

export default Reviews;
