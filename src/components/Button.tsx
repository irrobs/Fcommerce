type buttonProps = {
  width?: string;
  border?: string;
  text: string;
  textColor: string;
  fontWeight: string;
  paddingHorizontal: string;
  paddingVertical: string;
  bgColor: string;
  marginLeft: string;
  bgHoverColor: string;
  textHoverColor: string;
};

export default function Button({
  width,
  border,

  text,
  textColor,
  fontWeight,
  paddingHorizontal,
  paddingVertical,
  bgColor,
  marginLeft,
  bgHoverColor,
  textHoverColor,
}: buttonProps) {
  return (
    <button
      className={`rounded-full ${
        width ? width : ""
      } ${border} ${paddingHorizontal} ${paddingVertical} ${textColor} uppercase ${bgColor} ${fontWeight} ${marginLeft} ${bgHoverColor} ${textHoverColor} duration-300`}
    >
      {text}
    </button>
  );
}
