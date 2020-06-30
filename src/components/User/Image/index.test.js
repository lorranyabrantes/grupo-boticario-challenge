import React from "react";
import { shallow } from "../../../test/enzyme.config";
import UserImage from "./index";

describe("User image tests", () => {
    it("Should render correctly",() => {
        const wrapper = shallow(<UserImage /> );

        expect(wrapper.exists()).toBeTruthy();
    });
})