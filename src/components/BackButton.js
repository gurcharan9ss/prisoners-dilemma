import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BackButton.css';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      ← Back
    </button>
  );
}
