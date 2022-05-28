import Image from 'next/image';
import Layout from '../components/layout';
import { repoLink } from '../constants';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  const images = [
    'followed',
    'categories',
    'search',
    'channel',
    'emote',
    'settings',
  ];

  const captions = [
    'View Followed Streams',
    'Browse Top Streams and Categories',
    'Search for Channels and Categories',
    'Watch Live Streams',
    'Chat With an Emote Menu',
    'Customizable Settings',
  ];

  const titles = [
    'Followed Streams',
    'Top Categories',
    'Search',
    'Channel',
    'Emote Menu',
    'Settings',
  ];

  return (
    <Layout description='A free and open-source mobile Twitch client for iOS and Android.'>
      <header className='mb-20 flex flex-row items-center gap-4'>
        <div className='relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40'>
          <Image priority alt='Logo' src={`/logo.svg`} layout='fill' />
        </div>
        <div className='drop-shadow-xl'>
          <h1 className='text-7xl font-bold sm:text-8xl md:text-9xl'>Frosty</h1>
          <p className='relative left-1 sm:left-1.5 sm:text-lg md:left-2 md:text-xl'>
            for Twitch
          </p>
        </div>
      </header>

      <div className='mb-10 text-center text-xl drop-shadow-md sm:text-2xl md:text-3xl'>
        <p>
          A{' '}
          <a
            className='font-semibold hover:underline'
            href={repoLink}
            target='_blank'
            rel='noreferrer'
          >
            free and open-source
          </a>{' '}
          mobile Twitch client.
        </p>
        <br />
        <p>
          Browse, watch, and chat with{' '}
          <a
            className='font-semibold hover:underline'
            href='https://betterttv.com'
            target='_blank'
            rel='noreferrer'
          >
            BTTV
          </a>
          ,{' '}
          <a
            className='font-semibold hover:underline'
            href='https://www.frankerfacez.com'
            target='_blank'
            rel='noreferrer'
          >
            FFZ
          </a>
          , and{' '}
          <a
            className='font-semibold hover:underline'
            href='https://7tv.app'
            target='_blank'
            rel='noreferrer'
          >
            7TV
          </a>{' '}
          emotes.
        </p>
      </div>

      <div className='mb-4 flex flex-col items-center gap-4 sm:flex-row'>
        <a
          className='translate drop-shadow-lg transition active:scale-95 active:drop-shadow-none'
          href='https://apps.apple.com/us/app/frosty-for-twitch/id1603987585'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            priority
            alt='Get on iOS badge'
            title='Get it on iOS!'
            src={`/badges/apple_app_store_badge.svg`}
            height='67'
            width='200'
            layout='fixed'
            objectFit='contain'
          />
        </a>
        <a
          className='translate drop-shadow-lg transition active:scale-95 active:drop-shadow-none'
          href='https://play.google.com/store/apps/details?id=com.tommychow.frosty'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            priority
            alt='Get on Android badge'
            title='Get it on Android!'
            src={`/badges/google_play_store_badge.svg`}
            height='67'
            width='225'
            layout='fixed'
            objectFit='contain'
          />
        </a>
      </div>

      <a
        className='translate mb-20 rounded-xl bg-gray-800 p-4 shadow-lg transition hover:bg-gray-900 active:scale-95 active:shadow-none'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub size={30} className='mr-2 inline' />
        View source on GitHub
      </a>

      <div className='mb-12 flex max-w-screen-2xl flex-col sm:grid md:grid-cols-2 lg:grid-cols-3'>
        {images.map((imageName, index) => (
          <figure
            key={imageName}
            className='my-12 mx-6 flex flex-col items-center'
          >
            <Image
              key={imageName}
              alt={titles[index]}
              title={titles[index]}
              src={`/screenshots/${imageName}.png`}
              height='1202'
              width='596'
              quality={100}
              priority={index < 3}
            />
            <figcaption className='text-center drop-shadow-sm'>
              {captions[index]}
            </figcaption>
          </figure>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
