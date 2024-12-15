import { useState } from 'react';

const useFormData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setData([...data, { id: Date.now(), name, email }]);
      setName('');
      setEmail('');
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return {
    name,
    setName,
    email,
    setEmail,
    data,
    handleSubmit,
    handleDelete,
  };
};

export default useFormData;
