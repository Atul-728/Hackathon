import AssuranceCard from "./AssuranceCard";
import { ChevronRight } from "lucide-react";

function AssuranceLayer(props) {
  const productType = props.productType;
  const assurances = props.assurances;
  const selectedAssurances = props.selectedAssurances;
  const onToggleAssurance = props.onToggleAssurance;

  const totalCost = assurances
    .filter(function (a) {
      return selectedAssurances.includes(a.id);
    })
    .reduce(function (sum, a) {
      return sum + parseFloat(a.price.replace("$", ""));
    }, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-8 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Want to ensure the best outcome?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We've helped thousands of customers get maximum value from their
            purchase. Here are a few optional ways we can support your success:
          </p>
        </div>

        <div className="space-y-4">
          {assurances.map(function (assurance) {
            return (
              <AssuranceCard
                key={assurance.id}
                assurance={assurance}
                isSelected={selectedAssurances.includes(assurance.id)}
                onToggle={function () {
                  onToggleAssurance(assurance.id);
                }}
              />
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            {selectedAssurances.length === 0 ? (
              <span>No assurance options selected</span>
            ) : (
              <span>
                {selectedAssurances.length} option
                {selectedAssurances.length > 1 ? "s" : ""} selected
              </span>
            )}
          </div>

          {selectedAssurances.length > 0 ? (
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm">
              Add to order for ${totalCost.toFixed(2)}
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button className="flex items-center gap-2 text-slate-700 font-medium hover:text-slate-900 transition-colors">
              Continue without extras
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 px-4">
        All assurance options are optional and can be added now or later from
        your order page
      </div>
    </div>
  );
}
export default AssuranceLayer;