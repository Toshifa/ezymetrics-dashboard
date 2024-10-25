import React from 'react';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse';
import { leads } from '../data/leads';

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('This is a simple report', 10, 10);
    doc.save('report.pdf');
  };

  const generateCSV = () => {
    const csv = Papa.unparse(leads);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'report.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={generatePDF}>
        Generate PDF
      </button>
      <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={generateCSV}>
        Download CSV
      </button>
    </div>
  );
};

export default Reports;
