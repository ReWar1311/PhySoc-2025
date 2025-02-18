import './MainButton.css';

interface MoreButtonProps {
  link: string;
  text?: string;
}

const MoreButton: React.FC<MoreButtonProps> = (props) => {
  const { link, text= "Explore More" } = props;
  return (
    <a href={link} className="explore-btn" role="button">
      <span></span><span></span><span></span><span></span>
      {text}
    </a>
  );
};

export default MoreButton;