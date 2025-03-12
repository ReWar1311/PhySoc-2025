import './Home.css';
import Alert from '../../components/Alert/Alert';
import Grids from '../../components/Grids/Grids';
import MainButton from '../../components/MainButton/MainButton';

const Home: React.FC = () => {
  return (
    <div className="home-original">
      <div className="grid-elem"></div>
      <Grids />
      <div className="home">
        <div className="home-bg">
          <div className="home-content">
            <Alert
              type="NEW"
              message="Freshers party forms out now"
              link="https://linksho.vercel.app/link/24"
              className="alert-full"
            />
            <div className="home-heading">PhySoc</div>
            <div className="home-para">
              "The supreme task of the physicist is to arrive at those universal
              elementary laws from which the cosmos can be built up by pure
              deduction"
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="button-group">
              <MainButton link=''/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;