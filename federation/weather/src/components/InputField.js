"use client";

export default function InputField({ label, value, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-white">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="p-2 rounded-lg bg-white text-gray-800"
      />
    </div>
  );
}
