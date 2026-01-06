function ExampleSelector(props) {
  const selected = props.selected;
  const onSelect = props.onSelect;

  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-slate-200">
      <h3 className="text-sm font-medium text-slate-700 mb-3">
        Product Category Example
      </h3>
      
      <div className="flex gap-3">
        <button
          onClick={function () {
            onSelect("shoes");
          }}
          className={
            "flex-1 px-4 py-3 rounded-lg font-medium transition-all " +
            (selected === "shoes"
              ? "bg-slate-900 text-white shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200")
          }
        >
          Premium Running Shoes ($180)
        </button>

        <button
          onClick={function () {
            onSelect("camera");
          }}
          className={
            "flex-1 px-4 py-3 rounded-lg font-medium transition-all " +
            (selected === "camera"
              ? "bg-slate-900 text-white shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200")
          }
        >
          Smart Security Camera ($89)
        </button>
      </div>
    </div>
  );
}
export default ExampleSelector;