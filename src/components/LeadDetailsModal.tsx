import React from 'react';

interface LeadDetailsModalProps {
  lead: any;
  onClose: () => void;
}

const LeadDetailsModal: React.FC<LeadDetailsModalProps> = ({ lead, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">{lead.name}</h2>
        <p>Email: {lead.email}</p>
        <p>Phone: {lead.phone}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LeadDetailsModal;
