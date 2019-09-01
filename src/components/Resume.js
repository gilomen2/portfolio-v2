import React, { Component } from 'react';
import '../styles/Resume.css';
import { debounce } from 'lodash';
import { isVisible } from '../theme-functions';

export class Resume extends Component {
  state = {
    isSlidUp: false
  };

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.isVisible));
  }

  isVisible = () => {
    if (
      !this.state.isSlidUp &&
      isVisible(document.getElementById('resume-content'))
    ) {
      this.setState({
        isSlidUp: true
      });
    } else if (!isVisible(document.getElementById('resume-content'))) {
      this.setState({
        isSlidUp: false
      });
    }
  };

  render() {
    const { isSlidUp } = this.state;
    return (
      <div id="resume-content">
        <div id="resume" className={`${isSlidUp ? 'raise-up' : undefined}`}>
          <div className="headlines" id="headlines-resume">
            RESUME
          </div>
          <div className={'resume-details'}>
            <div id="resume-box">
              <Position
                companyName={'Favor'}
                icon={'favor'}
                position={'Frontend Engineer'}
              >
                <li>
                  Focusing on Favor’s consumer and internal web apps, using
                  React, Redux, Node, Webpack
                </li>
                <li>
                  Working closely with Product and Design to build beautiful,
                  user-centric interfaces with extreme attention to detail and
                  care for the user’s experience
                </li>
              </Position>
              <Position
                companyName={'OneSpot'}
                icon={'onespot'}
                from={'September 2016'}
                to={'January 2019'}
                position={'Frontend Engineer'}
              >
                <li>
                  Focusing on Frontend development for OneSpot's Onsite and
                  Insights products using React, Redux, Flow, Node, Webpack
                </li>
                <li>
                  Strong focus on performance and bundle size as third-party
                  Javascript application
                </li>
                <li>BDD and integration testing with Mocha and Cypress</li>
                <li>Maintain and prioritize client work backlog</li>
              </Position>
              <Position
                companyName={'ShoreTel'}
                icon={'shoretel'}
                from={'June 2015'}
                to={'September 2016'}
                position={'Summit Platform Product Manager'}
              >
                <li>Developed and maintain the product roadmap</li>
                <li>Acted as product owner on SCRUM team</li>
                <li>
                  Maintained the product backlog and prioritize development
                </li>
                <li>
                  Managed all aspects of the software development lifecycle
                </li>
                <li>
                  Guided user interface additions and improvements with an eye
                  toward user experience
                </li>
                <li>Evaluated key market trends and competition</li>
                <li>
                  Acted as voice of customer and subject matter expert on all
                  aspects of the platform
                </li>
                <li>
                  Ensured that the proper requirements are defined, understood,
                  and developed
                </li>
                <li>
                  Led customer training for platform development and ensure
                  documentation accuracy and completeness
                </li>
              </Position>
              <Position
                companyName={'Corvisa'}
                position={'Platform Marketing Manager'}
                from={'June 2014'}
                to={'June 2015'}
                icon={'corvisa'}
              >
                <li>
                  Led marketing strategy, including branding, visual design, and
                  content
                </li>
                <li>Designed and created collateral and email campaigns</li>
                <li>
                  Coordinated and attended trade shows and events as
                  representative for the platform, including conducting demos
                </li>
              </Position>
              <Position
                companyName={'Advent Financial/Corvisa Services'}
                icon={'corvisa'}
                position={'Marketing Manager'}
                from={'September 2013'}
                to={'June 2014'}
              >
                <li>Developed and maintained overall marketing strategy</li>
                <li>
                  Led team of marketing professionals and designers through
                  re-brand
                </li>
                <li>
                  Provided guidance, direction, and feedback for Advent
                  marketing team
                </li>
                <li>Guided development of marketing websites</li>
                <li>
                  Created engaging and attractive marketing collateral and sales
                  materials
                </li>
                <li>
                  Coordinated and executed marketing campaigns across multiple
                  channels and audiences
                </li>
              </Position>
              <Position
                companyName={'Advent Financial/Corvisa Services'}
                icon={'corvisa'}
                position={'Marketing Coordinator'}
                to={'September 2013'}
                from={'October 2012'}
              >
                <li>
                  Assisted in planning and implementation of marketing strategy
                </li>
                <li>
                  Coordinated creative and execution for print, email and social
                  media marketing campaigns for both B2B and B2C audiences
                </li>
                <li>
                  Planned and executed trade show presence for multiple shows
                  and two brands, including booth design
                </li>
                <li>Maintained and updated company websites</li>
              </Position>
              <Position
                companyName={'Journal Communications/Journal Interactive'}
                icon={'js'}
                position={'State Street Digital Product Manager'}
                from={'July 2011'}
                to={'October 2012'}
              >
                <li>
                  Developed websites for small business clients including
                  front-end development, content editing, search engine
                  optimization, and user training
                </li>
                <li>
                  Acted as client relationship manager and technical consultant
                </li>
                <li>Provided effort estimates for projects</li>
                <li>
                  Created project plans, progress updates, statements of work,
                  proposals, and training manuals
                </li>
              </Position>
              <Position
                companyName={'Journal Communications/Journal Interactive'}
                icon={'js'}
                position={'Interactive Project Manager'}
                to={'July 2011'}
                from={'March 2010'}
              >
                <li>
                  Responsible for launching more than 45 websites within
                  timelines and with results beyond expectations
                </li>
                <li>
                  Analyzed site metrics and trends in order to help direct
                  clients in organization and development of website redesigns
                </li>
                <li>
                  Created project plans and timelines, and documented
                  requirements
                </li>
                <li>
                  Acted as the go-between for the client and the development
                  team
                </li>
              </Position>
              <Position
                companyName={'Journal Communications/Journal Interactive'}
                icon={'js'}
                position={'Special Features Producer'}
                from={'August 2009'}
                to={'March 2010'}
              >
                <li>
                  Produced original content for websites and coordinated
                  sponsorship opportunities with sales staff
                </li>
                <li>Conducted SWOT analysis for classified verticals</li>
                <li>
                  Created feature comparison charts for use in evaluating
                  current and potential vendor relationships
                </li>
                <li>
                  Analyzed site metrics to determine optimal content positioning
                  and improve traffic
                </li>
              </Position>
              <Position
                companyName={'Journal Communications/JSOnline.com'}
                icon={'js'}
                position={'Web Content Producer'}
                from={'August 2009'}
                to={'May 2008'}
              >
                <li>
                  Posted daily content in a variety of media to JSOnline.com
                </li>
                <li>
                  Created polls, forums, and blog posts to enhance reader
                  interactivity, moderated comments, and responded to reader
                  feedback and questions
                </li>
                <li>
                  Developed special topic pages as necessary to help facilitate
                  community dialogue and interaction
                </li>
                <li>Made decisions on placement and presentation of content</li>
                <li>Shot and edited video, edited audio and photos</li>
                <li>
                  Worked with editors to help coordinate online coverage daily
                  and for special projects
                </li>
                <li>
                  Maintained several section pages on JSOnline.com to assure
                  content was produced is adherence with set style and standards
                </li>
              </Position>
              <Position
                companyName={'Daily Illini'}
                icon={'dailyillini'}
                position={'Managing Editor Online'}
                from={'April 2007'}
                to={'December 2007'}
              >
                <li>Oversaw a staff of 15, including training and feedback</li>
                <li>
                  Responsible for management of all content on DailyIllini.com
                </li>
                <li>
                  Developed and maintained overall vision of progress for
                  website
                </li>
              </Position>
            </div>
            <div className="resume-other-container">
              <div className="push-next" />
              <div id="resume-others">
                <div className="resume-section">
                  <div className="resume-section-header">Education</div>
                  <div className="resume-section-header-resp">Education</div>
                  <div className="resume-item">
                    <p className="title">
                      Bachelor's, Print and Editorial Journalism
                    </p>
                    <p className="subhead">University of Illinois, May 2008</p>
                  </div>
                  <div className="resume-item">
                    <p className="title">Rails Web Development</p>
                    <p className="subhead">Bloc, March 2016</p>
                  </div>
                  <div className="resume-item">
                    <p className="title">Frontend Web Development</p>
                    <p className="subhead">Bloc, October 2016</p>
                  </div>
                </div>
                <div className="resume-section">
                  <div className="resume-section-header">Involvement</div>
                  <div className="resume-section-header-resp">Involvement</div>
                  <div className="resume-item">
                    <p className="title">Girl Develop It</p>
                    <p className="subhead">Teacher's Assistant</p>
                  </div>
                  <div className="resume-item">
                    <p className="title">Girl Scouts of Wisconsin Southeast</p>
                    <p className="subhead">Code Crew Volunteer</p>
                  </div>
                  <div className="resume-item">
                    <p className="title">
                      Humane Animal Welfare Society, Waukesha
                    </p>
                    <p className="subhead">Volunteer</p>
                  </div>
                </div>
                <div className="resume-section">
                  <div className="resume-section-header">Awards</div>
                  <div className="resume-section-header-resp">Awards</div>
                  <div className="resume-item">
                    <p className="title">
                      2011 Editor and Publisher's Magazine EPPY
                    </p>
                    <p className="subhead">
                      Best Weekly Newspaper Website with under 250,000 unique
                      monthly visitors
                    </p>
                    <p className="subhead">
                      as Interactive Project Manager for Journal Interactive
                    </p>
                  </div>
                  <div className="resume-item">
                    <p className="title">
                      2009 Honorable Mention, Best Reader Interactive, American
                      Association of Sunday and Features Editors
                    </p>
                    <p className="subhead">
                      with Mary Louise Schumacher as Web Content Producer
                    </p>
                  </div>
                  <div className="resume-item">
                    <p className="title">
                      2007 Associated Collegiate Press Online Pacemaker Award
                    </p>
                    <p className="subhead">
                      as Managing Editor Online for DailyIllini.com
                    </p>
                  </div>
                  <div className="resume-item">
                    <p className="title">
                      2007 Illinois Associated Press Editors Associations Best
                      Newspaper Website, Division B, 2nd Place
                    </p>
                    <p className="subhead">
                      as Managing Editor Online for DailyIllini.com
                    </p>
                  </div>
                  <div className="resume-item">
                    <p className="title">
                      2007 College Publisher Award of Excellence for
                      DailyIllini.com
                    </p>
                    <p className="subhead">
                      as Managing Editor Online for DailyIllini.com
                    </p>
                  </div>
                  <div className="resume-item">
                    <p className="title">
                      2007 Illinois College Press Association, Best Online
                      Publication
                    </p>
                    <p className="subhead">
                      as Managing Editor Online for DailyIllini.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Position extends Component {
  render() {
    const { companyName, position, icon, children, to, from } = this.props;
    return (
      <div className="position">
        <div className="company-icon">
          <span className={`custom-icon icon-${icon}`} />
        </div>
        {to &&
          from && (
            <div className="year-beth">
              {from}
              <br />- {to}
            </div>
          )}
        <p className="company">{companyName}</p>
        <p className="position-title">{position}</p>
        <ul className="position-description">{children}</ul>
      </div>
    );
  }
}
