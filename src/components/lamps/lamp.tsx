type Props = {
  active: boolean;
  color: string;
};

export default function Lamp({ active, color }: Props) {
  return (
    <div
      className="w-12 h-12 rounded-full transition-all duration-300"
      style={{
        backgroundColor: active ? color : "#e5e7eb",
        boxShadow: active ? `0 0 20px ${color}` : "none",
      }}
    />
  );
}