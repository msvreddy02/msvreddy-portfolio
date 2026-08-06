import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-8 text-xs text-gray-500 border-t border-white/5">
      © {new Date().getFullYear()} Sai Vardhan Reddy Machanagari. All rights reserved.
    </footer>
  );
}