import Image from "next/image";
import Star from "../../public/star.png";

const Rating = ({ value }: { value: number }) => {
  const stars = Array(Math.round(value)).fill(Star);
  return (
    <div className="flex gap-1">
      {stars.map((star, index) => (
        <Image key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </div>
  );
};

export default Rating;
