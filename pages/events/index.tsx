import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Banner from "../../components/banner";
import CTA from "../../components/cta";
import Layout from "../../components/layout";
import { getAllEventCalendars } from "../../lib/api";
import FeatureStories from "../../components/featured-story";
import ArticlesPostListSkeleton from "../../components/skeleton/articles-post-skeleton";

const ArticlesPostList = dynamic(
  () => import("../../components/articles-post"),
  {
    ssr: false,
  }
);

const after = null;
export default function Index({ events, news, featuredStories, audios }) {
  const [posts, setPosts] = useState(events);
  const [loading, setLoading] = useState(true);
  //const eventsPosts = events?.edges;
  const newsPost = news?.edges;
  const featuredStoriesPosts = featuredStories?.edges;
  const audioTracks = audios?.edges;

  // Use an effect hook to set the loading status to false after the posts are fetched
  useEffect(() => {
    if (posts) {
      setLoading(false);
    }
  }, [posts]);

  //console.log("catholicTVsPost", catholicTVsPost);
  return (
    <Layout>
      <Banner title="Event Calendars" />
      <section className="mx-auto  max-w-screen-xl">
        {loading ? (
          <ArticlesPostListSkeleton />
        ) : (
          <ArticlesPostList
            posts={posts}
            setPosts={setPosts}
            postType="eventCalendars"
            path="/events"
            header="Event Calendars"
            widgetPost={newsPost}
            widgetTitle="Recent News"
            readMoreLink="/news"
            moreUrl="/news"
            audioTracks={audioTracks}
          />
        )}
      </section>
      <CTA />
      {featuredStoriesPosts.length > 0 && (
        <FeatureStories posts={featuredStoriesPosts} />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllEventCalendars({ after });

  console.log("data-evens", data);
  return {
    props: {
      events: data.events,
      news: data.posts,
      featuredStories: data.featuredStories,
      audios: data.podcasts,
    },
    revalidate: 10,
  };
};