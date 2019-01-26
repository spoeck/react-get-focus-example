import * as React from 'react';

export namespace InputField {
    export interface Props {
    }

    export interface State {
    }
}

class InputField extends React.Component<InputField.Props, InputField.State> {

    private ref: any;

    state = {
    };

    render() {

        return (
            <div>
                <input
                    ref={(ref: any) => this.ref = ref}
                    type="text"
                    placeholder="Suchen..."
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

export default InputField;