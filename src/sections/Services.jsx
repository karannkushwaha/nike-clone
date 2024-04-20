import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <>
      <section className="maxx-container flex justify-center flex-wrap gap-9">
        {services.map((items) => (
          <ServiceCard key={items.label} {...items} />
        ))}
      </section>
    </>
  );
};

export default Services;
