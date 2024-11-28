import React from 'react';

interface CardHeaderProps {
  imageUrl: string;
  title: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CardHeader;