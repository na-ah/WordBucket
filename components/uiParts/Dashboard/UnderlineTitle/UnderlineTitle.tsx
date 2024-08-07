import { UnderlineTitleProps } from "@/types/types";

export default function UnderlineTitle({
  title,
  content,
}: UnderlineTitleProps) {
  return (
    <>
      <div className="flex justify-between items-center border-b px-1">
        <h3 className="text-xl">{title}</h3>
        <span className="text-sm">{content}</span>
      </div>
    </>
  );
}
