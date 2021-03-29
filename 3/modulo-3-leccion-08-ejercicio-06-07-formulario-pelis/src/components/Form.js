import React, { Component } from 'react';
import Card from './Card';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };
    // this.handleChange = this.handleSubmit.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
  }
  // handleSubmit(ev) {
  //   ev.preventDefault();
  // }

  handleInputsChange(ev) {
    const target = ev.target;
    const value = target.value;
    const name = target.name;

    console.log(target, value, name);

    this.setState({ [name]: value });
  }

  render() {
    const { name, description, language } = this.state;
    return (
      <>
        <form className="form">
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Film name"
            value={name}
            onChange={this.handleInputsChange}
          />
          <textarea
            placeholder="Description"
            name="description"
            id=""
            cols="30"
            rows="10"
            className="textarea"
            value={description}
            onChange={this.handleInputsChange}
          />
          <select
            placeholder="Choose a Language..."
            className="select"
            name="language"
            onChange={this.handleInputsChange}
            value={language}
          >
            <>
              <option value="">Choose a Language...</option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="Albanian">Albanian</option>
              <option value="Arabic">Arabic</option>
              <option value="Armenian">Armenian</option>
              <option value="Basque">Basque</option>
              <option value="Bengali">Bengali</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Catalan">Catalan</option>
              <option value="Cambodian">Cambodian</option>
              <option value="Chinese">Chinese (Mandarin)</option>
              <option value="Croatian">Croatian</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Dutch">Dutch</option>
              <option value="English">English</option>
              <option value="Estonian">Estonian</option>
              <option value="Fiji">Fiji</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Javanese">Javanese</option>
              <option value="Korean">Korean</option>
              <option value="Latin">Latin</option>
              <option value="Latvian">Latvian</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malay">Malay</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Maltese">Maltese</option>
              <option value="Maori">Maori</option>
              <option value="Marathi">Marathi</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Nepali">Nepali</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Persian">Persian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Quechua">Quechua</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Samoan">Samoan</option>
              <option value="Serbian">Serbian</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Spanish">Spanish</option>
              <option value="Swahili">Swahili</option>
              <option value="Swedish">Swedish </option>
              <option value="Tamil">Tamil</option>
              <option value="Tatar">Tatar</option>
              <option value="Telugu">Telugu</option>
              <option value="Thai">Thai</option>
              <option value="Tibetan">Tibetan</option>
              <option value="Tonga">Tonga</option>
              <option value="Turkish">Turkish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Urdu">Urdu</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Xhosa">Xhosa</option>{' '}
            </>
          </select>
        </form>
        <Card name={name} description={description} language={language} />
      </>
    );
  }
}

export default Form;
