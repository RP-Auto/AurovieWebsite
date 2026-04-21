// src/components/common/BlogCard.jsx
import React from "react";

const BlogCard = ({ img, headline, texts, highlight }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-slate-100">
      {/* Conditionally render image if provided */}
      {img && (
        <img 
          src={img} 
          alt={headline} 
          className="w-full h-48 object-cover border-b border-slate-100" 
          loading="lazy"
        />
      )}
      
      {/* Content Container - Highlight conditional background */}
      <div className={`p-6 flex-grow flex flex-col ${highlight ? 'bg-red-50' : 'bg-white'}`}>
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-200">
          {headline}
        </h3>
        
        {/* Map through the array of text lines */}
        <div className="space-y-3 text-slate-600 flex-grow">
          {texts.map((text, index) => {
            // Simple check to bold list headers dynamically based on your text format
            const isSubHeader = text.startsWith("a.") || text.startsWith("b.");
            return (
              <p 
                key={index} 
                className={`text-base leading-relaxed ${isSubHeader ? 'font-bold text-slate-800 mt-4' : ''}`}
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;