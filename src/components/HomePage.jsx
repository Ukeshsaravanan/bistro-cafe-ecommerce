import Hero from './home/Hero';
import About from './home/About';
import Menu from './home/Menu';
import Team from './home/Team';
import Testimonial from './home/Testimonial';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  )
}


export default HomePage