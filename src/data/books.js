import { v4 } from "uuid";

const booksRef = [
  {
    id: v4(),
    title: "Harry Potter and the Philosopher's Stone",
    description: `Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!`,
    pages: 345,
    author: "J.K.Rowling",
    category: "Science Fiction & Fantasy",
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
  },
  {
    id: v4(),
    title: "Countdown 1945",
    description:
      "The Extraordinary Story of the Atomic Bomb and the 116 Days That Changed the World",
    pages: 212,
    author: "Chris Wallace",
    category: "History",
    image: "https://m.media-amazon.com/images/I/51ZEI-NjeRL.jpg",
  },
  {
    id: v4(),
    title: "Becoming",
    description: `In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.`,
    pages: 448,
    author: "Michelle Obama",
    category: "Law",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/414JfiBCutL._SX327_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "Destinations of a Lifetime",
    description: "225 of the World's Most Amazing Places",
    pages: 320,
    author: "National Geographic",
    category: "Travel",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61DQw411nRL._SX399_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "1984",
    description: `Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching...`,
    pages: 345,
    author: "George Orwell",
    category: "Science Fiction & Fantasy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41xFF3VH6kL._SX277_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "The Giver of Stars",
    description: `Alice Wright marries handsome American Bennett Van Cleve hoping to escape her stifling life in England.  But small-town Kentucky quickly proves equally claustrophobic, especially living alongside her overbearing father-in-law. So when a call goes out for a team of women to deliver books as part of Eleanor Roosevelt’s new traveling library, Alice signs on enthusiastically.`,
    pages: 235,
    author: "Jojo Moyes",
    category: "Literature & Fiction",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51aQGTp2VfL._SX338_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "The LSAT Trainer",
    description: `A Remarkable Self-Study Guide For The Self-Driven Student`,
    pages: 598,
    author: "Mike Kim",
    category: "Education & Teaching",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41jJlKmqK3L._SX384_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "Red Notice",
    description: `A True Story of High Finance, Murder, and One Man's Fight for Justice`,
    pages: 416,
    author: "Bill Browder",
    category: "History",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/519xCoMNKcL._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "Why Did I Get a B?",
    description: `From dealing with bullies and working with special needs students to explaining the unwritten rules of the teacher’s lounge, Why Did I Get a B? is full of as much humor and heart as the job itself.`,
    pages: 288,
    author: "Shannon Reed",
    category: "Education & Teaching",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Fb+NWpIGL._SY344_BO1,204,203,200_.jpg",
  },
  {
    id: v4(),
    title: "28 Summers ",
    description:
      "When Mallory Blessing's son, Link, receives deathbed instructions from his mother to call a number on a slip of paper in her desk drawer, he's not sure what to expect. But he certainly does not expect Jake McCloud to answer. It's the late spring of 2020 and Jake's wife, Ursula DeGournsey, is the frontrunner in the upcoming Presidential election.",
    pages: 345,
    author: "Elin Hilderbrand",
    category: "Literature & Fiction",
    image: "https://m.media-amazon.com/images/I/515i-uCyljL.jpg",
  },
];

export const books = booksRef.reduce((acc, cur) => {
  acc[cur.id] = cur;
  return acc;
}, {});
