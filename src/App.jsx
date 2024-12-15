import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import useFormData from './Hooks/useFormData';

function App() {
  const { name, setName, email, setEmail, data, handleSubmit, handleDelete } = useFormData();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">CRUD con React y Tailwind</h1>
      
      <Form name={name} setName={setName} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />

      <Table data={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
