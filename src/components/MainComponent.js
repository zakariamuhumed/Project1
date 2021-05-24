import React, {Component} from 'react';
import Directory from './DirectoryComponents';
import ProgramInfo from './ProgramComponent';
import Header from './Header';
import Footer from './Footer';
import {PROGRAMS} from '../shared/programs';

class Main extends Component{
  constructor(props) {
    super(props);

    this.state = {
      programs: PROGRAMS,
      selectedProgram: null
    };
  }
  onProgramSelect(programId) {
    this.setState({selectedProgram: programId});
}

  render() {
    return(
      <div>
        <Header />
        <Directory programs={this.state.programs} onClick={programId => this.onProgramSelect(programId)}/>
        <ProgramInfo program={this.state.programs.filter(program => program.id === this.state.selectedProgram)[0]} />
        <Footer />
      </div>
    );
  }
}
export default Main;
