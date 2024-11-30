import React from 'react';

const quickTips = [
  {
    icon: "📸",
    title: "Equipment",
    tips: [
      "Use a tripod for stability",
      "Wide-angle lens (16-35mm)",
      "Remote shutter release",
      "Polarizing filter"
    ]
  },
  {
    icon: "⚙️",
    title: "Camera Settings",
    tips: [
      "Shoot in RAW",
      "ISO 100-400",
      "f/8 - f/11 aperture",
      "Enable HDR for windows"
    ]
  },
  {
    icon: "🎨",
    title: "Styling",
    tips: [
      "Remove personal items",
      "Iron all fabrics",
      "Add fresh flowers",
      "Style pillows in thirds"
    ]
  }
];

export function QuickTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {quickTips.map((section) => (
        <div key={section.title} className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-4xl mb-4">{section.icon}</div>
          <h3 className="text-xl font-bold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.tips.map((tip) => (
              <li key={tip} className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}