import { motion } from "framer-motion";

const ListItem = (props) => {
  const { name } = props;

  return (
    <div className="flex flex-row my-1 justify-between items-center w-[130px]">
      <p className="capitalize text-[15px] h-[24px] text-gray-500">{name}</p>
    </div>
  );
};

export default ListItem;
