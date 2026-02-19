import { useState } from "react";
import AddMoreButton from "../ui/AddMoreButton";
import DeleteButton from "../ui/DeleteButton";

const emptyEntryFromFields = (fields) =>
  fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {});

const RepeatableForm = ({
  sectionName,
  data,
  onChange,
  fields,
  isEntryFilled
}) => {
  const [entries, setEntries] = useState(() => {
    const d = data ?? [];
    if (d.length > 0) return d;
    return [emptyEntryFromFields(fields)];
  });

  const handleAdd = () => {
    const newEntry = emptyEntryFromFields(fields);
    const updated = [...entries, newEntry];
    setEntries(updated);
    onChange(updated);
  };

  const handleRemove = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    if (updated.length === 0) updated.push(emptyEntryFromFields(fields));
    setEntries(updated);
    onChange(updated);
  };

  const handleInputChange = (index, name, value) => {
    const updated = [...entries];
    updated[index] = { ...updated[index], [name]: value };
    setEntries(updated);
    onChange(updated);
  };

  const showDelete = (entry) =>
    typeof isEntryFilled === "function"
      ? isEntryFilled(entry)
      : true;

  return (
    <div className="space-y-6 font-app">
      <h3 className="text-base font-semibold" style={{ color: "#14151A" }}>{sectionName}</h3>

      {entries.map((entry, idx) => (
        <div key={idx} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gray-200 rounded-lg p-4 bg-white">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium mb-1" style={{ color: "#14151A" }}>
                  {field.label}
                </label>
                <input
                  className="input"
                  value={entry[field.name] ?? ""}
                  onChange={(e) =>
                    handleInputChange(idx, field.name, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          {showDelete(entry) && (
            <DeleteButton onClick={() => handleRemove(idx)} />
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <AddMoreButton onClick={handleAdd} />
      </div>
    </div>
  );
};

export default RepeatableForm;
