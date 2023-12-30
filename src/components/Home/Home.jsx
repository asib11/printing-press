import AboutUs from '../AboutUs/AboutUs';
import CoreFeature from '../CoreFeature/CoreFeature';
import FindUs from '../FindUs/FindUs';
import Header from '../Header/Header';
import ServiceOverView from '../ServiceOverView/ServiceOverView';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <FindUs></FindUs>
            <ServiceOverView></ServiceOverView>
            <CoreFeature></CoreFeature>
        </div>
    );
};

export default Home;