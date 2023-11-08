import React from "react";

export default function structureIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="97"
        height="97"
        viewBox="0 0 97 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="97" height="97" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_264_336" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0_264_336"
            width="512"
            height="512"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}
