import Head from "next/head";
import Landing from "@/views/landing";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Snapp Food Challenge Code")}</title>
        <meta
          name="description"
          content="Landing Page of Challenge Code Snappfood"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing data-cy="landing" />
      </main>
    </>
  );
};

export default Home;
