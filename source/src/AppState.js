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
      title: 'About CodeCamp',
      img: aboutImg,
      description: 'Code Camp is a free event for developers, hardware geeks, and the curious to come and learn from their peers. We will have a full day worth of sessions ranging from databases, the latest development languages, mobile technologies, and much more.'
    },
    {
      title: 'Why Boise',
      video: 'https://www.youtube.com/embed/apz6jUqmVJU?si=gvD-ALtSjq9VNKjx&amp;start=60&rel=0',
      description: `As the third largest city in the Pacific Northwest and the largest city in the region Boise is our core of culture. It is the capital city of Idaho and the hub of commerce, innovation, government and industry for the state. 

With a river literally running through it, this dynamic and growing city showcases how connectivity to commerce coexists with vibrant cultural experiences and easy access to recreation and surrounding cities and states.

Boise is consistently ranked most popular places to live with its people-friendly nature you'll be sure to enjoy your stay.`
    },
    {
      title: 'Youth Track',
      img: collage,
      description: `Do you have young coders? Are you a young person interested in technology? Boise Code Camp has an all-day track of coding and technology sessions aimed at youth ages 6 to 16. In the last year, millions of kids, many of them in our own community, have learned to code with the Hour of Code and tools like Scratch and Raspberry Pi. Boise Code Camp is representative of our community and the kids in our community are starting to code.

The youth track is for the novice or experienced kid coder. In our Scratch sessions, new coders will find a very approachable platform and participants in the Hour of Code will find a very familiar interface style. Experienced coders will find challenging material for building a web site or can even sneak into an adult focused javscript or robotics session and learn what it's like to be a professional programmer. Also, what kid doesn't want to learn how to hack Minecraft and hang out with other kids who are also interested in technology?

Kid coders as young as 6 years old up through high school can present if their submission is accepted.`
    }
  ],
  keynote: {
    // speaker: {
    //   name: "Laurent Bugnion",
    //   title: "Senior Cloud Developer Advocate",
    //   company: "Microsoft",
    //   img: "https://avatars1.githubusercontent.com/u/4922457?s=400&v=4"
    // },
    // title:
    //   "25 years ago, software development was very different… or was it?",
    // abstract:
    //   "Development environments were maybe not that powerful, we were running on a lot less RAM and CPU, but we were already architecting systems, converting code in bytes, running machines and connecting them with networks. We maybe didn't have all these fancy SPAs and Clouds, but we had Internet and a web browser. A few years later we would even get JavaScript and start coding pretty cool web apps and the world would never quite be the same anymore.",
    // time: "8:45 - 9:30 AM",
    // session: "keynote",
    // location: "Jordan Ballroom"
  },
  sponsors: [],
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
