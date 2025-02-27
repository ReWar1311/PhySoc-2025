import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SocialLink } from '../SocialLink/SocialLink';
import './card.css';

type Props = {
  image: string;
  title: string;
  description: string;
  href?: string;
  instagramUrl: string;
  topics?: string[];
  date?: string;
  time?: string;
  location?: string;
};

const Card: FC<Props> = ({
  image: img,
  title,
  description,
  href,
  instagramUrl: instaUrl,
  topics,
  date,
}) => {
  return (
    <div className="card">
      <Link
        className="card-link_img"
        to={href ? href : instaUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card-img"
          src={img}
          alt={title + ' home page'}
        />
      </Link>
      <div className="card-content">
        <div className="card-content_top">
          <h3 className="card-title">
            <Link
              className="card-title_link"
              to={href ? href : instaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </h3>
          <SocialLink title="View on Instagram" href={instaUrl} iconName="externalLink" />
        </div>
        <p className="card-text">{description}</p>
        <div className="card-topics">
          {topics?.map((topic) => (
            <span key={topic} title={topic}>
              {topic}
            </span>
          ))}
        </div>
          <p className="card-date">{date?date:"Coming Soon"}</p>

        <div className="card-background">
          <div className="card-tiles">
            <div className="card-tile card-tile_1" />
            <div className="card-tile card-tile_2" />
            <div className="card-tile card-tile_3" />
            <div className="card-tile card-tile_4" />
            <div className="card-tile card-tile_5" />
            <div className="card-tile card-tile_6" />
            <div className="card-tile card-tile_7" />
            <div className="card-tile card-tile_8" />
            <div className="card-tile card-tile_9" />
            <div className="card-tile card-tile_10" />
            <div className="card-tile card-tile_11" />
            <div className="card-tile card-tile_12" />
          </div>

          <div className="card-line card-line_1" />
          <div className="card-line card-line_2" />
          <div className="card-line card-line_3" />
        </div>
      </div>
      <div className="card-shine" />
    </div>
  );
};

export { Card };