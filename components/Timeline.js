import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#A08A58', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A08A58' }}
                    iconStyle={{ background: '#A08A58', color: '#fff' }}
                    date="2011 - present"

                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    contentStyle={{ background: '#A08A58', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A08A58' }}
                    iconStyle={{ background: '#A08A58', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    contentStyle={{ background: '#A08A58', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A08A58' }}
                    iconStyle={{ background: '#A08A58', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title ">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    contentStyle={{ background: '#A08A58', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #A08A58' }}
                    iconStyle={{ background: '#A08A58', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </>
    )
}

export default Timeline