<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "./icons";
import { GetYoutubeEmbed } from "./misc/get-youtube-embed";

export function TVCardPortrait({ video }) {
  const { title, databaseId, content, videoSource } = video[0].node;
  const YouTubeUrl = GetYoutubeEmbed(videoSource.acfvideosource);

  return (
    <div className=" md:w-1/2 md:px-2 lg:p-4">
      <h2 className="text-md title-font mb-1 uppercase tracking-widest text-gray-700">
        Catholic tv news
      </h2>
      <div className="flex h-full flex-1 flex-col overflow-hidden rounded border-2 border-gray-200 border-opacity-60 transition delay-300 hover:shadow-lg">
        {
          <iframe
            className="aspect-[16/9] w-full"
            src={YouTubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }

        <div className="flex-1 p-6 md:p-3 lg:p-6">
          <h2 className="title-font font-noto text-lg font-medium text-gray-900 line-clamp-2">
            {title}
          </h2>
          <div className="font-noto mt-3 font-light text-gray-900 line-clamp-3">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <Link
          href="/news"
          className="inline-flex items-center px-6 pt-3 pb-3 text-indigo-500 "
        >
          More News
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function ArticleCardPortrait({ posts }) {
  const { title, databaseId, content, featuredImage } = posts[0].node;
  const ImageUrl = featuredImage?.node.sourceUrl;

  return (
    <div className=" md:w-1/2 md:px-2 lg:p-4">
      <h2 className="text-md title-font mb-1 uppercase tracking-widest text-gray-700">
        our spotlight
      </h2>
      <Link
        href={`/ourSpotlight/${databaseId}`}
        className="flex h-full flex-1 flex-col overflow-hidden rounded border-2 border-gray-200 border-opacity-60 transition delay-300 hover:shadow-lg"
      >
        {
          <Image
            width={2000}
            height={1000}
            src={ImageUrl}
            alt="our spotlight"
            className="aspect-video w-full object-cover"
          />
        }

        <div className="flex-1 p-6 md:p-3 lg:p-6">
          <h2 className="title-font font-noto text-lg font-medium text-gray-900 line-clamp-2">
            {title}
          </h2>
          <div className="font-noto mt-3 font-light text-gray-900 line-clamp-3">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <button className="inline-flex items-center px-6 pt-3 pb-3 text-indigo-500 ">
          Read More
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </Link>
    </div>
  );
=======
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from './icons';
import { GetYoutubeEmbed } from './misc/get-youtube-embed';

export function TVCardPortrait({ video }) {
	const { title, databaseId, content, catholictvnews } = video[0].node;
	const YouTubeUrl = GetYoutubeEmbed(catholictvnews.youtubLink);

	return (
		<div className=' lg:p-4 md:px-2 md:w-1/2'>
			<h2 className='mb-1 tracking-widest text-gray-700 uppercase text-md title-font'>
				Catholic tv news
			</h2>
			<Link
				href={`/tvnews/${databaseId}`}
				className='flex flex-col flex-1 h-full overflow-hidden transition delay-300 border-2 border-gray-200 rounded border-opacity-60 hover:shadow-lg'
			>
				{
					<iframe
						className='w-full aspect-[16/9]'
						src={YouTubeUrl}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				}

				<div className='flex-1 p-6 md:p-3 lg:p-6'>
					<h2 className='text-lg font-medium text-gray-900 title-font font-noto line-clamp-2'>
						{title}
					</h2>
					<div className='mt-3 font-light text-gray-900 font-noto line-clamp-3'>
						<div dangerouslySetInnerHTML={{ __html: content }} />
					</div>
				</div>

				<button className='inline-flex items-center px-6 pt-3 pb-3 text-indigo-500 '>
					Watch More
					<ChevronRight className='w-4 h-4 ml-2' />
				</button>
			</Link>{' '}
		</div>
	);
}

export function ArticleCardPortrait({ posts }) {
	const { title, databaseId, content, featuredImage } = posts[0].node;
	const ImageUrl = featuredImage?.node.sourceUrl;

	return (
		<div className=' lg:p-4 md:px-2 md:w-1/2'>
			<h2 className='mb-1 tracking-widest text-gray-700 uppercase text-md title-font'>
				our spotlight
			</h2>
			<Link
				href={`/tvnews/${databaseId}`}
				className='flex flex-col flex-1 h-full overflow-hidden transition delay-300 border-2 border-gray-200 rounded border-opacity-60 hover:shadow-lg'
			>
				{
					<Image
						width={2000}
						height={1000}
						src={ImageUrl}
						alt='our spotlight'
						className='object-cover w-full aspect-video'
					/>
				}

				<div className='flex-1 p-6 md:p-3 lg:p-6'>
					<h2 className='text-lg font-medium text-gray-900 title-font font-noto line-clamp-2'>
						{title}
					</h2>
					<div className='mt-3 font-light text-gray-900 font-noto line-clamp-3'>
						<div dangerouslySetInnerHTML={{ __html: content }} />
					</div>
				</div>

				<button className='inline-flex items-center px-6 pt-3 pb-3 text-indigo-500 '>
					Watch More
					<ChevronRight className='w-4 h-4 ml-2' />
				</button>
			</Link>
		</div>
	);
>>>>>>> aa39fc7f3381656a14f872abda7274d19778faf0
}