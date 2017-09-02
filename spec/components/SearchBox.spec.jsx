import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import SearchBox from '../../src/components/SearchBox';

describe('<SearchBox />', () => {
  chai.use(chaiEnzyme());

  const onSubmitFetchPersonByIdSpy = spy();
  const onSubmitFetchTitleByIdSpy = spy();
  const onSubmitPersonSearchSpy = spy();
  const onSubmitTitleSearchSpy = spy();
  const testWrapper = mount(
    <SearchBox
      onSubmitFetchPersonById={onSubmitFetchPersonByIdSpy}
      onSubmitFetchTitleById={onSubmitFetchTitleByIdSpy}
      onSubmitPersonSearch={onSubmitPersonSearchSpy}
      onSubmitTitleSearch={onSubmitTitleSearchSpy}
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

  it('Should call the onSubmitFetchPersonById function', () => {
    testSearchTypeSelect.simulate('change', {
      target: {
        value: 0,
      },
    });
    testSearchInput.simulate('change', {
      target: {
        value: 'nm0000120',
      },
    });
    testSearchButton.simulate('click');
    expect(onSubmitFetchPersonByIdSpy.calledOnce).to.equal(true);
    expect(onSubmitFetchPersonByIdSpy.calledWith('nm0000120')).to.equal(true);
  });

  it('Should call the onSubmitFetchTitleById function.', () => {
    testSearchTypeSelect.simulate('change', {
      target: {
        value: 1,
      },
    });
    testSearchInput.simulate('change', {
      target: {
        value: 'mm0000374',
      },
    });
    testSearchButton.simulate('click');
    expect(onSubmitFetchTitleByIdSpy.calledOnce).to.equal(true);
    expect(onSubmitFetchTitleByIdSpy.calledWith('mm0000374')).to.equal(true);
  });

  it('Should call the onSubmitPersonSearch function', () => {
    testSearchTypeSelect.simulate('change', {
      target: {
        value: 2,
      },
    });
    testSearchInput.simulate('change', {
      target: {
        value: 'James Cameron',
      },
    });
    testSearchButton.simulate('click');
    expect(onSubmitPersonSearchSpy.calledOnce).to.equal(true);
    expect(onSubmitPersonSearchSpy.calledWith('James Cameron')).to.equal(true);
  });

  it('Should call the onSubmitPersonSearch function', () => {
    testSearchTypeSelect.simulate('change', {
      target: {
        value: 3,
      },
    });
    testSearchInput.simulate('change', {
      target: {
        value: 'Escape From New York',
      },
    });
    testSearchButton.simulate('click');
    expect(onSubmitTitleSearchSpy.calledOnce).to.equal(true);
    expect(onSubmitTitleSearchSpy.calledWith('Escape From New York')).to.equal(true);
  });
});
