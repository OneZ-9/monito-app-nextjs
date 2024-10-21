function SectionTitle({
  className,
  MainHeading,
  SubHeading = null,
  HeadingFlexRow = false,
}) {
  return (
    <div
      className={`${className} ${
        HeadingFlexRow
          ? "flex items-center gap-[0.8rem]"
          : "flex flex-col gap-[0.2rem]"
      }`}
    >
      <p className="text-sm font-medium xl:text-base">{SubHeading}</p>
      <h4 className="font-bold text-primary max-xl:text-[2rem] max-xl:leading-[3.2rem]">
        {MainHeading}
      </h4>
    </div>
  );
}

export default SectionTitle;
