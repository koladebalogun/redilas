import Services from "./servicebanner/ServiceBanner";
import ServiceList from "./servicelist/ServiceList";
import data from "../../data/services.json"

export default async function page() {
  const services = data.services
  const firstService = services[0];
  const secondService = services[1];
  const thirdService = services[2];
  const fourthService = services[3];
  return (
    <div>
      <Services />
      <ServiceList
        firstService={firstService}
        secondService={secondService}
        thirdService={thirdService}
        fourthService={fourthService}
      />
    </div>
  );
}
