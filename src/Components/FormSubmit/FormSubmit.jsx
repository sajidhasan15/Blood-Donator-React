import './FormSubmit.css';
import React,{ Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNum = this.onChangeNum.bind(this);
        this.onChangeNum2 = this.onChangeNum2.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAp = this.onChangeAp.bind(this);
        this.onChangeAn = this.onChangeAn.bind(this);
        this.onChangeBp = this.onChangeBp.bind(this);
        this.onChangeBn = this.onChangeBn.bind(this);
        this.onChangeABp = this.onChangeABp.bind(this);
        this.onChangeABn = this.onChangeABn.bind(this);
        this.onChangeOp = this.onChangeOp.bind(this);
        this.onChangeOn = this.onChangeOn.bind(this);
        this.onChangeReligion = this.onChangeReligion.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
        this.onChangeDonate = this.onChangeDonate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {  
            name: "",
            num: "",
            num2: "",
            email: "",
            ap:"",
            an:"",
            bp:"",
            bn:"",
            adp:"",
            abn:"",
            op:"",
            on:"",
            religion:"",
            address:"",
            weight:"",
            birthday:"",
            donate:""
    
    }

    }
}

onChangeName(e)
    this.setState({ name: e.target.value })
onChangeNum(e)
    this.setState({ num: e.target.value })
onChangeNum2(e)
    this.setState({ num2: e.target.value })
onChangeEmail(e)
    this.setState({ email: e.target.value })
onChangeAp(e)
    this.setState({ ap: e.target.value })
onChangeAn(e)
    this.setState({ an: e.target.value })
onChangeBn(e)
    this.setState({ bn: e.target.value })
onChangeBp(e)
    this.setState({ bp: e.target.value })
onChangeBn(e)
    this.setState({ bn: e.target.value })
onChangeAdp(e)
    this.setState({ adp: e.target.value })
onChangeAdn(e)
    this.setState({ adn: e.target.value })
onChangeOp(e)
    this.setState({ op: e.target.value })
onChangeOn(e)
    this.setState({ on: e.target.value })
onChangeReligion(e)
    this.setState({ religion: e.target.value })
onChangeAddress(e)
    this.setState({ address: e.target.value })
onChangeWeight(e)
    this.setState({ weight: e.target.value })
onChangeBirthdate(e)
    this.setState({ birthday: e.target.value })
onChangeDonate(e)
    this.setState({ donate: e.target.value })




// React Life Cycle
componentDidMount() 
    this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
        this.setState({
            name: this.userData.name,
            num: this.userData.num,
            num2: this.userData.num2,
            email: this.userData.email,
            ap: this.userData.ap,
            an: this.userData.an,
            bp: this.userData.bp,
            bn: this.userData.bn,
            adp: this.userData.adp,
            adn: this.userData.adn,
            op: this.userData.op,
            on: this.userData.on,
            religion: this.userData.religion,
            address: this.userData.address,
            weight: this.userData.weight,
            birthday: this.userData.birthday,
            donate: this.userData.donate

        })
    } else {
        this.setState({
            name: "",
            num: "",
            num2: "",
            email: "",
            ap:"",
            an:"",
            bp:"",
            bn:"",
            adp:"",
            abn:"",
            op:"",
            on:"",
            religion:"",
            address:"",
            weight:"",
            birthday:"",
            donate:""
        })
    }


componentWillUpdate(nextProps, nextState) 
    localStorage.setItem('user', JSON.stringify(nextState));


onSubmit(e) 
    e.preventDefault()
    console.log(this.state.props)


function FormSubmit(){
        return (
        <div className="mainDiv">
            <form className="formSection" onSubmit = {this.onSubmit}>
            <h2>Registration for Blood Donation</h2>
                <label>Name: </label>
                <input name="name" type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Enter your name" /> <br/>
                <label>Mobile Number: </label>
                <input name="num" type="text" value={this.state.num} onChange={this.onChangeNum} placeholder="Enter your number" /> <br/>
                <label>Alternate Number: </label>
                <input name="num2" type="text" value={this.state.num2} onChange={this.onChangeNum2} placeholder="Enter another number"/> <br/>
                <label>Email: </label>
                <input name="email" type="text" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter your email"/> <br/>
                <label>Blood Group: </label>
                    <select className="custom-select">
                        <option >Select Blood Group:</option>
                        <option name="Ap"onChange={this.onChangeAp} value="A+">A+</option>
                        <option name="An" onChange={this.onChangeAn} value="A-">A-</option>
                        <option name="Bp"onChange={this.onChangeBp} value="B+">B+</option>
                        <option name="Bn"onChange={this.onChangeBn} value="B-">B-</option>
                        <option name="ABp"onChange={this.onChangeABp} value="AB+">AB+</option>
                        <option name="ABn"onChange={this.onChangeABn} value="AB-">AB-</option>
                        <option name="Op"onChange={this.onChangeOp} value="Op">O+</option>
                        <option name="On"onChange={this.onChangeOn} value="On">O-</option>
                    </select> <br/>                 
                <label>Religion: </label>
                <input name="religion" type="text" value={this.state.religion} onChange={this.onChangeReligion} placeholder="Enter your religion"/> <br/>
                <label>Present Address: </label>
                <input name="address" type="text" value={this.state.address} onChange={this.onChangeAddress} placeholder="Enter your address"/> <br/>
                <label>Weight: </label>
                <input name="weight" type="text" value={this.state.weight} onChange={this.onChangeWeight} placeholder="Enter your weight" /> <br/>
                <label>Birthdate: </label>
                <input name="birthday" type="date" value={this.state.birthday} onChange={this.onChangeBirthdate} />
                <label> Last donate Blood: </label>
                <input name="donate" type="date" value={this.state.donate} onChange={this.onChangeDonate} /> <br/>
                <input type="submit" value="Send" />

            </form>
        </div>
    )

}

export default FormSubmit