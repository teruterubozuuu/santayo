import "./Review.css"
import { Rating } from "@mui/material";
import { useState } from "react";


function Review(){
    const [value, setValue] = useState(2);

    return (
      <>
        <div className="review-wrapper">
          <h1>Review</h1>
          <div className="rating-container">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>

          <div className="reviewTxt-container">
            <textarea placeholder="Share more thoughts about this carinderia..."></textarea>
            <div className="button-container"><button>Submit</button></div>
          </div>
          </div>
      </>
    );
}

export default Review