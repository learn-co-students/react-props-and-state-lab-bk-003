const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} (gender: {pet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { !this.props.isAdopted ?
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button> :
            <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
