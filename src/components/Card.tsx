import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import type { CardData } from '../types/card';

interface CardProps extends CardData {}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, category, tags }) => {
  return (
    <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-blue-500 transition-transform hover:scale-105 group">
      <div className="bg-black rounded-lg p-4 h-full flex flex-col gap-4">
        <CardHeader imageUrl={imageUrl} title={title} />
        <CardContent 
          description={description}
          category={category}
          tags={tags}
        />
      </div>
    </div>
  );
};

export default Card;