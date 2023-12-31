// Import the necessary React and NextJS libraries
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

// Import the Banner, CTA, Layout, and EventCalendar components
import Banner from "../../components/banner";
import CTA from "../../components/cta";
import Layout from "../../components/layout";
import EventCalendar from "../../components/event-calendars";

// Import the FeatureStories component
import FeatureStories from "../../components/featured-story";

// Import the ArticlesPostListSkeleton component
import ArticlesPostListSkeleton from "../../components/skeleton/articles-post-skeleton";

// Import the getAllEventCalendars function from the lib/api file
import { getAllEventCalendars } from "../../lib/api";

// Create a dynamic component for the ArticlesPostList component
const ArticlesPostList = dynamic(
  () => import("../../components/articles-post"),
  {
    ssr: false,
  }
);

// Set the after variable to null
const after = null;

// Export the default function
export default function Index({ events, news, featuredStories, audios }) {
  // Create a state variable for the posts and set it to the events data
  const [posts, setPosts] = useState(events);

  // Create a state variable for the loading status and set it to true
  const [loading, setLoading] = useState(true);

  // Get the newsPost, featuredStoriesPosts, and audioTracks data
  const newsPost = news?.edges;
  const featuredStoriesPosts = featuredStories?.edges;
  const audioTracks = audios?.edges;

  // Use an effect hook to set the loading status to false after the posts are fetched
  useEffect(() => {
    if (posts) {
      setLoading(false);
    }
  }, [posts]);

  return (
    <Layout>
      <Banner title="Event Calendars" />
      <section className="mx-auto  max-w-screen-xl">
        {loading ? (
          <ArticlesPostListSkeleton />
        ) : (
          // This is an if/else statement that will render the ArticlesPostListSkeleton component if the loading status is true, or the ArticlesPostList component with the posts, widgetPost, widgetTitle, readMoreLink, moreUrl, and audioTracks data if the loading status is false.
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
        <FeatureStories stories={featuredStoriesPosts} />
      )}
    </Layout>
  );
}

// Export the getStaticProps function
export const getStaticProps: GetStaticProps = async () => {
  // Fetch the data from the getAllEventCalendars function
  const data = await getAllEventCalendars({ after });

  // Return the props object with the events, news, featuredStories, and audios data
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
