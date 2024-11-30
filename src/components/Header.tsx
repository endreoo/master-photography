import React from 'react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Professional Hotel Photography Guide</h1>
        <p className="text-xl opacity-90">
          Master the art of capturing stunning hotel rooms that sell themselves
        </p>
      </div>
    </header>
  );
}