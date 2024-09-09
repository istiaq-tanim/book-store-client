const Format = ({ format }: { format: string[] }) => {
  const colorCombinations = [
    { bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
    { bgColor: "bg-green-100", textColor: "text-green-600" },
    { bgColor: "bg-blue-100", textColor: "text-blue-600" },
  ];

  return (
    <div className="flex space-x-2 mb-2 justify-center items-center">
      {format.slice(0, 3).map((feature, index) => {
        const colors = colorCombinations[index % colorCombinations.length];
        return (
          <span
            key={index}
            className={`px-2 py-2 text-center ${colors.bgColor} ${colors.textColor} text-xs font-medium rounded-full`}
          >
            {feature}
          </span>
        );
      })}
    </div>
  );
};

export default Format;
