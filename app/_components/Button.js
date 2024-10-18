"use client";

function Button({
  children,
  onClick,
  type = "default",
  size = "medium",
  disabled = false,
  icon = null,
  iconRight = false,
}) {
  const baseStyle =
    "rounded-[57px] cursor-pointer font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-40";

  const typeStyles = {
    default: "bg-primary text-white hover:bg-primary-40 active:bg-primary-80",
    outline: "border-[1.5px] text-primary border-primary ",
  };

  const iconOnly = children ? false : true;
  const sizeStyles = {
    large: `${iconOnly ? "p-[12px]" : "p-[14px_28px]"} text-base`,
    medium: `${iconOnly ? "p-[12px]" : "p-[12px_28px]"}  text-sm`,
  };

  const disabledStyle = disabled
    ? "cursor-not-allowed bg-neutral-20 hover:bg-neutral-20 active:bg-neutral-20 border-none disabled:text-neutral-60"
    : "";

  return (
    <button
      className={`flex gap-2 items-center justify-center ${
        iconRight && "flex-row-reverse"
      } ${baseStyle} ${typeStyles[type]} ${sizeStyles[size]} ${disabledStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>} {children}
    </button>
  );
}

export default Button;
