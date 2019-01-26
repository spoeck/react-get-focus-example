import * as React from 'react';
import InputField from './InputField';

export namespace SearchComponent {
    export interface Props {
    }

    export interface State {
    }
}

class SearchComponent extends React.Component<SearchComponent.Props, SearchComponent.State> {

    private ref: any;

    state = {
    };

    render() {

        return (
            <div style={{ marginBottom: 30 }}>
                <InputField
                    ref={(ref: any) => this.ref = ref}
                />
            </div>
        );
    }

    focus() {
        if (this.ref) {
            this.ref.focus();
        }
    }
}

export default SearchComponent;