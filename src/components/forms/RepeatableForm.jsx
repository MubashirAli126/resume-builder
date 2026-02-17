import { useState } from "react";

const RepeatableForm = ({ sectionName, data, onChange, fields }) => {
  const [entries, setEntries] = useState(data || []);

  const handleAdd = () => {
    const newEntry = fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    const updated = [...entries, newEntry];
    setEntries(updated);
    onChange(updated);
  };

  const handleRemove = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    onChange(updated);
  };

  const handleInputChange = (index, name, value) => {
    const updated = [...entries];
    updated[index][name] = value;
    setEntries(updated);
    onChange(updated);
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h3 className="font-bold text-lg mb-2">{sectionName}</h3>

      {entries.map((entry, idx) => (
        <div key={idx} className="border p-4 rounded space-y-2 relative">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block font-medium">{field.label}</label>
              <input
                className="input"
                value={entry[field.name]}
                onChange={(e) =>
                  handleInputChange(idx, field.name, e.target.value)
                }
              />
            </div>
          ))}

          <button
            type="button"
            className="absolute top-2 right-2 text-red-500"
            onClick={() => handleRemove(idx)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        Add {sectionName}
      </button>
    </div>
  );
};

export default RepeatableForm;
