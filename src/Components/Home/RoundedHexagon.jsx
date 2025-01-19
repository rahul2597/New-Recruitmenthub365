const RoundedHexagon = ({ imageUrl, rotation = -90 }) => {
  return (
    <div className="w-56 h-64">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform: "rotate(90deg)" }}
      >
        {/* Clip Path Definition for Hexagon */}
        <defs>
          <clipPath id="hexagonClip">
            <path d="M25 5a5 5 0 0 1 5-5h40a5 5 0 0 1 5 5l20 35a5 5 0 0 1 0 5l-20 35a5 5 0 0 1-5 5H30a5 5 0 0 1-5-5L5 45a5 5 0 0 1 0-5Z" />
          </clipPath>
        </defs>

        {/* Background Image */}
        <image
          href={imageUrl}
          transform={`rotate(${rotation}, 50, 50)`}
          width="100"
          height="100"
          clipPath="url(#hexagonClip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Optional Gradient Border */}
        <path
          d="M25 5a5 5 0 0 1 5-5h40a5 5 0 0 1 5 5l20 35a5 5 0 0 1 0 5l-20 35a5 5 0 0 1-5 5H30a5 5 0 0 1-5-5L5 45a5 5 0 0 1 0-5Z"
          fill="none"
          //   stroke="url(#gradient)"
          //   strokeWidth="2"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#27cea8" />
            <stop offset="100%" stopColor="#37ed80" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RoundedHexagon;
