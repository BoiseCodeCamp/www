import { reactive } from 'vue'
import aboutImg from './assets/img/codecamp-boise.png'
import collage from './assets/img/codecamp-collage.png'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  STORAGE_KEY: 'BOISECODECAMP24',
  SESSIONIZE_KEY: 'dsz67efb',
  cfs: 'https://sessionize.com/boise-code-camp-2024/',
  currentYear: "2024",
  event: {
    name: "Boise CodeCamp",
    date: "May 4",
    dTime: new Date("2024-05-04 8:30"),
    location: "Boise, Id",
    venue: "CodeWorks",
    address: "8455 Westpark St, Boise, ID 83704",
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
    speaker: {
      name: "Scott Nichols",
      title: "Principal Cloud Solutions Architect",
      company: "Microsoft",
      img: "https://avatars.githubusercontent.com/u/1429587?v=4"
    },
    title:
      "Navigating the Intersection of Human Expertise and AI Advancements: A Developer's Guide",
    abstract:`In a rapidly evolving technological landscape, developers find themselves at a crucial crossroads where human expertise intersects with the advancements of Artificial Intelligence (AI). As a seasoned professional with a diverse background spanning emergency medical services to cloud architecture, Scott Nichols brings a unique perspective to this discussion.

In this talk, Scott will delve into strategies for developers to remain effective in a world increasingly shaped by AI. Drawing from his extensive experience in IT, cloud architecture, and community leadership, he will explore the evolving role of developers amidst the proliferation of AI technologies.

Through anecdotes from his diverse professional journey and a passion for outdoor pursuits, Scott will inspire developers to navigate the ever-changing technological landscape with confidence and resilience. This talk promises to equip developers with the insights and tools necessary to thrive in an era where collaboration between human expertise and AI capabilities is paramount`,
    time: "8:45 - 9:30 AM",
    session: "keynote",
    location: "CodeWorks Lab"
  },
  sponsors: [
    {id: 'codeworks', level: 'platinum', url: 'https://boisecodeworks.com/', name: 'CodeWorks', logo: 'https://bcw.blob.core.windows.net/public/img/8600856373152463'}
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
  speaker: null
})
