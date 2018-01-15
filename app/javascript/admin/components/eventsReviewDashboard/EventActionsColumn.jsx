import React from "react";
import PropTypes from "prop-types";
import EventFeedback from "./EventFeedback";
import EventStatusUpdate from "./EventStatusUpdate";

export default class EventActionsColumn extends React.Component {
  render() {
    return (
      <div>
        <div className="margin-bottom-10">
          <i className="fa fa-eye" />&nbsp;
          <a
            data-method="post"
            href={this.props.eventData["impersonate_url"]}
            target="_blank"
          >
            Preview as Founder
          </a>
        </div>

        <div className="margin-bottom-10">
          <i className="fa fa-edit" />&nbsp;
          <a
            href={
              "/admin/timeline_events/" +
              this.props.eventData["event_id"] +
              "/edit"
            }
            target="_blank"
          >
            Edit Event
          </a>
        </div>

        <EventFeedback
          eventId={this.props.eventData["event_id"]}
          levelZero={this.props.eventData["level_scope"] === "levelZero"}
        />

        <EventStatusUpdate
          rootState={this.props.rootState}
          setRootState={this.props.setRootState}
          eventId={"" + this.props.eventData["event_id"]}
          targetId={"" + this.props.eventData["target_id"]}
        />
      </div>
    );
  }
}

EventActionsColumn.propTypes = {
  rootState: PropTypes.object,
  setRootState: PropTypes.func,
  eventData: PropTypes.object
};