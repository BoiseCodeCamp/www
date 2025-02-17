import { reactive } from 'vue'
import aboutImg from './assets/img/codecamp-boise.png'
import collage from './assets/img/codecamp-collage.png'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  STORAGE_KEY: 'BOISECODECAMP25',
  SESSIONIZE_KEY: 'ac6en2ni',
  cfs: 'https://sessionize.com/boise-code-camp-2025/',
  register: 'https://www.eventbrite.com/e/boise-code-camp-2025-tickets-1099441080869',
  currentYear: "2025",
  event: {
    name: "Boise CodeCamp",
    date: "May 3",
    dTime: new Date("2025-05-03 8:30"),
    location: "Boise, Id",
    venue: "CodeWorks",
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
    //     {
    //       title: 'Youth Track',
    //       img: collage,
    //       description: `Do you have young coders? Are you a young person interested in technology? Boise Code Camp has an all-day track of coding and technology sessions aimed at youth ages 6 to 16. In the last year, millions of kids, many of them in our own community, have learned to code with the Hour of Code and tools like Scratch and Raspberry Pi. Boise Code Camp is representative of our community and the kids in our community are starting to code.

    // The youth track is for the novice or experienced kid coder. In our Scratch sessions, new coders will find a very approachable platform and participants in the Hour of Code will find a very familiar interface style. Experienced coders will find challenging material for building a web site or can even sneak into an adult focused javscript or robotics session and learn what it's like to be a professional programmer. Also, what kid doesn't want to learn how to hack Minecraft and hang out with other kids who are also interested in technology?

    // Kid coders as young as 6 years old up through high school can present if their submission is accepted.`
    //     }
  ],
  keynote: {
    //     speaker: {
    //       name: "Scott Nichols",
    //       title: "Principal Cloud Solutions Architect",
    //       company: "Microsoft",
    //       img: "https://avatars.githubusercontent.com/u/1429587?v=4"
    //     },
    //     title:
    //       "Navigating the Intersection of Human Expertise and AI Advancements: A Developer's Guide",
    //     abstract:`In a rapidly evolving technological landscape, developers find themselves at a crucial crossroads where human expertise intersects with the advancements of Artificial Intelligence (AI). As a seasoned professional with a diverse background spanning emergency medical services to cloud architecture, Scott Nichols brings a unique perspective to this discussion.

    // In this talk, Scott will delve into strategies for developers to remain effective in a world increasingly shaped by AI. Drawing from his extensive experience in IT, cloud architecture, and community leadership, he will explore the evolving role of developers amidst the proliferation of AI technologies.

    // Through anecdotes from his diverse professional journey and a passion for outdoor pursuits, Scott will inspire developers to navigate the ever-changing technological landscape with confidence and resilience. This talk promises to equip developers with the insights and tools necessary to thrive in an era where collaboration between human expertise and AI capabilities is paramount`,
    //     time: "8:45 - 9:30 AM",
    //     session: "keynote",
    //     location: "CodeWorks Lab"
  },
  sponsors: [
    {
      id: 'cwi',
      level: 'venue',
      url: 'https://boisecodeworks.com/',
      name: 'College of Western Idaho',
      logo: 'https://cwi.edu/sites/all/themes/huckleberry/images/cwi_footer_logo.png'
    },
    // {
    //   id: 'cwi',
    //   level: 'platinum',
    //   url: 'https://boisecodeworks.com/',
    //   name: 'College of Western Idaho',
    //   logo: 'https://cwi.edu/sites/all/themes/huckleberry/images/cwi_footer_logo.png'
    // },
    // {
    //   id: 'codeworks',
    //   level: 'gold',
    //   url: 'https://boisecodeworks.com/',
    //   name: 'CodeWorks',
    //   logo: 'https://bcw.blob.core.windows.net/public/img/8600856373152463'
    // },
    {
      id: 'shooting-trio',
      level: 'community',
      url: 'https://shootingtrio.com/',
      name: 'Shooting Trio',
      logo: '/img/shooting-trio.webp'
    },
    {
      id: 'codeworks',
      level: 'community',
      url: 'https://boisecodeworks.com/',
      name: 'CodeWorks',
      logo: 'https://bcw.blob.core.windows.net/public/img/8600856373152463'
    },
    {
      id: 'jetbrains',
      level: 'community',
      url: 'https://www.jetbrains.com/',
      name: 'JetBrains',
      logo: 'https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.svg'
    },
    {
      id: 'rdc',
      level: 'friend',
      url: 'https://www.linkedin.com/in/ryandcoates/',
      name: 'Ryan Coates',
      logo: 'https://media.licdn.com/dms/image/v2/C5603AQGYuRCORTLNlQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516251847024?e=1739404800&v=beta&t=oPUt_H5cKDtntG7Lmj45URnXq7g6esDqkJtt0Z4SC_w'
    },
    {
      id: 'doug',
      level: 'friend',
      url: 'https://www.linkedin.com/in/douglasjreece/',
      name: 'Doug Reece',
      logo: 'https://media.licdn.com/dms/image/v2/C5603AQE0D3b-vTgObw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1588992780298?e=1739404800&v=beta&t=z136v5FwkPBITSBcUC_ed8hTy6arHHjXU-TMzqSNPqE'
    },
  ],
  sessions: [],
  speakers: [],
  schedule: [],
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
    url: "https://boisecodeworks.com/"
  }
})
