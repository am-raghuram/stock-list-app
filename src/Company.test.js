import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Company from './Company';

configure({ adapter: new Adapter() })

describe('<Company />', () => {
    it('should renders company details <Company/> for a selected symbol', () => {
        const props = {
            details: {
                label: "AA",
                name: "Alcoa Corporation",
                price: "12.4 USD",
                value: "12042",
            }
        }
        const wrapper = shallow(<Company {...props}/>);
        wrapper.setProps(props);
        expect(wrapper.text()).toContain("USD")
    });
});

