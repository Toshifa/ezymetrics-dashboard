import React from 'react';

interface CustomizableWidgetProps {
  title: string;
  children: React.ReactNode;
}

const CustomizableWidget: React.FC<CustomizableWidgetProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default CustomizableWidget;
