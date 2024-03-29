import RestaurantFood from './Resources/restauranfood.jpg';
import './Main.css';
import GreekSalad from './Resources/greekSalad.jpg';
import LemonDessert from './Resources/lemonDessert.jpg';
import Bruschetta from './Resources/bruschetta.png';

function Main() {
    return (
        <main>
       <section className="hero-section">
        <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterreanean restaurant, focused on traditional receipies served with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
            <img src={RestaurantFood} alt="RestaurantFood"/>
        </div>
       </section>
       <section className="specials">
            <div className='specials-title'>
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="specials-cards">
                <article className="specials-card">
                    <img src={GreekSalad} alt="GreekSalad"/>
                    <h3>Greek Salad</h3>
                    <p className="price">$12.99</p>
                    <p className="description"> The famous greek salad of crispy lettuce, peppers, olvise, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p className='order-delivery'>Order a delivery</p>
                </article>
                <article className="specials-card">
                    <img src={Bruschetta} alt='Bruschetta'/>
                    <h3>Bruschetta</h3>
                    <p className="price">$5.99</p>
                    <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p className='order-delivery'>Order a delivery</p>
                </article>
                <article className="specials-card">
                    <img src={LemonDessert} alt='Lemon Dessert'/>
                    <h3>Lemon Dessert</h3>
                    <p className="price">$5.00</p>
                    <p className="description">This comes straight from grandma's recipe book, every last ingredient has been sources and is as authentic as can be imagined</p>
                    <p className='order-delivery'>Order a delivery</p>
                </article>
            </div>
       </section>
        </main>
    );
};
export default Main;