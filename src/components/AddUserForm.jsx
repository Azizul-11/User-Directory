import { useState } from "react";

const AddUserForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    onAdd({
      id: Date.now(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: {
        street: form.address,
        city: "",
      },
      company: {
        name: form.company,
      },
      website: form.website,
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      company: "",
      website: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        placeholder="Name *"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        placeholder="Email *"
        className="w-full p-2 border rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        placeholder="Phone *"
        className="w-full p-2 border rounded"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <input
        placeholder="Address"
        className="w-full p-2 border rounded"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <input
        placeholder="Company Name"
        className="w-full p-2 border rounded"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        placeholder="Website"
        className="w-full p-2 border rounded"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
      />

      <button className="px-4 py-2 bg-black text-white rounded">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
