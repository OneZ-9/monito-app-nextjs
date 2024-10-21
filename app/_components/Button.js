"use client";

function Button({
  children,
  className,
  onClick,
  type = "default",
  size = "medium",
  disabled = false,
  icon = null,
  iconRight = false,
}) {
  const baseStyle =
    "cursor-pointer font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-40";

  const typeStyles = {
    default:
      "bg-primary rounded-[5.7rem] text-neutral-0 hover:bg-primary-40 active:bg-primary-80",
    outline: "border-[1.5px] rounded-[5.7rem] text-primary border-primary ",
    subscribe:
      "bg-primary text-neutral-0 rounded-[0.8rem] hover:bg-primary-40 active:bg-primary-80 w-[20.3rem]",
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
      }  ${baseStyle} ${typeStyles[type]} ${
        sizeStyles[size]
      } ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>} {children}
    </button>
  );
}

export default Button;
