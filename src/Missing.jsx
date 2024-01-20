import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <main>
           <section className="missing-section">
                <p className="missing-text">Can't find, What you are searching for!!!!</p>
                <p className="missing-emoji">&#128078;</p>
                <Link to = '/'><button className="back-to-home">Back to home</button></Link>
           </section>
        </main>
    )
}

export default Missing;