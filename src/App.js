import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import About from './Page/About';
import Amenities from './Page/Amenities';
import Gallery from './Page/Gallery';
import Packages from './Page/Packages';
import Booking from './Page/Booking';

function App() {
  return (
  <>
  
<Home t1="THE MOUNT INM" h1="Awarded Spa Resort and BnB in Greenville , New Jersey" h2="MaKE An EnQUIRY"/>

<About 
a1="OUR TRADITIONAL Of Best Hospitality" 
a2="25 Years Of Warm Welcome..." 
a3="Phasellus accumsan mauris sit amet urna pretium VARIUS. Aliquam suscipit FELIS a arcu laoreet congue. Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, MEL tempor consulatu voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata."
/>

<Amenities 
am1="PRoviding Hospitality the Correct WAY" 
am2="Escape To The Luxury This WINTER" 
am3="bath" 
am4="car rental" 
am5=" hair dryer" 
am6="wi-fi" 
/>

<Gallery 
g1="PEEK INTO OUR WORLD" 
g2="GALLERY"
/>

<Packages 
p1="CHOICE OF ROOMS" 
p2="DOUBLE Room"
/>

<Booking 
b1="ASK YOUR QUERIES" 
b2="7226824797"
/>







  </>
  );
}

export default App;
