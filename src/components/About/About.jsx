import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <CardText>
              <p className="about-text md-body-1">
                DenverScript is a community of developers focused on JavaScript
                in downtown Denver. We will be discussing best practices,
                features coming to ECMAScript, application development, what's
                going on in the JS community, and more. If you have any interest
                in upping your JavaScript knowledge, then please come check us
                out.
              </p>
              <p className="about-text md-body-1">
                Follow our Twitter account at @DenverScript
                (https://twitter.com/denverscript) for JavaScript tweets and
                Meetup announcements, and join us at #denverscript on Freenode
                to chat!
              </p>
              <p className="about-text md-body-1">
                We care about providing a safe harassment-free community, so
                read our Code of Conduct
                (http://www.meetup.com/DenverScript/pages/Code_of_Conduct/) and
                know who to contact if there are issues.
              </p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
