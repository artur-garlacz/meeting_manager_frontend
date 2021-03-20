import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface IGeneralErrorBoundaryState {
  hasError: boolean;
  error?: any;
}

class GeneralErrorBoundary extends React.Component<
  unknown,
  IGeneralErrorBoundaryState
> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(error: any) {
    this.setState({ hasError: true, error });
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error-message-outer">
          <div className="error-message-inner">
            <h4 className="m-4 text-center">
              <FormattedMessage id="app.renderingError.title" />
            </h4>
            <div className="text-center m-2">
              {error.isHttpError ? (
                <FormattedMessage
                  id={`app.renderingError.err${error.httpError}`}
                />
              ) : (
                <FormattedMessage id="app.renderingError.generic" />
              )}
            </div>
            <div className="text-center m-2">
              <a href="/">
                <FormattedMessage id="app.renderingError.restart" />
              </a>
            </div>
          </div>
        </div>
      );
    }
    return <>{children}</>;
  }
}

export default GeneralErrorBoundary;
