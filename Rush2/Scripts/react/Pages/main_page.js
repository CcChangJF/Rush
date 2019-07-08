import React from 'react';
import ReactDOM from 'react-dom'
import { Dropdown } from 'semantic-ui-react';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MemberId: '',
            Type: '',
            Make: '',
            Model: '',
            Year: '',
            DamagePart: '',
            Severity: '',
            Photo: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleDropdown(event) {

    }

    handleSubmit(event) {
        var reloadData = () => { ; };
    }

    render() {
        types = ['Car', 'Scooter, Truck']
        makes = ['Mazda', 'Toyota', 'Honda']
        severity = ['Severe', 'Moderate', 'Minor']
        typeOptions = types.map(
            (x) => ({ key: x, value: x, text: x }));
        makeOptions = makes.map(
            (x) => ({ key: x, value: x, text: x }));
        severeOptions = severity.map(
            (x) => ({ key: x, value: x, text: x }));

        return (<p>New</p>)
        //return (
        //    <div className="ui container">
        //        <i className="close icon" />
        //        <div className="header">
        //            Main Page
        //        </div>
        //        <form className="ui form" id="add_Store_Form">
        //            <div className="ui segment">
        //                <div className="field">
        //                    <label>Member</label>
        //                    <input type="text" id="Member" name="Member" placeholder="MemberId"
        //                        onChange={event => this.handleInputChange(event)} />
        //                </div>
        //                <div className="field" style={{ width: "40%" }}>
        //                    <div className="ui text">Vehicle Type </div>
        //                    <Dropdown options={typeOptions} name="vehicleType"
        //                        floating button scrolling fluid
        //                        onChange={(e, { value }) => this.handleTypeChange(event, value)}
        //                        placeholder={"Select Type"} />
        //                </div>
        //                <div className="field" style={{ width: "40%" }}>
        //                    <div className="ui text">Vehicle Make </div>
        //                    <Dropdown options={makeOptions} name="make"
        //                        floating button scrolling fluid
        //                        onChange={(e, { value }) => this.handleMakeChange(event, value)}
        //                        placeholder={"Select Make"} />
        //                </div>
        //                <div className="field">
        //                    <label>Model</label>
        //                    <input type="text" id="Model" name="Model" placeholder="Model"
        //                        onChange={event => this.handleInputChange(event)} />
        //                </div>
        //                <div className="field">
        //                    <label>Year</label>
        //                    <input type="text" id="Year" name="Year" placeholder="Year"
        //                        onChange={event => this.handleInputChange(event)} />
        //                </div>
        //                <div className="field">
        //                    <label>DamagePart</label>
        //                    <input type="text" id="DamagePart" name="DamagePart" placeholder="DamagePart"
        //                        onChange={event => this.handleInputChange(event)} />
        //                </div>
        //                <div className="field" style={{ width: "40%" }}>
        //                    <div className="ui text">Vehicle Severity </div>
        //                    <Dropdown options={severeOptions} name="vehicleSeverity"
        //                        floating button scrolling fluid
        //                        onChange={(e, { value }) => this.handleTypeChange(event, value)}
        //                        placeholder={"Select Severity"} />
        //                </div>
        //            </div>
        //        </form>
        //        <div className="actions">
        //            <div className="ui black cancel button">Cancel</div>
        //            <div className="ui green submit button"
        //                onClick={this.handleCreateStore}>Submit</div>
        //        </div>
        //    </div>
        //);
    }
}

ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
)
