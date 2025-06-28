import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  desc?: string;
  keywords?: string;
};

// "Discover affordable and fashionable men's and women's clothing online at Haru Fashion. Free Returns ✓ 1000+ New Arrivals Dropped Daily."
const defaultDesc =
  "At Amore Faces, we believe beauty is more than just a look — it’s a feeling. Whether you're stepping out for a big event or treating yourself to daily self-care, our goal is to help you shine with confidence.";
const defaultKeywords =
  "Professional Makeup Uganda, Bridal Makeup Kampala, Glam Makeup Artist, Makeup Services Uganda, Natural Look Makeup, Kukyala & Kwanjula Makeup, Skincare Products Uganda, Beauty Products Kampala, Wig Installation Services";

const AppHeader: React.FC<Props> = ({
  title = "Amore Faces",
  desc = defaultDesc,
  keywords = defaultKeywords,
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta content={desc} name="description" key="description" />
      <meta content={keywords} name="keywords" key="keywords" />
      <meta property="og:description" content={desc} key="og_description" />
      <meta property="og:title" content={title} key="og_title" />
      <meta name="twitter:title" content={title} key="twitter_title" />
      <meta
        name="twitter:description"
        content={desc}
        key="twitter_description"
      />
    </Head>
  );
};

export default AppHeader;
