import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./Card.css";

export const Card = ({ title, value, type, color }) => {
  return (
    <div className="card-container">
      <h2 className="title">{title}</h2>
      <div className="info-container">
        <div className="icon-container" style={{ backgroundColor: color }}>
          <MonetizationOnIcon sx={{ fontSize: "40px" }} />
        </div>
        <div>
          <h2 className="value">$ {value}</h2>
          <h2 className="type">{type}</h2>
        </div>
      </div>
    </div>
  );
};
