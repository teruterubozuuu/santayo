import "./Review.css"
import { Rating } from "@mui/material";
import { useState } from "react";


function Review({setIsOpen}){
    const [value, setValue] = useState(2);

    return (
      <div className="review-container">
        <div className="review-wrapper">
          <p onClick={()=>setIsOpen(false)} className="closeBtn">x</p>
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
      </div>
    );
}

export default Review