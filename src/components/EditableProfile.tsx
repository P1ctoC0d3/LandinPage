import React, { useState } from 'react';
import { Pencil, Check, X } from 'lucide-react';

interface EditableFieldProps {
  value: string;
  onSave: (value: string) => void;
  className?: string;
  type?: 'text' | 'textarea';
}

export function EditableField({ value, onSave, className = '', type = 'text' }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(tempValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="group relative inline-block">
        <span className={className}>{value}</span>
        <button
          onClick={() => setIsEditing(true)}
          className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Editar"
        >
          <Pencil className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {type === 'textarea' ? (
        <textarea
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      )}
      <button onClick={handleSave} className="text-green-500 hover:text-green-600">
        <Check className="w-5 h-5" />
      </button>
      <button onClick={handleCancel} className="text-red-500 hover:text-red-600">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}