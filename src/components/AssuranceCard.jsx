import { Shield, Headphones, Star, CheckCircle2, Camera, Zap } from "lucide-react";
const iconMap = {
  shield: <Shield />,
  headphones: <Headphones />,
  star: <Star />,
  camera: <Camera />,
  zap: <Zap />
};

function AssuranceCard(props) {
  const assurance = props.assurance;
  const isSelected = props.isSelected;
  const onToggle = props.onToggle;

  return (
    <div
      onClick={onToggle}
      className={
        "p-5 rounded-lg border-2 cursor-pointer " +
        (isSelected
          ? "border-slate-900 bg-slate-50"
          : "border-slate-200 bg-white")
      }
    >
      <div className="flex gap-4">
        <div
          className={
            "w-12 h-12 flex items-center justify-center rounded-lg " +
            (isSelected
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-600")
          }
        >
          {iconMap[assurance.icon]}
        </div>

        <div style={{ flex: 1 }}>
          <h3>{assurance.title}</h3>

          <p>
            <b>{assurance.price}</b> {assurance.priceType}
          </p>

          <ul>
            {assurance.benefits.map(function (b, i) {
              return <li key={i}>{b}</li>;
            })}
          </ul>

          <p>
            <b>Why this helps:</b> {assurance.insight}
          </p>
        </div>

        <div>
          {isSelected ? <CheckCircle2 /> : null}
        </div>
      </div>
    </div>
  );
}
export default AssuranceCard;