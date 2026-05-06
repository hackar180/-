/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS, TRAVEL_GUIDES, TEAM_MEMBERS } from './constants';
import { ArrowRight, MapPin, Calendar, Quote, ChevronRight, Heart, Map, Book } from 'lucide-react';

const Hero = () => (
  <section className="relative h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover" 
        alt="Community and Storytelling"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 via-brand-green/40 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-white"
      >
        <span className="inline-block px-4 py-1.5 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold text-sm font-semibold mb-6 backdrop-blur-sm">
          Inspiring Humanity & Travel
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-bn">
          গল্প বদলায় জীবন, <br />
          <span className="text-brand-gold">অজানাকে জানুন।</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-bn">
          পরিতৃপ্তি আর অজানাকে জানার নেশায় আমাদের এই ক্ষুদ্র যাত্রা। মানবিক আখ্যান থেকে দূর-দিগন্তের ভ্রমণ নির্দেশিকা—সবই পাবেন এখানে।
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-brand-gold text-brand-green font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group">
            গল্পগুলো পড়ুন <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all">
            আমাদের টিমে যোগ দিন
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 right-0 left-0 flex justify-center animate-bounce">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
        <div className="w-1 h-3 bg-white/60 rounded-full" />
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-brand-green mb-4 font-bn">মানবিক গল্পগুচ্ছ</h2>
          <p className="text-gray-600 max-w-xl font-bn">বাস্তব জীবনের কিছু গল্প যা আপনার চিন্তার জগত বদলে দিতে উৎসাহিত করবে।</p>
        </div>
        <button className="flex items-center gap-2 text-brand-gold font-bold hover:gap-3 transition-all">
          View All Stories <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-md group-hover:shadow-xl transition-all">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-brand-gold text-brand-green text-xs font-bold rounded-full">{post.category}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400 text-xs gap-4 mb-3">
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span>• 5 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-gold transition-colors font-bn leading-tight">{post.title}</h3>
            <p className="text-gray-600 font-bn text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TravelSection = () => (
  <section className="py-24 bg-earth-tan/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-brand-green mb-4 font-bn">ঘুরে দেখুন পৃথিবী</h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-bn leading-relaxed">
          আপনার পরবর্তী ভ্রমণের পরিকল্পনা করার জন্য আমরা নিয়ে এসেছি সেরা ভ্রমণ নির্দেশিকা এবং কিছু অদেখা জায়গার গল্প।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:row-span-2 relative h-[500px] lg:h-full rounded-2xl overflow-hidden group shadow-lg">
          <img 
            src={TRAVEL_GUIDES[0].image} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Sylhet Travel"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <span className="flex items-center gap-2 text-brand-gold text-sm font-semibold mb-2">
              <MapPin size={16} /> {TRAVEL_GUIDES[0].location}
            </span>
            <h3 className="text-3xl font-bold mb-4 font-bn">{TRAVEL_GUIDES[0].title}</h3>
            <p className="text-gray-300 mb-6 font-bn line-clamp-2">{TRAVEL_GUIDES[0].summary}</p>
            <button className="px-6 py-3 bg-brand-gold text-brand-green font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
              Explore Guide <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {TRAVEL_GUIDES.slice(1).map((guide) => (
            <div key={guide.id} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/2 h-48 md:h-auto overflow-hidden">
                <img src={guide.image} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt={guide.title} />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                 <span className="text-brand-gold text-xs font-bold mb-2 flex items-center gap-1 uppercase">
                  <MapPin size={12} /> {guide.location}
                </span>
                <h3 className="text-xl font-bold mb-3 font-bn">{guide.title}</h3>
                <p className="text-gray-500 font-bn text-sm mb-4 line-clamp-2">{guide.summary}</p>
                <button className="text-brand-green font-bold text-sm hover:text-brand-gold flex items-center gap-1 transition-colors">
                  Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
   <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <Quote className="text-brand-gold/20 mx-auto mb-8" size={64} />
        <h2 className="text-3xl font-bold text-brand-green mb-12">পাঠকের অভিব্যক্তি</h2>
        
        <div className="relative pt-12 pb-8 px-8 bg-earth-tan/30 rounded-3xl border border-brand-gold/10">
           <img 
            src="https://i.pravatar.cc/100?u=reader1" 
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg"
            alt="Reader"
          />
          <p className="text-xl italic text-gray-700 mb-8 font-bn leading-relaxed">
            "জীবন বদলের গল্প আমাকে নতুনভাবে বাঁচতে শিখিয়েছে। প্রতিটি গল্পেই কোনো না কোনো ইতিবাচক বার্তা থাকে যা আমাদের সমাজের জন্য অত্যন্ত প্রয়োজন।"
          </p>
          <div>
            <h4 className="font-bold text-brand-green">তামান্না রহমান</h4>
            <p className="text-sm text-gray-500">ঢাকা, বাংলাদেশ</p>
          </div>
        </div>
      </div>
   </section>
);

const Home = () => (
  <main>
    <Hero />
    <BlogSection />
    <TravelSection />
    <Testimonials />
  </main>
);

const AboutPage = () => (
  <main className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-green mb-8 font-bn">আমাদের পথচলা</h1>
          <p className="text-lg text-gray-600 mb-6 font-bn leading-relaxed">
            "জীবন বদলের গল্প" শুধুমাত্র একটি ওয়েবসাইট নয়, এটি একটি ইতিবাচক মানসিকতা গড়বার প্ল্যাটফর্ম। আমরা বিশ্বাস করি মানবিকতা এবং ভ্রমণের সংমিশ্রণ মানুষকে উদার করে তোলে।
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-green text-lg">মানবিক দায়বদ্ধতা</h4>
                <p className="text-gray-500">সমাজের অবহেলিত মানুষের গল্প তুলে ধরা এবং তাদের পাশে দাঁড়ানো।</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                <Map size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-green text-lg">ভ্রমণের আনন্দ</h4>
                <p className="text-gray-500">সারা বিশ্বের সৌন্দর্য মানুষের কাছে সহজে তুলে ধরা।</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Team" className="w-full" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-brand-gold rounded-2xl -z-0" />
        </div>
      </div>

       <div className="mb-24">
        <h2 className="text-3xl font-bold text-brand-green mb-12 text-center">টিমের মূল সদস্যবৃন্দ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-earth-tan/20 rounded-2xl hover:bg-earth-tan/40 transition-colors group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-brand-gold/20 group-hover:border-brand-gold transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-brand-green font-bn">{member.name}</h3>
              <p className="text-brand-gold font-semibold mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm font-bn">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activePage === 'home' && <Home />}
          {activePage === 'blog' && (
            <main className="py-24 max-w-7xl mx-auto px-4">
              <h1 className="text-4xl font-bold text-brand-green mb-12 font-bn">সবগুলো মানবিক গল্প</h1>
              <BlogSection />
            </main>
          )}
          {activePage === 'travel' && (
             <main className="py-24 max-w-7xl mx-auto px-4">
               <h1 className="text-4xl font-bold text-brand-green mb-12 font-bn">ভ্রমণ নির্দেশিকা ও ডায়েরি</h1>
               <TravelSection />
             </main>
          )}
          {activePage === 'team' && <AboutPage />}
          {activePage === 'contact' && (
            <main className="py-24 max-w-3xl mx-auto px-4">
              <div className="bg-earth-tan/20 p-12 rounded-3xl border border-brand-gold/10">
                <h1 className="text-3xl font-bold text-brand-green mb-8 font-bn">যোগাযোগ করুন</h1>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-green mb-2">নাম</label>
                      <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-green mb-2">ইমেইল</label>
                      <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-green mb-2">বিষয়</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold" />
                  </div>
                   <div>
                    <label className="block text-sm font-bold text-brand-green mb-2">বার্তা</label>
                    <textarea rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold" />
                  </div>
                  <button className="w-full py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-opacity-95 transition-all">Submit Message</button>
                </form>
              </div>
            </main>
          )}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

