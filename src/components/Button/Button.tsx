import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant, ...props }: ButtonProps) {
  const colorClasses = () => {
    if (variant === 'primary') return { borderColor: '#6366F1', backgroundColor: '#6366F1', color: '#FAFAFA' };
    if (variant === 'secondary') return { borderColor: '#6366F1', backgroundColor: '#FAFAFA', color: '#6366F1' };
    return {};
  };

  return (
    <button style={{ ...colorClasses(), ...props.style }} {...props}>
      {props.children}
    </button>
  );
}
