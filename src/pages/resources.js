import React from "react";

import Layout from "../components/layout";
import VideosList from "../components/Resources/VideosList";
import SEO from "../components/seo";

function Resources() {
  return (
    <Layout>
      <SEO
        keywords={[`Lifeword`, `Church`, `Jesus Christ`, `Rev Visu`]}
        title="Resources"
      />
      <VideosList />
    </Layout>
  );
}

export default Resources;
