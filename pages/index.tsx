import type { NextPage } from 'next'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { ThomePageData } from '../interfaces'
import Hero from '../components/homepage/Hero'
import TopStories from '../components/TopStories'
import CategorySections from '../components/CategorySections'
import Entertainment from '../components/homepage/Entertainment'

const Home: NextPage<{ pageResponse: ThomePageData }> = ({ pageResponse }) => {
  const { posts, news, sport, business, politics, entertainment } = pageResponse

  const a =
    '<p>Panic has gripped residents of Abakaliki metropolis as a 26-year-old lady, Ugochukwu Nworie, has been allegedly raped to death in Ebonyi State.\n<p><em>The PUNCH</em> gathered that the incident took place at Hope-in Hotel, Ngbowo Street, Abakaliki, the Ebonyi State capital.\n<p>The Ebonyi State Police Command confirmed the incident on Thursday morning.\n<p>It was gathered that the victim arrived at the hotel in the company of a group of young men late at night on Monday.<div style="margin-top: 1em;"> \n\t\t\t\t\t\t<script type="text/javascript" language="javascript" src="https://live.primis.tech/live/liveView.php?s=110622&cbuster=%%CACHEBUSTER%%"></script> </div>\n<p>Close sources said the lady was found dead in the room after the door was opened on Tuesday morning with her legs, hands and mouth tied.\n<p>The Police Public Relations Officer in the state, Mrs Loveth Odah, said the Divisional Police Officer of Kpirikpiri Police Division in the Abakaliki metropolis, reported that the incident happened in Hope-in Hotel, situated at Ngbowo Street, Abakaliki.\n<p>Odah said, &#8220;The DPO reported that the incident happened while on a routine check on the hotel. A room not accounted for was discovered.\n\t\t\t\t\t\t\t\t\t<div class="ad-container ad-container-adsense">\n\t\t\t\t\t\t\t\t\t\t<div class="ad-adsense" style="margin:20px 0 20px 0;">\n\t\t\t\t\t\t\t\t\t\t\t<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7167863529667065" data-ad-slot="7746968165" data-ad-format="auto"></ins>\n\t\t\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t\t\t(adsbygoogle = window.adsbygoogle || []).push({});\n\t\t\t\t\t\t\t\t\t\t\t</script>\n\t\t\t\t\t\t\t\t\t\t\t<!-- AMP fallback -->\n\t\t\t\t\t\t\t\t\t\t\t<amp-ad width="100vw" height="320"\n\t\t\t\t\t\t\t\t\t\t\t\ttype="adsense"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-ad-client="ca-pub-7167863529667065"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-ad-slot="7746968165"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-auto-format="auto"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-full-width>\n\t\t\t\t\t\t\t\t\t\t\t\t<div overflow></div>\n\t\t\t\t\t\t\t\t\t\t\t</amp-ad>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n<p>“So the DPO decided to enquire from the receptionist, who told him that the guests in the room were unknown to him.\n<p>&#8220;Efforts to open the room proved abortive until he requested for the spare key to open the door, only to discover a lifeless body of the lady, naked and her legs, hands with mouth tied to the bed in the room.&#8221;\n<p>Odah further said the Commissioner of Police in the state, Aliyu Garba, had directed a thorough investigation into the incident.\n<p>She stated that efforts were on to arrest and prosecute the perpetrators to serve as a deterrent to possible offenders.\n<p>&#8220;Preliminary investigation indicated that the lady was gang-raped, as more than 12 used condoms were discovered in the room.\n<p>“Investigation is still ongoing and we would continue to update the media and public as we unravel more details on the matter,” she said.\n<p>She said the corpse had been deposited at a morgue.<div class=\'ad-container \'>\n\t\t\t\t\t\t<div class=\'ad-container-inner\'>\n\t\t\t\t\t\t\t<div class=\'ad-wrapper\'>\n\t\t\t\t\t\t\t\t<!-- AMP AD -->\n\t\t\t\t\t\t\t\t<amp-ad width=336 height=280 data-multi-size=\'320x50,300x250\' type=\'doubleclick\' data-slot=\'/31989200/dx-png-mobile-1\' data-lazy-fetch=\'true\' data-loading-strategy=\'2\' data-enable-refresh=\'9999999999\'>\n\t\t\t\t\t\t\t\t\t<div placeholder></div>\n\t\t\t\t\t\t\t\t\t<div fallback></div>\n\t\t\t\t\t\t\t\t</amp-ad>\n\t\t\t\t\t\t\t\t<!-- /AMP AD -->\n\t\t\t\t\t\t\t\t<div id="ad_placement_incontent_ad_1_6273aa7f06ecd" data-render-on="desktop|mobile" data-ad="ad_placement_incontent_ad_1" class=\'dx-ad\'></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n'

  const b = a.replace('The PUNCH', 'PunchX')

  return (
    <main>
      <Hero posts={posts.slice(0, 5)} />
      <TopStories topStories={posts.slice(5, 9)} />
      {/* <News news={news} /> */}
      <CategorySections
        sport={sport}
        news={news}
        business={business}
        politics={politics}
      />
      <Entertainment entertainment={entertainment} />

      {/* <h3
        className=" mt-3 mb-2 cursor-pointer text-lg font-semibold text-black transition-all ease-linear "
        dangerouslySetInnerHTML={{
          __html:
            '<p>Panic has gripped residents of Abakaliki metropolis as a 26-year-old lady, Ugochukwu Nworie, has been allegedly raped to death in Ebonyi State.\n<p><em>The PUNCH</em> gathered that the incident took place at Hope-in Hotel, Ngbowo Street, Abakaliki, the Ebonyi State capital.\n<p>The Ebonyi State Police Command confirmed the incident on Thursday morning.\n<p>It was gathered that the victim arrived at the hotel in the company of a group of young men late at night on Monday.<div style="margin-top: 1em;"> \n\t\t\t\t\t\t<script type="text/javascript" language="javascript" src="https://live.primis.tech/live/liveView.php?s=110622&cbuster=%%CACHEBUSTER%%"></script> </div>\n<p>Close sources said the lady was found dead in the room after the door was opened on Tuesday morning with her legs, hands and mouth tied.\n<p>The Police Public Relations Officer in the state, Mrs Loveth Odah, said the Divisional Police Officer of Kpirikpiri Police Division in the Abakaliki metropolis, reported that the incident happened in Hope-in Hotel, situated at Ngbowo Street, Abakaliki.\n<p>Odah said, &#8220;The DPO reported that the incident happened while on a routine check on the hotel. A room not accounted for was discovered.\n\t\t\t\t\t\t\t\t\t<div class="ad-container ad-container-adsense">\n\t\t\t\t\t\t\t\t\t\t<div class="ad-adsense" style="margin:20px 0 20px 0;">\n\t\t\t\t\t\t\t\t\t\t\t<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7167863529667065" data-ad-slot="7746968165" data-ad-format="auto"></ins>\n\t\t\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t\t\t(adsbygoogle = window.adsbygoogle || []).push({});\n\t\t\t\t\t\t\t\t\t\t\t</script>\n\t\t\t\t\t\t\t\t\t\t\t<!-- AMP fallback -->\n\t\t\t\t\t\t\t\t\t\t\t<amp-ad width="100vw" height="320"\n\t\t\t\t\t\t\t\t\t\t\t\ttype="adsense"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-ad-client="ca-pub-7167863529667065"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-ad-slot="7746968165"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-auto-format="auto"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-full-width>\n\t\t\t\t\t\t\t\t\t\t\t\t<div overflow></div>\n\t\t\t\t\t\t\t\t\t\t\t</amp-ad>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n<p>“So the DPO decided to enquire from the receptionist, who told him that the guests in the room were unknown to him.\n<p>&#8220;Efforts to open the room proved abortive until he requested for the spare key to open the door, only to discover a lifeless body of the lady, naked and her legs, hands with mouth tied to the bed in the room.&#8221;\n<p>Odah further said the Commissioner of Police in the state, Aliyu Garba, had directed a thorough investigation into the incident.\n<p>She stated that efforts were on to arrest and prosecute the perpetrators to serve as a deterrent to possible offenders.\n<p>&#8220;Preliminary investigation indicated that the lady was gang-raped, as more than 12 used condoms were discovered in the room.\n<p>“Investigation is still ongoing and we would continue to update the media and public as we unravel more details on the matter,” she said.\n<p>She said the corpse had been deposited at a morgue.<div class=\'ad-container \'>\n\t\t\t\t\t\t<div class=\'ad-container-inner\'>\n\t\t\t\t\t\t\t<div class=\'ad-wrapper\'>\n\t\t\t\t\t\t\t\t<!-- AMP AD -->\n\t\t\t\t\t\t\t\t<amp-ad width=336 height=280 data-multi-size=\'320x50,300x250\' type=\'doubleclick\' data-slot=\'/31989200/dx-png-mobile-1\' data-lazy-fetch=\'true\' data-loading-strategy=\'2\' data-enable-refresh=\'9999999999\'>\n\t\t\t\t\t\t\t\t\t<div placeholder></div>\n\t\t\t\t\t\t\t\t\t<div fallback></div>\n\t\t\t\t\t\t\t\t</amp-ad>\n\t\t\t\t\t\t\t\t<!-- /AMP AD -->\n\t\t\t\t\t\t\t\t<div id="ad_placement_incontent_ad_1_6273e4a699928" data-render-on="desktop|mobile" data-ad="ad_placement_incontent_ad_1" class=\'dx-ad\'></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n',
        }}
      /> */}
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch trending posts
  const data = axios.get('https://punchng.com/wp-json/wp/v2/posts?per_page=20')
  // fetch posts in sport category
  const data1 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=3&per_page=4'
  )
  // fetch posts in politics category
  const data2 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=14&per_page=4'
  )
  // fetch posts in business category
  const data3 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=19&per_page=4'
  )
  // fetch posts in news category
  const data4 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=2&per_page=4'
  )
  // fetch posts in news category
  const data5 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=46&per_page=10'
  )

  const [posts, sport, politics, business, news, entertainment] =
    await Promise.all([data, data1, data2, data3, data4, data5])

  return {
    props: {
      pageResponse: {
        posts: posts.data,
        news: news.data,
        sport: sport.data,
        business: business.data,
        politics: politics.data,
        entertainment: entertainment.data,
      },
    },
    revalidate: 60,
  }
}
