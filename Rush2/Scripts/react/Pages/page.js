import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown } from 'semantic-ui-react'

export class Page extends React.Component {
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

    // Create a claim, alert "Success" if success.
    handleSubmit() {
        $.ajax({
            url: "/Claim/Create",
            headers: {
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(this.state),
            success: function (res) {
                alert("Success");
            }.bind(this)
        })
    }

    handleTypeChange(value) {
        this.setState({ Type: value });
    }

    handleMakeChange(value) {
        this.setState({ Make: value });
    }

    handleSevereChange() {
        this.setState({ Severity: value });
    }

    render() {
        const types = ['Car', 'Scooter, Truck'];
        const makes = ['Mazda', 'Toyota', 'Honda'];
        const severity = ['Severe', 'Moderate', 'Minor']
        const typeOptions = types.map(
            (x) => ({ key: x, value: x, text: x }));
        const makeOptions = makes.map(
            (x) => ({ key: x, value: x, text: x }));
        const severeOptions = severity.map(
            (x) => ({ key: x, value: x, text: x }));

        return (
            <div className="ui container">
                <div className="header">
                    Main Page
                </div>
                <form className="ui form" >
                    <div className="ui segment">
                        <div className="field">
                            <label>Member</label>
                            <input type="text" id="Member" name="Member" placeholder="MemberId"
                                onChange={event => this.handleInputChange(event)} />
                        </div>
                        <div className="field" style={{ width: "40%" }}>
                            <div className="ui text">Vehicle Type </div>
                            <Dropdown options={typeOptions} name="vehicleType"
                                floating button scrolling fluid
                                onChange={(e, { value }) => this.handleTypeChange(value)}
                                placeholder={"Select Type"} />
                        </div>
                        <div className="field" style={{ width: "40%" }}>
                            <div className="ui text">Vehicle Make </div>
                            <Dropdown options={makeOptions} name="make"
                                floating button scrolling fluid
                                onChange={(e, { value }) => this.handleMakeChange(value)}
                                placeholder={"Select Make"} />
                        </div>
                        <div className="field">
                            <label>Model</label>
                            <input type="text" id="Model" name="Model" placeholder="Model"
                                onChange={event => this.handleInputChange(event)} />
                        </div>
                        <div className="field">
                            <label>Year</label>
                            <input type="text" id="Year" name="Year" placeholder="Year"
                                onChange={event => this.handleInputChange(event)} />
                        </div>
                        <div className="field">
                            <label>DamagePart</label>
                            <input type="text" id="DamagePart" name="DamagePart" placeholder="DamagePart"
                                onChange={event => this.handleInputChange(event)} />
                        </div>
                        <div className="field" style={{ width: "40%" }}>
                            <div className="ui text">Vehicle Severity </div>
                            <Dropdown options={severeOptions} name="vehicleSeverity"
                                floating button scrolling fluid
                                onChange={(e, { value }) => this.handleSevereChange(value)}
                                placeholder={"Select Severity"} />
                        </div>
                    </div>
                </form>
                <div className="actions">
                    <div className="ui green submit button"
                        onClick={() => {handleSubmit()}}>Submit</div>
                </div>
            </div>
        );

    }
}

ReactDOM.render(
    <Page />,
    document.getElementById("root")
)