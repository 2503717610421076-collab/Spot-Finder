
import React, { useState, useEffect } from 'react';
import { Review } from '../types';

interface ReviewSystemProps {
  restaurantName: string;
  officialRating: string;
}

const ReviewSystem: React.FC<ReviewSystemProps> = ({ restaurantName, officialRating }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userRating, setUserRating] = useState(5);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviews_${restaurantName}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [restaurantName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment || !userName) return;

    const newReview: Review = {
      id: Date.now().toString(),
      rating: userRating,
      comment,
      userName,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${restaurantName}`, JSON.stringify(updatedReviews));
    
    // Reset form
    setComment('');
    setUserName('');
    setUserRating(5);
    setShowForm(false);
  };

  const calculateAverage = () => {
    const baseRating = parseFloat(officialRating.split(' / ')[0]);
    if (reviews.length === 0) return baseRating.toFixed(1);
    
    const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    const avg = (sum + baseRating) / (reviews.length + 1);
    return avg.toFixed(1);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Community Feedback</h4>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-700">Avg {calculateAverage()}</span>
          <div className="flex text-yellow-400 text-xs">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fas fa-star ${i < Math.round(parseFloat(calculateAverage())) ? '' : 'text-slate-200'}`}></i>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.length > 0 ? (
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {reviews.map((review) => (
              <div key={review.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-slate-800 text-sm">{review.userName}</span>
                  <div className="flex text-yellow-400 text-[10px]">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-slate-200'}`}></i>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{review.comment}</p>
                <span className="text-[10px] text-slate-400 mt-2 block">{review.date}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-3xl">
            <p className="text-slate-400 text-sm italic">No user reviews yet. Be the first!</p>
          </div>
        )}

        {!showForm ? (
          <button 
            onClick={() => setShowForm(true)}
            className="w-full py-3 rounded-xl border border-blue-200 text-blue-600 font-bold text-xs hover:bg-blue-50 transition-all uppercase tracking-widest"
          >
            Leave a Review
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
               <h5 className="font-bold text-blue-800 text-sm">New Review</h5>
               <button type="button" onClick={() => setShowForm(false)} className="text-blue-400 hover:text-blue-600 text-xs font-bold uppercase">Cancel</button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-blue-800 uppercase">Rating:</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${userRating >= star ? 'bg-yellow-400 text-white shadow-sm' : 'bg-white text-slate-300'}`}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="text"
                placeholder="Your Name"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-white rounded-xl border-none ring-1 ring-blue-200 focus:ring-2 focus:ring-blue-500 p-3 text-sm outline-none"
              />

              <textarea
                placeholder="Share your experience..."
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-white rounded-xl border-none ring-1 ring-blue-200 focus:ring-2 focus:ring-blue-500 p-3 text-sm outline-none h-24 resize-none"
              />

              <button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReviewSystem;
