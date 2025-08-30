import { InputFormProps, InputTypes } from '@/types/types';
import React from 'react';

function InputForm({ id, type, label, value }: InputFormProps) {
    return (
        <div
            className={`${type == InputTypes.CHECK ? 'flex items-center gap-2' : 'flex flex-col'}`}>
            {label && (
                <label
                    htmlFor={id}
                    className={`${type == InputTypes.CHECK ? 'text-base cursor-pointer' : ''}`}>
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                value={value}
                className={`${
                    type === InputTypes.CHECK
                        ? 'size-4 accent-blue-500'
                        : 'py-2 px-2 border rounded-lg'
                }`}
            />
        </div>
    );
}

export default InputForm;
