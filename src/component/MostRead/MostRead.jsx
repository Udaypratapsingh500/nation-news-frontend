import "./MostRead.css";
import { mostRead } from "../../data/news";

const MostRead = () => {
  return (
    <section className="most-read">

      <div className="section-title">
        <h2>Most Read</h2>
      </div>

      {mostRead.map((item) => (
        <div className="most-card" key={item.id}>

          <img src={item.image} alt={item.title} />

          <div>

            <h4>{item.title}</h4>

            <span>{item.views}</span>

          </div>

        </div>
      ))}

    </section>
  );
};

export default MostRead;