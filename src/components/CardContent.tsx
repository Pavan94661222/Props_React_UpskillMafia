import React from 'react';

interface CardContentProps {
  description: string;
  category: string;
  tags: string[];
}

const CardContent: React.FC<CardContentProps> = ({ description, category, tags }) => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-purple-300">{description}</p>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full">
          {category}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardContent;