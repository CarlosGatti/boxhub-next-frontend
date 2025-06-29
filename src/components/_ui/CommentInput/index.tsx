// src/components/CommentInput.tsx
import { useState } from 'react';

export const CommentInput = ({ onSubmit, placeholder = 'Write a comment…' }) => {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value.trim());
        setValue('');
      }}
      className="flex gap-2 items-start"
    >
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border p-2 rounded-md resize-none"
        rows={2}
      />
      <button
        type="submit"
        className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 disabled:opacity-40"
        disabled={!value.trim()}
      >
        Send
      </button>
    </form>
  );
};
