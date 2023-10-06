import { createClient } from "contentful";
import PortfolioCard from "./portfolio-card/PortfolioCard";
import styles from './style.module.css'

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

  return (
    <div className={styles.container}>
      <h1>Our Portfolio</h1>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, esse.
      </p> */}
      <div className={styles.portfolio_list}>
        
      {portfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.sys.id} data={portfolio} />
      ))}
      </div>
    </div>
  );
}
