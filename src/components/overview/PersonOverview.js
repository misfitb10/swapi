import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { personsFetchData } from '../../actions/persons';
import API_ENDPOINT from '../../config/API';
// import {personsFiltered} from "../../reducers/persons";



const PersonWrapper = styled.section`
    padding: 20px;
`;

const SearchBarSection = styled.section`
    margin: 10px 0 20px 0;
`;

const SearchInput = styled.input`
    padding: 5px 10px;
    margin: 0 0 0 5px;
`;

const PersonList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const PersonListItem = styled.li`
    list-style-type: none;
    padding: 20px;
    background: #000;
    color: yellow;
    display: inline-block;
    margin: 0 5px 5px 0;
`;


class PersonOverview extends Component {
    constructor() {
        super();

        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.props.fetchData(API_ENDPOINT);
    }

    // TODO: Fix filteredItem is read-only, but running out of tiiiiiiiime
    search(e) {
        console.log('e.target.value', e.target.value);
        // TODO: eslint says: Expected 'this' to be used by class method 'search', and it's true
        // TODO: because right now this shit isn't working yet
        // this.props.filteredItem = e.target.value;
        // console.log('this.props.filteredItem', this.props.filteredItem);
    }

    // searchPerson = (person) => {
    //     console.log('person ', person.name);
    //     return person.name.toLowerCase().includes(this.props.filteredItem.toLowerCase())
    // };

    render() {
        const { persons, hasError, isLoading } = this.props;

        console.log('persons', persons);

        if (hasError) {
            return <h1>Error in loading the data</h1>;
        }

        if (isLoading) {
            return <h1>Loading data</h1>;
        }

        // const filteredItem = this.props.filtered;
        // if (filteredItem) {
        //     console.log('filteredItem', filteredItem);
        //     persons = persons.filter(person => this.searchPerson(person));
        // }

        return (
            <PersonWrapper>
                <SearchBarSection>
                    <label htmlFor="search">Search on name:
                        <SearchInput id="search" type="text" placeholder="e.g. Luke" onChange={this.search} />
                    </label>
                </SearchBarSection>

                <PersonList>
                    {
                        persons.map(person =>
                            (
                                <PersonListItem key={person.name}>
                                    <Person person={person} />
                                </PersonListItem>
                            ))
                    }
                </PersonList>
            </PersonWrapper>
        );
    }
}

const Person = props => {
    return (
        <div className="person__info">
            <h2 className="person__info-name">{props.person.name}</h2>

            <div className="person__info-additional">
                <div className="person__info-additionalItem">Gender: {props.person.gender}</div>
                <div className="person__info-additionalItem">Birth year: {props.person.birth_year}</div>
            </div>

            <div className="person__moreInfo">
                <a href="#" className="person__moreInfoLink">Click for more info</a>
            </div>
        </div>
    );
};

PersonOverview.propTypes = {
    fetchData: PropTypes.func.isRequired,
    persons: PropTypes.arrayOf(PropTypes.object).isRequired,
    // person: PropTypes.shape({
    //     gender: PropTypes.string,
    //     birth_year: PropTypes.number
    // }).isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    // filtered: PropTypes.func,
    // filteredItem: PropTypes.string,
};

const mapStateToProps = state => ({
    hasError: state.personsHaveError,
    isLoading: state.personsAreLoading,
    persons: state.persons,
    // filteredItem: state.personsFiltered,
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(personsFetchData(url)),
    // filtered: (keyword) => dispatch(personsFilter(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonOverview);
