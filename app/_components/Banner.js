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
      className={`relative w-full overflow-hidden rounded-[20px] xl:h-[378px] ${backgroundColor}`}
    >
      <div
        style={{
          transform: `scaleX(${scaleX})`,
        }}
      >
        {/* First Rotated Element */}
        <div
          className={`absolute left-[-290px] top-[-100px] h-[635px] w-[782px] rotate-[14deg] rounded-[75px] lg:rounded-[99px] xl:left-[604px] xl:top-[-224px] xl:rotate-[25deg] ${square1Color}`}
        />

        {/* Second Rotated Element (with optional gradient and opacity) */}
        <div
          className={`absolute left-[-192px] top-[700px] h-[788px] w-[788px] rotate-[28deg] rounded-[99px] sm:top-[700px] xl:top-[168px] ${square2Color}`}
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
