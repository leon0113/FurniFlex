interface InputFieldProps {
    type: string;
    name: string;
    value: string | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

export default function InputField({
    type,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    className = '',
}: InputFieldProps) {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                value={typeof value === 'string' ? value : undefined}
                checked={typeof value === 'boolean' ? value : undefined}
                onChange={onChange}
                required={required}
                className={`w-full px-4 py-2 border outline-none rounded-md peer focus:outline-none focus:ring bg-inherit  ${className}`}
            />
            {/* This span element is triggered by the peer class in the input */}
            <span className="absolute left-0 top-2 px-1 text-sm tracking-wide text-gray-500 transition-all peer-focus:text-sm peer-focus:-translate-y-5  bg-gray-100 rounded peer-focus:bg-gray-100 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">
                {placeholder}
            </span>
        </div>
    );
}
