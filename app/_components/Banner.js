function Banner({
  children,
  backgroundColor,
  scaleX = 1,
  square1Color = "bg-secondary-40",
  square2Color,
  square2Opacity = 1, // Optional opacity for child 2
}) {
  return (
    <div
      className={`relative h-[378px] w-full overflow-hidden rounded-[20px] ${backgroundColor}`}
    >
      <div
        style={{
          transform: `scaleX(${scaleX})`,
        }}
      >
        {/* First Rotated Element */}
        <div
          className={`absolute left-[604px] top-[-224px] h-[635px] w-[782px] rotate-[25deg] rounded-[99px] ${square1Color}`}
        />

        {/* Second Rotated Element (with optional gradient and opacity) */}
        <div
          className={`absolute left-[-192px] top-[168px] h-[788px] w-[788px] rotate-[28deg] rounded-[99px] ${square2Color}`}
          style={{
            opacity: square2Opacity,
          }}
        />
      </div>

      {/* Banner Content */}
      <>{children}</>
    </div>
  );
}

export default Banner;
