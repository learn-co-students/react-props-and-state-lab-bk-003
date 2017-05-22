const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onChangeFilterType = this.onChangeFilterType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onChangeFilterType(type) {
    this.setState({filters: Object.assign({}, this.state.filters, {type: type})})
  }

  onFindPetsClick() {
    fetch('/api/pets' + (this.state.filters.type === 'all' ? '' : '?type=' + this.state.filters.type))
    .then( res => res.json())
    .then( json => this.setState({pets: json}))
  }

  onAdoptPet(id) {
    this.setState({adoptedPets: [...this.state.adoptedPets, id]})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeFilterType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
