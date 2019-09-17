import React from "react";
import LanguageContext from "../contexts/LanguageContext";


class LanguageSelector extends React.Component {
    static contextType = LanguageContext;


  render() {
      console.log(this.context);
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i className="flag nl" onClick={() => this.context.onLanguageChange("dutch")} />
        <i
          className="flag india"
          onClick={() => this.context.onLanguageChange("hindi")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
