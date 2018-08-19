import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from '.';

const component = shallow(<Hello />);

describe('<Hello />', () => {
  it('Should render a "<Hello />" component', () => {
    expect(component).toHaveLength(1);
  });
});