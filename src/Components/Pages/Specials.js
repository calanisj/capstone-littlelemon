import '../Main.css';
import GreekSalad from '../../Assets/greekSalad.jpg';
import LemonDessert from '../../Assets/lemonDessert.jpg';
import Bruschetta from '../../Assets/bruschetta.png';

function Specials() {
    return (
       <section className="specials">
            <div className='specials-title'>
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="specials-cards">
                <article className="specials-card">
                    <img src={GreekSalad} alt="GreekSalad"/>
                    <div className='card-details'>
                        <div className='card-title'>
                            <h3>Greek Salad</h3>
                            <p className="price">$12.99</p>
                        </div>
                        <p className="description"> The famous greek salad of crispy lettuce, peppers, olvise, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p className='order-delivery'>Order a delivery</p>
                    </div>
                </article>
                <article className="specials-card">
                    <img src={Bruschetta} alt='Bruschetta'/>
                    <div className='card-details'>
                        <div className='card-title'>
                            <h3>Bruschetta</h3>
                            <p className="price">$5.99</p>
                        </div>
                        <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p className='order-delivery'>Order a delivery</p>
                    </div>
                </article>
                <article className="specials-card">
                    <img src={LemonDessert} alt='Lemon Dessert'/>
                    <div className='card-details'>
                        <div className='card-title'>
                            <h3>Lemon Dessert</h3>
                            <p className="price">$5.00</p>
                        </div>
                        <p className="description">This comes straight from grandma's recipe book, every last ingredient has been sources and is as authentic as can be imagined</p>
                        <p className='order-delivery'>Order a delivery</p>
                    </div>
                </article>
            </div>
       </section>
    );
};
export default Specials;