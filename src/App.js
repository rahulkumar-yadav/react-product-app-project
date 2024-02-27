
import Footer from './Componenets/Footer';
import Header from './Componenets/Header';
import Heading from './Componenets/Heading';
import NavigationBar from './Componenets/NavigationBar';
import Products from './Componenets/Products';
import RelatedProducts from './Componenets/RelatedProducts';
import Signup from './Componenets/Signup';



function App() {
  return (
    <div className=" text-[14px] w-[100%]  bg-[#FBFCFD] relative overflow-hidden">
      <Header />
      <Heading/>
      <NavigationBar/>
      <Products/>
      <RelatedProducts/>
      <Signup/>
      <Footer/>

    </div>
  );
}

export default App;
