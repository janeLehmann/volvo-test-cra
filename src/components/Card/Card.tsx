import { FC } from "react";
import { Link } from "react-router-dom";

// TYPES
import { CardItem } from "../../types";

type CardProps = {
  data: CardItem;
};

const Card: FC<CardProps> = ({ data }) => {
  const altDesc = `Image of ${data.modelName} ${data.modelType} ${data.bodyType}`;
  return (
    <div className="card">
      <div className="card__top">
        <p className="card__body-type">{data.bodyType}</p>
        <div className="card__model-info">
          <p className="card__model-name">{data.modelName}</p>
          <p className="card__model-type">{data.modelType}</p>
        </div>
      </div>

      <div className="card__image-wrap">
        <img src={data.imageUrl} alt={altDesc} />
      </div>

      <div className="card__links">
        <Link className="card__link-item" to={`/learn/`}></Link>
      </div>
    </div>
  );
};

export default Card;
