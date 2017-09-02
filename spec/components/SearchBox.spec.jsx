import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import SearchBox from '../../src/components/SearchBox';
import {
  FETCH_PERSON_BY_ID,
} from '../../src/constants/searchTypes';

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
        value: FETCH_PERSON_BY_ID,
      },
    });
    testSearchInput.simulate('change', {
      target: {
        value: 'nm0000120',
      },
    });
    testSearchButton.simulate('click');
    expect(onSubmitSearchSpy.calledOnce).to.equal(true);
    expect(onSubmitSearchSpy.calledWith('nm0000120', FETCH_PERSON_BY_ID)).to.equal(true);
  });
});
