import React from 'react';
import { Book, Facebook, Instagram, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Book size={20} className="text-brand-gold" />
              </div>
              <span className="font-bn text-2xl font-bold">জীবন বদলের গল্প</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed mb-6 font-bn">
              গল্প শুধু কথা নয়, এটি পরিবর্তনের হাতিয়ার। আমরা বিশ্বাস করি প্রতিটি অভিজ্ঞতাই কাউকে অনুপ্রাণিত করতে পারে। আমাদের সাথে থাকুন আপনার এবং অন্যের জীবন বদলে দিতে।
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-brand-gold">Humanitarian Blog</a></li>
              <li><a href="#" className="hover:text-brand-gold">Travel Guides</a></li>
              <li><a href="#" className="hover:text-brand-gold">Meet the Team</a></li>
              <li><a href="#" className="hover:text-brand-gold">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-gold">Subscribe</h4>
            <p className="text-sm text-gray-300 mb-4 font-bn">নতুন গল্পের আপডেট পেতে সাবস্ক্রাইব করুন</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-brand-gold transition-colors font-bn"
              />
              <button className="bg-brand-gold px-4 py-2 rounded-r-md font-semibold hover:bg-opacity-90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 জীবন বদলের গল্প. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-current" /> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
