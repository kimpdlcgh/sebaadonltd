import React from "react";

export default function Logo({ className = "h-12 w-12", textClassName = "", showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${textClassName}`}>
      {/* Logo Image - from public folder */}
      <img
        src="/logo.png"
        alt="Sebaa Don Limited"
        className={className}
        style={{ objectFit: "contain" }}
      />

      {/* Text Branding - conditional display */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-green-700">Sebaa Don</span>
          <span className="text-xs text-gray-600">LIMITED</span>
        </div>
      )}
    </div>
  );
}
