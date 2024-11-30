import React from 'react';

interface PhotoTipProps {
  title: string;
  description: string;
  example: string;
  doImage: string;
  dontImage: string;
}

export function PhotoTip({ title, description, example, doImage, dontImage }: PhotoTipProps) {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-700 italic mb-4">"{example}"</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="aspect-video bg-green-50 rounded-lg p-4 flex items-center justify-center">
              <img src={doImage} alt="Do" className="max-w-full h-auto rounded" />
            </div>
            <p className="text-green-600 font-semibold text-center">Do ✓</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-video bg-red-50 rounded-lg p-4 flex items-center justify-center">
              <img src={dontImage} alt="Don't" className="max-w-full h-auto rounded" />
            </div>
            <p className="text-red-600 font-semibold text-center">Don't ✗</p>
          </div>
        </div>
      </div>
    </div>
  );
}