import { reactive } from 'vue'
import aboutImg from './assets/img/codecamp-boise.png'
import collage from './assets/img/codecamp-collage.png'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  STORAGE_KEY: 'BOISECODECAMP26',
  SESSIONIZE_KEY: 'wmofnr16',
  cfs: 'https://sessionize.com/boise-code-camp-2026/',
  register: 'https://www.eventbrite.com/e/copy-of-boise-code-camp-2026-tickets-1976644058589',
  currentYear: "2026",
  appLink: "https://boise-code-camp-2026.sessionize.com/",
  event: {
    name: "Boise CodeCamp",
    date: "May 2",
    fullDate: "Saturday, May 2, 2026",
    dTime: new Date("2026-05-02 9:00"),
    location: "Boise, ID",
    venue: "CWI Pintail Building / ADA Campus",
    address: "1360 S. Eagle Flight Way, Boise, ID 83709",
    snippet: 'Code Camp is a free event for developers, hardware geeks, and the curious to come and learn from their peers. Sessions range from native languages to the clouds and much more.'
  },
  about: [
    {
      title: 'About Boise Code Camp',
      img: aboutImg,
      description: `Code Camp is a free event for developers, hardware geeks, and the curious to come and learn from their peers. We will have a full day worth of sessions ranging from databases, the latest development languages, mobile technologies, and much more.

We believe that learning is a collective adventure. Our community is comprised of seasoned mentors and eager learners. Forge connections, ask questions, and collaborate in presentations, fostering an environment where everyone contributes to the collective learning experience.`
    },
    {
      title: 'Why Attend?',
      video: 'https://www.youtube.com/embed/apz6jUqmVJU?si=gvD-ALtSjq9VNKjx&amp;start=60&rel=0',
      description: `Besides the fact that it's awesome, you'll learn a ton, and meet awesome people. You are going to expand your opportunities for career growth!

*Inclusive and Beginner-Friendly*

Whether you're a coding novice or a seasoned developer, our one-day code camp is designed to be inclusive for all. We've carefully curated workshops and activities to ensure that everyone, regardless of their background, can jump in and enjoy the excitement of coding.

*Celebrating Diversity in Tech*

Diversity drives innovation. Our community embraces individuals from all walks of life, celebrating the unique perspectives and experiences that each participant brings to the table. Join us in creating an inclusive space where everyone feels welcome and valued.`
    },
    {
      title: 'What\'s it Like?',
      img: collage,
      description: `Are you itching to dive into the fascinating world of coding, but the idea of a lengthy commitment seems daunting? Join us at Boise Code Camp for an exhilarating one-day coding extravaganza, fueled by the vibrant spirit of our community and entirely free of charge!

*Hands-On Workshops*

> Immerse yourself in a day packed with hands-on coding workshops designed to cater to learners of all levels. Our community-driven sessions cover a range of topics, from the fundamentals of programming to exciting forays into cutting-edge technologies. Get ready to roll up your sleeves, as you code alongside passionate mentors and fellow enthusiasts.

*Lightning Talks*

> Experience the thrill of rapid-fire lightning talks, where community members share insights, hacks, and personal stories about their coding journeys. These bite-sized presentations are not only informative but also inspiring, providing a unique opportunity to connect with like-minded individuals who share your enthusiasm for coding.`
    },
  ],
  keynote: {},
  sponsors: [
    {
      id: 'college-western-idaho',
      name: 'College Western Idaho',
      logo: '/img/sponsors/cwi-full-dark.svg',
      url: 'https://cwi.edu/'
    },
    {
      id: 'idaho-technology-council',
      name: 'Idaho Technology Council',
      logo: '/img/sponsors/itc.avif',
      url: 'https://www.idahotechcouncil.org/'
    },
    {
      id: 'zerrtech',
      name: 'Zerrtech',
      logo: '/img/sponsors/zertech.avif',
      url: 'https://www.zerrtech.com/'
    },
    {
      id: 'in-time-tech',
      name: 'In Time Tech',
      logo: '/img/sponsors/intimetech.svg',
      url: 'https://www.intimetec.com/'
    },
    {
      id: 'shooting-trio',
      name: 'Shooting Trio',
      logo: '/img/sponsors/shooting-trio.webp',
      url: 'https://shootingtrio.com/'
    }
  ],
  sessions: [],
  speakers: [],
  rooms: [],
  gridData: null,
  loading: true,
  error: null,
  activeSession: null,
  activeSpeaker: null,
  volunteer: {
    shifts: [
      "Morning (07:00 AM - 11:00AM)",
      "Afternoon (10:45 AM - 02:45PM)",
      "Evening (02:30 AM - 06:30PM)",
      "All Day (7:00 AM - 06:30PM)"
    ],
    shirtSizes: [
      "Y-Small",
      "Y-Medium",
      "Y-Large",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ]
  },
  speaker: null,
  venue: {
    name: "CWI",
    address: "1360 S. Eagle Flight Way, Boise, ID 83709",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.762383429122!2d-116.27685068448267!3d43.57536197912313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5f7b1b4f6b8b%3A0x9f8c6c1b8b4a9c2!2sCodeWorks!5e0!3m2!1sen!2sus!4v1631196993718!5m2!1sen!2sus",
    logo: "https://cwi.edu/sites/all/themes/huckleberry/images/cwi_footer_logo.png",
    img: "https://idahonews.com/resources/media2/16x9/full/1500/center/80/2f008bf0-5ed5-4881-98bf-bda9507cd561-jumbo16x9_IMG_1814.jpeg",
    url: "https://cwi.edu/"
  }
})
