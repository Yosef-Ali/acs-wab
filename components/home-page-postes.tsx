import SideWidget from "./side-widget";
import SocialMediaLinks from "./social-media-links";

import MediaPlayer from "./media-player";
import DaleyReadingCard from "./daley-reading-card";

import TvNewsSingleCard from "./tv-news-single-card";
import NewsArticleCard from "./news-article-single-card";

export default function HomePagePosts({
  posts,
  daleyReading,
  podcasts,
  catholicTVs,
  ourSpotlight,
}) {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="container mx-auto px-4 py-8 lg:py-24 ">
        <div className="flex flex-col-reverse gap-8 md:gap-0 lg:flex-row">
          <div className="relative lg:w-2/3 ">
            {/* News aria */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-0">
              <NewsArticleCard posts={ourSpotlight} />
              <TvNewsSingleCard video={catholicTVs} />
            </div>
            {/* List aria */}
            <div className="my-12 flex flex-col space-y-4 md:p-4 lg:absolute lg:inset-x-0 lg:inset-y-[500px] lg:bottom-0">
              <DaleyReadingCard posts={daleyReading} />
              <MediaPlayer audio={podcasts} />
            </div>
          </div>

          {/* Latest News Section */}
          <div className="flex flex-col items-center lg:w-1/3">
            <SideWidget
              posts={catholicTVs}
              title="Latest News"
              readMoreLink="/news/newsArticle/"
              moreButtonUrl="/news/articlesNews/"
            />
            <SocialMediaLinks color="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
