const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
      	{this.props.pets.map( pet => {
      			return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.indexOf(pet.id) !== -1}/>
      		})}
      </div>
    );
  }
}

module.exports = PetBrowser;
