import { useState } from "react";
import OrderConfirmation from "./OrderConfirmation";
import ReassuranceSection from "./ReassuranceSection";
import AssuranceLayer from "./AssuranceLayer";
import { shoesData, cameraData } from "./data/productData";

function ThankYouPage(props) {
  const productType = props.productType;

  const [selectedAssurances, setSelectedAssurances] = useState([]);

  const data =
    productType === "shoes" ? shoesData : cameraData;

  function toggleAssurance(id) {
    setSelectedAssurances(function (prev) {
      if (prev.includes(id)) {
        return prev.filter(function (item) {
          return item !== id;
        });
      } else {
        return prev.concat(id);
      }
    });
  }

  return (
    <div className="space-y-6">
      <OrderConfirmation
        orderNumber={data.orderNumber}
        deliveryDate={data.deliveryDate}
        productName={data.productName}
        price={data.price}
      />

      <ReassuranceSection
        satisfactionRate={data.satisfactionRate}
        setupTime={data.setupTime}
        customerCount={data.customerCount}
      />

      <AssuranceLayer
        productType={productType}
        assurances={data.assurances}
        selectedAssurances={selectedAssurances}
        onToggleAssurance={toggleAssurance}
      />
    </div>
  );
}

export default ThankYouPage;