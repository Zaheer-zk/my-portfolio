export const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="0" cy="0" r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5" />
      <ellipse rx="10" ry="4.5" transform="rotate(60)" />
      <ellipse rx="10" ry="4.5" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <mask id="mask0_1_2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#mask0_1_2)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_1_2)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_1_2)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_1_2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const TailwindIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 0C22.2 0 17.7 2.4 15.6 6.3C13.5 10.2 14.1 14.7 17.1 18C19.2 20.1 17.7 23.4 14.7 23.4C13.2 23.4 12 23.7 10.8 24.3C8.4 25.5 6.9 27.9 6.9 30.6C6.9 31.8 7.8 32.7 9 32.7C13.8 32.7 18.3 30.3 20.4 26.4C22.5 22.5 21.9 18 18.9 14.7C16.8 12.6 18.3 9.3 21.3 9.3C22.8 9.3 24 9 25.2 8.4C27.6 7.2 29.1 4.8 29.1 2.1C29.1 0.9 28.2 0 27 0ZM45 0C40.2 0 35.7 2.4 33.6 6.3C31.5 10.2 32.1 14.7 35.1 18C37.2 20.1 35.7 23.4 32.7 23.4C31.2 23.4 30 23.7 28.8 24.3C26.4 25.5 24.9 27.9 24.9 30.6C24.9 31.8 25.8 32.7 27 32.7C31.8 32.7 36.3 30.3 38.4 26.4C40.5 22.5 39.9 18 36.9 14.7C34.8 12.6 36.3 9.3 39.3 9.3C40.8 9.3 42 9 43.2 8.4C45.6 7.2 47.1 4.8 47.1 2.1C47.1 0.9 46.2 0 45 0Z"
      fill="currentColor"
    />
  </svg>
);

export const NodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="#339933" />
    <path
      d="M16 2.5L27.691 9.25V22.75L16 29.5L4.30898 22.75V9.25L16 2.5Z"
      fill="#339933"
    />
  </svg>
);

export const PostgresIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M12 0C5.372 0 0 5.372 0 12C0 18.628 5.372 24 12 24C18.628 24 24 18.628 24 12C24 5.372 18.628 0 12 0ZM12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z"
      fill="#336791"
    />
    <path d="M12 4L16 12L12 20L8 12L12 4Z" fill="#336791" />
  </svg>
);

export const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M2 0H22C23.1 0 24 0.9 24 2V22C24 23.1 23.1 24 22 24H2C0.9 24 0 23.1 0 22V2C0 0.9 0.9 0 2 0ZM11.1 18.6L12.7 18.6C12.7 18.6 12.6 16.9 14.5 16.9C16.4 16.9 16.5 18 16.5 18.8C16.5 20.8 13.9 20.7 13.9 22.2C13.9 22.7 14.3 23 14.8 23C16.8 23 18.5 21.6 18.5 18.8C18.5 16 15.6 15.3 14.5 15.3C11.5 15.3 11 17.6 11.1 18.6ZM6.5 15.6H8.5V23H6.5V15.6ZM5.5 15H9.5V13.5H5.5V15Z"
      fill="#3178C6"
    />
  </svg>
);
