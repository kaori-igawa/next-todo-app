'use client';

import React, { useState } from 'react';

import Form from './components/form'
import Item from './components/item'

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<String[]>([]);

  const addTask = (value: String) => {
    setTasks([...tasks, value]);
  };

  const completeTask = (index: Number) => {
    setTasks(
      tasks.filter((task, taskIndex) => taskIndex !== index)
    );
  };

  return (
    <main className="p-10">

      <div className="mx-auto max-w-xl mb-20">
        <Form addTask={addTask} />
      </div>

      <div className="mx-auto max-w-xl">
        <ul>
          {tasks.map((value, index) => (
            <Item key={index} task={value} index={index} completeTask={completeTask} />
          ))}
        </ul>
      </div>

    </main>
  );
}

export default Home;
