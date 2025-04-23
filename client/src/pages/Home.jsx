import React, { useState } from 'react';
import {
  Heart, MessageCircle, Send, Bookmark, Home, Search, PlusSquare, Film, User, Menu
} from 'lucide-react';

const samplePosts = [
  {
    id: 1,
    username: 'traveler_adventures',
    profilePic: '/api/placeholder/36/36',
    location: 'Bali, Indonesia',
    image: '/api/placeholder/600/600',
    caption: 'Paradise found 🌴 #bali #wanderlust',
    likes: 842,
    comments: 32,
    timePosted: '2 hours ago'
  },
  {
    id: 2,
    username: 'foodie_delights',
    profilePic: '/api/placeholder/36/36',
    location: 'Downtown Cafe',
    image: '/api/placeholder/600/500',
    caption: 'Brunch goals 🥑 #foodporn #sundaybrunch',
    likes: 435,
    comments: 18,
    timePosted: '5 hours ago'
  },
  {
    id: 3,
    username: 'fitness_journey',
    profilePic: '/api/placeholder/36/36',
    location: 'Sunset Gym',
    image: '/api/placeholder/600/700',
    caption: 'Progress not perfection 💪 #fitfam #workout',
    likes: 1238,
    comments: 65,
    timePosted: '1 day ago'
  }
];

const stories = [
  { id: 1, username: 'your_story', profilePic: '/api/placeholder/56/56', isYours: true },
  { id: 2, username: 'best_friend', profilePic: '/api/placeholder/56/56' },
  { id: 3, username: 'travel_buddy', profilePic: '/api/placeholder/56/56' },
  { id: 4, username: 'workout_pal', profilePic: '/api/placeholder/56/56' },
  { id: 5, username: 'food_critic', profilePic: '/api/placeholder/56/56' },
  { id: 6, username: 'tech_geek', profilePic: '/api/placeholder/56/56' },
  { id: 7, username: 'artist_soul', profilePic: '/api/placeholder/56/56' }
];

const suggestedUsers = [
  { id: 1, username: 'photography_pro', profilePic: '/api/placeholder/40/40', relation: 'Followed by travel_buddy' },
  { id: 2, username: 'fashion_insider', profilePic: '/api/placeholder/40/40', relation: 'New to Instagram' },
  { id: 3, username: 'music_vibes', profilePic: '/api/placeholder/40/40', relation: 'Followed by 3 others' },
];

export default function InstagramHome() {
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleSave = (postId) => {
    setSavedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <h1 className="text-xl font-bold md:hidden">Instagram</h1>
          <h1 className="hidden md:block text-2xl font-bold italic">Instagram</h1>

          {/* Search */}
          <div className="hidden md:flex items-center w-64 lg:w-80 mx-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Home className="w-6 h-6 hidden md:block" />
            <MessageCircle className="w-6 h-6" />
            <PlusSquare className="w-6 h-6 hidden md:block" />
            <Film className="w-6 h-6 hidden md:block" />
            <Heart className="w-6 h-6" />
            <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-300">
              <img src="/api/placeholder/28/28" alt="profile" className="w-full h-full" />
            </div>
          </div>
        </div>
      </nav>

      {/* Layout */}
      <div className="flex w-full pt-6 px-2 md:px-4 max-w-screen-xl mx-auto">
        {/* Sidebar - Fixed on larger screens */}
        <aside className="hidden lg:block w-60 sticky top-20 h-screen">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
              <img src="/api/placeholder/48/48" alt="profile" className="w-full h-full" />
            </div>
            <div>
              <p className="font-semibold">your_username</p>
              <p className="text-sm text-gray-500">Your Name</p>
            </div>
          </div>

          <div className="space-y-6">
            <button className="flex items-center space-x-4 text-gray-800 font-medium hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <Home className="w-6 h-6" />
              <span>Home</span>
            </button>
            <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <Search className="w-6 h-6" />
              <span>Search</span>
            </button>
            <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <Film className="w-6 h-6" />
              <span>Reels</span>
            </button>
            <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <MessageCircle className="w-6 h-6" />
              <span>Messages</span>
            </button>
            <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <Heart className="w-6 h-6" />
              <span>Notifications</span>
            </button>
            <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <PlusSquare className="w-6 h-6" />
              <span>Create</span>
            </button>
            <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-100 w-full py-2 px-3 rounded-md transition">
              <User className="w-6 h-6" />
              <span>Profile</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-xl mx-auto lg:mr-8 lg:ml-4">
          {/* Stories */}
          <div className="bg-white border border-gray-200 rounded-md p-4 overflow-x-auto whitespace-nowrap">
            <div className="flex gap-4">
              {stories.map(story => (
                <div key={story.id} className="flex flex-col items-center">
                  <div className={`rounded-full p-0.5 ${story.isYours ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
                    <div className="bg-white p-0.5 rounded-full">
                      <img
                        src={story.profilePic}
                        alt={story.username}
                        className="w-14 h-14 rounded-full"
                      />
                    </div>
                  </div>
                  <p className="text-xs mt-1 text-center w-16 truncate">{story.username}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="mt-6 space-y-6">
            {samplePosts.map(post => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-md">
                {/* Header */}
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center">
                    <img
                      src={post.profilePic}
                      alt="profile"
                      className="w-8 h-8 rounded-full border"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-semibold">{post.username}</p>
                      <p className="text-xs text-gray-500">{post.location}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 text-lg">•••</button>
                </div>

                {/* Image */}
                <div className="w-full bg-black flex justify-center">
                  <img src={post.image} alt="post" className="max-h-96 object-contain" />
                </div>

                {/* Actions */}
                <div className="p-3">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <button onClick={() => handleLike(post.id)} className="transition hover:opacity-70">
                        <Heart
                          className={`w-6 h-6 ${likedPosts[post.id] ? 'fill-red-500 text-red-500' : ''}`}
                        />
                      </button>
                      <button className="transition hover:opacity-70">
                        <MessageCircle className="w-6 h-6" />
                      </button>
                      <button className="transition hover:opacity-70">
                        <Send className="w-6 h-6" />
                      </button>
                    </div>
                    <button onClick={() => handleSave(post.id)} className="transition hover:opacity-70">
                      <Bookmark
                        className={`w-6 h-6 ${savedPosts[post.id] ? 'fill-black' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Likes and Caption */}
                  <p className="text-sm font-semibold mt-2">
                    {post.likes + (likedPosts[post.id] ? 1 : 0)} likes
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">{post.username}</span> {post.caption}
                  </p>
                  
                  <button className="text-sm text-gray-500 mt-1">
                    View all {post.comments} comments
                  </button>

                  <p className="text-xs text-gray-400 mt-1">{post.timePosted}</p>
                </div>

                {/* Comment Box */}
                <div className="border-t px-3 py-2 flex items-center">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 text-sm focus:outline-none"
                  />
                  <button className="text-blue-500 text-sm font-semibold ml-2 opacity-70 hover:opacity-100">Post</button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar - Suggestions (Desktop Only) */}
        <aside className="hidden xl:block w-72 sticky top-20 h-screen">
          <div className="bg-white rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-gray-500 text-sm">Suggestions For You</p>
              <button className="text-xs font-semibold">See All</button>
            </div>
            
            <div className="space-y-3">
              {suggestedUsers.map(user => (
                <div key={user.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={user.profilePic} 
                      alt={user.username} 
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-semibold">{user.username}</p>
                      <p className="text-xs text-gray-500">{user.relation}</p>
                    </div>
                  </div>
                  <button className="text-xs font-semibold text-blue-500">Follow</button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 px-2">
            <div className="flex flex-wrap text-xs text-gray-400 gap-x-2 gap-y-1">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Help</a>
              <a href="#" className="hover:underline">Press</a>
              <a href="#" className="hover:underline">API</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Locations</a>
            </div>
            <p className="text-xs text-gray-400 mt-4">© 2025 INSTAGRAM FROM META</p>
          </div>
        </aside>
      </div>
    </div>
  );
}