import getColor from "@/utils/getColor";

const Avatar = () => {
  const className = `w-7 h-7 rounded-full bg-emerald-600 ${getColor(10).preview}`;
  console.log(className);


  return (
      <div className={className} />
  );
};

export default Avatar;