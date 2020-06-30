import React from "react";
import { shallow, mount } from "../../test/enzyme.config";

import Orders from "./index";
import { setCashback } from "../../app/actions";

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const storeData = {
    cashbackState: {
        cashback: 0
    }
}

const actions = [ setCashback ]
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(storeData, actions);

describe("Orders actions tests", () => {
    it("Should render correctly", () => {
        const wrapper = mount(<Orders store={store} />);

        expect(wrapper.exists()).toBeTruthy();
    });

    it("Should render orders modal", () => {
        const wrapper = mount(<Orders store={store} />);
        
        wrapper.find("#change-view").first().simulate("click");

        expect(wrapper.find('.modal-orders')).toBeTruthy();
    });

    it("Should change view", () => {
        const wrapper = mount(<Orders store={store} />);
        
        wrapper.find("#change-view").first().simulate("click");

        expect(wrapper.find('.orders__cards--large').length).toBe(1);

        wrapper.find("#change-view").first().simulate("click");

        expect(wrapper.find('.orders__cards--large').length).toBe(0);
    });
})