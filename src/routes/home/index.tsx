import { useEffect, useState } from 'react'
import Blogs from '../../components/blogs'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import Navbar from '../../components/navbar'
import { ArrowUpFromDot } from 'lucide-react'

const Home = () => {
  const [data, setData] = useState([])
   const [loadingPage, setLoadingPage] = useState(false);


   useEffect(() => {
     const renderData = async () => {
       const url = `https://newsapi.org/v2/everything?q=all&from=2025-04-02&to=2025-04-02&sortBy=popularity&apiKey=${
         import.meta.env.VITE_API_KEY
       }`;

       try {
         setLoadingPage(true);
         const response = await fetch(url)
         if (!response.ok) {
           throw new Error(`Response status: ${response.status}`)
         }

         const json = await response.json()
         const articles = json.articles
         setData(articles) 
       } catch (error) {
         console.log(error)
       }
        finally {
          setLoadingPage(false);
        }
     }

     renderData()
   }, [])
  
  
  // const fakeData = [
  //   {
  //     source: {
  //       id: 'tech-daily',
  //       name: 'Tech Daily',
  //     },
  //     author: 'Sarah Johnson',
  //     title: 'The Future of Artificial Intelligence in Healthcare',
  //     description:
  //       'How AI is revolutionizing medical diagnosis and patient care',
  //     url: 'https://example.com/ai-healthcare',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-15',
  //     content:
  //       'Artificial Intelligence is transforming healthcare delivery through improved diagnostic accuracy and personalized treatment plans...',
  //   },
  //   {
  //     source: {
  //       id: 'eco-news',
  //       name: 'Eco News',
  //     },
  //     author: 'Michael Chen',
  //     title: 'Sustainable Cities: Building for Tomorrow',
  //     description:
  //       'Innovative urban planning solutions for environmental sustainability',
  //     url: 'https://example.com/sustainable-cities',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-14',
  //     content:
  //       'Cities around the world are adopting green technologies and sustainable practices to combat climate change...',
  //   },
  //   {
  //     source: {
  //       id: 'digital-trends',
  //       name: 'Digital Trends',
  //     },
  //     author: 'Emily Rodriguez',
  //     title: 'The Rise of Web3 Technologies',
  //     description: 'Understanding the next generation of internet technologies',
  //     url: 'https://example.com/web3-tech',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-13',
  //     content:
  //       'Web3 technologies are reshaping how we interact with the digital world, from decentralized finance to virtual reality...',
  //   },
  //   {
  //     source: {
  //       id: 'food-culture',
  //       name: 'Food Culture',
  //     },
  //     author: 'David Kim',
  //     title: 'Global Food Trends 2024',
  //     description:
  //       'Emerging culinary innovations and sustainable eating habits',
  //     url: 'https://example.com/food-trends',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-12',
  //     content:
  //       'From plant-based alternatives to traditional fusion cuisines, discover the food trends shaping our plates...',
  //   },
  //   {
  //     source: {
  //       id: 'space-science',
  //       name: 'Space Science',
  //     },
  //     author: 'Alex Turner',
  //     title: 'Mars Colonization: Progress and Challenges',
  //     description: 'Latest developments in human Mars exploration',
  //     url: 'https://example.com/mars-colonization',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-11',
  //     content:
  //       'As space agencies and private companies race to establish human presence on Mars, we examine the current state of progress...',
  //   },
  //   {
  //     source: {
  //       id: 'mental-health',
  //       name: 'Mental Health Today',
  //     },
  //     author: 'Dr. Lisa Park',
  //     title: 'Digital Wellness in the Modern Age',
  //     description:
  //       'Maintaining mental health in an increasingly connected world',
  //     url: 'https://example.com/digital-wellness',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-10',
  //     content:
  //       'Strategies for maintaining mental well-being while navigating the challenges of digital life...',
  //   },
  //   {
  //     source: {
  //       id: 'biotech-future',
  //       name: 'Biotech Future',
  //     },
  //     author: 'Dr. Rachel Adams',
  //     title: 'Gene Editing: Ethics and Advances',
  //     description: 'Exploring the latest developments in CRISPR technology',
  //     url: 'https://example.com/gene-editing',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-06',
  //     content:
  //       'As gene editing technology advances, researchers and ethicists discuss its implications for medicine and society...',
  //   },
  //   {
  //     source: {
  //       id: 'edu-tech',
  //       name: 'EduTech Weekly',
  //     },
  //     author: 'Maria Garcia',
  //     title: 'Personalized Learning Through AI',
  //     description: 'How artificial intelligence is customizing education',
  //     url: 'https://example.com/ai-education',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-08',
  //     content:
  //       'AI-powered learning platforms are transforming education by adapting to individual student needs...',
  //   },
  //   {
  //     source: {
  //       id: 'renewable-energy',
  //       name: 'Renewable Energy News',
  //     },
  //     author: 'Thomas Brown',
  //     title: 'Breakthrough in Solar Technology',
  //     description: 'New solar cell design achieves record efficiency',
  //     url: 'https://example.com/solar-breakthrough',
  //     urlToImage:
  //       'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
  //     publishedAt: '2024-03-07',
  //     content:
  //       'Scientists announce a revolutionary solar cell design that could make renewable energy more accessible...',
  //   },
  // ]


  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs data={data} loadingPage={loadingPage}  />
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white shadow-[0_12px_30px_rgb(0,0,0,0.2)] hover:text-white p-3  rounded-full fixed bottom-10 right-10 z-50 hover:bg-blue-500 transition duration-100 ease-in-out">
        <ArrowUpFromDot />
      </button>
    </div>
  );
}

export default Home
