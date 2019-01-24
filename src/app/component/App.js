import React, {Component} from 'react';
import { error } from 'util';

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      tcno: '',
      username: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);    
    this.addStaff = this.addStaff.bind(this);
  }

  addStaff(e) {
    fetch('/api/staffs',{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then (data => {
        console.log(data)
        M.toast({html: 'Personel Kaydedildi'});
        this.setState({ tcno: '', username:'', email:'' })
        })
      .catch(err => console.error(err));
    e.preventDefault();
  }
  
  componentDidMount(){
    this.fetchStaff();
  }

  fetchStaff() {
    fetch('/api/staffs')
    .then(res => res.json())
    .then(data => console.log(data));
  }
    

  handleChange (e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }


  render () {
    return(
      <div>
        <nav className="light-blue darken-4">
          <div className="container">
            <a className="brand-logo" href="/">Kullanıcılar</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-conten">
                  <form onSubmit={this.addStaff}>
                    <div className="row">
                      <div className="input-field col s12">
                        <div className="col s12">
                          <input name="tcno" onChange={this.handleChange} type = "number" placeholder="TC Kimlik Numarası" value={this.state.tcno} />
                          <input name="username" onChange={this.handleChange} type = "text" placeholder="Personel Adı Soyadı" value={this.state.username} />
                          <input name="email" onChange={this.handleChange} type = "email" placeholder="Email Adresi" value={this.state.email} />
                          <button className="btn light-blue darken-4" type="submit">Kaydet</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
