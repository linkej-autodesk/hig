import React from "react";
import { mount } from "enzyme";

import Notifications from "./Notifications";
import Notification from "./Notification";
import NotificationsAdapter from "../../../../adapters/GlobalNav/TopNav/NotificationsAdapter";

describe("<Notifications", () => {
  describe("unseenCount", () => {
    describe("on intial mount", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(
          <Notifications>
            <Notification unread id={1} />
            <Notification unread={false} id={2} />
          </Notifications>
        );
      });
      it("shows unseen count of incoming notifications", () => {
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 1);
      });
    });

    describe("given a featured notification", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(
          <Notifications featuredNotification={{ id: 3 }}>
            <Notification unread id={1} />
            <Notification unread={false} id={2} />
          </Notifications>
        );
      });
      it("includes featured notification in the count", () => {
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 2);
      });
    });

    describe("on closing the notifications", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(
          <Notifications>
            <Notification unread id={1} />
            <Notification unread={false} id={2} />
          </Notifications>
        );
      });
      it("resets unseen count of notifications", () => {
        wrapper.instance().onClick();
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 1);
        wrapper.instance().onClickOutside();
        expect(wrapper.find(NotificationsAdapter)).toHaveProp("unseenCount", 0);
      });
    });
  });
});
