import { createClient } from "contentful";
import PortfolioCard from "./portfolio-card/PortfolioCard";

async function getPortfolios() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "portfolio" });

  return res.items;
}

export default async function page() {
  const portfolios = await getPortfolios();

  console.log(portfolios);

  return (
    <div>
      <h1>Portfolios</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, esse.
      </p>
      {portfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.sys.id} data={portfolio} />
      ))}
    </div>
  );
}
