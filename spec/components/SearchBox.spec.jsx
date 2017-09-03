import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import SearchBox from '../../src/components/SearchBox';

describe('<SearchBox />', () => {
  chai.use(chaiEnzyme());

  const onSubmitSearchSpy = spy();
  const testWrapper = mount(
    <SearchBox
      onSubmitSearch={onSubmitSearchSpy}
    />
  );
  const testSearchTypeSelect = testWrapper.find('select').first();
  const testSearchInput = testWrapper.find('input').first();
  const testSearchButton = testWrapper.find('button').first();

  it('Should have a search options selector, search input field, and search button.', () => {
    expect(testSearchTypeSelect).to.be.present();
    expect(testSearchInput).to.be.present();
    expect(testSearchButton).to.be.present();
  });

  it('Should call the onSubmitSearch function', () => {
    testSearchTypeSelect.simulate('change', {
      target: {
        value: 1,
      },
    });
    testSearchInput.simulate('change', {
      target: {
        value: 'c3po',
      },
    });
    testSearchButton.simulate('click');
    expect(onSubmitSearchSpy.calledOnce).to.equal(true);
    expect(onSubmitSearchSpy.calledWith('c3po', 1)).to.equal(true);
  });
});
