import React, { Component } from "react";
import { Spinner, SpinnerSize } from "azure-devops-ui/Spinner";

export default class SplitterExample extends Component<any, any> {
  public render() {
    return (
      <div className="flex-row">
        <Spinner size={SpinnerSize.xSmall} />
        <div style={{ marginLeft: 4 }} />
        <Spinner size={SpinnerSize.small} />
        <div style={{ marginLeft: 4 }} />
        <Spinner size={SpinnerSize.medium} />
        <div style={{ marginLeft: 4 }} />
        <Spinner size={SpinnerSize.large} />
      </div>
    );
  }
}
