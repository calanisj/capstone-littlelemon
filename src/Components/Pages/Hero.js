import RestaurantFood from '../../Assets/restauranfood.jpg';
import '../Main.css';

function Hero() {
    return (
       <section className="hero-section">
        <div className="hero-content">
            <h1 style={{color:"#F4CE14"}}>Little Lemon</h1>
            <h2 style={{color:"white"}}>Chicago</h2>
            <p style={{color:"white"}}>We are a family-owned Mediterreanean restaurant, focused on traditional receipies served with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <img src={RestaurantFood} alt="RestaurantFood"/>
       </section>
       )
    }

export default Hero;