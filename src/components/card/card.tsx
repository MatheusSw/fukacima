import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";

interface CardProps {
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className="flex bg-white rounded-lg p-4 justify-between cursor-pointer">
      <div className="flex flex-col justify-start gap-1">
        <span className="text-sm text-gray-600">{title}</span>
        <span className="font-semibold text-2xl">{text}</span>
      </div>
      <RightArrow className="w-4 fill-gray-300" />
    </div>
  );
};

export default Card;
