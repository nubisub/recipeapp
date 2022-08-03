import './pricing.css'
import Footer from "./Footer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
const Pricing = () => {
    return (
        <>
        <div className="pricingwrapper">
            <div className="pricing">
                <h1>CookFood Pricing</h1>
                <table>
                    <thead>
                    <tr>
                        <th>
                            <p>Feature List</p>
                        </th>
                        <th>
                            <span>Free</span>
                            <span>Free to get started</span>
                            <button>Start for Free</button>
                        </th>
                        <th>
                            <span>Plus</span>
                            <span>$9/month per member</span>
                            <button>Buy Plus</button>
                        </th>
                        <th>
                            <span>Pro</span>
                            <span>$19/month per member</span>
                            <button>Buy Pro</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>View Exclusive Recipe</td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                    </tr>
                    <tr>
                        <td>Advert Your Recipe</td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />

                        </td>
                    </tr>
                    <tr>
                        <td>Communicate With Chef</td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                    </tr>
                    <tr>
                        <td>Ad</td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />

                        </td>
                    </tr>
                    <tr>
                        <td>Community</td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />
                        </td>
                    </tr>
                    <tr>
                        <td>Advice from Nutritionist</td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />
                        </td>
                    </tr>
                    <tr>
                        <td>Good Rank Search</td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faCheck} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    )
};
export default Pricing;