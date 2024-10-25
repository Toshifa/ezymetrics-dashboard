import React, { useState } from 'react';
import { leads } from '../data/leads';
import LeadDetailsModal from './LeadDetailsModal';

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleLeadClick = (lead: any) => {
    setSelectedLead(lead);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <ul className="divide-y divide-gray-200">
        {leads.map((lead) => (
          <li
            key={lead.id}
            className="p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleLeadClick(lead)}
          >
            {lead.name}
          </li>
        ))}
      </ul>
      {selectedLead && <LeadDetailsModal lead={selectedLead} onClose={() => setSelectedLead(null)} />}
    </div>
  );
};

export default Leads;
