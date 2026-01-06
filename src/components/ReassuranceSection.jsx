import { Star, Users, Clock } from "lucide-react";

function ReassuranceSection(props) {
  const satisfactionRate = props.satisfactionRate;
  const setupTime = props.setupTime;
  const customerCount = props.customerCount;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 px-8 py-6">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
        <h2 className="text-lg font-semibold text-slate-900">
          Great choice!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Star className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <p className="font-medium text-slate-900">
              {satisfactionRate}
            </p>
            <p className="text-sm text-slate-600">
              reported it exceeded expectations
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-700" />
          </div>
          <div>
            <p className="font-medium text-slate-900">
              {setupTime}
            </p>
            <p className="text-sm text-slate-600">
              typical setup time
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-700" />
          </div>
          <div>
            <p className="font-medium text-slate-900">
              {customerCount}
            </p>
            <p className="text-sm text-slate-600">
              happy customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReassuranceSection;