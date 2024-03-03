import { useForm } from 'react-hook-form';

type Props = {
  addTask: (value: String) => void;
}

type Inputs = {
  taskValue: String;
}

const Form: React.FC<Props> = ({addTask}) => {
  const {register, getValues} = useForm<Inputs>({
    defaultValues: {
      taskValue: ''
    }
  });

  return(
    <div>
      <div className="relative mb-4">
        <input type="text" id="example13" placeholder=" " className="peer block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3" {...register('taskValue')} />
        <label for="example13" className="peer-focus:base absolute left-2 top-1 z-10 -translate-y-2 transform bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-disabled:bg-transparent">add task</label>
      </div>
      <button onClick={() => addTask(getValues('taskValue'))} className="bg-blue-500 text-white block w-40  mx-auto rounded-md py-2">add task</button>
    </div>
  )
}

export default Form;