import Lamp from "./lamp"

type Props = {
  state: {
    lamp1: boolean;
    lamp2: boolean;
    lamp3: boolean;
    lamp4: boolean;
  };
};

export default function LampPanel({ state }: Props) {
  return (
    <div className="flex gap-4 justify-center mt-10">
      <Lamp active={state.lamp1} color="red" />
      <Lamp active={state.lamp2} color="green" />
      <Lamp active={state.lamp3} color="orange" />
      <Lamp active={state.lamp4} color="white" />
    </div>
  );
}