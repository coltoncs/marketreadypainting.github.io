import './styles.css'

const ServiceCard = ({ title, text }) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
    </div>
  );
}

export default ServiceCard;