import Services from "./servicebanner/ServiceBanner";
import ServiceList from "./servicelist/ServiceList";

async function getServices() {
  const res = await fetch("http://localhost:4000/services", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function page() {
  const data = await getServices();
  const firstService = data[0];
  const secondService = data[1];
  const thirdService = data[2];
  const fourthService = data[3];
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
