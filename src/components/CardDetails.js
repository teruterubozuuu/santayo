import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { carinderiaData } from "../pages/Carinderias";
import { useAuth } from "../context/AuthContext";
import "./CardDetails.css";
import Review from "../components/Review"; // Import the Review component
import ReviewsList from "../components/ReviewsList"; // Import the ReviewsList component

function CardDetails() {
  const { id } = useParams();
  const cardDetail = carinderiaData.find((card) => card.id === Number(id));
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  // Coordinates for the map
  const fallbackLat = 14.629463;
  const fallbackLng = 121.041962;

  const [mapData, setMapData] = useState({
    lat: cardDetail?.latitude || fallbackLat,
    lng: cardDetail?.longitude || fallbackLng,
  });

  // State for managing reviews
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/feedback/${id}`);
        const data = await response.json();
        if (data.success) {
          setReviews(data.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  const handleReviewSubmission = async (newReview) => {
    try {
      const response = await fetch(`http://localhost:5001/api/feedback/${id}`, {
        method: 'POST',
        body: JSON.stringify(newReview),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const addedReview = await response.json();
      setReviews((prevReviews) => [...prevReviews, addedReview.data]);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places,directions&callback=initMap`;
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: mapData.lat, lng: mapData.lng },
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: fallbackLat, lng: fallbackLng },
          map: map,
          title: "Starting Location",
        });

        new window.google.maps.Marker({
          position: { lat: mapData.lat, lng: mapData.lng },
          map: map,
          title: cardDetail.title || "Carinderia Location",
        });

        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const request = {
          origin: { lat: fallbackLat, lng: fallbackLng },
          destination: { lat: mapData.lat, lng: mapData.lng },
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error("Directions request failed due to " + status);
          }
        });
      };
    };

    if (!window.google) {
      loadGoogleMapsScript();
    }
  }, [mapData]);

  useEffect(() => {
    if (cardDetail) {
      setMapData({
        lat: cardDetail.latitude || fallbackLat,
        lng: cardDetail.longitude || fallbackLng,
      });
    }
  }, [cardDetail]);

  return (
    <div className="card-detail-container">
      <Link to="/carinderias">
        <i className="bi bi-arrow-left"></i>
      </Link>
      <div>
        {cardDetail ? (
          <>
            <h1>{cardDetail.title}</h1>
            <br />
            <p>{cardDetail.description}</p>
            <br />
            <h2>The Menu</h2>
            <div className="menu-list">
              {cardDetail.menu.map((category, categoryIndex) => (
                <div key={categoryIndex} className="menu-category">
                  <h4 className="category-title">{category.category}</h4>
                  {category.items.map((menuItem, index) => (
                    <div key={index} className="menu-card">
                      <p className="menu-item">{menuItem.item}</p>
                      <p className="price">{menuItem.price}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Card not found.</p>
        )}

        <h1>Map Guide</h1>
        <p>From CIIT to {cardDetail.title}</p>

        {/* Google Maps container */}
        <div
          id="map"
          style={{
            height: "300px",
            marginTop: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        ></div>
      </div>

      {/* Review container */}
      <div style={{ marginTop: "3%" }}>
        <p
          className="reviewLink"
          onClick={() => {
            if (isAuthenticated()) {
              setIsOpen(true);
            } else {
              alert("Please login to leave a review.");
            }
          }}
        >
          Leave a review
        </p>

        {isOpen && <Review setIsOpen={setIsOpen} onSubmitReview={handleReviewSubmission} />}

        <h1>Reviews</h1>
        {isLoading ? (
          <p>Loading reviews...</p>
        ) : (
          <ReviewsList carinderiaId={id} />
        )}
      </div>
    </div>
  );
}

export default CardDetails;
