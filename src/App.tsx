import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const aquaticCreatures = [
    { label: "Shark", value: "Shark" },
    { label: "Dolphin", value: "Dolphin" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" },
  ];
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <h4 className="my-3">Single</h4>
          <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={[
              {
                cat: "Group 1",
                key: "Option 1",
              },
              {
                cat: "Group 1",
                key: "Option 2",
              },
              {
                cat: "Group 1",
                key: "Option 3",
              },
              {
                cat: "Group 2",
                key: "Option 4",
              },
              {
                cat: "Group 2",
                key: "Option 5",
              },
              {
                cat: "Group 2",
                key: "Option 6",
              },
              {
                cat: "Group 2",
                key: "Option 7",
              },
            ]}
            singleSelect
          ></Multiselect>
          <br />
          <h4 className="my-3">React Select package</h4>
          <Select placeholder="Su Canlıları" options={aquaticCreatures} />
        </div>
        <div className="col-6">
          <h4 className="my-3">Multiselect</h4>
          <Multiselect
            isObject={false}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={["Option 1", "den 2", "Option 3", "Option 4", "Option 5"]}
          ></Multiselect>
        </div>
      </div>
      <h4 className="my-3">Disabled values</h4>
      <Multiselect
        disablePreSelectedValues
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        selectedValues={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
        ]}
      ></Multiselect>
      <h4 className="my-3">Show Checkbox</h4>
      <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        showCheckbox
      ></Multiselect>
      <h4 className="my-3">Group</h4>
      <Multiselect
        displayValue="key"
        groupBy="cat"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        showCheckbox
      ></Multiselect>
      <h4 className="my-3">Max limit (2)</h4>
      <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        selectionLimit={2}
      ></Multiselect>
      <h4 className="my-3">Custom placeholder + css</h4>
      <Multiselect
        displayValue="key"
        id="css_custom"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        placeholder="CSS Custom"
        style={{
          chips: {
            background: "red",
          },
          multiselectContainer: {
            color: "red",
          },
          searchBox: {
            border: "none",
            "border-left": "2px solid blue",
            "border-top": "2px solid blue",
            "border-bottom": "2px solid yellow",
            "border-right": "2px solid yellow",
            "border-radius": "0px",
          },
        }}
      ></Multiselect>
      <h4 className="my-3">Close icon</h4>
      <Multiselect
        customCloseIcon={<>🍑</>}
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        selectedValues={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
        ]}
      ></Multiselect>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
