import { useParams } from "react-router-dom";
import "./CardDetails.css"; // Import specific styles for card details

function CardDetails() {
    const { id } = useParams(); // Get the card ID from the URL

    return (
        <div className="card-detail-container">
            <h2>Card Detail for Carinderia {id}</h2>
            <p>Details about carinderia {id} will be displayed here.</p>
            {/* more details about the card here */}
        </div>
    );
}

export default CardDetails;
