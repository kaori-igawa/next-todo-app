import Image from "next/image";

type Props = {
  task: String;
  index: Number;
  completeTask: (index: Number) => void;
}

const Item: React.FC<Props> = ({task, index, completeTask}) => (
  <li onClick={() => completeTask(index)} className="border-2 border-gray-200 rounded-md mt-5 text-gray-500 overflow-hidden cursor-pointer relative">
  <p className="border-b-4 border-green-600 p-3">{ task }</p>
  <p className="absolute top-3 right-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7 text-green-600">
    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
  </svg></p>
 </li>
)

export default Item;
