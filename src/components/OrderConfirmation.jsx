import { CheckCircle2, Package, Calendar, MapPin } from "lucide-react";
function OrderConfirmation(props) {
  const orderNumber = props.orderNumber;
  const deliveryDate = props.deliveryDate;
  const productName = props.productName;
  const price = props.price;
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle2 className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-semibold text-white">
            Order confirmed – you're all set!
          </h1>
        </div>

        <p className="text-emerald-50 text-sm ml-11">
          We'll send you shipping updates to your email
        </p>
      </div>

      <div className="px-8 py-6 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <p className="text-xs text-slate-500 uppercase mb-1">
              Order Number
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {orderNumber}
            </p>
          </div>

          <button className="text-sm text-slate-700 underline">
            View order details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex gap-3">
            <Calendar className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase mb-1">
                Estimated Delivery
              </p>
              <p className="text-sm font-medium text-slate-900">
                {deliveryDate}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Package className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase mb-1">
                Product
              </p>
              <p className="text-sm font-medium text-slate-900">
                {productName}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500 uppercase mb-1">
                Shipping To
              </p>
              <p className="text-sm font-medium text-slate-900">
                123 Main St, NYC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
