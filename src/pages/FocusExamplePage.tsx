import { Button, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import SearchComponent from '../components/SearchComponent';

export namespace FocusExamplePage {
    export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    }
}

class FocusExamplePage extends React.Component<FocusExamplePage.Props> {
    private ref: any;

    render() {
        return (
            <div className={this.props.classes.root}>
                <SearchComponent ref={(ref: any) => this.ref = ref} />
                <Button
                    variant="outlined"
                    onClick={this.onButtonClick}
                >
                    Focus jetzt!
                </Button>
            </div>
        );
    }

    onButtonClick = () => {
        if (this.ref) {
            this.ref.focus();
        }
    }
}

const styles = (theme: Theme) => createStyles({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
});

export default withStyles(styles)(FocusExamplePage);
