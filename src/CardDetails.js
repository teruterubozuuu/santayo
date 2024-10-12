import { useParams } from "react-router-dom";
import { carinderiaData } from './Carinderias';
import "./CardDetails.css";

function CardDetails() {
    const { id } = useParams();
    const cardDetail = carinderiaData.find(card => card.id === Number(id));

    return (
        <div className="card-detail-container">
            {cardDetail ? (
                <>
                    <h1>{cardDetail.title}</h1>
                    <p>{cardDetail.description}</p>
                    <h2><em>The Menu</em></h2>
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
        </div>
    );
}

export default CardDetails;
